pub struct Resources {
    pub coffee: u32,
    pub commits: u32,
    pub points: u32,
}

impl Resources {
    pub fn new() -> Self {
        Resources { coffee: 0, commits: 5, points: 0 }
    }
}

pub struct ResourcePickup {
    pub x: f32,
    pub z: f32,
    pub res_type: u32, // 0=small, 1=medium, 2=large, 3=boss
    pub xp_value: u32,
    pub alive: bool,
}

impl ResourcePickup {
    pub fn new(x: f32, z: f32, res_type: u32) -> Self {
        let xp_value = match res_type {
            0 => 3,   // small (skeleton)
            1 => 6,   // medium (imp/golem)
            2 => 12,  // large (wraith/elite)
            3 => 30,  // boss
            _ => 3,
        };
        ResourcePickup { x, z, res_type, xp_value, alive: true }
    }
}
