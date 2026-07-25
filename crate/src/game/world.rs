use std::collections::VecDeque;
use super::player::Player;
use super::enemy::Enemy;
use super::input::InputState;
use super::bullet::Bullet;
use super::resource::ResourcePickup;

pub struct World {
    pub player: Player,
    pub enemies: Vec<Enemy>,
    pub bullets: Vec<Bullet>,
    pub xp_orbs: Vec<ResourcePickup>,
    pub input: InputState,
    pub map_size: u32,
    pub time: f32,
    pub log_queue: VecDeque<String>,
    pub kills: u32,
    // Wave spawning
    pub spawn_timer: f32,
    pub spawn_interval: f32,
    pub difficulty: f32,
    // Level up state
    pub level_up_pending: bool,
    pub level_up_choices: [u32; 3],
    // Stats
    pub game_time: f32,
    // Damage popups (x, z, damage, is_crit)
    pub damage_events: Vec<(f32, f32, f32, bool)>,
    // Death events (x, z) for explosion particles
    pub death_events: Vec<(f32, f32)>,
    // Attack wind-up
    pub attack_windup: f32,      // > 0 means winding up
    pub attack_windup_max: f32,  // total windup time
    pub attacking: bool,         // true during windup (for animation)
}

impl World {
    pub fn new() -> Self {
        let map_size = 100;
        let mut world = World {
            player: Player::new(map_size as f32 / 2.0, map_size as f32 / 2.0),
            enemies: Vec::new(),
            bullets: Vec::new(),
            xp_orbs: Vec::new(),
            input: InputState::new(),
            map_size,
            time: 0.0,
            log_queue: VecDeque::new(),
            kills: 0,
            spawn_timer: 0.0,
            spawn_interval: 2.0,
            difficulty: 1.0,
            level_up_pending: false,
            level_up_choices: [0, 1, 2],
            game_time: 0.0,
            damage_events: Vec::new(),
            death_events: Vec::new(),
            attack_windup: 0.0,
            attack_windup_max: 0.2,
            attacking: false,
        };
        world.log("SURVIVE. Move with WASD. Auto-attack nearest.".into());
        world
    }

    pub fn update(&mut self, dt: f32) {
        if !self.player.alive || self.level_up_pending { return; }

        self.time += dt;
        self.game_time += dt;
        self.damage_events.clear();
        self.death_events.clear();

        // Increase difficulty over time
        self.difficulty = 1.0 + self.game_time / 30.0; // +1 every 30s

        self.handle_input();
        self.player.update(dt);
        self.clamp_player();
        self.auto_attack();
        // Attack windup timer
        if self.attack_windup > 0.0 {
            self.attack_windup -= dt;
            if self.attack_windup <= 0.0 {
                self.resolve_attack();
                self.attacking = false;
            }
        }
        self.update_passive_skills(dt);
        self.update_enemies(dt);
        self.finalize_deaths();
        self.update_xp_pickup();
        self.spawn_enemies(dt);

        self.input.end_frame();
    }

    fn handle_input(&mut self) {
        let mut dx = 0.0_f32;
        let mut dz = 0.0_f32;

        if self.input.is_key_down("w") { dz -= 1.0; }
        if self.input.is_key_down("s") { dz += 1.0; }
        if self.input.is_key_down("a") { dx -= 1.0; }
        if self.input.is_key_down("d") { dx += 1.0; }

        self.player.set_direction(dx, dz);

        // Level up choice (1/2/3 keys)
        // handled externally via choose_upgrade
    }

    fn clamp_player(&mut self) {
        // 무한 맵: 끝과 끝을 이어서 wrap
        let size = self.map_size as f32;
        if self.player.x < 0.0 { self.player.x += size; }
        if self.player.x >= size { self.player.x -= size; }
        if self.player.z < 0.0 { self.player.z += size; }
        if self.player.z >= size { self.player.z -= size; }
    }

