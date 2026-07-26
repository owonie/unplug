pub struct Enemy {
    pub x: f32,
    pub z: f32,
    pub hp: f32,
    pub max_hp: f32,
    pub speed: f32,
    pub damage: f32,
    pub enemy_type: u32,
    pub alive: bool,
    pub last_attack: f32,
    teleport_cooldown: f32,
    // Knockback
    pub kb_vx: f32,
    pub kb_vz: f32,
    pub hit_timer: f32,
    // Behavior state
    pub state_timer: f32,     // general purpose timer
    pub is_charging: bool,    // brute charge state
    pub charge_dir_x: f32,
    pub charge_dir_z: f32,
    // Boss
    pub phase: u32,           // boss phase (1,2,3)
    pub pattern_timer: f32,   // boss pattern cooldown
}

// Enemy types
pub const SKELETON: u32 = 0;   // 졸개 — balanced, mass spawn
pub const GOLEM: u32 = 1;      // 탱크 — slow, tough
pub const IMP: u32 = 2;        // 돌격 — fast, dash, fragile
pub const WRAITH: u32 = 3;     // 유령 — medium
pub const SWARM: u32 = 4;      // 벌레떼 — tiny, super fast, super weak
pub const ARCHER: u32 = 5;     // 궁수 — stops at range, ranged
pub const BRUTE: u32 = 6;      // 돌격병 — charges then rests
pub const ELITE: u32 = 7;      // 중간보스 (5웨이브)
pub const BOSS: u32 = 8;       // 메인보스 (10웨이브)

impl Enemy {
    pub fn new(x: f32, z: f32, enemy_type: u32) -> Self {
        let (hp, speed, damage) = match enemy_type {
            SKELETON => (30.0, 2.8, 8.0),
            GOLEM    => (80.0, 1.5, 5.0),
            IMP      => (25.0, 4.0, 12.0),
            WRAITH   => (40.0, 2.5, 10.0),
            SWARM    => (10.0, 3.8, 4.0),      // 빠르지만 플레이어보단 느림
            ARCHER   => (35.0, 2.0, 15.0),
            BRUTE    => (60.0, 2.5, 20.0),     // 돌진만 빠름
            ELITE    => (300.0, 2.8, 18.0),
            BOSS     => (800.0, 2.0, 25.0),
            _ => (30.0, 2.8, 8.0),
        };

        Enemy {
            x, z, hp, max_hp: hp, speed, damage,
            enemy_type, alive: true,
            last_attack: 0.0,
            teleport_cooldown: 0.0,
            kb_vx: 0.0,
            kb_vz: 0.0,
            hit_timer: 0.0,
            state_timer: 0.0,
            is_charging: false,
            charge_dir_x: 0.0,
            charge_dir_z: 0.0,
            phase: 1,
            pattern_timer: 0.0,
        }
    }

    pub fn new_scaled(x: f32, z: f32, enemy_type: u32, wave: u32) -> Self {
        let mut e = Self::new(x, z, enemy_type);
        let scale = 1.0 + wave as f32 * 0.2;
        e.hp *= scale;
        e.max_hp = e.hp;
        e.damage *= 1.0 + wave as f32 * 0.1;
        e.speed *= 1.0 + wave as f32 * 0.015; // very slow speed scaling
        e
    }

    pub fn update(&mut self, dt: f32, player_x: f32, player_z: f32, time: f32) {
        if !self.alive { return; }

        if self.hit_timer > 0.0 {
            self.hit_timer -= dt;
        }

        // Knockback
        if self.kb_vx.abs() > 0.1 || self.kb_vz.abs() > 0.1 {
            self.x += self.kb_vx * dt;
            self.z += self.kb_vz * dt;
            self.kb_vx *= 0.85;
            self.kb_vz *= 0.85;
            return;
        }
        self.kb_vx = 0.0;
        self.kb_vz = 0.0;

        let dx = player_x - self.x;
        let dz = player_z - self.z;
        let dist = (dx * dx + dz * dz).sqrt();
        if dist < 0.01 { return; }

        match self.enemy_type {
            IMP => self.update_imp(dt, dx, dz, dist, time),
            ARCHER => self.update_archer(dt, dx, dz, dist),
            BRUTE => self.update_brute(dt, dx, dz, dist),
            ELITE => self.update_elite(dt, dx, dz, dist, player_x, player_z),
            BOSS => self.update_boss(dt, dx, dz, dist, player_x, player_z),
            _ => {
                // Default: move toward player
                self.x += dx / dist * self.speed * dt;
                self.z += dz / dist * self.speed * dt;
            }
        }
    }

    fn update_imp(&mut self, dt: f32, dx: f32, dz: f32, dist: f32, time: f32) {
        self.teleport_cooldown -= dt;
        if self.teleport_cooldown <= 0.0 && dist > 3.0 {
            self.x += dx / dist * 2.5;
            self.z += dz / dist * 2.5;
            self.teleport_cooldown = 1.5 + (time * 7.0).sin().abs();
            return;
        }
        self.x += dx / dist * self.speed * dt;
        self.z += dz / dist * self.speed * dt;
    }

