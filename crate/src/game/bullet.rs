pub struct Bullet {
    pub x: f32,
    pub z: f32,
    pub vx: f32,
    pub vz: f32,
    pub active: bool,
    pub lifetime: f32,
    pub damage: f32,
    pub bullet_type: u32, // 0=arrow, 1=fireball, 2=magic
}

impl Bullet {
    pub fn new(x: f32, z: f32, vx: f32, vz: f32, damage: f32) -> Self {
        Bullet { x, z, vx, vz, active: true, lifetime: 0.0, damage, bullet_type: 0 }
    }

    pub fn new_typed(x: f32, z: f32, vx: f32, vz: f32, damage: f32, bullet_type: u32) -> Self {
        Bullet { x, z, vx, vz, active: true, lifetime: 0.0, damage, bullet_type }
    }

    pub fn update(&mut self, dt: f32) {
        if !self.active { return; }
        self.x += self.vx * dt;
        self.z += self.vz * dt;
        self.lifetime += dt;
        if self.lifetime > 3.0 {
            self.active = false;
        }
    }
}
