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
    pub res_type: u32, // 0=coffee, 1=commit
    pub alive: bool,
}

impl ResourcePickup {
    pub fn new(x: f32, z: f32, res_type: u32) -> Self {
        ResourcePickup { x, z, res_type, alive: true }
    }
}