    fn auto_attack(&mut self) {
        // Wind-up system: start → wait → hit
        if self.attack_windup > 0.0 {
            // Currently winding up — don't start new attack
            return;
        }

        if !self.player.can_attack(self.time) { return; }

        // Check if any enemy in range
        let px = self.player.x;
        let pz = self.player.z;
        let range = self.player.attack_range;
        let has_target = self.enemies.iter().any(|e| {
            e.alive && ((e.x - px).powi(2) + (e.z - pz).powi(2)).sqrt() < range
        });

        if !has_target { self.attacking = false; return; }

        // Start wind-up
        self.attack_windup = self.attack_windup_max;
        self.attacking = true;
        self.player.last_attack = self.time;
    }

    fn resolve_attack(&mut self) {
        let px = self.player.x;
        let pz = self.player.z;
        let range = self.player.attack_range;
        let damage = self.player.attack_damage;
        let crit_chance = self.player.crit_chance;
        let lifesteal = self.player.lifesteal;
        let aoe_radius = self.player.aoe_radius;

        // 1. 가장 가까운 적을 메인 타겟으로
        let mut closest_idx: Option<usize> = None;
        let mut closest_dist = range;
        for (i, e) in self.enemies.iter().enumerate() {
            if !e.alive { continue; }
            let dist = ((e.x - px).powi(2) + (e.z - pz).powi(2)).sqrt();
            if dist < closest_dist {
                closest_dist = dist;
                closest_idx = Some(i);
            }
        }

        let main_target = match closest_idx {
            Some(idx) => idx,
            None => return,
        };

        let target_x = self.enemies[main_target].x;
        let target_z = self.enemies[main_target].z;

        // 2. 메인 타겟 주변 클리브 범위 (1.5 + 레벨 보너스) 내 모든 적 타격
        let cleave_radius = 1.5 + self.player.attack_count as f32 * 0.3; // multi-shot = 넓은 클리브
        let mut total_damage = 0.0_f32;
        let mut kills: Vec<(f32, f32)> = Vec::new();

        for enemy in &mut self.enemies {
            if !enemy.alive { continue; }
            let dist_to_target = ((enemy.x - target_x).powi(2) + (enemy.z - target_z).powi(2)).sqrt();
            
            if dist_to_target <= cleave_radius {
                let is_crit = ((self.time * 1000.0 + enemy.x * 77.0) as u32 % 100) as f32 / 100.0 < crit_chance;
                let dmg = if is_crit { damage * 2.5 } else { damage };
                total_damage += dmg;

                let ex = enemy.x;
                let ez = enemy.z;
                let killed = enemy.take_damage(dmg);
                enemy.apply_knockback(px, pz, 6.0);
                self.damage_events.push((ex, ez, dmg, is_crit));

                if killed {
                    kills.push((ex, ez));
                }
            }
        }

        // Lifesteal
        if lifesteal > 0.0 && total_damage > 0.0 {
            self.player.heal(total_damage * lifesteal);
        }

        // AOE on kill (추가 폭발)
        for (kx, kz) in &kills {
            if aoe_radius > 0.0 {
                for enemy in &mut self.enemies {
                    if !enemy.alive { continue; }
                    let dist = ((enemy.x - kx).powi(2) + (enemy.z - kz).powi(2)).sqrt();
                    if dist < aoe_radius {
                        enemy.take_damage(damage * 0.4);
                        enemy.apply_knockback(*kx, *kz, 5.0);
                    }
                }
            }
        }
    }

    fn update_bullets(&mut self, dt: f32) {
        for bullet in &mut self.bullets { bullet.update(dt); }
        self.bullets.retain(|b| b.active);
    }

    fn update_enemies(&mut self, dt: f32) {
        let px = self.player.x;
        let pz = self.player.z;
        let time = self.time;

        for enemy in self.enemies.iter_mut() {
            enemy.update(dt, px, pz, time);

            // Contact damage
            let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
            if dist < 0.7 {
                self.player.take_damage(enemy.damage);
            }
        }
        self.enemies.retain(|e| e.alive);
    }

