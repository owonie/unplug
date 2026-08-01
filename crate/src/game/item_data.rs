/// Passive Item System — 12 items, stackable up to level 5

#[derive(Clone, Copy, PartialEq, Eq)]
pub enum ItemId {
    IronRing = 1,
    VampireFang = 2,
    MagnetCore = 3,
    StormBoots = 4,
    CriticalEye = 5,
    PhoenixFeather = 6,
    EchoStrike = 7,
    FrostAura = 8,
    XpCharm = 9,
    BerserkerMask = 10,
    ShieldGenerator = 11,
    SoulHarvest = 12,
}

impl ItemId {
    pub fn from_u8(v: u8) -> Option<Self> {
        match v {
            1 => Some(Self::IronRing),
            2 => Some(Self::VampireFang),
            3 => Some(Self::MagnetCore),
            4 => Some(Self::StormBoots),
            5 => Some(Self::CriticalEye),
            6 => Some(Self::PhoenixFeather),
            7 => Some(Self::EchoStrike),
            8 => Some(Self::FrostAura),
            9 => Some(Self::XpCharm),
            10 => Some(Self::BerserkerMask),
            11 => Some(Self::ShieldGenerator),
            12 => Some(Self::SoulHarvest),
            _ => None,
        }
    }

    pub fn all() -> &'static [ItemId] {
        &[
            ItemId::IronRing,
            ItemId::VampireFang,
            ItemId::MagnetCore,
            ItemId::StormBoots,
            ItemId::CriticalEye,
            ItemId::PhoenixFeather,
            ItemId::EchoStrike,
            ItemId::FrostAura,
            ItemId::XpCharm,
            ItemId::BerserkerMask,
            ItemId::ShieldGenerator,
            ItemId::SoulHarvest,
        ]
    }

    pub fn name(&self) -> &'static str {
        match self {
            Self::IronRing => "Iron Ring",
            Self::VampireFang => "Vampire Fang",
            Self::MagnetCore => "Magnet Core",
            Self::StormBoots => "Storm Boots",
            Self::CriticalEye => "Critical Eye",
            Self::PhoenixFeather => "Phoenix Feather",
            Self::EchoStrike => "Echo Strike",
            Self::FrostAura => "Frost Aura",
            Self::XpCharm => "XP Charm",
            Self::BerserkerMask => "Berserker Mask",
            Self::ShieldGenerator => "Shield Generator",
            Self::SoulHarvest => "Soul Harvest",
        }
    }

    pub fn emoji(&self) -> &'static str {
        match self {
            Self::IronRing => "🛡️",
            Self::VampireFang => "🧛",
            Self::MagnetCore => "🧲",
            Self::StormBoots => "👟",
            Self::CriticalEye => "👁️",
            Self::PhoenixFeather => "🔥",
            Self::EchoStrike => "⚡",
            Self::FrostAura => "❄️",
            Self::XpCharm => "✨",
            Self::BerserkerMask => "😈",
            Self::ShieldGenerator => "💠",
            Self::SoulHarvest => "💀",
        }
    }

    pub fn description(&self, level: u8) -> String {
        match self {
            Self::IronRing => format!("DEF +{}, thorns {}dmg", level * 5, level * 3),
            Self::VampireFang => format!("Lifesteal +{}%", level * 3),
            Self::MagnetCore => format!("Pickup range +{}", level * 2),
            Self::StormBoots => format!("Speed +{}%", level * 8),
            Self::CriticalEye => format!("Crit +{}%, CritDMG +{}%", level * 8, level * 20),
            Self::PhoenixFeather => format!("Revive 1x ({}% HP)", 20 + level as u16 * 10),
            Self::EchoStrike => format!("{}% double hit", level * 20),
            Self::FrostAura => format!("Slow nearby -{}%", level * 20),
            Self::XpCharm => format!("XP +{}%", level * 15),
            Self::BerserkerMask => format!("Low HP → ATK +{}%", level * 25),
            Self::ShieldGenerator => format!("Shield {}% HP / 10s", level * 15),
            Self::SoulHarvest => format!("Kill → +{} HP", level),
        }
    }

    pub fn max_level(&self) -> u8 {
        match self {
            Self::PhoenixFeather => 3, // fewer levels, each more impactful
            _ => 5,
        }
    }
}

/// Player's inventory of passive items
#[derive(Clone)]
pub struct ItemInventory {
    /// (item_id as u8, current_level 1~5)
    pub items: Vec<(u8, u8)>,
    /// Phoenix Feather consumed flag
    pub phoenix_used: bool,
    /// Shield Generator timer
    pub shield_gen_timer: f32,
}

