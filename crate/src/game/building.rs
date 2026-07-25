pub struct Building {
    pub x: f32,
    pub z: f32,
    pub building_type: u32, // 0=barricade, 1=turret
    pub hp: f32,
    pub active: bool,
    pub version: [u32; 3],
    pub last_attack: f32,
    pub build_timer: f32,
    pub build_progress: f32, // 0.0 → 1.0 (건설 애니메이션)
    pub state: BuildState,
}

#[derive(PartialEq, Clone)]
pub enum BuildState {
    Building,
    CiRunning,
    Active,
    Failed,
}

impl Building {
    pub fn new(x: f32, z: f32, building_type: u32) -> Self {
        Building {
            x, z, building_type,
            hp: if building_type == 0 { 150.0 } else { 80.0 },
            active: false,
            version: [1, 0, 0],
            last_attack: 0.0,
            build_timer: 0.0,
            build_progress: 0.0,
            state: BuildState::Building,
        }
    }

    pub fn update(&mut self, dt: f32) -> Option<BuildEvent> {
        self.build_timer += dt;

        match self.state {
            BuildState::Building => {
                // 건설 진행 (2초 동안 0→1)
                self.build_progress = (self.build_timer / 2.0).min(1.0);

                if self.build_timer >= 2.0 {
                    self.state = BuildState::CiRunning;
                    self.build_timer = 0.0;
                    return Some(BuildEvent::CiStarted);
                }
            }
            BuildState::CiRunning => {
                if self.build_timer >= 1.0 {
                    // 90% success for barricade, 80% for turret
                    let success_rate = if self.building_type == 0 { 90 } else { 80 };
                    let hash = ((self.x * 1000.0 + self.z * 777.0 + self.build_timer * 333.0) as u32) % 100;
                    if hash < success_rate {
                        self.state = BuildState::Active;
                        self.active = true;
                        self.build_progress = 1.0;
                        return Some(BuildEvent::Success);
                    } else {
                        self.state = BuildState::Failed;
                        return Some(BuildEvent::Failed);
                    }
                }
            }
            _ => {}
        }
        None
    }

    pub fn can_attack(&self, time: f32) -> bool {
        self.active && self.building_type == 1 && time - self.last_attack >= 0.8
    }

    pub fn version_string(&self) -> String {
        format!("v{}.{}.{}", self.version[0], self.version[1], self.version[2])
    }
}

pub enum BuildEvent {
    CiStarted,
    Success,
    Failed,
}