    fn update_collisions(&mut self) {
        let base_damage = self.player.attack_damage;
        let crit_chance = self.player.crit_chance;
        let pierce = self.player.pierce;
        let lifesteal = self.player.lifesteal;
        let aoe_radius = self.player.aoe_radius;
        let mut kills: Vec<(f32, f32)> = Vec::new();
        let mut total_damage_dealt = 0.0_f32;

        for bullet in &mut self.bullets {
            if !bullet.active { continue; }
            let mut hits = 0_u32;
            for enemy in &mut self.enemies {
                if !enemy.alive { continue; }
                let dist = ((bullet.x - enemy.x).powi(2) + (bullet.z - enemy.z).powi(2)).sqrt();
                if dist < 0.6 {
                    // Critical hit
                    let is_crit = ((self.time * 1000.0 + enemy.x * 100.0) as u32 % 100) as f32 / 100.0 < crit_chance;
                    let damage = if is_crit { base_damage * 2.0 } else { base_damage };
                    total_damage_dealt += damage;

                    let killed = enemy.take_damage(damage);
                    if killed {
                        kills.push((enemy.x, enemy.z));
                    }

                    hits += 1;
                    if hits > pierce {
                        bullet.active = false;
                        break;
                    }
                }
            }
        }

        // Lifesteal
        if lifesteal > 0.0 && total_damage_dealt > 0.0 {
            self.player.heal(total_damage_dealt * lifesteal);
        }

        // AOE on kill + drop XP
        for (x, z) in kills {
            self.kills += 1;
            self.xp_orbs.push(ResourcePickup::new(x, z, 0));

            // AOE explosion
            if aoe_radius > 0.0 {
                for enemy in &mut self.enemies {
                    if !enemy.alive { continue; }
                    let dist = ((enemy.x - x).powi(2) + (enemy.z - z).powi(2)).sqrt();
                    if dist < aoe_radius {
                        enemy.take_damage(base_damage * 0.5);
                    }
                }
            }
        }
    }

    fn update_xp_pickup(&mut self) {
        let px = self.player.x;
        let pz = self.player.z;
        let pickup_range = self.player.magnet_range;

        let mut leveled = false;
        for orb in &mut self.xp_orbs {
            if !orb.alive { continue; }
            let dist = ((orb.x - px).powi(2) + (orb.z - pz).powi(2)).sqrt();
            if dist < pickup_range {
                orb.alive = false;
                if self.player.add_xp(3) {
                    leveled = true;
                }
            }
        }
        self.xp_orbs.retain(|o| o.alive);

        if leveled {
            self.level_up_pending = true;
            self.generate_choices();
            self.log(format!("⬆️ LEVEL {}! Choose an upgrade.", self.player.level));
        }
    }

    fn finalize_deaths(&mut self) {
        // 넉백이 끝난 dying 적들을 실제로 제거 + death event 발생
        for enemy in &mut self.enemies {
            if enemy.is_dying() && enemy.knockback_done() {
                enemy.alive = false;
                self.death_events.push((enemy.x, enemy.z));
                self.xp_orbs.push(ResourcePickup::new(enemy.x, enemy.z, 0));
                self.kills += 1;
            }
        }
        self.enemies.retain(|e| e.alive);
    }

    fn spawn_enemies(&mut self, dt: f32) {
        self.spawn_timer += dt;

        // Spawn faster as difficulty increases
        let interval = (self.spawn_interval / self.difficulty).max(0.3);

        if self.spawn_timer >= interval {
            self.spawn_timer = 0.0;

            let count = (self.difficulty as u32).min(5);
            let px = self.player.x;
            let pz = self.player.z;

            for _ in 0..count {
                // Spawn at random position around player (outside view)
                let angle = (self.time * 7.7 + self.enemies.len() as f32 * 2.3) % (std::f32::consts::PI * 2.0);
                let dist = 12.0 + (self.time * 3.3).sin().abs() * 5.0;
                let x = (px + angle.cos() * dist).clamp(1.0, self.map_size as f32 - 1.0);
                let z = (pz + angle.sin() * dist).clamp(1.0, self.map_size as f32 - 1.0);

                let enemy_type = ((self.kills / 10) % 4) as u32;
                self.enemies.push(Enemy::new(x, z, enemy_type.min(3)));
            }
        }
    }

