pub struct Player {
    pub x: f32,
    pub z: f32,
    pub hp: f32,
    pub max_hp: f32,
    pub speed: f32,
    pub alive: bool,
    pub level: u32,
    pub xp: u32,
    pub xp_to_next: u32,
    // Base attack
    pub attack_cooldown: f32,
    pub last_attack: f32,
    pub attack_damage: f32,
    pub attack_range: f32,
    pub attack_count: u32,
    // Advanced stats
    pub pierce: u32,
    pub crit_chance: f32,
    pub lifesteal: f32,
    pub aoe_radius: f32,
    pub magnet_range: f32,
    // Skills (learned, max 6 slots)
    pub skills: Vec<SkillSlot>,
    // Promotion
    pub promoted: bool,
    pub promoted_element: u32, // 0=none, 1=fire, 2=ice, 3=thunder, 4=poison
    // Movement
    pub dir_x: f32,
    pub dir_z: f32,
    pub moving: bool,
    pub invuln_timer: f32,
}

#[derive(Clone)]
pub struct SkillSlot {
    pub skill_id: u32,
    pub level: u32,    // 1~5
    pub cooldown: f32,
    pub last_used: f32,
}

impl SkillSlot {
    pub fn new(skill_id: u32) -> Self {
        SkillSlot { skill_id, level: 1, cooldown: 0.0, last_used: -999.0 }
    }
}

// Skill definitions
pub const MAX_SKILL_SLOTS: usize = 6;

// Skill IDs:
// 0 = Spin Attack (범위 회전 공격)
// 1 = Holy Shield (피격 무효 3초)
// 2 = Lightning Chain (연쇄 번개)
// 3 = Fire Trail (이동 경로에 불)
// 4 = Frost Nova (주변 슬로우)
// 5 = Summon Spirits (소환수)
// 6 = Meteor (대형 폭발)
// 7 = Bloodlust (공속 + 흡혈 버프)

pub fn skill_base_cooldown(id: u32) -> f32 {
    match id {
        0 => 3.0,   // Spin Attack
        1 => 12.0,  // Holy Shield
        2 => 4.0,   // Lightning Chain
        3 => 0.0,   // Fire Trail (passive)
        4 => 6.0,   // Frost Nova
        5 => 10.0,  // Summon Spirits
        6 => 15.0,  // Meteor
        7 => 20.0,  // Bloodlust
        _ => 5.0,
    }
}

pub fn skill_name(id: u32) -> &'static str {
    match id {
        0 => "Spin Attack",
        1 => "Holy Shield",
        2 => "Lightning Chain",
        3 => "Fire Trail",
        4 => "Frost Nova",
        5 => "Summon Spirits",
        6 => "Meteor",
        7 => "Bloodlust",
        _ => "Unknown",
    }
}

impl Player {
    pub fn new(x: f32, z: f32) -> Self {
        Player {
            x, z,
            hp: 100.0,
            max_hp: 100.0,
            speed: 4.5,
            alive: true,
            level: 1,
            xp: 0,
            xp_to_next: 10,
            attack_cooldown: 0.6,
            last_attack: 0.0,
            attack_damage: 25.0,
            attack_range: 2.5,
            attack_count: 1,
            pierce: 0,
            crit_chance: 0.05,
            lifesteal: 0.0,
            aoe_radius: 0.0,
            magnet_range: 1.5,
            skills: Vec::new(),
            promoted: false,
            promoted_element: 0,
            dir_x: 0.0,
            dir_z: 0.0,
            moving: false,
            invuln_timer: 0.0,
        }
    }

    pub fn update(&mut self, dt: f32) {
        if self.invuln_timer > 0.0 { self.invuln_timer -= dt; }
        if self.moving {
            self.x += self.dir_x * self.speed * dt;
            self.z += self.dir_z * self.speed * dt;
        }
    }

    pub fn set_direction(&mut self, dx: f32, dz: f32) {
        let len = (dx * dx + dz * dz).sqrt();
        if len > 0.01 {
            self.dir_x = dx / len;
            self.dir_z = dz / len;
            self.moving = true;
        } else {
            self.dir_x = 0.0;
            self.dir_z = 0.0;
            self.moving = false;
        }
    }

    pub fn take_damage(&mut self, amount: f32) {
        if self.invuln_timer > 0.0 { return; }
        // Holy Shield check
        if self.has_skill_active(1) { return; }
        self.hp -= amount;
        self.invuln_timer = 0.5;
        if self.hp <= 0.0 { self.hp = 0.0; self.alive = false; }
    }

    pub fn heal(&mut self, amount: f32) {
        self.hp = (self.hp + amount).min(self.max_hp);
    }

    pub fn can_attack(&self, time: f32) -> bool {
        time - self.last_attack >= self.attack_cooldown
    }

    pub fn add_xp(&mut self, amount: u32) -> bool {
        self.xp += amount;
        if self.xp >= self.xp_to_next {
            self.xp -= self.xp_to_next;
            self.level += 1;
            self.xp_to_next = 10 + self.level * 5;
            return true;
        }
        false
    }

    // Skill management
    pub fn learn_skill(&mut self, skill_id: u32) {
        // If already have it, level up
        if let Some(slot) = self.skills.iter_mut().find(|s| s.skill_id == skill_id) {
            slot.level = (slot.level + 1).min(5);
        } else if self.skills.len() < MAX_SKILL_SLOTS {
            let mut slot = SkillSlot::new(skill_id);
            slot.cooldown = skill_base_cooldown(skill_id);
            self.skills.push(slot);
        }
    }

    pub fn has_skill(&self, skill_id: u32) -> bool {
        self.skills.iter().any(|s| s.skill_id == skill_id)
    }

    pub fn skill_level(&self, skill_id: u32) -> u32 {
        self.skills.iter().find(|s| s.skill_id == skill_id).map(|s| s.level).unwrap_or(0)
    }

    fn has_skill_active(&self, _skill_id: u32) -> bool {
        // For Holy Shield — checked via invuln timer externally
        false
    }
}
