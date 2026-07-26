/// Class definitions for 45 classes across 3 tiers

#[derive(Clone, Copy)]
pub struct ClassDef {
    pub id: u8,
    pub name: &'static str,
    pub tier: u8,              // 1, 2, 3
    pub from_class: u8,        // 0 = no prerequisite (tier 1)
    pub req_fire: u8,
    pub req_ice: u8,
    pub req_thunder: u8,
    pub req_poison: u8,
}

/// Check if player meets element requirements for a class
pub fn can_promote_to(class: &ClassDef, fire: u8, ice: u8, thunder: u8, poison: u8, current_class: u8, level: u32) -> bool {
    // Level check
    let level_req = match class.tier {
        1 => 10,
        2 => 25,
        3 => 45,
        _ => 999,
    };
    if level < level_req { return false; }

    // Prerequisite class check
    if class.from_class > 0 && current_class != class.from_class { return false; }

    // Element check
    fire >= class.req_fire && ice >= class.req_ice && thunder >= class.req_thunder && poison >= class.req_poison
}

/// Get available promotions for current state
pub fn available_promotions(fire: u8, ice: u8, thunder: u8, poison: u8, current_class: u8, level: u32) -> Vec<u8> {
    let all = all_classes();
    let target_tier = if current_class == 0 { 1 } else {
        let cur = all.iter().find(|c| c.id == current_class);
        match cur {
            Some(c) => c.tier + 1,
            None => 1,
        }
    };

    all.iter()
        .filter(|c| c.tier == target_tier && can_promote_to(c, fire, ice, thunder, poison, current_class, level))
        .map(|c| c.id)
        .collect()
}

pub fn class_by_id(id: u8) -> Option<&'static ClassDef> {
    ALL_CLASSES.iter().find(|c| c.id == id)
}

pub fn all_classes() -> &'static [ClassDef] {
    &ALL_CLASSES
}

