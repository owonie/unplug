pub struct WaveState {
    pub current: u32,
    pub max_waves: u32,
    pub is_night: bool,
    pub timer: f32,
    pub day_duration: f32,
    pub night_duration: f32,
    pub spawn_pending: bool,
}

impl WaveState {
    pub fn new() -> Self {
        WaveState {
            current: 1,
            max_waves: 10,
            is_night: false,
            timer: 0.0,
            day_duration: 60.0,
            night_duration: 45.0,
            spawn_pending: false,
        }
    }

    pub fn update(&mut self, dt: f32) -> bool {
        self.timer += dt;
        let duration = if self.is_night { self.night_duration } else { self.day_duration };

        if self.timer >= duration {
            self.timer = 0.0;
            self.toggle_phase();
            return true; // phase changed
        }
        false
    }

    fn toggle_phase(&mut self) {
        if self.is_night {
            self.is_night = false;
            self.current += 1;
        } else {
            self.is_night = true;
            self.spawn_pending = true;
        }
    }

    pub fn enemy_count(&self) -> u32 {
        let base = 5.0_f32;
        let scale = 1.4_f32;
        (base * scale.powi(self.current as i32 - 1)) as u32
    }
}