    fn generate_choices(&mut self) {
        let seed = (self.time * 1000.0) as u32;

        // 전직 완료 시: 해당 원소 전용 스킬셋만
        if self.player.promoted {
            let elem = self.player.promoted_element;
            let elem_upgrade = match elem { 1=>12, 2=>13, 3=>14, 4=>15, _=>0 };
            // 전직 전용 스킬 (17~20)
            let class_skill = match elem { 1=>17, 2=>18, 3=>19, 4=>20, _=>0 };
            // 선택지: 원소 강화 + 전용 스킬 + 스탯
            let stat_pool = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
            self.level_up_choices = [
                if seed % 2 == 0 { elem_upgrade } else { class_skill },
                if seed % 2 == 0 { class_skill } else { elem_upgrade },
                stat_pool[(seed as usize / 3) % stat_pool.len()] as u32,
            ];
            if self.level_up_choices[2] == self.level_up_choices[0] {
                self.level_up_choices[2] = stat_pool[(seed as usize / 7) % stat_pool.len()] as u32;
            }
            return;
        }

        // 원소 편향: 가장 높은 레벨 원소를 우선 제시
        let dominant_element = self.get_dominant_element();
        let dominant_upgrade = match dominant_element {
            1 => 12, 2 => 13, 3 => 14, 4 => 15, _ => 99,
        };

        // 전직 가능 여부 (원소 Lv3+)
        let can_promote = self.player.skills.iter().any(|s| s.level >= 3);

        let mut choices = [0u32; 3];

        if can_promote && self.player.level % 5 == 0 {
            choices[0] = 16;
            choices[1] = if dominant_upgrade < 16 { dominant_upgrade } else { seed % 12 };
            choices[2] = (seed / 7) % 12;
        } else {
            if dominant_upgrade < 16 && seed % 3 == 0 {
                choices[0] = dominant_upgrade;
            } else {
                choices[0] = seed % 16;
            }
            choices[1] = (seed / 16) % 16;
            choices[2] = (seed / 256) % 12;
        }

        if choices[1] == choices[0] { choices[1] = (choices[1] + 1) % 16; }
        if choices[2] == choices[0] || choices[2] == choices[1] { choices[2] = (choices[2] + 2) % 12; }

        self.level_up_choices = choices;
    }

