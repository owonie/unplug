/// Wave Event System — risk-reward choices every 5 waves

#[derive(Clone, Copy, PartialEq)]
pub enum WaveEventType {
    /// ATK +30% but MaxHP -20%
    BloodAltar,
    /// Speed +25% but ATK -15%
    WindShrine,
    /// MaxHP +40% but Speed -20%
    FortressTotem,
    /// Crit +20% but take 1.5x damage
    GlassCannon,
    /// Full heal + temporary invuln 3s, but next wave spawns 2x enemies
    DangerousRest,
    /// Double XP for 2 waves, but enemies are 30% faster
    KnowledgePact,
}

impl WaveEventType {
    pub fn all() -> &'static [WaveEventType] {
        &[
            Self::BloodAltar,
            Self::WindShrine,
            Self::FortressTotem,
            Self::GlassCannon,
            Self::DangerousRest,
            Self::KnowledgePact,
        ]
    }

    pub fn name(&self) -> &'static str {
        match self {
            Self::BloodAltar => "Blood Altar",
            Self::WindShrine => "Wind Shrine",
            Self::FortressTotem => "Fortress Totem",
            Self::GlassCannon => "Glass Cannon",
            Self::DangerousRest => "Dangerous Rest",
            Self::KnowledgePact => "Knowledge Pact",
        }
    }

    pub fn emoji(&self) -> &'static str {
        match self {
            Self::BloodAltar => "🩸",
            Self::WindShrine => "💨",
            Self::FortressTotem => "🏰",
            Self::GlassCannon => "💎",
            Self::DangerousRest => "😴",
            Self::KnowledgePact => "📖",
        }
    }

    pub fn description(&self) -> (&'static str, &'static str) {
        // (benefit, cost)
        match self {
            Self::BloodAltar => ("ATK +30%", "MaxHP -20%"),
            Self::WindShrine => ("Speed +25%", "ATK -15%"),
            Self::FortressTotem => ("MaxHP +40%", "Speed -20%"),
            Self::GlassCannon => ("Crit +20%", "Take 1.5x DMG"),
            Self::DangerousRest => ("Full Heal + 3s Invuln", "Next wave 2x enemies"),
            Self::KnowledgePact => ("2x XP for 2 waves", "Enemies 30% faster"),
        }
    }
}

/// State for active wave event modifiers
#[derive(Clone)]
pub struct WaveEventState {
    /// Currently pending event choices (2 options)
    pub pending_choices: Option<(WaveEventType, WaveEventType)>,
    /// Active modifiers from past choices
    pub damage_taken_mult: f32,     // GlassCannon: 1.5x
    pub spawn_mult: f32,            // DangerousRest: 2x for 1 wave
    pub spawn_mult_waves: u32,      // waves remaining for spawn_mult
    pub xp_mult: f32,              // KnowledgePact: 2x
    pub xp_mult_waves: u32,        // waves remaining for xp_mult
    pub enemy_speed_mult: f32,     // KnowledgePact: 1.3x
    pub enemy_speed_mult_waves: u32,
    pub invuln_timer: f32,         // DangerousRest: 3s
}

impl WaveEventState {
    pub fn new() -> Self {
        Self {
            pending_choices: None,
            damage_taken_mult: 1.0,
            spawn_mult: 1.0,
            spawn_mult_waves: 0,
            xp_mult: 1.0,
            xp_mult_waves: 0,
            enemy_speed_mult: 1.0,
            enemy_speed_mult_waves: 0,
            invuln_timer: 0.0,
        }
    }

    /// Generate 2 random event choices (different from each other)
    pub fn generate_choices(&mut self, seed: u32) {
        let all = WaveEventType::all();
        let idx1 = (seed as usize) % all.len();
        let mut idx2 = ((seed / 7) as usize + 1) % all.len();
        if idx2 == idx1 { idx2 = (idx2 + 1) % all.len(); }
        self.pending_choices = Some((all[idx1], all[idx2]));
    }

    /// Apply the chosen event. Returns log message.
    pub fn apply_choice(&mut self, choice: u8, player_max_hp: &mut f32, player_hp: &mut f32,
                        player_atk: &mut f32, player_speed: &mut f32, player_crit: &mut f32) -> String {
        let (ev1, ev2) = match self.pending_choices.take() {
            Some(pair) => pair,
            None => return String::new(),
        };

        let chosen = if choice == 0 { ev1 } else { ev2 };
        let (benefit, cost) = chosen.description();

        match chosen {
            WaveEventType::BloodAltar => {
                *player_atk *= 1.30;
                *player_max_hp *= 0.80;
                if *player_hp > *player_max_hp { *player_hp = *player_max_hp; }
            }
            WaveEventType::WindShrine => {
                *player_speed *= 1.25;
                *player_atk *= 0.85;
            }
            WaveEventType::FortressTotem => {
                let bonus = *player_max_hp * 0.40;
                *player_max_hp += bonus;
                *player_hp += bonus;
                *player_speed *= 0.80;
            }
            WaveEventType::GlassCannon => {
                *player_crit += 0.20;
                self.damage_taken_mult *= 1.5;
            }
            WaveEventType::DangerousRest => {
                *player_hp = *player_max_hp;
                self.invuln_timer = 3.0;
                self.spawn_mult = 2.0;
                self.spawn_mult_waves = 1;
            }
            WaveEventType::KnowledgePact => {
                self.xp_mult = 2.0;
                self.xp_mult_waves = 2;
                self.enemy_speed_mult = 1.3;
                self.enemy_speed_mult_waves = 2;
            }
        }

        format!("{} {} — {} / {}", chosen.emoji(), chosen.name(), benefit, cost)
    }

    /// Called each new wave — tick down temporary modifiers
    pub fn on_new_wave(&mut self) {
        if self.spawn_mult_waves > 0 {
            self.spawn_mult_waves -= 1;
            if self.spawn_mult_waves == 0 { self.spawn_mult = 1.0; }
        }
        if self.xp_mult_waves > 0 {
            self.xp_mult_waves -= 1;
            if self.xp_mult_waves == 0 { self.xp_mult = 1.0; }
        }
        if self.enemy_speed_mult_waves > 0 {
            self.enemy_speed_mult_waves -= 1;
            if self.enemy_speed_mult_waves == 0 { self.enemy_speed_mult = 1.0; }
        }
    }

    pub fn update(&mut self, dt: f32) {
        if self.invuln_timer > 0.0 {
            self.invuln_timer -= dt;
        }
    }

    pub fn is_invuln(&self) -> bool {
        self.invuln_timer > 0.0
    }

    pub fn has_pending(&self) -> bool {
        self.pending_choices.is_some()
    }
}
