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
    // Skill visual events (x, z, element: 1-4, skill_range)
    pub skill_events: Vec<(f32, f32, u8, f32)>,
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
            skill_events: Vec::new(),
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
        self.skill_events.clear();

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

        // Shield explosion when timer reaches 0
        if self.player.shield_hp > 0.0 && self.player.shield_timer <= 0.0 {
            let px = self.player.x;
            let pz = self.player.z;
            let shield_dmg = self.player.shield_hp + self.player.attack_damage * 2.0;
            let range = 5.0;
            self.player.shield_hp = 0.0;

            for enemy in &mut self.enemies {
                if !enemy.alive { continue; }
                let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
                if dist < range {
                    enemy.take_damage(shield_dmg);
                    enemy.apply_knockback(px, pz, 12.0);
                    self.damage_events.push((enemy.x, enemy.z, shield_dmg, true));
                }
            }
            self.skill_events.push((px, pz, self.player.dash_element, range));
            self.log("💥 Shield Burst!".into());
        }
        self.update_enemies(dt);
        self.finalize_deaths();
        self.update_xp_pickup();
        self.spawn_enemies(dt);
        self.gc_cleanup();

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

        // Space = element-specific dash
        if self.input.is_key_just_pressed(" ") {
            let px_before = self.player.x;
            let pz_before = self.player.z;
            let dash_type = self.player.try_dash();

            if dash_type == 1 {
                // 🔥 Blink: AoE at departure + arrival
                let dmg = self.player.attack_damage * 0.8;
                // Departure explosion
                for enemy in &mut self.enemies {
                    if !enemy.alive { continue; }
                    let dist = ((enemy.x - px_before).powi(2) + (enemy.z - pz_before).powi(2)).sqrt();
                    if dist < 3.0 {
                        enemy.take_damage(dmg);
                        self.damage_events.push((enemy.x, enemy.z, dmg, false));
                    }
                }
                // Arrival explosion
                let ax = self.player.x;
                let az = self.player.z;
                for enemy in &mut self.enemies {
                    if !enemy.alive { continue; }
                    let dist = ((enemy.x - ax).powi(2) + (enemy.z - az).powi(2)).sqrt();
                    if dist < 3.0 {
                        enemy.take_damage(dmg);
                        self.damage_events.push((enemy.x, enemy.z, dmg, true));
                    }
                }
                self.skill_events.push((px_before, pz_before, 1, 3.0));
                self.skill_events.push((ax, az, 1, 3.0));
            } else if dash_type == 4 {
                // ☠️ Smoke: visual event
                self.skill_events.push((px_before, pz_before, 4, 2.0));
            }
        }
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
        let cleave_radius = 0.8 + self.player.attack_count as f32 * 0.2; // tight cleave, ~2 enemies
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

            // Contact damage (melee enemies only — not archer at range)
            let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
            if dist < 0.7 && enemy.enemy_type != 5 { // Archer doesn't melee
                self.player.take_damage(enemy.damage);
            }

            // Archer: fire projectile at player
            if enemy.enemy_type == 5 && enemy.alive {
                enemy.last_attack += dt;
                if enemy.last_attack >= 2.0 && dist > 3.0 && dist < 15.0 {
                    enemy.last_attack = 0.0;
                    let dx = px - enemy.x;
                    let dz = pz - enemy.z;
                    let d = dist.max(0.1);
                    let speed = 5.0;
                    let bullet = Bullet::new(enemy.x, enemy.z, dx / d * speed, dz / d * speed, enemy.damage * 0.6);
                    self.bullets.push(bullet);
                }
            }
        }
        self.enemies.retain(|e| e.alive);

        // Update bullets + check player collision
        for bullet in &mut self.bullets {
            bullet.update(dt);
            if !bullet.active { continue; }
            let dist = ((bullet.x - px).powi(2) + (bullet.z - pz).powi(2)).sqrt();
            if dist < 0.5 {
                self.player.take_damage(bullet.damage);
                bullet.active = false;
            }
        }
        self.bullets.retain(|b| b.active);
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
                if self.player.add_xp(orb.xp_value) {
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
                // XP based on enemy type: 0=skeleton(small), 1=imp(med), 2=golem(med), 3=wraith(large)
                let orb_type = match enemy.enemy_type {
                    0 => 0, // small
                    1 | 2 => 1, // medium
                    3 => 2, // large
                    _ => 0,
                };
                self.xp_orbs.push(ResourcePickup::new(enemy.x, enemy.z, orb_type));
                self.kills += 1;
            }
        }
        self.enemies.retain(|e| e.alive);
    }

    fn gc_cleanup(&mut self) {
        let px = self.player.x;
        let pz = self.player.z;
        // Remove enemies too far from player
        self.enemies.retain(|e| {
            let dist = ((e.x - px).powi(2) + (e.z - pz).powi(2)).sqrt();
            dist < 30.0
        });
        // Remove distant XP orbs
        self.xp_orbs.retain(|o| {
            let dist = ((o.x - px).powi(2) + (o.z - pz).powi(2)).sqrt();
            dist < 20.0
        });
        // Remove expired bullets
        self.bullets.retain(|b| b.active);
    }

    fn spawn_enemies(&mut self, dt: f32) {
        self.spawn_timer += dt;
        self.wave_timer += dt;

        // 35초마다 웨이브 변경
        if self.wave_timer >= 35.0 {
            self.wave_timer = 0.0;
            self.wave_number += 1;
            self.difficulty = 1.0 + self.wave_number as f32 * 0.3;

            self.log_queue.push_back(format!("⚠️ Wave {}!", self.wave_number));

            // 10웨이브마다 메인보스
            if self.wave_number % 10 == 0 {
                self.spawn_main_boss();
            }
            // 5웨이브마다 중간보스 (보스 웨이브 제외)
            else if self.wave_number % 5 == 0 {
                self.spawn_elite();
            }
        }

        // 일반 적 스폰 (보스 웨이브에는 스폰 안 함)
        let is_boss_wave = self.wave_number % 10 == 0 && self.wave_number > 0;
        let base_interval = match self.wave_number {
            0 | 1 => 2.5,  // wave1: 느리게
            2 => 1.8,
            3 => 1.5,
            _ => 1.2,
        };
        let interval = (base_interval / self.difficulty).max(0.8);
        if !is_boss_wave && self.spawn_timer >= interval {
            self.spawn_timer = 0.0;
            self.spawn_wave_enemies();
        }
    }

    fn spawn_wave_enemies(&mut self) {
        let wave = self.wave_number;
        let px = self.player.x;
        let pz = self.player.z;

        // 웨이브별 스폰 구성 (근거리4:원거리1 비율 wave2+)
        let (types, count): (Vec<u32>, u32) = match wave {
            1 => (vec![0, 0, 0, 0, 0], 2),                           // 스켈레톤만
            2 => (vec![0, 0, 4, 4, 5], 4),                           // +스웜+궁수
            3 => (vec![0, 2, 4, 4, 5], 5),                           // +임프
            4 => (vec![0, 2, 3, 4, 5], 6),                           // +레이스
            5 => (vec![0, 1, 2, 4, 5], 6),                           // 혼합
            6 => (vec![0, 4, 4, 6, 5], 7),                           // 스웜+돌격+궁수
            7 => (vec![4, 4, 4, 6, 5], 8),                           // 스웜 물량+궁수
            8 => (vec![0, 4, 4, 6, 5, 4, 4, 6, 5, 5], 8),           // 혼합
            9 => (vec![4, 4, 4, 6, 5, 4, 4, 6, 5, 5], 10),          // 러시
            _ => {
                let c = (8 + wave).min(15);
                (vec![0, 4, 4, 6, 5, 1, 4, 4, 6, 5], c)
            }
        };

        // 최대 적 수 제한 (성능 보호)
        let max_enemies = 60;
        if self.enemies.len() >= max_enemies { return; }
        let count = count.min((max_enemies - self.enemies.len()) as u32);

        for i in 0..count {
            let angle = (self.time * 7.7 + i as f32 * 2.3 + self.enemies.len() as f32 * 0.7) % (std::f32::consts::PI * 2.0);
            let dist = 12.0 + (self.time * 3.3 + i as f32).sin().abs() * 8.0;
            let x = px + angle.cos() * dist;
            let z = pz + angle.sin() * dist;

            let enemy_type = types[(i as usize) % types.len()];
            let enemy = Enemy::new_scaled(x, z, enemy_type, wave);
            self.enemies.push(enemy);
        }
    }

    fn spawn_elite(&mut self) {
        let px = self.player.x;
        let pz = self.player.z;
        let angle = self.time % (std::f32::consts::PI * 2.0);
        let mut elite = Enemy::new_scaled(px + angle.cos() * 12.0, pz + angle.sin() * 12.0, 7, self.wave_number);
        elite.hp = 300.0 + self.wave_number as f32 * 50.0;
        elite.max_hp = elite.hp;
        self.enemies.push(elite);
        self.log_queue.push_back("⚠️ ELITE INCOMING!".into());
    }

    fn spawn_main_boss(&mut self) {
        // Clear all enemies (no XP drop)
        self.enemies.clear();
        self.xp_orbs.clear(); // clean battlefield

        // Spawn boss at map center
        let center = self.map_size as f32 / 2.0;
        let mut boss = Enemy::new(center, center, 8);
        boss.hp = 800.0 + self.wave_number as f32 * 200.0;
        boss.max_hp = boss.hp;
        boss.phase = 1;
        self.enemies.push(boss);

        // Move player closer to center (teleport near boss)
        // Don't force — just log
        self.log_queue.push_back("💀💀💀 BOSS APPEARED! 💀💀💀".into());
        self.log_queue.push_back("⚔️ All enemies cleared — DUEL!".into());
    }

    fn generate_choices(&mut self) {
        let seed = (self.time * 1000.0) as u32;
        let level = self.player.level;
        let class_tier = self.player.class_tier;

        // Check if promotion is available (element-based)
        let promotions = super::class_data::available_promotions(
            self.player.fire_level,
            self.player.ice_level,
            self.player.thunder_level,
            self.player.poison_level,
            self.player.class_id,
            level,
        );

        // Check hidden stat-based promotions
        let hidden_promos = super::class_data::available_hidden_promotions(
            self.player.attack_damage,
            self.player.lifesteal,
            self.player.aoe_radius,
            self.player.crit_chance,
            self.player.speed,
            self.player.class_id,
            level,
        );

        // If promotions available, offer as choices
        let all_promos: Vec<u8> = promotions.iter().chain(hidden_promos.iter()).copied().collect();
        let total_orbs = self.player.total_elements();
        // 1st promotion: 2+ orbs
        if !all_promos.is_empty() && self.player.class_tier == 0 && total_orbs >= 2 {
            // 1st promotion
            let promo_id = all_promos[(seed as usize) % all_promos.len()];
            self.level_up_choices[0] = 100 + promo_id as u32;
            if all_promos.len() > 1 {
                let promo2 = all_promos[(seed as usize + 1) % all_promos.len()];
                self.level_up_choices[1] = 100 + promo2 as u32;
            } else {
                self.level_up_choices[1] = self.random_element_choice(seed / 3);
            }
            self.level_up_choices[2] = self.random_stat_choice(seed / 7);
            return;
        }
        // 2nd/3rd promotion: 5+ orbs for 2nd, 8+ for 3rd
        let orb_req = if self.player.class_tier == 1 { 5 } else { 8 };
        if !all_promos.is_empty() && self.player.class_tier >= 1 && total_orbs >= orb_req && self.player.class_tier < 3 {
            let promo_id = all_promos[(seed as usize) % all_promos.len()];
            self.level_up_choices[0] = 100 + promo_id as u32;
            if all_promos.len() > 1 {
                let promo2 = all_promos[(seed as usize + 1) % all_promos.len()];
                self.level_up_choices[1] = 100 + promo2 as u32;
            } else {
                self.level_up_choices[1] = self.random_class_skill_choice(seed / 3);
            }
            self.level_up_choices[2] = self.random_element_choice(seed / 7);
            return;
        }

        match class_tier {
            0 => {
                // Pre-promotion: alternate between element-heavy and stat-heavy
                if self.player.level % 2 == 0 {
                    // Even levels: 2 elements + 1 stat (orb collection)
                    self.level_up_choices[0] = self.random_element_choice(seed);
                    self.level_up_choices[1] = self.random_element_choice_exclude(seed / 5, self.level_up_choices[0]);
                    self.level_up_choices[2] = self.random_stat_choice(seed / 7);
                } else {
                    // Odd levels: 1 element + 2 stats (power up)
                    self.level_up_choices[0] = self.random_element_choice(seed);
                    self.level_up_choices[1] = self.random_stat_choice(seed / 3);
                    self.level_up_choices[2] = self.random_stat_choice(seed / 7);
                    if self.level_up_choices[2] == self.level_up_choices[1] {
                        self.level_up_choices[2] = self.random_stat_choice(seed / 13);
                    }
                }
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
    /// exclude: element ID to avoid (50~53), 0 = no exclusion
    fn random_element_choice_exclude(&self, seed: u32, exclude: u32) -> u32 {
        if self.player.total_elements() >= self.player.element_cap() {
            return self.random_stat_choice(seed);
        }
        let mut pick = 50 + (seed % 4);
        // Avoid duplicate
        if pick == exclude {
            pick = 50 + ((seed + 1) % 4);
        }
        if pick == exclude {
            pick = 50 + ((seed + 2) % 4);
        }
        pick
    }

    fn random_element_choice(&self, seed: u32) -> u32 {
        self.random_element_choice_exclude(seed, 0)
    }

    /// Stat choice: 60~69
    fn random_stat_choice(&self, seed: u32) -> u32 {
        // Weighted: ATK(60) and ASPD(62) and CRIT(66) appear more often
        let stats = [60, 60, 62, 62, 66, 61, 63, 64, 65, 67, 68]; // dmg×2, aspd×2, crit×1, rest×1
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
        if self.player.class_tier < 2 { return; } // Only auto-fire from 2nd class onwards

        let px = self.player.x;
        let pz = self.player.z;
        let atk = self.player.attack_damage;

        // Tick down all skill cooldowns
        for skill in &mut self.player.learned_skills {
            if skill.cooldown_remaining > 0.0 {
                skill.cooldown_remaining -= dt;
            }
        }

        // Auto-fire Active skills when off cooldown
        let skill_count = self.player.learned_skills.len();
        for idx in 0..skill_count {
            let ls = &self.player.learned_skills[idx];
            if ls.cooldown_remaining > 0.0 { continue; }

            let skill_def = super::skill_data::skills_for_class(ls.class_id)
                .iter().find(|s| s.id == ls.skill_id);
            let skill_def = match skill_def {
                Some(s) => *s,
                None => continue,
            };

            // Only auto-fire Active skills (not passive, not ultimate)
            if skill_def.skill_type != super::skill_data::SkillType::Active { continue; }

            // Fire the skill! AoE damage in range
            let range = skill_def.range;
            let damage = atk * skill_def.damage_mult * (0.8 + self.player.learned_skills[idx].level as f32 * 0.2);
            let mut hit_any = false;

            for enemy in &mut self.enemies {
                if !enemy.alive { continue; }
                let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
                if dist < range {
                    enemy.take_damage(damage);
                    enemy.apply_knockback(px, pz, 4.0);
                    self.damage_events.push((enemy.x, enemy.z, damage, false));
                    hit_any = true;
                }
            }

            // Set cooldown (only if there were targets)
            if hit_any {
                let cd = skill_def.cooldown * (1.0 - self.player.learned_skills[idx].level as f32 * 0.05);
                self.player.learned_skills[idx].cooldown_remaining = cd.max(0.5);
                // Push skill visual event (player pos, element, range)
                let elem = match skill_def.element {
                    super::skill_data::Element::Fire => 1u8,
                    super::skill_data::Element::Ice => 2,
                    super::skill_data::Element::Thunder => 3,
                    super::skill_data::Element::Poison => 4,
                    _ => self.player.dominant_element(),
                };
                self.skill_events.push((px, pz, elem, range));
            }
        }
    }



    pub fn choose_upgrade(&mut self, choice: u32) {
        if !self.level_up_pending { return; }

        let upgrade_id = self.level_up_choices[choice as usize % 3];

        match upgrade_id {
            // === Element orbs: 50~53 ===
            50 => { if self.player.add_element(1) { self.log(format!("🔥 Fire Orb! ({}/{})", self.player.total_elements(), self.player.element_cap())); } else { self.player.attack_damage += 8.0; self.log("🔥 Orb MAX! +DMG instead".into()); } }
            51 => { if self.player.add_element(2) { self.log(format!("❄️ Ice Orb! ({}/{})", self.player.total_elements(), self.player.element_cap())); } else { self.player.attack_damage += 8.0; self.log("❄️ Orb MAX! +DMG instead".into()); } }
            52 => { if self.player.add_element(3) { self.log(format!("⚡ Thunder Orb! ({}/{})", self.player.total_elements(), self.player.element_cap())); } else { self.player.attack_damage += 8.0; self.log("⚡ Orb MAX! +DMG instead".into()); } }
            53 => { if self.player.add_element(4) { self.log(format!("☠️ Poison Orb! ({}/{})", self.player.total_elements(), self.player.element_cap())); } else { self.player.attack_damage += 8.0; self.log("☠️ Orb MAX! +DMG instead".into()); } }

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
            100..=199 => {
                let class_id = (upgrade_id - 100) as u8;
                // Try normal class first
                if let Some(class) = super::class_data::class_by_id(class_id) {
                    self.player.promote_to(class_id);
                    let tier_emoji = match class.tier { 1 => "⭐", 2 => "🌟", 3 => "👑", _ => "✨" };
                    self.log(format!("{} PROMOTED to {}!", tier_emoji, class.name));
                } else if let Some(hidden) = super::class_data::hidden_class_by_id(class_id) {
                    // Hidden stat-based class
                    self.player.class_id = class_id;
                    self.player.class_tier = hidden.tier;
                    self.player.promoted = true;
                    self.player.promoted_element = 0; // no element affinity
                    // Learn hidden class skills
                    let skills = super::skill_data::skills_for_class(class_id);
                    for skill in skills {
                        if !self.player.has_skill_id(skill.id) {
                            self.player.learned_skills.push(super::player::LearnedSkill {
                                skill_id: skill.id,
                                class_id,
                                level: 1,
                                last_used: -999.0,
                                cooldown_remaining: 0.0,
                            });
                        }
                    }
                    // Stat boost
                    self.player.attack_damage += 20.0;
                    self.player.max_hp += 60.0;
                    self.player.hp += 60.0;
                    self.log(format!("🌈 HIDDEN CLASS: {}!", hidden.name));
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

    /// Active skill triggered by mouse click
    pub fn use_active_skill(&mut self) {
        if self.player.class_tier == 0 { return; }
        if self.player.active_skill_cd > 0.0 { return; }
        let cost = 30.0;
        if self.player.stamina < cost { self.log_queue.push_back("⚠️ Not enough mana!".into()); return; }

        self.player.stamina -= cost;
        self.player.active_skill_cd = 2.0;

        let skills = super::skill_data::skills_for_class(self.player.class_id);
        let skill = skills.iter().find(|s| s.skill_type == super::skill_data::SkillType::Active);

        let (damage_mult, range) = match skill {
            Some(s) => (s.damage_mult, s.range),
            None => (2.0, 4.0),
        };

        let px = self.player.x;
        let pz = self.player.z;
        let damage = self.player.attack_damage * damage_mult;

        for enemy in &mut self.enemies {
            if !enemy.alive { continue; }
            let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
            if dist < range {
                enemy.take_damage(damage);
                enemy.apply_knockback(px, pz, 10.0);
                self.damage_events.push((enemy.x, enemy.z, damage, true));
            }
        }

        let skill_name = skill.map(|s| s.name).unwrap_or("Power Strike");
        self.log(format!("✨ {}!", skill_name));
    }

    /// Directional skill (drag outward) — cone attack in direction
    pub fn use_directional_skill(&mut self, angle: f32) {
        if self.player.class_tier == 0 { return; }
        if self.player.active_skill_cd > 0.0 { return; }
        let cost = 20.0;
        if self.player.stamina < cost { self.log_queue.push_back("⚠️ Not enough mana!".into()); return; }

        self.player.stamina -= cost;
        self.player.active_skill_cd = 1.2;

        let px = self.player.x;
        let pz = self.player.z;
        let range = 8.0;
        let cone_half = -0.17; // cos(100°) ≈ -0.17, so ~200° wide cone
        let damage = self.player.attack_damage * 3.0; // 3x ATK

        let dir_x = angle.cos();
        let dir_z = -angle.sin(); // screen up = world -Z

        for enemy in &mut self.enemies {
            if !enemy.alive { continue; }
            let ex = enemy.x - px;
            let ez = enemy.z - pz;
            let dist = (ex * ex + ez * ez).sqrt();
            if dist > range || dist < 0.1 { continue; }

            // Check cone
            let dot = (ex * dir_x + ez * dir_z) / dist;
            if dot > cone_half {
                let dmg = damage * (1.0 + (1.0 - dist / range) * 0.5); // closer = more damage
                enemy.take_damage(dmg);
                enemy.apply_knockback(px, pz, 8.0);
                self.damage_events.push((enemy.x, enemy.z, dmg, true));
            }
        }

        self.skill_events.push((px + dir_x * 2.0, pz + dir_z * 2.0, self.player.dominant_element(), range));
        self.log("⚔️ Directional Strike!".into());
    }

    /// Shield skill (drag inward) — grants shield HP, explodes after 5s
    pub fn use_shield_skill(&mut self) {
        if self.player.class_tier == 0 { return; }
        let cost = 35.0;
        if self.player.stamina < cost { self.log_queue.push_back("⚠️ Not enough mana!".into()); return; }
        if self.player.shield_hp > 0.0 { return; } // already shielded

        self.player.stamina -= cost;
        self.player.shield_hp = self.player.max_hp * 0.4; // 40% of max HP as shield
        self.player.shield_timer = 5.0; // explodes in 5s
        self.log("🛡️ Shield!".into());
    }

    /// Ultimate skill (circle gesture) — massive AoE
    pub fn use_ultimate_skill(&mut self) {
        if self.player.class_tier == 0 { return; }
        let cost = 50.0;
        if self.player.stamina < cost { self.log_queue.push_back("⚠️ Not enough mana!".into()); return; }
        if self.player.active_skill_cd > 3.0 { return; } // still on ult CD

        self.player.stamina -= cost;
        self.player.active_skill_cd = 15.0; // 15s cooldown

        let px = self.player.x;
        let pz = self.player.z;
        let range = 14.0;
        let damage = self.player.attack_damage * 5.0;

        for enemy in &mut self.enemies {
            if !enemy.alive { continue; }
            let dist = ((enemy.x - px).powi(2) + (enemy.z - pz).powi(2)).sqrt();
            if dist < range {
                enemy.take_damage(damage);
                enemy.apply_knockback(px, pz, 15.0);
                self.damage_events.push((enemy.x, enemy.z, damage, true));
            }
        }

        self.skill_events.push((px, pz, self.player.dominant_element(), range));
        self.log("💫 ULTIMATE!".into());
    }

    fn log(&mut self, msg: String) {
        self.log_queue.push_back(msg);
    }
}