    fn update_passive_skills(&mut self, dt: f32) {
        if !self.player.promoted { return; }

        let px = self.player.x;
        let pz = self.player.z;
        let elem = self.player.promoted_element;
        let fire_level = self.player.skill_level(0);
        let ice_level = self.player.skill_level(4);
        let thunder_level = self.player.skill_level(2);
        let poison_level = self.player.skill_level(7);

        match elem {
            1 => {
                // 🔥 Fire: 주위 회전 오브 (매 0.5초마다 근처 적에게 데미지)
                if fire_level >= 2 {
                    let interval = 0.5 - fire_level as f32 * 0.03;
                    let tick = (self.time / interval) as u32;
                    let prev_tick = ((self.time - dt) / interval) as u32;
                    if tick != prev_tick {
                        let radius = 2.0 + fire_level as f32 * 0.3;
                        let dmg = 5.0 + fire_level as f32 * 3.0;
                        for enemy in &mut self.enemies {
                            if !enemy.alive { continue; }
                            let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
                            if dist < radius {
                                enemy.take_damage(dmg);
                                self.damage_events.push((enemy.x, enemy.z, dmg, false));
                            }
                        }
                    }
                }
            }
            2 => {
                // ❄️ Ice: 적 슬로우 (범위 내 속도 감소)
                if ice_level >= 2 {
                    let radius = 3.0 + ice_level as f32 * 0.5;
                    for enemy in &mut self.enemies {
                        if !enemy.alive { continue; }
                        let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
                        if dist < radius {
                            // 슬로우: 속도를 프레임마다 줄임 (적이 update에서 복원하니까 매 프레임)
                            enemy.speed = enemy.speed.min(1.5);
                        }
                    }
                }
            }
            3 => {
                // ⚡ Thunder: 공격 시 체인 라이트닝 (resolve_attack에서 처리)
                // 여기선 이동속도→공속 보너스
                if thunder_level >= 2 && self.player.moving {
                    // 이동 중이면 공격 쿨다운 더 빨리 회복
                    self.player.last_attack -= dt * 0.3;
                }
            }
            4 => {
                // ☠️ Poison: 체력 낮을수록 공격력 보너스 (계산은 resolve에서)
                // 여기선 처치 시 독구름 (finalize_deaths에서 처리할 수도 있지만 간단히)
                // 매 1초마다 주변 적에게 미약 DOT
                if poison_level >= 2 {
                    let tick = (self.time * 2.0) as u32;
                    let prev_tick = ((self.time - dt) * 2.0) as u32;
                    if tick != prev_tick {
                        let radius = 2.5 + poison_level as f32 * 0.3;
                        let dmg = 3.0 + poison_level as f32 * 2.0;
                        for enemy in &mut self.enemies {
                            if !enemy.alive { continue; }
                            let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
                            if dist < radius {
                                enemy.take_damage(dmg);
                            }
                        }
                    }
                }
            }
            _ => {}
        }
    }

    fn get_dominant_element(&self) -> u32 {
        let mut best_element = 0u32;
        let mut best_level = 0u32;
        for skill in &self.player.skills {
            let element = match skill.skill_id {
                0 => 1, 4 => 2, 2 => 3, 7 => 4, _ => 0,
            };
            if element > 0 && skill.level > best_level {
                best_level = skill.level;
                best_element = element;
            }
        }
        best_element
    }