pub static ALL_CLASSES: [ClassDef; 45] = [
    // === 1st Class (C01~C15) ===
    // Pure single element (4)
    ClassDef { id: 1,  name: "Flame Knight",      tier: 1, from_class: 0, req_fire: 3, req_ice: 0, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 2,  name: "Frost Mage",        tier: 1, from_class: 0, req_fire: 0, req_ice: 3, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 3,  name: "Storm Warrior",     tier: 1, from_class: 0, req_fire: 0, req_ice: 0, req_thunder: 3, req_poison: 0 },
    ClassDef { id: 4,  name: "Plague Bearer",     tier: 1, from_class: 0, req_fire: 0, req_ice: 0, req_thunder: 0, req_poison: 3 },
    // Hybrid 2-element (6)
    ClassDef { id: 5,  name: "Steam Engineer",    tier: 1, from_class: 0, req_fire: 2, req_ice: 2, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 6,  name: "Plasma Mage",       tier: 1, from_class: 0, req_fire: 2, req_ice: 0, req_thunder: 2, req_poison: 0 },
    ClassDef { id: 7,  name: "Hellfire Witch",    tier: 1, from_class: 0, req_fire: 2, req_ice: 0, req_thunder: 0, req_poison: 2 },
    ClassDef { id: 8,  name: "Aurora Knight",     tier: 1, from_class: 0, req_fire: 0, req_ice: 2, req_thunder: 2, req_poison: 0 },
    ClassDef { id: 9,  name: "Cryo Alchemist",    tier: 1, from_class: 0, req_fire: 0, req_ice: 2, req_thunder: 0, req_poison: 2 },
    ClassDef { id: 10, name: "Volt Chemist",      tier: 1, from_class: 0, req_fire: 0, req_ice: 0, req_thunder: 2, req_poison: 2 },
    // Tri-element (4)
    ClassDef { id: 11, name: "Elemental Blade",   tier: 1, from_class: 0, req_fire: 2, req_ice: 1, req_thunder: 1, req_poison: 0 },
    ClassDef { id: 12, name: "Frost Plague",      tier: 1, from_class: 0, req_fire: 1, req_ice: 2, req_thunder: 0, req_poison: 1 },
    ClassDef { id: 13, name: "Thunder Toxin",     tier: 1, from_class: 0, req_fire: 1, req_ice: 0, req_thunder: 2, req_poison: 1 },
    ClassDef { id: 14, name: "Vile Storm",        tier: 1, from_class: 0, req_fire: 0, req_ice: 1, req_thunder: 1, req_poison: 2 },
    // Quad-element (1)
    ClassDef { id: 15, name: "Primordial Novice", tier: 1, from_class: 0, req_fire: 1, req_ice: 1, req_thunder: 1, req_poison: 1 },

    // === 2nd Class (C16~C35) ===
    ClassDef { id: 16, name: "Inferno Lord",      tier: 2, from_class: 1,  req_fire: 6, req_ice: 0, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 17, name: "Volcanic Thunder",  tier: 2, from_class: 1,  req_fire: 4, req_ice: 0, req_thunder: 2, req_poison: 0 },
    ClassDef { id: 18, name: "Blizzard Warden",   tier: 2, from_class: 2,  req_fire: 0, req_ice: 6, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 19, name: "Permafrost Plague",  tier: 2, from_class: 2,  req_fire: 0, req_ice: 4, req_thunder: 0, req_poison: 2 },
    ClassDef { id: 20, name: "Thunder God",       tier: 2, from_class: 3,  req_fire: 0, req_ice: 0, req_thunder: 6, req_poison: 0 },
    ClassDef { id: 21, name: "Plasma Overlord",   tier: 2, from_class: 3,  req_fire: 2, req_ice: 0, req_thunder: 4, req_poison: 0 },
    ClassDef { id: 22, name: "Venom Lord",        tier: 2, from_class: 4,  req_fire: 0, req_ice: 0, req_thunder: 0, req_poison: 6 },
    ClassDef { id: 23, name: "Toxic Glacier",     tier: 2, from_class: 4,  req_fire: 0, req_ice: 2, req_thunder: 0, req_poison: 4 },
    ClassDef { id: 24, name: "Reactor Core",      tier: 2, from_class: 5,  req_fire: 4, req_ice: 4, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 25, name: "Nova Cannon",       tier: 2, from_class: 6,  req_fire: 4, req_ice: 0, req_thunder: 4, req_poison: 0 },
    ClassDef { id: 26, name: "Demon Summoner",    tier: 2, from_class: 7,  req_fire: 4, req_ice: 0, req_thunder: 0, req_poison: 4 },
    ClassDef { id: 27, name: "Absolute Zero",     tier: 2, from_class: 8,  req_fire: 0, req_ice: 4, req_thunder: 4, req_poison: 0 },
    ClassDef { id: 28, name: "Bio Freeze",        tier: 2, from_class: 9,  req_fire: 0, req_ice: 4, req_thunder: 0, req_poison: 4 },
    ClassDef { id: 29, name: "Acid Storm",        tier: 2, from_class: 10, req_fire: 0, req_ice: 0, req_thunder: 4, req_poison: 4 },
    ClassDef { id: 30, name: "Prism Knight",      tier: 2, from_class: 11, req_fire: 3, req_ice: 3, req_thunder: 3, req_poison: 0 },
    ClassDef { id: 31, name: "Pandemic Frost",    tier: 2, from_class: 12, req_fire: 0, req_ice: 4, req_thunder: 0, req_poison: 3 },
    ClassDef { id: 32, name: "Chain Decay",       tier: 2, from_class: 13, req_fire: 0, req_ice: 0, req_thunder: 4, req_poison: 3 },
    ClassDef { id: 33, name: "Chaos Shaman",      tier: 2, from_class: 14, req_fire: 0, req_ice: 3, req_thunder: 3, req_poison: 3 },
    ClassDef { id: 34, name: "Primordial Adept",  tier: 2, from_class: 15, req_fire: 3, req_ice: 3, req_thunder: 3, req_poison: 3 },
    ClassDef { id: 35, name: "Awakened One",      tier: 2, from_class: 15, req_fire: 5, req_ice: 0, req_thunder: 0, req_poison: 0 }, // any 5+

    // === 3rd Class (C36~C45) ===
    ClassDef { id: 36, name: "Phoenix",           tier: 3, from_class: 16, req_fire: 10, req_ice: 0, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 37, name: "Cryomancer",        tier: 3, from_class: 18, req_fire: 0, req_ice: 10, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 38, name: "Ragnarok",          tier: 3, from_class: 20, req_fire: 0, req_ice: 0, req_thunder: 10, req_poison: 0 },
    ClassDef { id: 39, name: "Pandemic",          tier: 3, from_class: 22, req_fire: 0, req_ice: 0, req_thunder: 0, req_poison: 10 },
    ClassDef { id: 40, name: "Antimatter",        tier: 3, from_class: 24, req_fire: 7, req_ice: 7, req_thunder: 0, req_poison: 0 },
    ClassDef { id: 41, name: "Supernova",         tier: 3, from_class: 25, req_fire: 7, req_ice: 0, req_thunder: 7, req_poison: 0 },
    ClassDef { id: 42, name: "Entropy",           tier: 3, from_class: 27, req_fire: 0, req_ice: 7, req_thunder: 7, req_poison: 0 },
    ClassDef { id: 43, name: "Archfiend",         tier: 3, from_class: 26, req_fire: 7, req_ice: 0, req_thunder: 0, req_poison: 7 },
    ClassDef { id: 44, name: "Avatar",            tier: 3, from_class: 30, req_fire: 5, req_ice: 5, req_thunder: 5, req_poison: 0 },
    ClassDef { id: 45, name: "Primordial God",    tier: 3, from_class: 34, req_fire: 5, req_ice: 5, req_thunder: 5, req_poison: 5 },
];