impl ItemInventory {
    pub fn new() -> Self {
        Self {
            items: Vec::new(),
            phoenix_used: false,
            shield_gen_timer: 0.0,
        }
    }

    /// Add or upgrade an item. Returns (new_level, is_new)
    pub fn add_item(&mut self, item_id: u8) -> (u8, bool) {
        let item = match ItemId::from_u8(item_id) {
            Some(i) => i,
            None => return (0, false),
        };

        if let Some(entry) = self.items.iter_mut().find(|(id, _)| *id == item_id) {
            if entry.1 < item.max_level() {
                entry.1 += 1;
                (entry.1, false)
            } else {
                // Max level — return gold/stat instead
                (entry.1, false)
            }
        } else {
            self.items.push((item_id, 1));
            (1, true)
        }
    }

    pub fn get_level(&self, item_id: u8) -> u8 {
        self.items.iter()
            .find(|(id, _)| *id == item_id)
            .map(|(_, lv)| *lv)
            .unwrap_or(0)
    }

    pub fn has_item(&self, item_id: u8) -> bool {
        self.items.iter().any(|(id, _)| *id == item_id)
    }

    pub fn item_count(&self) -> usize {
        self.items.len()
    }

    /// Get computed bonuses from all items
    pub fn compute_bonuses(&self) -> ItemBonuses {
        let mut b = ItemBonuses::default();
        for &(id, lv) in &self.items {
            match ItemId::from_u8(id) {
                Some(ItemId::IronRing) => {
                    b.defense += lv as f32 * 5.0;
                    b.thorns_damage += lv as f32 * 3.0;
                }
                Some(ItemId::VampireFang) => {
                    b.lifesteal_bonus += lv as f32 * 0.03;
                }
                Some(ItemId::MagnetCore) => {
                    b.magnet_bonus += lv as f32 * 2.0;
                }
                Some(ItemId::StormBoots) => {
                    b.speed_mult += lv as f32 * 0.08;
                }
                Some(ItemId::CriticalEye) => {
                    b.crit_bonus += lv as f32 * 0.08;
                    b.crit_damage_mult += lv as f32 * 0.20;
                }
                Some(ItemId::PhoenixFeather) => {
                    b.revive_hp_pct = 0.20 + lv as f32 * 0.10;
                    b.has_phoenix = true;
                }
                Some(ItemId::EchoStrike) => {
                    b.echo_chance += lv as f32 * 0.20;
                }
                Some(ItemId::FrostAura) => {
                    b.frost_slow += lv as f32 * 0.20;
                }
                Some(ItemId::XpCharm) => {
                    b.xp_mult += lv as f32 * 0.15;
                }
                Some(ItemId::BerserkerMask) => {
                    b.berserk_atk_mult += lv as f32 * 0.25;
                }
                Some(ItemId::ShieldGenerator) => {
                    b.shield_pct += lv as f32 * 0.15;
                }
                Some(ItemId::SoulHarvest) => {
                    b.heal_on_kill += lv as f32;
                }
                None => {}
            }
        }
        b
    }
}

#[derive(Clone, Default)]
pub struct ItemBonuses {
    pub defense: f32,
    pub thorns_damage: f32,
    pub lifesteal_bonus: f32,
    pub magnet_bonus: f32,
    pub speed_mult: f32,       // additive multiplier (0.08 = +8%)
    pub crit_bonus: f32,       // additive to crit_chance
    pub crit_damage_mult: f32, // additive to crit multiplier (base 2.5)
    pub revive_hp_pct: f32,    // 0.3 = revive at 30% HP
    pub has_phoenix: bool,
    pub echo_chance: f32,      // probability of double hit
    pub frost_slow: f32,       // slow amount for nearby enemies
    pub xp_mult: f32,          // additive XP multiplier
    pub berserk_atk_mult: f32, // ATK bonus when HP < 50%
    pub shield_pct: f32,       // shield as % of max HP
    pub heal_on_kill: f32,     // flat HP per kill
}

/// Pick random item IDs for level-up choices (avoid offering maxed items)
pub fn random_item_choice(inventory: &ItemInventory, seed: u32) -> Option<u8> {
    let all = ItemId::all();
    // Filter out maxed items
    let available: Vec<u8> = all.iter()
        .map(|i| *i as u8)
        .filter(|&id| {
            let lv = inventory.get_level(id);
            let max = ItemId::from_u8(id).map(|i| i.max_level()).unwrap_or(5);
            lv < max
        })
        .collect();

    if available.is_empty() {
        return None;
    }

    Some(available[(seed as usize) % available.len()])
}
