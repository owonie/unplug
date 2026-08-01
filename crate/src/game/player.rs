use super::class_data::class_by_id;
use super::skill_data::skills_for_class;

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
    // Element levels (NO CAP)
    pub fire_level: u8,
    pub ice_level: u8,
    pub thunder_level: u8,
    pub poison_level: u8,
    // Class system
    pub class_id: u8,      // 0 = no class, 1~45
    pub class_tier: u8,    // 0 = none, 1/2/3
    pub learned_skills: Vec<LearnedSkill>, // skills unlocked from class
    // Legacy compat
    pub promoted: bool,
    pub promoted_element: u32,
    // Movement
    pub dir_x: f32,
    pub dir_z: f32,
    pub moving: bool,
    pub invuln_timer: f32,
    // Dash
    pub dash_timer: f32,      // > 0 means dashing
    pub dash_cooldown: f32,   // time until next dash
    pub dash_dir_x: f32,
    pub dash_dir_z: f32,
    pub dash_charges: u8,     // thunder: max 3 charges
    pub dash_charge_timer: f32, // time until next charge restores
    pub dash_element: u8,    // locked at promotion (0=default, 1=fire, 2=ice, 3=thunder, 4=poison)
    // Stamina (for active skill)
    pub stamina: f32,
    pub max_stamina: f32,
    pub active_skill_cd: f32,  // remaining cooldown
    // Shield
    pub shield_hp: f32,        // absorbs damage before HP
    pub shield_timer: f32,     // time until shield explodes
    // Skill cooldown tracking
    pub skill_timers: Vec<f32>, // last-used time per learned skill index
}

#[derive(Clone)]
pub struct LearnedSkill {
    pub skill_id: u16,
    pub class_id: u8,
    pub level: u8,    // 1~5 (upgradeable)
    pub last_used: f32,
    pub cooldown_remaining: f32, // current CD left
}