    fn update_archer(&mut self, dt: f32, dx: f32, dz: f32, dist: f32) {
        // Stay at range 5~7, stop and "shoot" (handled in world.rs via last_attack)
        if dist > 7.0 {
            self.x += dx / dist * self.speed * dt;
            self.z += dz / dist * self.speed * dt;
        } else if dist < 4.5 {
            // Back away
            self.x -= dx / dist * self.speed * 0.6 * dt;
            self.z -= dz / dist * self.speed * 0.6 * dt;
        }
        // At range: stand still (attack timer in world.rs)
    }

    fn update_brute(&mut self, dt: f32, dx: f32, dz: f32, dist: f32) {
        self.state_timer -= dt;

        if self.is_charging {
            // Charging forward
            self.x += self.charge_dir_x * self.speed * 2.0 * dt;
            self.z += self.charge_dir_z * self.speed * 2.0 * dt;
            if self.state_timer <= 0.0 {
                self.is_charging = false;
                self.state_timer = 1.5; // rest after charge
            }
        } else if self.state_timer <= 0.0 && dist > 2.0 && dist < 12.0 {
            // Start charge
            self.is_charging = true;
            self.charge_dir_x = dx / dist;
            self.charge_dir_z = dz / dist;
            self.state_timer = 0.5; // charge duration
        } else if self.state_timer <= 0.0 {
            // Walk toward player
            self.x += dx / dist * self.speed * 0.5 * dt;
            self.z += dz / dist * self.speed * 0.5 * dt;
        }
        // Resting: do nothing
    }

    fn update_elite(&mut self, dt: f32, dx: f32, dz: f32, dist: f32, _px: f32, _pz: f32) {
        // Elite: aggressive chase + occasional leap
        self.state_timer -= dt;
        if self.state_timer <= 0.0 && dist > 3.0 {
            // Leap toward player
            self.x += dx / dist * 4.0;
            self.z += dz / dist * 4.0;
            self.state_timer = 3.0;
        } else {
            self.x += dx / dist * self.speed * 1.2 * dt;
            self.z += dz / dist * self.speed * 1.2 * dt;
        }
    }

    fn update_boss(&mut self, dt: f32, dx: f32, dz: f32, dist: f32, _px: f32, _pz: f32) {
        self.pattern_timer -= dt;

        // Phase transitions
        let hp_pct = self.hp / self.max_hp;
        if hp_pct < 0.33 && self.phase < 3 {
            self.phase = 3;
            self.pattern_timer = 0.0;
        } else if hp_pct < 0.66 && self.phase < 2 {
            self.phase = 2;
            self.pattern_timer = 0.0;
        }

        match self.phase {
            1 => {
                // Phase 1: slow chase + periodic dash
                if self.pattern_timer <= 0.0 && dist > 3.0 {
                    self.x += dx / dist * 5.0;
                    self.z += dz / dist * 5.0;
                    self.pattern_timer = 4.0;
                } else {
                    self.x += dx / dist * self.speed * dt;
                    self.z += dz / dist * self.speed * dt;
                }
            }
            2 => {
                // Phase 2: circle strafing + faster dashes
                let angle = dz.atan2(dx) + dt * 1.5;
                let strafe_dist = 5.0;
                let target_x = _px - angle.cos() * strafe_dist;
                let target_z = _pz - angle.sin() * strafe_dist;
                let tdx = target_x - self.x;
                let tdz = target_z - self.z;
                let tdist = (tdx * tdx + tdz * tdz).sqrt().max(0.1);
                self.x += tdx / tdist * self.speed * 1.5 * dt;
                self.z += tdz / tdist * self.speed * 1.5 * dt;

                if self.pattern_timer <= 0.0 {
                    // Dash at player
                    self.x += dx / dist * 4.0;
                    self.z += dz / dist * 4.0;
                    self.pattern_timer = 2.5;
                }
            }
            _ => {
                // Phase 3: aggressive + summon (summon handled in world.rs)
                self.x += dx / dist * self.speed * 2.0 * dt;
                self.z += dz / dist * self.speed * 2.0 * dt;

                if self.pattern_timer <= 0.0 {
                    // Slam (area damage handled in world.rs)
                    self.pattern_timer = 2.0;
                }
            }
        }
    }

    pub fn take_damage(&mut self, amount: f32) -> bool {
        self.hp -= amount;
        self.hit_timer = 0.2;
        if self.hp <= 0.0 {
            self.hp = 0.0;
            return true;
        }
        false
    }

    pub fn knockback_done(&self) -> bool {
        self.kb_vx.abs() < 0.5 && self.kb_vz.abs() < 0.5
    }

    pub fn is_dying(&self) -> bool {
        self.hp <= 0.0 && self.alive
    }

    pub fn apply_knockback(&mut self, from_x: f32, from_z: f32, force: f32) {
        let dx = self.x - from_x;
        let dz = self.z - from_z;
        let dist = (dx * dx + dz * dz).sqrt().max(0.1);
        // Bosses/elites resist knockback
        let mult = match self.enemy_type {
            BOSS => 0.1,
            ELITE => 0.3,
            GOLEM => 0.5,
            BRUTE => 0.6,
            _ => 1.0,
        };
        self.kb_vx = dx / dist * force * mult;
        self.kb_vz = dz / dist * force * mult;
    }
}
