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
        let map_size = 60;
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
        let margin = 1.0;
        let max = self.map_size as f32 - margin;
        self.player.x = self.player.x.clamp(margin, max);
        self.player.z = self.player.z.clamp(margin, max);
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
        self.level_up_choices = [
            seed % 16,
            (seed / 16) % 16,
            (seed / 256) % 16,
        ];
        if self.level_up_choices[1] == self.level_up_choices[0] {
            self.level_up_choices[1] = (self.level_up_choices[1] + 1) % 16;
        }
        if self.level_up_choices[2] == self.level_up_choices[0] || self.level_up_choices[2] == self.level_up_choices[1] {
            self.level_up_choices[2] = (self.level_up_choices[2] + 2) % 16;
        }
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
            // 원소 무기
            12 => {
                self.player.attack_damage += 5.0;
                self.player.aoe_radius += 0.8;
                self.player.learn_skill(0);
                self.log("🔥 FIRE BLADE! Burns enemies".into());
            }
            13 => {
                self.player.attack_damage += 5.0;
                self.player.attack_range += 0.5;
                self.player.learn_skill(4);
                self.log("❄️ FROST BLADE! Slows enemies".into());
            }
            14 => {
                self.player.attack_damage += 5.0;
                self.player.attack_cooldown = (self.player.attack_cooldown - 0.05).max(0.12);
                self.player.learn_skill(2);
                self.log("⚡ THUNDER BLADE! Chain lightning".into());
            }
            15 => {
                self.player.attack_damage += 5.0;
                self.player.lifesteal += 0.03;
                self.player.learn_skill(7);
                self.log("☠️ POISON BLADE! Drains life".into());
            }
            _ => {}
        }

        self.level_up_pending = false;
    }

    fn log(&mut self, msg: String) {
        self.log_queue.push_back(msg);
    }
}