// Legacy compat
#[derive(Clone)]
pub struct SkillSlot {
    pub skill_id: u32,
    pub level: u32,
    pub cooldown: f32,
    pub last_used: f32,
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
            xp_to_next: 12,
            attack_cooldown: 0.8,
            last_attack: 0.0,
            attack_damage: 18.0,
            attack_range: 2.5,
            attack_count: 1,
            pierce: 0,
            crit_chance: 0.05,
            lifesteal: 0.0,
            aoe_radius: 0.0,
            magnet_range: 1.5,
            // Elements start at 0, no cap
            fire_level: 0,
            ice_level: 0,
            thunder_level: 0,
            poison_level: 0,
            // Class
            class_id: 0,
            class_tier: 0,
            learned_skills: Vec::new(),
            // Legacy
            promoted: false,
            promoted_element: 0,
            // Movement
            dir_x: 0.0,
            dir_z: 0.0,
            moving: false,
            invuln_timer: 0.0,
            // Dash
            dash_timer: 0.0,
            dash_cooldown: 0.0,
            dash_dir_x: 0.0,
            dash_dir_z: 0.0,
            dash_charges: 3,
            dash_charge_timer: 0.0,
            dash_element: 0,
            // Stamina
            stamina: 100.0,
            max_stamina: 100.0,
            active_skill_cd: 0.0,
            shield_hp: 0.0,
            shield_timer: 0.0,
            skill_timers: Vec::new(),
        }
    }

    pub fn update(&mut self, dt: f32) {
        if self.invuln_timer > 0.0 { self.invuln_timer -= dt; }
        if self.dash_cooldown > 0.0 { self.dash_cooldown -= dt; }
        if self.active_skill_cd > 0.0 { self.active_skill_cd -= dt; }
        if self.shield_timer > 0.0 { self.shield_timer -= dt; }

        // Thunder dash charge recovery (1 charge per 1.5s)
        if self.dash_element == 3 && self.dash_charges < 3 {
            self.dash_charge_timer += dt;
            if self.dash_charge_timer >= 1.5 {
                self.dash_charge_timer = 0.0;
                self.dash_charges += 1;
            }
        }

        // Stamina regen (8/s base, 12/s if promoted)
        let regen = if self.class_tier > 0 { 12.0 } else { 8.0 };
        self.stamina = (self.stamina + regen * dt).min(self.max_stamina);

        // Dashing: fast movement + invulnerable
        if self.dash_timer > 0.0 {
            self.dash_timer -= dt;
            let elem = self.dash_element;
            match elem {
                1 => {
                    // 🔥 Blink: instant teleport (no gradual movement)
                    // Already teleported in try_dash, just wait out timer
                }
                4 => {
                    // ☠️ Smoke: smooth fast movement while invuln
                    let smoke_speed = 18.0;
                    self.x += self.dash_dir_x * smoke_speed * dt;
                    self.z += self.dash_dir_z * smoke_speed * dt;
                    self.invuln_timer = 0.1;
                }
                3 => {
                    // ⚡ Triple Dash: fast short burst
                    let dash_speed = 30.0;
                    self.x += self.dash_dir_x * dash_speed * dt;
                    self.z += self.dash_dir_z * dash_speed * dt;
                    self.invuln_timer = 0.05;
                }
                _ => {
                    // Default / Ice doesn't dash (passive speed)
                    let dash_speed = 25.0;
                    self.x += self.dash_dir_x * dash_speed * dt;
                    self.z += self.dash_dir_z * dash_speed * dt;
                    self.invuln_timer = 0.1;
                }
            }
        } else if self.moving {
            let mut spd = self.speed;
            // ❄️ Ice Skate: passive speed boost
            if self.dash_element == 2 {
                spd *= 1.4;
            }
            self.x += self.dir_x * spd * dt;
            self.z += self.dir_z * spd * dt;
        }
    }

    /// Returns dash type: 0=normal, 1=blink(fire), 2=skate(ice), 3=triple(thunder), 4=smoke(poison)
    pub fn try_dash(&mut self) -> u8 {
        let elem = if self.class_tier > 0 { self.dash_element } else { 0 };

        // Ice: no dash, passive speed instead
        if elem == 2 { return 0; }

        if self.dash_cooldown > 0.0 { return 0; }

        // Set direction
        if self.moving {
            self.dash_dir_x = self.dir_x;
            self.dash_dir_z = self.dir_z;
        } else if self.dash_dir_x == 0.0 && self.dash_dir_z == 0.0 {
            self.dash_dir_z = -1.0;
        }

        match elem {
            1 => {
                // 🔥 Blink: instant teleport 3 units forward
                let blink_dist = 3.0;
                self.x += self.dash_dir_x * blink_dist;
                self.z += self.dash_dir_z * blink_dist;
                self.dash_timer = 0.05; // brief flash
                self.dash_cooldown = 3.0;
                self.invuln_timer = 0.1;
                1
            }
            3 => {
                // ⚡ Triple Dash: charge-based (3 charges, no CD between uses)
                if self.dash_charges == 0 { return 0; }
                self.dash_charges -= 1;
                self.dash_timer = 0.08;
                self.dash_cooldown = 0.15; // tiny gap between chains
                self.invuln_timer = 0.1;
                3
            }
            4 => {
                // ☠️ Smoke: long invuln movement
                self.dash_timer = 0.4; // longer duration
                self.dash_cooldown = 4.0; // longer CD
                self.invuln_timer = 0.5; // full invuln during smoke
                4
            }
            _ => {
                // Default dash
                self.dash_timer = 0.15;
                self.dash_cooldown = 2.0;
                self.invuln_timer = 0.2;
                5 // normal
            }
        }
    }

    pub fn is_dashing(&self) -> bool {
        self.dash_timer > 0.0
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
        // Shield absorbs damage first
        if self.shield_hp > 0.0 {
            if self.shield_hp >= amount {
                self.shield_hp -= amount;
                self.invuln_timer = 0.3; // brief invuln even when shield absorbs
                return;
            } else {
                let remaining = amount - self.shield_hp;
                self.shield_hp = 0.0;
                self.hp -= remaining;
            }
        } else {
            self.hp -= amount;
        }
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
            self.xp_to_next = 12 + self.level * 5 + (self.level * self.level) / 4; // mild curve
            return true;
        }
        false
    }

    // === Element System (cap based on class tier) ===
    pub fn element_cap(&self) -> u8 {
        match self.class_tier {
            0 => 4,   // pre-promotion: max 4 total orbs
            1 => 8,   // post-1st: max 8
            2 => 12,  // post-2nd: max 12
            3 => 16,  // post-3rd: max 16
            _ => 4,
        }
    }

    pub fn add_element(&mut self, element: u8) -> bool {
        if self.total_elements() >= self.element_cap() {
            return false; // at cap
        }
        match element {
            1 => self.fire_level += 1,
            2 => self.ice_level += 1,
            3 => self.thunder_level += 1,
            4 => self.poison_level += 1,
            _ => return false,
        }
        true
    }

    pub fn total_elements(&self) -> u8 {
        self.fire_level + self.ice_level + self.thunder_level + self.poison_level
    }

    pub fn dominant_element(&self) -> u8 {
        if self.total_elements() == 0 { return 0; }
        let levels = [(self.fire_level, 1u8), (self.ice_level, 2), (self.thunder_level, 3), (self.poison_level, 4)];
        levels.iter().filter(|(lv, _)| *lv > 0).max_by_key(|(lv, _)| lv).map(|(_, e)| *e).unwrap_or(0)
    }

    // === Class Promotion ===
    pub fn promote_to(&mut self, class_id: u8) {
        if let Some(class) = class_by_id(class_id) {
            self.class_id = class_id;
            self.class_tier = class.tier;
            self.promoted = true;
            self.promoted_element = self.dominant_element() as u32;

            // Learn all 3 skills of the class at level 1
            let skills = skills_for_class(class_id);
            for skill in skills {
                if !self.learned_skills.iter().any(|s| s.skill_id == skill.id) {
                    self.learned_skills.push(LearnedSkill {
                        skill_id: skill.id,
                        class_id,
                        level: 1,
                        last_used: -999.0,
                        cooldown_remaining: 0.0,
                    });
                }
            }

            // Lock dash element to class's primary element
            // If tied, use player's highest element level
            let mut max_req = 0u8;
            let mut primary = 0u8;
            if class.req_fire > max_req { max_req = class.req_fire; primary = 1; }
            if class.req_ice > max_req { max_req = class.req_ice; primary = 2; }
            if class.req_thunder > max_req { max_req = class.req_thunder; primary = 3; }
            if class.req_poison > max_req { max_req = class.req_poison; primary = 4; }
            // If no clear winner (all req same), use player's dominant
            if primary == 0 || max_req == 0 {
                primary = self.dominant_element();
            }
            if primary > 0 { self.dash_element = primary; }

            // Stat boost on promotion
            match class.tier {
                1 => {
                    self.attack_damage += 15.0;
                    self.max_hp += 50.0;
                    self.hp += 50.0;
                    self.speed += 0.5;
                }
                2 => {
                    self.attack_damage += 25.0;
                    self.max_hp += 80.0;
                    self.hp += 80.0;
                    self.speed += 0.3;
                    self.crit_chance += 0.1;
                }
                3 => {
                    self.attack_damage += 40.0;
                    self.max_hp += 120.0;
                    self.hp += 120.0;
                    self.crit_chance += 0.15;
                    self.aoe_radius += 2.0;
                }
                _ => {}
            }
        }
    }

    /// Upgrade a specific skill (increase level)
    pub fn upgrade_skill(&mut self, skill_id: u16) {
        if let Some(skill) = self.learned_skills.iter_mut().find(|s| s.skill_id == skill_id) {
            skill.level = (skill.level + 1).min(5);
        }
    }

    /// Check if player has a specific skill
    pub fn has_skill_id(&self, skill_id: u16) -> bool {
        self.learned_skills.iter().any(|s| s.skill_id == skill_id)
    }

    /// Get skill level
    pub fn get_skill_level(&self, skill_id: u16) -> u8 {
        self.learned_skills.iter().find(|s| s.skill_id == skill_id).map(|s| s.level).unwrap_or(0)
    }

    // === Legacy compat for old skill system ===
    pub fn skills(&self) -> Vec<SkillSlot> {
        // Convert element levels to old-style SkillSlots for renderer compat
        let mut slots = Vec::new();
        if self.fire_level > 0 {
            slots.push(SkillSlot { skill_id: 0, level: self.fire_level as u32, cooldown: 0.0, last_used: 0.0 });
        }
        if self.ice_level > 0 {
            slots.push(SkillSlot { skill_id: 4, level: self.ice_level as u32, cooldown: 0.0, last_used: 0.0 });
        }
        if self.thunder_level > 0 {
            slots.push(SkillSlot { skill_id: 2, level: self.thunder_level as u32, cooldown: 0.0, last_used: 0.0 });
        }
        if self.poison_level > 0 {
            slots.push(SkillSlot { skill_id: 7, level: self.poison_level as u32, cooldown: 0.0, last_used: 0.0 });
        }
        slots
    }

    pub fn skill_level(&self, skill_id: u32) -> u32 {
        match skill_id {
            0 => self.fire_level as u32,
            4 => self.ice_level as u32,
            2 => self.thunder_level as u32,
            7 => self.poison_level as u32,
            _ => 0,
        }
    }

    pub fn learn_skill(&mut self, skill_id: u32) {
        // Legacy: map old skill_id to element
        match skill_id {
            0 => self.fire_level += 1,
            4 => self.ice_level += 1,
            2 => self.thunder_level += 1,
            7 => self.poison_level += 1,
            _ => {}
        }
    }
}
