/// Skill definitions for all 45 classes (135 skills total)

#[derive(Clone, Copy, PartialEq)]
pub enum SkillType {
    Active,
    Passive,
    Ultimate,
}

#[derive(Clone, Copy, PartialEq)]
pub enum Element {
    None,
    Fire,
    Ice,
    Thunder,
    Poison,
    Multi, // hybrid skills
}

#[derive(Clone, Copy)]
pub struct SkillDef {
    pub id: u16,
    pub class_id: u8,
    pub name: &'static str,
    pub skill_type: SkillType,
    pub element: Element,
    pub damage_mult: f32,   // multiplier of player ATK
    pub cooldown: f32,      // seconds (0 = passive)
    pub range: f32,         // tiles
    pub description: &'static str,
}

// Range constants
pub const RANGE_S: f32 = 2.0;
pub const RANGE_M: f32 = 4.0;
pub const RANGE_L: f32 = 6.0;
pub const RANGE_XL: f32 = 10.0;

/// Get all skills for a given class
pub fn skills_for_class(class_id: u8) -> &'static [SkillDef] {
    match class_id {
        1 => &SKILLS_C01,
        2 => &SKILLS_C02,
        3 => &SKILLS_C03,
        4 => &SKILLS_C04,
        5 => &SKILLS_C05,
        6 => &SKILLS_C06,
        7 => &SKILLS_C07,
        8 => &SKILLS_C08,
        9 => &SKILLS_C09,
        10 => &SKILLS_C10,
        11 => &SKILLS_C11,
        12 => &SKILLS_C12,
        13 => &SKILLS_C13,
        14 => &SKILLS_C14,
        15 => &SKILLS_C15,
        16 => &SKILLS_C16,
        17 => &SKILLS_C17,
        18 => &SKILLS_C18,
        19 => &SKILLS_C19,
        20 => &SKILLS_C20,
        21 => &SKILLS_C21,
        22 => &SKILLS_C22,
        23 => &SKILLS_C23,
        24 => &SKILLS_C24,
        25 => &SKILLS_C25,
        26 => &SKILLS_C26,
        27 => &SKILLS_C27,
        28 => &SKILLS_C28,
        29 => &SKILLS_C29,
        30 => &SKILLS_C30,
        31 => &SKILLS_C31,
        32 => &SKILLS_C32,
        33 => &SKILLS_C33,
        34 => &SKILLS_C34,
        35 => &SKILLS_C35,
        36 => &SKILLS_C36,
        37 => &SKILLS_C37,
        38 => &SKILLS_C38,
        39 => &SKILLS_C39,
        40 => &SKILLS_C40,
        41 => &SKILLS_C41,
        42 => &SKILLS_C42,
        43 => &SKILLS_C43,
        44 => &SKILLS_C44,
        45 => &SKILLS_C45,
        _ => &[],
    }
}

// === 1st Class (C01~C15) ===

pub static SKILLS_C01: [SkillDef; 3] = [
    SkillDef { id: 1, class_id: 1, name: "Flame Slash", skill_type: SkillType::Active, element: Element::Fire, damage_mult: 1.5, cooldown: 1.5, range: RANGE_S, description: "Fire cone, ignites 3s" },
    SkillDef { id: 2, class_id: 1, name: "Lava Floor", skill_type: SkillType::Active, element: Element::Fire, damage_mult: 0.4, cooldown: 8.0, range: RANGE_M, description: "Lava zone 3s" },
    SkillDef { id: 3, class_id: 1, name: "Ignite Aura", skill_type: SkillType::Passive, element: Element::Fire, damage_mult: 0.1, cooldown: 0.0, range: RANGE_S, description: "Nearby enemies burn" },
];

