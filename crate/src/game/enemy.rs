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
    pub hit_timer: f32, // > 0 = just got hit (for visual feedback)
}

impl Enemy {
    pub fn new(x: f32, z: f32, enemy_type: u32) -> Self {
        let (hp, speed, damage) = match enemy_type {
            0 => (30.0, 3.5, 8.0),   // Skeleton: balanced
            1 => (80.0, 2.0, 5.0),   // Golem: tanky, slow
            2 => (25.0, 5.0, 12.0),  // Imp: fast, fragile
            _ => (40.0, 3.0, 10.0),  // Wraith: medium
        };

        Enemy {
            x, z, hp, max_hp: hp, speed, damage,
            enemy_type, alive: true,
            last_attack: 0.0,
            teleport_cooldown: 0.0,
            kb_vx: 0.0,
            kb_vz: 0.0,
            hit_timer: 0.0,
        }
    }

    pub fn update(&mut self, dt: f32, player_x: f32, player_z: f32, time: f32) {
        if !self.alive { return; }

        // Hit timer decay
        if self.hit_timer > 0.0 {
            self.hit_timer -= dt;
        }

        // Apply knockback (decays quickly)
        if self.kb_vx.abs() > 0.1 || self.kb_vz.abs() > 0.1 {
            self.x += self.kb_vx * dt;
            self.z += self.kb_vz * dt;
            self.kb_vx *= 0.85; // friction
            self.kb_vz *= 0.85;
            return; // don't chase during knockback
        }
        self.kb_vx = 0.0;
        self.kb_vz = 0.0;

        let dx = player_x - self.x;
        let dz = player_z - self.z;
        let dist = (dx * dx + dz * dz).sqrt();

        if dist < 0.01 { return; }

        // Imp: occasional dash
        if self.enemy_type == 2 {
            self.teleport_cooldown -= dt;
            if self.teleport_cooldown <= 0.0 && dist > 3.0 {
                self.x += dx / dist * 2.0;
                self.z += dz / dist * 2.0;
                self.teleport_cooldown = 2.0 + (time * 7.0).sin().abs();
                return;
            }
        }

        // Move toward player
        self.x += dx / dist * self.speed * dt;
        self.z += dz / dist * self.speed * dt;
    }

    pub fn take_damage(&mut self, amount: f32) -> bool {
        self.hp -= amount;
        self.hit_timer = 0.2;
        if self.hp <= 0.0 {
            // Don't die immediately — wait for knockback to finish
            self.hp = 0.0;
            // Return true only if not already in dying state
            return true;
        }
        false
    }

    /// Check if knockback is done (for delayed death)
    pub fn knockback_done(&self) -> bool {
        self.kb_vx.abs() < 0.5 && self.kb_vz.abs() < 0.5
    }

    pub fn is_dying(&self) -> bool {
        self.hp <= 0.0 && self.alive
    }

    /// Apply knockback away from a point
    pub fn apply_knockback(&mut self, from_x: f32, from_z: f32, force: f32) {
        let dx = self.x - from_x;
        let dz = self.z - from_z;
        let dist = (dx * dx + dz * dz).sqrt().max(0.1);
        self.kb_vx = dx / dist * force;
        self.kb_vz = dz / dist * force;
    }
}