    pub fn choose_upgrade(&mut self, choice: u32) {
        if !self.level_up_pending { return; }

        let upgrade_id = self.level_up_choices[choice as usize % 3];
        match upgrade_id {
            0 => { self.player.attack_damage += 10.0; self.log("⚔️ +DMG!".into()); }
            1 => { self.player.speed += 0.6; self.log("👟 +SPD!".into()); }
            2 => { self.player.attack_cooldown = (self.player.attack_cooldown - 0.08).max(0.12); self.log("⚡ +ATK SPD!".into()); }
            3 => { self.player.attack_range += 0.8; self.log("🎯 +RANGE!".into()); }
            4 => { self.player.attack_count += 1; self.log("🔫 +CLEAVE!".into()); }
            5 => { self.player.max_hp += 30.0; self.player.hp += 30.0; self.log("❤️ +HP!".into()); }
            6 => { self.player.heal(self.player.max_hp * 0.5); self.log("💚 HEALED!".into()); }
            7 => { self.player.pierce += 1; self.log("🗡️ +PIERCE!".into()); }
            8 => { self.player.crit_chance = (self.player.crit_chance + 0.15).min(0.75); self.log("💥 +CRIT!".into()); }
            9 => { self.player.lifesteal += 0.05; self.log("🧛 +STEAL!".into()); }
            10 => { self.player.aoe_radius += 1.5; self.log("💫 +AOE!".into()); }
            11 => { self.player.magnet_range += 2.0; self.log("🧲 +MAGNET!".into()); }
            12 => {
                if self.player.skill_level(0) >= 5 { self.player.attack_damage += 10.0; self.log("⚔️ Fire maxed! +DMG instead".into()); } else {
                self.player.attack_damage += 5.0;
                self.player.aoe_radius += 0.8;
                self.player.learn_skill(0);
                let lv = self.player.skill_level(0);
                if lv >= 5 { self.log("🔥🔥🔥 FIRE MAX! Inferno unleashed!".into()); }
                else { self.log(format!("🔥 Fire Blade Lv.{}!", lv)); }
                }
            }
            13 => {
                if self.player.skill_level(4) >= 5 { self.player.attack_damage += 10.0; self.log("⚔️ Ice maxed! +DMG instead".into()); } else {
                self.player.attack_damage += 5.0;
                self.player.attack_range += 0.5;
                self.player.learn_skill(4);
                let lv = self.player.skill_level(4);
                if lv >= 5 { self.log("❄️❄️❄️ ICE MAX! Absolute Zero!".into()); }
                else { self.log(format!("❄️ Frost Blade Lv.{}!", lv)); }
                }
            }
            14 => {
                if self.player.skill_level(2) >= 5 { self.player.attack_damage += 10.0; self.log("⚔️ Thunder maxed! +DMG instead".into()); } else {
                self.player.attack_damage += 5.0;
                self.player.attack_cooldown = (self.player.attack_cooldown - 0.05).max(0.12);
                self.player.learn_skill(2);
                let lv = self.player.skill_level(2);
                if lv >= 5 { self.log("⚡⚡⚡ THUNDER MAX! Storm Lord!".into()); }
                else { self.log(format!("⚡ Thunder Blade Lv.{}!", lv)); }
                }
            }
            15 => {
                if self.player.skill_level(7) >= 5 { self.player.attack_damage += 10.0; self.log("⚔️ Poison maxed! +DMG instead".into()); } else {
                self.player.attack_damage += 5.0;
                self.player.lifesteal += 0.03;
                self.player.learn_skill(7);
                let lv = self.player.skill_level(7);
                if lv >= 5 { self.log("☠️☠️☠️ POISON MAX! Plague Bearer!".into()); }
                else { self.log(format!("☠️ Poison Blade Lv.{}!", lv)); }
                }
            }
            16 => {
                // 전직!
                let element = self.get_dominant_element();
                self.player.promoted = true;
                self.player.promoted_element = element;
                let class_name = match element {
                    1 => "🔥 Flame Knight",
                    2 => "❄️ Frost Paladin",
                    3 => "⚡ Storm Warrior",
                    4 => "☠️ Death Knight",
                    _ => "⭐ Champion",
                };
                self.player.attack_damage += 15.0;
                self.player.max_hp += 50.0;
                self.player.hp += 50.0;
                self.player.speed += 0.5;
                self.log(format!("👑 PROMOTED to {}!", class_name));
            }
            // 전직 전용 스킬
            17 => {
                // 🔥 Flame Aura: 화염 오브 강화
                self.player.aoe_radius += 1.0;
                self.player.attack_damage += 8.0;
                self.log("🔥 Flame Aura enhanced! Fire orbits stronger".into());
            }
            18 => {
                // ❄️ Frost Armor: 피격 시 주변 빙결
                self.player.max_hp += 20.0;
                self.player.hp += 20.0;
                self.player.attack_range += 0.5;
                self.log("❄️ Frost Armor! Freeze on hit, wider reach".into());
            }
            19 => {
                // ⚡ Chain Lightning: 공격 체인 수 증가
                self.player.attack_count += 1;
                self.player.attack_cooldown = (self.player.attack_cooldown - 0.04).max(0.1);
                self.log("⚡ Chain Lightning! Attacks bounce more".into());
            }
            20 => {
                // ☠️ Plague: 독 범위 + 흡혈 강화
                self.player.lifesteal += 0.04;
                self.player.aoe_radius += 0.8;
                self.log("☠️ Plague spreads! More drain, wider poison".into());
            }
            _ => {}
        }

        self.level_up_pending = false;
    }

    fn log(&mut self, msg: String) {
        self.log_queue.push_back(msg);
    }
}