pub static SKILLS_C02: [SkillDef; 3] = [
    SkillDef { id: 4, class_id: 2, name: "Frost Nova", skill_type: SkillType::Active, element: Element::Ice, damage_mult: 1.2, cooldown: 5.0, range: RANGE_M, description: "Ice burst, 50% slow 3s" },
    SkillDef { id: 5, class_id: 2, name: "Ice Wall", skill_type: SkillType::Active, element: Element::Ice, damage_mult: 0.8, cooldown: 10.0, range: RANGE_M, description: "Barrier 4s, shatters" },
    SkillDef { id: 6, class_id: 2, name: "Shatter", skill_type: SkillType::Passive, element: Element::Ice, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Frozen take 2x crit" },
];

pub static SKILLS_C03: [SkillDef; 3] = [
    SkillDef { id: 7, class_id: 3, name: "Chain Lightning", skill_type: SkillType::Active, element: Element::Thunder, damage_mult: 1.0, cooldown: 2.0, range: RANGE_L, description: "Bolt chains to 3" },
    SkillDef { id: 8, class_id: 3, name: "Thunder Dash", skill_type: SkillType::Active, element: Element::Thunder, damage_mult: 1.3, cooldown: 6.0, range: RANGE_M, description: "Dash + 50% speed 2s" },
    SkillDef { id: 9, class_id: 3, name: "Overcharge", skill_type: SkillType::Passive, element: Element::Thunder, damage_mult: 3.0, cooldown: 0.0, range: 0.0, description: "Every 5th hit: 3x + stun" },
];

pub static SKILLS_C04: [SkillDef; 3] = [
    SkillDef { id: 10, class_id: 4, name: "Toxic Cloud", skill_type: SkillType::Active, element: Element::Poison, damage_mult: 0.3, cooldown: 4.0, range: RANGE_M, description: "Poison cloud 4s, -20% ATK" },
    SkillDef { id: 11, class_id: 4, name: "Plague Spread", skill_type: SkillType::Passive, element: Element::Poison, damage_mult: 0.0, cooldown: 0.0, range: RANGE_L, description: "Kill spreads poison to 2" },
    SkillDef { id: 12, class_id: 4, name: "Venom Strike", skill_type: SkillType::Active, element: Element::Poison, damage_mult: 1.3, cooldown: 2.0, range: RANGE_S, description: "Stack poison (max 5)" },
];

pub static SKILLS_C05: [SkillDef; 3] = [
    SkillDef { id: 13, class_id: 5, name: "Steam Burst", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.4, cooldown: 3.0, range: RANGE_M, description: "Explode + slow + push" },
    SkillDef { id: 14, class_id: 5, name: "Pressure Valve", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.0, cooldown: 8.0, range: RANGE_L, description: "Line: burn + freeze edges" },
    SkillDef { id: 15, class_id: 5, name: "Thermal Shock", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.5, cooldown: 0.0, range: 0.0, description: "Fire+ice in 2s = +50% dmg" },
];

pub static SKILLS_C06: [SkillDef; 3] = [
    SkillDef { id: 16, class_id: 6, name: "Plasma Bolt", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.6, cooldown: 1.8, range: RANGE_L, description: "Projectile, AoE on hit" },
    SkillDef { id: 17, class_id: 6, name: "Arc Flash", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.8, cooldown: 6.0, range: RANGE_M, description: "Chain 4, each ignites" },
    SkillDef { id: 18, class_id: 6, name: "Ion Storm", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.5, cooldown: 0.0, range: RANGE_S, description: "Crits = mini explosion" },
];

pub static SKILLS_C07: [SkillDef; 3] = [
    SkillDef { id: 19, class_id: 7, name: "Hellfire", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.2, cooldown: 3.0, range: RANGE_M, description: "Fire ring + poison center" },
    SkillDef { id: 20, class_id: 7, name: "Toxic Flame", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Fire DOT = also poison" },
    SkillDef { id: 21, class_id: 7, name: "Witch's Brew", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.5, cooldown: 12.0, range: RANGE_L, description: "Cauldron 5s + heal 2%/s" },
];

pub static SKILLS_C08: [SkillDef; 3] = [
    SkillDef { id: 22, class_id: 8, name: "Aurora Slash", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.4, cooldown: 2.0, range: RANGE_S, description: "Ice+thunder arc, 30% freeze" },
    SkillDef { id: 23, class_id: 8, name: "Flash Freeze", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.0, cooldown: 8.0, range: RANGE_M, description: "Freeze all 2s + shatter" },
    SkillDef { id: 24, class_id: 8, name: "Static Field", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: RANGE_M, description: "Slowed take +25% lightning" },
];

pub static SKILLS_C09: [SkillDef; 3] = [
    SkillDef { id: 25, class_id: 9, name: "Frostbite Venom", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.1, cooldown: 3.0, range: RANGE_M, description: "Slow 40% + 3 poison stacks" },
    SkillDef { id: 26, class_id: 9, name: "Glacial Acid", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.2, cooldown: 7.0, range: RANGE_M, description: "Zone: -30% DEF + DOT 4s" },
    SkillDef { id: 27, class_id: 9, name: "Numbing Cold", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Poisoned = -20% speed/stack" },
];

pub static SKILLS_C10: [SkillDef; 3] = [
    SkillDef { id: 28, class_id: 10, name: "Electrolysis", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.2, cooldown: 2.5, range: RANGE_M, description: "Split into 2 poison orbs" },
    SkillDef { id: 29, class_id: 10, name: "Acid Lightning", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.9, cooldown: 6.0, range: RANGE_L, description: "Chain 5 + 2 poison each" },
    SkillDef { id: 30, class_id: 10, name: "Reactive Surge", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.6, cooldown: 0.0, range: 0.0, description: "Poison tick = 20% lightning" },
];

pub static SKILLS_C11: [SkillDef; 3] = [
    SkillDef { id: 31, class_id: 11, name: "Tri-Slash", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.8, cooldown: 2.0, range: RANGE_S, description: "3 rapid hits cycling elem" },
    SkillDef { id: 32, class_id: 11, name: "Element Shift", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Match weakness = 2x dmg" },
    SkillDef { id: 33, class_id: 11, name: "Prism Guard", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.0, cooldown: 10.0, range: RANGE_S, description: "Shield, explodes tri-elem" },
];

pub static SKILLS_C12: [SkillDef; 3] = [
    SkillDef { id: 34, class_id: 12, name: "Frozen Miasma", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.25, cooldown: 4.0, range: RANGE_M, description: "Ice+poison cloud 3s" },
    SkillDef { id: 35, class_id: 12, name: "Ice Blight", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Freeze end = 3 poison" },
    SkillDef { id: 36, class_id: 12, name: "Cold Snap", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.6, cooldown: 8.0, range: RANGE_L, description: "Freeze all poisoned 2s" },
];

pub static SKILLS_C13: [SkillDef; 3] = [
    SkillDef { id: 37, class_id: 13, name: "Toxic Bolt", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.1, cooldown: 2.0, range: RANGE_L, description: "Lightning + 2 poison" },
    SkillDef { id: 38, class_id: 13, name: "Storm Venom", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.0, cooldown: 7.0, range: RANGE_L, description: "Chain 4, each +4 poison" },
    SkillDef { id: 39, class_id: 13, name: "Paralyze", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "5+ poison = stun 1s/3s" },
];

pub static SKILLS_C14: [SkillDef; 3] = [
    SkillDef { id: 40, class_id: 14, name: "Vile Gust", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.3, cooldown: 3.0, range: RANGE_M, description: "Wind + poison + ice shards" },
    SkillDef { id: 41, class_id: 14, name: "Corrosive Storm", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.35, cooldown: 8.0, range: RANGE_L, description: "AoE 3s: -5% DEF/s" },
    SkillDef { id: 42, class_id: 14, name: "Decay Field", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: RANGE_M, description: "Nearby lose 1% maxHP/s" },
];

pub static SKILLS_C15: [SkillDef; 3] = [
    SkillDef { id: 43, class_id: 15, name: "Random Element", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.4, cooldown: 2.0, range: RANGE_M, description: "Random elem each cast" },
    SkillDef { id: 44, class_id: 15, name: "Chaos Orb", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.5, cooldown: 5.0, range: RANGE_L, description: "Orbiting orb 10s" },
    SkillDef { id: 45, class_id: 15, name: "Adaptive Shield", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "+30% resist last hit elem" },
];

// === 2nd Class (C16~C35) ===

pub static SKILLS_C16: [SkillDef; 3] = [
    SkillDef { id: 46, class_id: 16, name: "Meteor Strike", skill_type: SkillType::Active, element: Element::Fire, damage_mult: 3.0, cooldown: 6.0, range: RANGE_L, description: "Huge fire explosion + lava" },
    SkillDef { id: 47, class_id: 16, name: "Blazing Fury", skill_type: SkillType::Passive, element: Element::Fire, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "<50% HP: +50% fire, +30% aspd" },
    SkillDef { id: 48, class_id: 16, name: "Inferno Wave", skill_type: SkillType::Active, element: Element::Fire, damage_mult: 2.0, cooldown: 3.0, range: RANGE_M, description: "Fire wave, ignite 5s" },
];

pub static SKILLS_C17: [SkillDef; 3] = [
    SkillDef { id: 49, class_id: 17, name: "Eruption Bolt", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.5, cooldown: 4.0, range: RANGE_L, description: "Lava+lightning pillar, stun 1s" },
    SkillDef { id: 50, class_id: 17, name: "Magma Chain", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.2, cooldown: 2.5, range: RANGE_L, description: "Chain 4, fire+thunder" },
    SkillDef { id: 51, class_id: 17, name: "Volcanic Charge", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.4, cooldown: 0.0, range: 0.0, description: "Dash leaves fire trail 3s" },
];

pub static SKILLS_C18: [SkillDef; 3] = [
    SkillDef { id: 52, class_id: 18, name: "Absolute Frost", skill_type: SkillType::Active, element: Element::Ice, damage_mult: 2.0, cooldown: 8.0, range: RANGE_XL, description: "Freeze ALL on screen 2s" },
    SkillDef { id: 53, class_id: 18, name: "Ice Armor", skill_type: SkillType::Passive, element: Element::Ice, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "+40% DEF, attackers slowed" },
    SkillDef { id: 54, class_id: 18, name: "Glacial Spear", skill_type: SkillType::Active, element: Element::Ice, damage_mult: 2.2, cooldown: 3.0, range: RANGE_L, description: "Pierce through, 60% freeze" },
];

pub static SKILLS_C19: [SkillDef; 3] = [
    SkillDef { id: 55, class_id: 19, name: "Permafrost Zone", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.4, cooldown: 7.0, range: RANGE_M, description: "Zone 5s: 60% slow + poison" },
    SkillDef { id: 56, class_id: 19, name: "Frozen Contagion", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: RANGE_M, description: "Poison spreads to frozen" },
    SkillDef { id: 57, class_id: 19, name: "Cryo Venom Burst", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.8, cooldown: 4.0, range: RANGE_M, description: "Frozen take 3x poison" },
];

pub static SKILLS_C20: [SkillDef; 3] = [
    SkillDef { id: 58, class_id: 20, name: "Divine Bolt", skill_type: SkillType::Active, element: Element::Thunder, damage_mult: 2.5, cooldown: 1.2, range: RANGE_L, description: "Guaranteed crit if <50% HP" },
    SkillDef { id: 59, class_id: 20, name: "Lightning Field", skill_type: SkillType::Active, element: Element::Thunder, damage_mult: 1.0, cooldown: 6.0, range: RANGE_L, description: "Field 4s: 3 bolts/s" },
    SkillDef { id: 60, class_id: 20, name: "Godspeed", skill_type: SkillType::Passive, element: Element::Thunder, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "+80% aspd, +40% move, chain+1" },
];

pub static SKILLS_C21: [SkillDef; 3] = [
    SkillDef { id: 61, class_id: 21, name: "Plasma Cannon", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.8, cooldown: 3.0, range: RANGE_L, description: "Beam penetrates all" },
    SkillDef { id: 62, class_id: 21, name: "Fusion Blast", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 3.5, cooldown: 8.0, range: RANGE_L, description: "350% ATK, strips DEF 5s" },
    SkillDef { id: 63, class_id: 21, name: "Overload", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "10th hit = free Plasma Cannon" },
];

pub static SKILLS_C22: [SkillDef; 3] = [
    SkillDef { id: 64, class_id: 22, name: "Pandemic Burst", skill_type: SkillType::Active, element: Element::Poison, damage_mult: 1.5, cooldown: 4.0, range: RANGE_L, description: "Detonate all poison stacks" },
    SkillDef { id: 65, class_id: 22, name: "Venom Mastery", skill_type: SkillType::Passive, element: Element::Poison, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Uncapped stacks, +20%/5stk" },
    SkillDef { id: 66, class_id: 22, name: "Miasma Lord", skill_type: SkillType::Active, element: Element::Poison, damage_mult: 0.6, cooldown: 8.0, range: RANGE_XL, description: "Giant cloud 6s, half screen" },
];

pub static SKILLS_C23: [SkillDef; 3] = [
    SkillDef { id: 67, class_id: 23, name: "Frozen Venom", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.6, cooldown: 3.0, range: RANGE_M, description: "Freeze 1.5s + 4 poison" },
    SkillDef { id: 68, class_id: 23, name: "Permafrost Poison", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Slowed = 2x poison tick" },
    SkillDef { id: 69, class_id: 23, name: "Glacier Tomb", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.0, cooldown: 10.0, range: RANGE_M, description: "Ice encase 3s + poison burst" },
];

pub static SKILLS_C24: [SkillDef; 3] = [
    SkillDef { id: 70, class_id: 24, name: "Thermal Explosion", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 3.0, cooldown: 5.0, range: RANGE_L, description: "Radius scales with levels" },
    SkillDef { id: 71, class_id: 24, name: "Core Meltdown", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 5.0, cooldown: 15.0, range: RANGE_XL, description: "Full screen, self -20% HP" },
    SkillDef { id: 72, class_id: 24, name: "Reactor Shield", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Absorb dmg → next +100%" },
];

pub static SKILLS_C25: [SkillDef; 3] = [
    SkillDef { id: 73, class_id: 25, name: "Nova Shot", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.0, cooldown: 2.0, range: RANGE_L, description: "Ranged blast, M radius" },
    SkillDef { id: 74, class_id: 25, name: "Overcharge Cannon", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 4.0, cooldown: 8.0, range: RANGE_XL, description: "Channel 1s → beam" },
    SkillDef { id: 75, class_id: 25, name: "Rapid Fire", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "3 skills in 5s = no CD next" },
];

pub static SKILLS_C26: [SkillDef; 3] = [
    SkillDef { id: 76, class_id: 26, name: "Summon Imp", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.6, cooldown: 6.0, range: 0.0, description: "Imp minion 30s" },
    SkillDef { id: 77, class_id: 26, name: "Hellgate", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.4, cooldown: 12.0, range: RANGE_M, description: "Portal: 3 mini-demons 5s" },
    SkillDef { id: 78, class_id: 26, name: "Demon Pact", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Per summon: +10% dmg" },
];

pub static SKILLS_C27: [SkillDef; 3] = [
    SkillDef { id: 79, class_id: 27, name: "Time Chill", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.0, cooldown: 8.0, range: RANGE_L, description: "80% slow 3s → frozen 1s" },
    SkillDef { id: 80, class_id: 27, name: "Zero Point", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.5, cooldown: 12.0, range: RANGE_M, description: "Frozen take 4x for 2s" },
    SkillDef { id: 81, class_id: 27, name: "Entropy Field", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 1.0, cooldown: 0.0, range: 0.0, description: "Frozen shatter = AoE on death" },
];

pub static SKILLS_C28: [SkillDef; 3] = [
    SkillDef { id: 82, class_id: 28, name: "Bio Frost", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.4, cooldown: 3.0, range: RANGE_M, description: "-40% DEF 4s + slow" },
    SkillDef { id: 83, class_id: 28, name: "Weakening Mist", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.0, cooldown: 7.0, range: RANGE_L, description: "Zone: +50% dmg taken 4s" },
    SkillDef { id: 84, class_id: 28, name: "Fragile", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "<30% HP enemies take 3x" },
];

pub static SKILLS_C29: [SkillDef; 3] = [
    SkillDef { id: 85, class_id: 29, name: "Acid Rain", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.4, cooldown: 5.0, range: RANGE_L, description: "Rain 4s: DOT + poison/s" },
    SkillDef { id: 86, class_id: 29, name: "Electric Dissolution", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.7, cooldown: 3.0, range: RANGE_M, description: "Remove buffs + 3 poison" },
    SkillDef { id: 87, class_id: 29, name: "Catalytic Reaction", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.8, cooldown: 0.0, range: RANGE_S, description: "Lightning+poisoned = AoE" },
];

pub static SKILLS_C30: [SkillDef; 3] = [
    SkillDef { id: 88, class_id: 30, name: "Prism Blade", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.8, cooldown: 1.5, range: RANGE_S, description: "Cycle fire/ice/thunder" },
    SkillDef { id: 89, class_id: 30, name: "Elemental Burst", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.5, cooldown: 6.0, range: RANGE_M, description: "3 simultaneous explosions" },
    SkillDef { id: 90, class_id: 30, name: "Resonance", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 2.0, cooldown: 0.0, range: 0.0, description: "All 3 elem in 4s = blast" },
];

pub static SKILLS_C31: [SkillDef; 3] = [
    SkillDef { id: 91, class_id: 31, name: "Frozen Epidemic", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.8, cooldown: 5.0, range: RANGE_L, description: "Frozen spread poison to 3" },
    SkillDef { id: 92, class_id: 31, name: "Cryo Contagion", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 1.5, cooldown: 0.0, range: 0.0, description: "Poison kill = freeze corpse" },
    SkillDef { id: 93, class_id: 31, name: "Winter Plague", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.0, cooldown: 10.0, range: RANGE_XL, description: "All: slow + 3 poison + dmg" },
];

pub static SKILLS_C32: [SkillDef; 3] = [
    SkillDef { id: 94, class_id: 32, name: "Decay Chain", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.0, cooldown: 2.5, range: RANGE_L, description: "Chain 6: -10% HP + poison" },
    SkillDef { id: 95, class_id: 32, name: "Corrosive Bolt", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.0, cooldown: 4.0, range: RANGE_L, description: "DEF → 0 for 3s" },
    SkillDef { id: 96, class_id: 32, name: "Decompose", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Chain +20%/bounce, poison+2" },
];

pub static SKILLS_C33: [SkillDef; 3] = [
    SkillDef { id: 97, class_id: 33, name: "Chaos Ritual", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 4.0, cooldown: 5.0, range: RANGE_L, description: "Random: 400% single OR 150% all" },
    SkillDef { id: 98, class_id: 33, name: "Spirit Storm", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.0, cooldown: 8.0, range: RANGE_XL, description: "Storm 5s, random bolts 5/s" },
    SkillDef { id: 99, class_id: 33, name: "Madness", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "+5% per elem used in 10s" },
];

pub static SKILLS_C34: [SkillDef; 3] = [
    SkillDef { id: 100, class_id: 34, name: "Element Cycle", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.0, cooldown: 2.0, range: RANGE_M, description: "4 rapid hits, all elements" },
    SkillDef { id: 101, class_id: 34, name: "Primordial Shield", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.5, cooldown: 10.0, range: 0.0, description: "Immune 3s, reflect 50%" },
    SkillDef { id: 102, class_id: 34, name: "Harmony", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Balanced elems = +30% all" },
];

pub static SKILLS_C35: [SkillDef; 3] = [
    SkillDef { id: 103, class_id: 35, name: "Awakening Pulse", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.5, cooldown: 3.0, range: RANGE_L, description: "Dominant elem + heal 5%" },
    SkillDef { id: 104, class_id: 35, name: "Elemental Mastery", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Dominant: +50% dmg, -30% CD" },
    SkillDef { id: 105, class_id: 35, name: "Transcend", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 4.0, cooldown: 15.0, range: RANGE_XL, description: "400% dominant, orbs→dmg 5s" },
];

// === 3rd Class (C36~C45) — with Ultimates ===

pub static SKILLS_C36: [SkillDef; 3] = [
    SkillDef { id: 106, class_id: 36, name: "Phoenix Wing", skill_type: SkillType::Active, element: Element::Fire, damage_mult: 2.5, cooldown: 2.0, range: RANGE_M, description: "Fire sweep, heal 3%/hit" },
    SkillDef { id: 107, class_id: 36, name: "Eternal Flame", skill_type: SkillType::Passive, element: Element::Fire, damage_mult: 5.0, cooldown: 0.0, range: 0.0, description: "On death: revive 50% + explode" },
    SkillDef { id: 108, class_id: 36, name: "Rebirth Inferno", skill_type: SkillType::Ultimate, element: Element::Fire, damage_mult: 2.0, cooldown: 60.0, range: RANGE_XL, description: "Phoenix form 10s: fly, immune, fire rain" },
];

pub static SKILLS_C37: [SkillDef; 3] = [
    SkillDef { id: 109, class_id: 37, name: "Frost Dominion", skill_type: SkillType::Active, element: Element::Ice, damage_mult: 2.2, cooldown: 3.0, range: RANGE_L, description: "All on screen slowed 40%" },
    SkillDef { id: 110, class_id: 37, name: "Crystal Prison", skill_type: SkillType::Active, element: Element::Ice, damage_mult: 0.0, cooldown: 8.0, range: RANGE_M, description: "Freeze boss 3s / normal 5s" },
    SkillDef { id: 111, class_id: 37, name: "Absolute Blizzard", skill_type: SkillType::Ultimate, element: Element::Ice, damage_mult: 1.0, cooldown: 60.0, range: RANGE_XL, description: "10s: all frozen + 100% ATK/s" },
];

pub static SKILLS_C38: [SkillDef; 3] = [
    SkillDef { id: 112, class_id: 38, name: "God's Wrath", skill_type: SkillType::Active, element: Element::Thunder, damage_mult: 3.0, cooldown: 1.0, range: RANGE_L, description: "Guaranteed crit, chain 2" },
    SkillDef { id: 113, class_id: 38, name: "Thunder Realm", skill_type: SkillType::Passive, element: Element::Thunder, damage_mult: 0.5, cooldown: 0.0, range: RANGE_L, description: "Permanent field: 50% ATK/s" },
    SkillDef { id: 114, class_id: 38, name: "Divine Thunder", skill_type: SkillType::Ultimate, element: Element::Thunder, damage_mult: 20.0, cooldown: 45.0, range: RANGE_XL, description: "2000% strongest, chains ALL 50%" },
];

pub static SKILLS_C39: [SkillDef; 3] = [
    SkillDef { id: 115, class_id: 39, name: "Patient Zero", skill_type: SkillType::Active, element: Element::Poison, damage_mult: 2.0, cooldown: 5.0, range: RANGE_L, description: "Infected pass poison on contact" },
    SkillDef { id: 116, class_id: 39, name: "Mutation", skill_type: SkillType::Passive, element: Element::Poison, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "10 stacks = super-poison 3x" },
    SkillDef { id: 117, class_id: 39, name: "Viral Apocalypse", skill_type: SkillType::Ultimate, element: Element::Poison, damage_mult: 0.0, cooldown: 60.0, range: RANGE_XL, description: "All get 20 stacks, chain react" },
];

pub static SKILLS_C40: [SkillDef; 3] = [
    SkillDef { id: 118, class_id: 40, name: "Gravity Well", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.5, cooldown: 5.0, range: RANGE_L, description: "Pull all, 150% ATK/s 3s" },
    SkillDef { id: 119, class_id: 40, name: "Matter Collapse", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 3.5, cooldown: 8.0, range: RANGE_M, description: "Implosion, can't move 2s" },
    SkillDef { id: 120, class_id: 40, name: "Singularity", skill_type: SkillType::Ultimate, element: Element::Multi, damage_mult: 8.0, cooldown: 60.0, range: RANGE_XL, description: "Black hole 8s + 800% end" },
];

pub static SKILLS_C41: [SkillDef; 3] = [
    SkillDef { id: 121, class_id: 41, name: "Solar Beam", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.8, cooldown: 3.0, range: RANGE_XL, description: "Penetrating beam" },
    SkillDef { id: 122, class_id: 41, name: "Corona", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.8, cooldown: 0.0, range: RANGE_M, description: "Permanent fire+lightning aura" },
    SkillDef { id: 123, class_id: 41, name: "Solar Flare", skill_type: SkillType::Ultimate, element: Element::Multi, damage_mult: 15.0, cooldown: 50.0, range: RANGE_XL, description: "Screen clear 1500% + blind 3s" },
];

pub static SKILLS_C42: [SkillDef; 3] = [
    SkillDef { id: 124, class_id: 42, name: "Time Fracture", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 0.0, cooldown: 6.0, range: RANGE_L, description: "Freeze time for enemies 3s" },
    SkillDef { id: 125, class_id: 42, name: "Paradox Bolt", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.0, cooldown: 2.0, range: RANGE_L, description: "Reset enemy attack timers" },
    SkillDef { id: 126, class_id: 42, name: "Frozen Lightning", skill_type: SkillType::Ultimate, element: Element::Multi, damage_mult: 1.5, cooldown: 60.0, range: RANGE_XL, description: "Stop ALL 8s + 150% ATK/s" },
];

pub static SKILLS_C43: [SkillDef; 3] = [
    SkillDef { id: 127, class_id: 43, name: "Summon Greater Demon", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 1.5, cooldown: 10.0, range: 0.0, description: "Large demon 60s" },
    SkillDef { id: 128, class_id: 43, name: "Demon Army", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Max 3 summons, each +20%" },
    SkillDef { id: 129, class_id: 43, name: "Demon Gate", skill_type: SkillType::Ultimate, element: Element::Multi, damage_mult: 1.0, cooldown: 60.0, range: RANGE_XL, description: "Hell portal 10s: endless demons" },
];

pub static SKILLS_C44: [SkillDef; 3] = [
    SkillDef { id: 130, class_id: 44, name: "Tri-Force", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.0, cooldown: 2.0, range: RANGE_M, description: "3 element blasts, 200% each" },
    SkillDef { id: 131, class_id: 44, name: "Element Unity", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "3 active = +60% dmg, +30% spd" },
    SkillDef { id: 132, class_id: 44, name: "Prism Apocalypse", skill_type: SkillType::Ultimate, element: Element::Multi, damage_mult: 12.0, cooldown: 60.0, range: RANGE_XL, description: "3 pillars: 1200% + perm +20%" },
];

pub static SKILLS_C45: [SkillDef; 3] = [
    SkillDef { id: 133, class_id: 45, name: "Omni-Element", skill_type: SkillType::Active, element: Element::Multi, damage_mult: 2.5, cooldown: 1.5, range: RANGE_L, description: "All 4 elements, 250% ATK" },
    SkillDef { id: 134, class_id: 45, name: "Creation/Destruction", skill_type: SkillType::Passive, element: Element::Multi, damage_mult: 0.0, cooldown: 0.0, range: 0.0, description: "Kill=heal 5%, hit=+10% ATK 5s" },
    SkillDef { id: 135, class_id: 45, name: "Genesis", skill_type: SkillType::Ultimate, element: Element::Multi, damage_mult: 9.99, cooldown: 90.0, range: RANGE_XL, description: "999% all, reset CDs, full heal" },
];
