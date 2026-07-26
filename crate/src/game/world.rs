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
    pub wave_number: u32,
    pub wave_timer: f32,
    pub boss_active: bool,
    pub boss_hp: f32,
    pub boss_max_hp: f32,
    pub boss_x: f32,
    pub boss_z: f32,
    // Level up state
    pub level_up_pending: bool,
    pub level_up_choices: [u32; 3],
    // Stats
    pub game_time: f32,
    pub paused: bool,
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
            wave_number: 1,
            wave_timer: 0.0,
            boss_active: false,
            boss_hp: 0.0,
            boss_max_hp: 0.0,
            boss_x: 50.0,
            boss_z: 50.0,
            level_up_pending: false,
            level_up_choices: [0, 1, 2],
            game_time: 0.0,
            paused: false,
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
        if !self.player.alive || self.level_up_pending || self.paused { return; }

        self.time += dt;
        self.game_time += dt;
        self.damage_events.clear();
        self.death_events.clear();

        // Increase difficulty over time (slower curve)
        self.difficulty = 1.0 + self.game_time / 60.0; // +1 every 60s (was 30s)

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
        self.wave_timer += dt;

        // 30초마다 웨이브 변경
        if self.wave_timer >= 30.0 {
            self.wave_timer = 0.0;
            self.wave_number += 1;
            self.difficulty = 1.0 + self.wave_number as f32 * 0.3;

            // 매 5웨이브 보스
            if self.wave_number % 5 == 0 {
                self.spawn_boss();
            }

            self.log_queue.push_back(format!("⚠️ Wave {}!", self.wave_number));
        }

        // 일반 적 스폰
        let interval = (self.spawn_interval / self.difficulty).max(0.4);
        if self.spawn_timer >= interval {
            self.spawn_timer = 0.0;

            // 웨이브별 적 종류 제한
            let max_type = match self.wave_number {
                1 => 0,      // 스켈레톤만
                2..=3 => 1,  // +임프
                4..=5 => 2,  // +골렘
                _ => 3,      // 전부
            };

            let count = (self.difficulty as u32).min(6);
            let px = self.player.x;
            let pz = self.player.z;

            for _ in 0..count {
                let angle = (self.time * 7.7 + self.enemies.len() as f32 * 2.3) % (std::f32::consts::PI * 2.0);
                let dist = 14.0 + (self.time * 3.3).sin().abs() * 6.0;
                let x = px + angle.cos() * dist;
                let z = pz + angle.sin() * dist;
                let size = self.map_size as f32;
                let x = ((x % size) + size) % size;
                let z = ((z % size) + size) % size;

                let enemy_type = ((self.enemies.len() as u32) % (max_type + 1)).min(3);
                self.enemies.push(Enemy::new(x, z, enemy_type));
            }
        }

        // 보스 업데이트
        if self.boss_active {
            self.update_boss(dt);
        }
    }

    fn spawn_boss(&mut self) {
        let px = self.player.x;
        let pz = self.player.z;
        self.boss_active = true;
        self.boss_max_hp = 200.0 + self.wave_number as f32 * 50.0;
        self.boss_hp = self.boss_max_hp;
        self.boss_x = px + 10.0;
        self.boss_z = pz;
        self.log_queue.push_back(format!("💀 BOSS WAVE {}! Defeat the boss!", self.wave_number));
    }

    fn update_boss(&mut self, dt: f32) {
        if !self.boss_active { return; }

        // 보스 이동 (플레이어 추격, 느림)
        let dx = self.player.x - self.boss_x;
        let dz = self.player.z - self.boss_z;
        let dist = (dx * dx + dz * dz).sqrt().max(0.1);
        let boss_speed = 2.0;
        self.boss_x += dx / dist * boss_speed * dt;
        self.boss_z += dz / dist * boss_speed * dt;

        // 보스 플레이어 공격
        if dist < 1.5 && ((self.time * 2.0) as u32 % 30 == 0) {
            self.player.take_damage(15.0);
        }

        // 보스 피격 (클리브가 보스도 때림)
        // resolve_attack에서 처리하도록 — 보스를 enemies에 큰 적으로 추가
        // 간단하게: 플레이어 공격 범위 안이면 보스도 맞음
        let attack_range = self.player.attack_range;
        if dist < attack_range && self.time - self.player.last_attack < 0.05 {
            let dmg = self.player.attack_damage;
            self.boss_hp -= dmg;
            self.damage_events.push((self.boss_x, self.boss_z, dmg, false));
        }

        // 보스 사망
        if self.boss_hp <= 0.0 {
            self.boss_active = false;
            self.kills += 5;
            self.death_events.push((self.boss_x, self.boss_z));
            // 대량 XP 드롭
            for i in 0..8 {
                let angle = i as f32 * std::f32::consts::PI / 4.0;
                self.xp_orbs.push(ResourcePickup::new(
                    self.boss_x + angle.cos() * 1.5,
                    self.boss_z + angle.sin() * 1.5, 0
                ));
            }
            self.log_queue.push_back("👑 BOSS DEFEATED! Massive XP!".into());
        }
    }

    fn generate_choices(&mut self) {
        let seed = (self.time * 1000.0) as u32;
        let level = self.player.level;
        let class_tier = self.player.class_tier;

        // Check if promotion is available
        let promotions = super::class_data::available_promotions(
            self.player.fire_level,
            self.player.ice_level,
            self.player.thunder_level,
            self.player.poison_level,
            self.player.class_id,
            level,
        );

        // If promotions available, offer one as first choice
        if !promotions.is_empty() && (level == 10 || level == 25 || level == 45) {
            // Promotion choice (encoded as 100 + class_id)
            let promo_id = promotions[(seed as usize) % promotions.len()];
            self.level_up_choices[0] = 100 + promo_id as u32;
            // Also offer second promo if available
            if promotions.len() > 1 {
                let promo2 = promotions[(seed as usize + 1) % promotions.len()];
                self.level_up_choices[1] = 100 + promo2 as u32;
            } else {
                self.level_up_choices[1] = self.random_element_choice(seed / 3);
            }
            self.level_up_choices[2] = self.random_element_choice(seed / 7);
            return;
        }

        match class_tier {
            0 => {
                // Pre-promotion: 2 element orbs + 1 stat
                self.level_up_choices[0] = self.random_element_choice(seed);
                self.level_up_choices[1] = self.random_element_choice(seed / 5);
                // Ensure different elements
                if self.level_up_choices[1] == self.level_up_choices[0] {
                    self.level_up_choices[1] = self.random_element_choice(seed / 11);
                }
                self.level_up_choices[2] = self.random_stat_choice(seed / 7);
            }
            1 => {
                // Post-1st: 1 class skill + 1 element + 1 stat
                self.level_up_choices[0] = self.random_class_skill_choice(seed);
                self.level_up_choices[1] = self.random_element_choice(seed / 3);
                self.level_up_choices[2] = self.random_stat_choice(seed / 7);
            }
            2 => {
                // Post-2nd: 2 class skills + 1 element
                self.level_up_choices[0] = self.random_class_skill_choice(seed);
                self.level_up_choices[1] = self.random_class_skill_choice(seed / 5);
                if self.level_up_choices[1] == self.level_up_choices[0] {
                    self.level_up_choices[1] = self.random_element_choice(seed / 11);
                }
                self.level_up_choices[2] = self.random_element_choice(seed / 7);
            }
            3 => {
                // Post-3rd: 2 ultimate upgrades only
                self.level_up_choices[0] = self.random_class_skill_choice(seed);
                self.level_up_choices[1] = self.random_class_skill_choice(seed / 3);
                if self.level_up_choices[1] == self.level_up_choices[0] {
                    self.level_up_choices[1] = self.random_stat_choice(seed / 11);
                }
                self.level_up_choices[2] = self.random_stat_choice(seed / 7);
            }
            _ => {
                self.level_up_choices = [50, 51, 52]; // fallback: elements
            }
        }
    }

    /// Element choice: 50=fire, 51=ice, 52=thunder, 53=poison
    fn random_element_choice(&self, seed: u32) -> u32 {
        50 + (seed % 4)
    }

    /// Stat choice: 60~69
    fn random_stat_choice(&self, seed: u32) -> u32 {
        let stats = [60, 61, 62, 63, 64, 65, 66, 67, 68]; // dmg, spd, aspd, range, cleave, hp, crit, steal, magnet
        stats[(seed as usize) % stats.len()] as u32
    }

    /// Class skill choice: 200 + skill_id (from current class skills)
    fn random_class_skill_choice(&self, seed: u32) -> u32 {
        let skills = super::skill_data::skills_for_class(self.player.class_id);
        if skills.is_empty() {
            return self.random_stat_choice(seed);
        }
        let skill = &skills[(seed as usize) % skills.len()];
        200 + skill.id as u32
    }

    fn update_passive_skills(&mut self, dt: f32) {
        if self.player.class_tier == 0 { return; }

        let px = self.player.x;
        let pz = self.player.z;
        let dominant = self.player.dominant_element();
        let fire_level = self.player.fire_level as u32;
        let ice_level = self.player.ice_level as u32;
        let thunder_level = self.player.thunder_level as u32;
        let poison_level = self.player.poison_level as u32;

        match dominant {
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
                            enemy.speed = enemy.speed.min(1.5);
                        }
                    }
                }
            }
            3 => {
                // ⚡ Thunder: 이동 중 공속 보너스
                if thunder_level >= 2 && self.player.moving {
                    self.player.last_attack -= dt * 0.3;
                }
            }
            4 => {
                // ☠️ Poison: 매 1초마다 주변 DOT
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



    pub fn choose_upgrade(&mut self, choice: u32) {
        if !self.level_up_pending { return; }

        let upgrade_id = self.level_up_choices[choice as usize % 3];

        match upgrade_id {
            // === Element orbs: 50~53 ===
            50 => { self.player.add_element(1); self.log(format!("🔥 Fire Orb! (Lv.{})", self.player.fire_level)); }
            51 => { self.player.add_element(2); self.log(format!("❄️ Ice Orb! (Lv.{})", self.player.ice_level)); }
            52 => { self.player.add_element(3); self.log(format!("⚡ Thunder Orb! (Lv.{})", self.player.thunder_level)); }
            53 => { self.player.add_element(4); self.log(format!("☠️ Poison Orb! (Lv.{})", self.player.poison_level)); }

            // === Stats: 60~68 ===
            60 => { self.player.attack_damage += 10.0; self.log("⚔️ +DMG!".into()); }
            61 => { self.player.speed += 0.6; self.log("👟 +SPD!".into()); }
            62 => { self.player.attack_cooldown = (self.player.attack_cooldown - 0.08).max(0.12); self.log("⚡ +ATK SPD!".into()); }
            63 => { self.player.attack_range += 0.8; self.log("🎯 +RANGE!".into()); }
            64 => { self.player.attack_count += 1; self.log("🔫 +CLEAVE!".into()); }
            65 => { self.player.max_hp += 30.0; self.player.hp += 30.0; self.log("❤️ +HP!".into()); }
            66 => { self.player.crit_chance = (self.player.crit_chance + 0.15).min(0.75); self.log("💥 +CRIT!".into()); }
            67 => { self.player.lifesteal += 0.05; self.log("🧛 +STEAL!".into()); }
            68 => { self.player.magnet_range += 2.0; self.log("🧲 +MAGNET!".into()); }

            // === Class promotion: 100 + class_id ===
            100..=145 => {
                let class_id = (upgrade_id - 100) as u8;
                self.player.promote_to(class_id);
                if let Some(class) = super::class_data::class_by_id(class_id) {
                    let tier_emoji = match class.tier { 1 => "⭐", 2 => "🌟", 3 => "👑", _ => "✨" };
                    self.log(format!("{} PROMOTED to {}!", tier_emoji, class.name));
                }
            }

            // === Class skill upgrade: 200 + skill_id ===
            200..=399 => {
                let skill_id = (upgrade_id - 200) as u16;
                // If already learned, upgrade; otherwise learn
                if self.player.has_skill_id(skill_id) {
                    self.player.upgrade_skill(skill_id);
                    let lv = self.player.get_skill_level(skill_id);
                    // Find skill name
                    let skills = super::skill_data::skills_for_class(self.player.class_id);
                    let name = skills.iter().find(|s| s.id == skill_id).map(|s| s.name).unwrap_or("Skill");
                    self.log(format!("📈 {} Lv.{}!", name, lv));
                } else {
                    // Shouldn't happen (skills auto-learned on promotion) but handle gracefully
                    self.player.upgrade_skill(skill_id);
                    self.log("📈 Skill upgraded!".into());
                }

                // Apply skill effects as stat bonuses (simplified for now)
                self.apply_skill_bonus(skill_id);
            }

            _ => {}
        }

        self.level_up_pending = false;
    }

    /// Apply immediate stat bonuses when upgrading skills
    fn apply_skill_bonus(&mut self, skill_id: u16) {
        let skills = super::skill_data::skills_for_class(self.player.class_id);
        if let Some(skill) = skills.iter().find(|s| s.id == skill_id) {
            match skill.skill_type {
                super::skill_data::SkillType::Active => {
                    // Active skills: small damage boost per level
                    self.player.attack_damage += 5.0;
                }
                super::skill_data::SkillType::Passive => {
                    // Passives: varied stat boosts
                    self.player.attack_damage += 3.0;
                    self.player.speed += 0.2;
                }
                super::skill_data::SkillType::Ultimate => {
                    // Ultimates: big power boost
                    self.player.attack_damage += 10.0;
                    self.player.crit_chance += 0.05;
                }
            }
        }
    }

    fn log(&mut self, msg: String) {
        self.log_queue.push_back(msg);
    }
}
