# UNPLUG: Elemental Survivor — Skill & Class System Design

## Core Loop

```
Level Up → Choose: Element Orb +1 (2 random elements offered) OR Stat boost
  ↓
Orbs accumulate (no cap) → Visual: orbiting orbs grow in layers
  ↓
Hit level threshold + element condition → Class promotion available
  ↓
1st Class (Lv10) → Class-specific skills appear in level-up choices
  ↓
2nd Class (Lv25) → Sharper, more powerful skill set
  ↓
3rd Class (Lv45) → Ultimate specialization, fewer but devastating choices
```

## Promotion Conditions

| Tier | Level | Element Requirement | # Classes |
|------|-------|---------------------|-----------|
| 1st | 10+ | See table below | 15 |
| 2nd | 25+ | See table below | 20 |
| 3rd | 45+ | See table below | 10 |

## 1st Class (15 classes)

### Pure Single Element (4) — element 3+

| ID | Req | Name | Concept | Skills |
|----|-----|------|---------|--------|
| C01 | 🔥3 | Flame Knight | Melee burst | Flame Slash, Lava Floor, Ignite Aura |
| C02 | 🧊3 | Frost Mage | AoE slow | Frost Nova, Ice Wall, Shatter |
| C03 | ⚡3 | Storm Warrior | Speed+chain | Chain Lightning, Thunder Dash, Overcharge |
| C04 | 🧪3 | Plague Bearer | DOT stacking | Toxic Cloud, Plague Spread, Venom Strike |

### Hybrid 2-Element (6) — each 2+

| ID | Req | Name | Concept | Skills |
|----|-----|------|---------|--------|
| C05 | 🔥2🧊2 | Steam Engineer | Explode+slow | Steam Burst, Pressure Valve, Thermal Shock |
| C06 | 🔥2⚡2 | Plasma Mage | Chain explosion | Plasma Bolt, Arc Flash, Ion Storm |
| C07 | 🔥2🧪2 | Hellfire Witch | Burn+poison DOT | Hellfire, Toxic Flame, Witch's Brew |
| C08 | 🧊2⚡2 | Aurora Knight | Freeze+shock CC | Aurora Slash, Flash Freeze, Static Field |
| C09 | 🧊2🧪2 | Cryo Alchemist | Slow+weaken | Frostbite Venom, Glacial Acid, Numbing Cold |
| C10 | ⚡2🧪2 | Volt Chemist | Shock spread+blast | Electrolysis, Acid Lightning, Reactive Surge |

### Tri-Element (4) — primary 2+, others 1+

| ID | Req | Name | Concept | Skills |
|----|-----|------|---------|--------|
| C11 | 🔥2🧊1⚡1 | Elemental Blade | Balanced melee | Tri-Slash, Element Shift, Prism Guard |
| C12 | 🧊2🔥1🧪1 | Frost Plague | Freeze+disease | Frozen Miasma, Ice Blight, Cold Snap |
| C13 | ⚡2🔥1🧪1 | Thunder Toxin | Chain+spread | Toxic Bolt, Storm Venom, Paralyze |
| C14 | 🧪2🧊1⚡1 | Vile Storm | Chaotic AoE | Vile Gust, Corrosive Storm, Decay Field |

### Quad-Element (1) — all 1+

| ID | Req | Name | Concept | Skills |
|----|-----|------|---------|--------|
| C15 | ALL1 | Primordial Novice | Jack-of-all | Random Element, Chaos Orb, Adaptive Shield |

## 2nd Class (20 classes) — Lv 25+

| ID | From | Req | Name | Specialization |
|----|------|-----|------|----------------|
| C16 | C01 | 🔥6 | Inferno Lord | Max burst damage |
| C17 | C01 | 🔥4⚡2 | Volcanic Thunder | Eruption+lightning |
| C18 | C02 | 🧊6 | Blizzard Warden | Full-screen freeze |
| C19 | C02 | 🧊4🧪2 | Permafrost Plague | Freeze+poison |
| C20 | C03 | ⚡6 | Thunder God | Instant burst |
| C21 | C03 | ⚡4🔥2 | Plasma Overlord | AoE chain blast |
| C22 | C04 | 🧪6 | Venom Lord | DOT maximize |
| C23 | C04 | 🧪4🧊2 | Toxic Glacier | Slow+poison stack |
| C24 | C05 | 🔥4🧊4 | Reactor Core | Max AoE radius |
| C25 | C06 | 🔥4⚡4 | Nova Cannon | Ranged explosion |
| C26 | C07 | 🔥4🧪4 | Demon Summoner | Summon minions |
| C27 | C08 | 🧊4⚡4 | Absolute Zero | Time-stop CC |
| C28 | C09 | 🧊4🧪4 | Bio Freeze | Enemy weaken max |
| C29 | C10 | ⚡4🧪4 | Acid Storm | AoE DOT+CC |
| C30 | C11 | 3elem 3+ | Prism Knight | 3-element simultaneous |
| C31 | C12 | 🧊4🧪3 | Pandemic Frost | Contagion+freeze |
| C32 | C13 | ⚡4🧪3 | Chain Decay | Chain+corrosion |
| C33 | C14 | 3elem 3+ | Chaos Shaman | Random mega-burst |
| C34 | C15 | ALL3 | Primordial Adept | 4-element cycle |
| C35 | C15 | any 5+ | Awakened One | Awakened specialization |

## 3rd Class (10 classes) — Lv 45+

| ID | From | Req | Name | Identity | Ultimate |
|----|------|-----|------|----------|----------|
| C36 | C16 | 🔥10 | Phoenix | Revive once + full fire | Rebirth Inferno |
| C37 | C18 | 🧊10 | Cryomancer | Map-wide slow | Absolute Blizzard |
| C38 | C20 | ⚡10 | Ragnarok | One-shot potential | Divine Thunder |
| C39 | C22 | 🧪10 | Pandemic | Enemy-to-enemy infection | Viral Apocalypse |
| C40 | C24 | 🔥7🧊7 | Antimatter | Black hole pull | Singularity |
| C41 | C25 | 🔥7⚡7 | Supernova | Screen clear | Solar Flare |
| C42 | C27 | 🧊7⚡7 | Entropy | Time stop ultimate | Frozen Lightning |
| C43 | C26 | 🔥7🧪7 | Archfiend | Large summon | Demon Gate |
| C44 | C30 | 3elem 5+ | Avatar | Tri-element ultimate | Prism Apocalypse |
| C45 | C34 | ALL5 | Primordial God | 4-element mastery | Genesis |

## Skill Sharpening (Post-Promotion)

| Phase | Level-up choices | Character |
|-------|-----------------|-----------|
| Pre-1st (Lv 1~9) | 3 choices: 2 element orbs + 1 stat | Generalist, many options |
| Post-1st (Lv 10~24) | 3 choices: 1 class skill + 1 element orb + 1 stat | Class direction set |
| Post-2nd (Lv 25~44) | 3 choices: 2 class skills + 1 element orb | Specialized, stats rare |
| Post-3rd (Lv 45+) | 2 choices: class ultimate upgrades only | Maximum specialization |

## Visual Progression

| Phase | Orbs | Character |
|-------|------|-----------|
| Pre-1st | 1~9 orbs orbiting (multi-layer at 6+) | Base sprite |
| 1st promotion | Orbs absorbed → class glow color | Sprite tint + aura |
| 2nd promotion | Glow intensifies + particle trail | Stronger aura + trail |
| 3rd promotion | Full elemental embodiment | Transformed sprite + constant FX |

## Implementation Plan (Rust)

```rust
// New data structures needed:
struct ClassDef {
    id: u8,           // C01~C45
    name: &'static str,
    tier: u8,         // 1, 2, 3
    from_class: Option<u8>,  // prerequisite class (for tier 2/3)
    req_fire: u8,
    req_ice: u8,
    req_thunder: u8,
    req_poison: u8,
    skills: [SkillDef; 3],
}

struct SkillDef {
    name: &'static str,
    skill_type: SkillType,  // Passive, Active, Ultimate
    element: Element,
    base_damage: f32,
    cooldown: f32,
    description: &'static str,
}

// Player changes:
// - Remove element level cap (currently 5)
// - Add: current_class: Option<u8>
// - Add: class_tier: u8 (0=none, 1/2/3)
// - Add: unlocked_skills: Vec<u8>
// - Modify generate_choices() based on class_tier
```

---

## Full Skill Definitions (All 45 Classes)

### Skill Types
- **P** = Passive (always active once unlocked)
- **A** = Active (auto-triggers on cooldown)
- **U** = Ultimate (long cooldown, massive impact — 3rd class only)

### Damage Formula
- Base damage scales with player ATK × skill multiplier
- Cooldowns in seconds
- Range: S=2, M=4, L=6, XL=10 (tiles)

---

### 1st Class Skills (C01~C15)

#### C01 — Flame Knight 🔥
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Flame Slash | A | 1.5s | S | 150% ATK fire cone, ignites (3s burn 20% ATK/s) |
| Lava Floor | A | 8s | M | Creates lava zone (3s duration, 40% ATK/s to enemies inside) |
| Ignite Aura | P | — | S | Enemies within range take 10% ATK/s fire DOT passively |

#### C02 — Frost Mage 🧊
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Frost Nova | A | 5s | M | 120% ATK ice burst, 50% slow 3s to all in range |
| Ice Wall | A | 10s | M | Spawns barrier (blocks enemies 4s, shatters for 80% ATK) |
| Shatter | P | — | — | Frozen enemies take 2× crit damage |

#### C03 — Storm Warrior ⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Chain Lightning | A | 2s | L | 100% ATK bolt, chains to 3 nearby enemies (70% each) |
| Thunder Dash | A | 6s | M | Dash forward, 130% ATK to enemies in path, +50% speed 2s |
| Overcharge | P | — | — | Every 5th attack deals 3× damage + stun 0.5s |

#### C04 — Plague Bearer 🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Toxic Cloud | A | 4s | M | Poison cloud (4s, 30% ATK/s), enemies inside get -20% ATK |
| Plague Spread | P | — | L | When poisoned enemy dies, spreads poison to 2 nearby enemies |
| Venom Strike | A | 2s | S | 130% ATK + stacks poison (max 5, each +15% ATK/s DOT) |

#### C05 — Steam Engineer 🔥🧊
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Steam Burst | A | 3s | M | 140% ATK explosion + 30% slow 2s + pushback |
| Pressure Valve | A | 8s | L | 200% ATK line attack, burns + freezes edges |
| Thermal Shock | P | — | — | Enemies hit by both fire+ice in 2s take 50% bonus damage |

#### C06 — Plasma Mage 🔥⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Plasma Bolt | A | 1.8s | L | 160% ATK projectile, explodes on hit (AoE S) |
| Arc Flash | A | 6s | M | 180% ATK, chains 4 times, each chain ignites |
| Ion Storm | P | — | — | Crits create a mini-explosion (50% ATK, S range) |

#### C07 — Hellfire Witch 🔥🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Hellfire | A | 3s | M | 120% ATK fire ring + poison center (stacks both DOTs) |
| Toxic Flame | P | — | — | Fire DOTs also apply poison. Poison DOTs also ignite. |
| Witch's Brew | A | 12s | L | Massive cauldron (5s, 50% ATK/s fire+poison, heals self 2%/s) |

#### C08 — Aurora Knight 🧊⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Aurora Slash | A | 2s | S | 140% ATK ice+lightning arc, 30% freeze chance |
| Flash Freeze | A | 8s | M | Freeze all in range 2s + 100% ATK ice shatter after |
| Static Field | P | — | M | Slowed enemies take 25% bonus lightning damage |

#### C09 — Cryo Alchemist 🧊🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Frostbite Venom | A | 3s | M | 110% ATK + slow 40% + poison 3 stacks |
| Glacial Acid | A | 7s | M | Zone (4s): enemies lose 30% DEF + 20% ATK/s DOT |
| Numbing Cold | P | — | — | Poisoned enemies move 20% slower per poison stack (max 60%) |

#### C10 — Volt Chemist ⚡🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Electrolysis | A | 2.5s | M | 120% ATK, splits into 2 poison orbs on hit |
| Acid Lightning | A | 6s | L | Chain 5 enemies, each takes 90% ATK + 2 poison stacks |
| Reactive Surge | P | — | — | When poison ticks, 20% chance to trigger mini-lightning (60% ATK) |

#### C11 — Elemental Blade 🔥🧊⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Tri-Slash | A | 2s | S | 3 rapid strikes (fire→ice→thunder), 80% ATK each |
| Element Shift | P | — | — | Each attack cycles element; matching weakness = 2× damage |
| Prism Guard | A | 10s | S | Shield (absorbs 200% ATK damage, explodes tri-element on break) |

#### C12 — Frost Plague 🧊🔥🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Frozen Miasma | A | 4s | M | Ice+poison cloud (3s, slow 40% + 25% ATK/s poison) |
| Ice Blight | P | — | — | Frozen enemies get 3 poison stacks when freeze ends |
| Cold Snap | A | 8s | L | 160% ATK, freezes all poisoned enemies for 2s |

#### C13 — Thunder Toxin ⚡🔥🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Toxic Bolt | A | 2s | L | 110% ATK lightning + 2 poison stacks |
| Storm Venom | A | 7s | L | Chain 4 enemies, each gets 4 poison stacks |
| Paralyze | P | — | — | Enemies with 5+ poison stacks get stunned 1s every 3s |

#### C14 — Vile Storm 🧪🧊⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Vile Gust | A | 3s | M | 130% ATK wind + scatter poison+ice shards |
| Corrosive Storm | A | 8s | L | AoE (3s): 35% ATK/s + enemies lose 5% DEF/s |
| Decay Field | P | — | M | Enemies in range lose 1% max HP/s (bosses: 0.2%/s) |

#### C15 — Primordial Novice (ALL)
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Random Element | A | 2s | M | 140% ATK, random element each cast (bonus if matches weakness) |
| Chaos Orb | A | 5s | L | Orbiting orb (10s), hits nearby for 50% ATK random element |
| Adaptive Shield | P | — | — | After taking damage, gain 30% resist to that element for 5s |

---

### 2nd Class Skills (C16~C35)

#### C16 — Inferno Lord 🔥🔥
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Meteor Strike | A | 6s | L | 300% ATK fire explosion (L range), leaves lava 3s |
| Blazing Fury | P | — | — | Below 50% HP: +50% fire damage, +30% attack speed |
| Inferno Wave | A | 3s | M | 200% ATK fire wave, ignites all hit (5s burn) |

#### C17 — Volcanic Thunder 🔥⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Eruption Bolt | A | 4s | L | 250% ATK lava+lightning pillar, stuns 1s |
| Magma Chain | A | 2.5s | L | Chain 4 enemies, 120% ATK fire+thunder each |
| Volcanic Charge | P | — | — | Thunder Dash leaves fire trail (3s, 40% ATK/s) |

#### C18 — Blizzard Warden 🧊🧊
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Absolute Frost | A | 8s | XL | 200% ATK, freeze ALL enemies on screen 2s |
| Ice Armor | P | — | — | +40% DEF, attackers get slowed 50% for 2s |
| Glacial Spear | A | 3s | L | 220% ATK pierce through enemies, 60% freeze chance |

#### C19 — Permafrost Plague 🧊🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Permafrost Zone | A | 7s | M | Zone (5s): 60% slow + 40% ATK/s poison |
| Frozen Contagion | P | — | — | Poison spreads to frozen enemies within M range |
| Cryo Venom Burst | A | 4s | M | 180% ATK, frozen enemies take 3× poison damage |

#### C20 — Thunder God ⚡⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Divine Bolt | A | 1.2s | L | 250% ATK single-target, guaranteed crit if enemy <50% HP |
| Lightning Field | A | 6s | L | Field (4s): random bolts hit 3 enemies/s for 100% ATK |
| Godspeed | P | — | — | +80% attack speed, +40% move speed, attacks chain to 1 extra |

#### C21 — Plasma Overlord 🔥⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Plasma Cannon | A | 3s | L | 280% ATK beam, penetrates all enemies in line |
| Fusion Blast | A | 8s | L | 350% ATK explosion, strips enemy DEF for 5s |
| Overload | P | — | — | Every 10th hit triggers Plasma Cannon automatically (no CD) |

#### C22 — Venom Lord 🧪🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Pandemic Burst | A | 4s | L | All poisoned enemies detonate (150% of remaining poison damage) |
| Venom Mastery | P | — | — | Poison stacks uncapped, +20% poison damage per 5 stacks |
| Miasma Lord | A | 8s | XL | Giant cloud (6s, 60% ATK/s), covers half screen |

#### C23 — Toxic Glacier 🧪🧊
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Frozen Venom | A | 3s | M | 160% ATK + freeze 1.5s + 4 poison stacks |
| Permafrost Poison | P | — | — | Slowed enemies take 2× poison tick damage |
| Glacier Tomb | A | 10s | M | Encase area in ice (3s stun) then poison burst 200% ATK |

#### C24 — Reactor Core 🔥🧊
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Thermal Explosion | A | 5s | L | 300% ATK, radius grows with fire+ice levels combined |
| Core Meltdown | A | 15s | XL | 500% ATK full-screen, self-damage 20% HP |
| Reactor Shield | P | — | — | Absorb damage → store as energy → next skill +100% damage |

#### C25 — Nova Cannon 🔥⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Nova Shot | A | 2s | L | 200% ATK ranged blast (M explosion radius) |
| Overcharge Cannon | A | 8s | XL | Channel 1s → 400% ATK beam, full penetration |
| Rapid Fire | P | — | — | After 3 skills in 5s, next skill has no CD |

#### C26 — Demon Summoner 🔥🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Summon Imp | A | 6s | — | Spawn imp minion (30s life, 60% ATK attacks, fire+poison) |
| Hellgate | A | 12s | M | Portal (5s): spawns 3 mini-demons, each 40% ATK |
| Demon Pact | P | — | — | Each active summon: +10% player damage, summons explode on death |

#### C27 — Absolute Zero 🧊⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Time Chill | A | 8s | L | All enemies slowed 80% for 3s, then frozen 1s |
| Zero Point | A | 12s | M | 250% ATK, enemies frozen take 4× damage for 2s after |
| Entropy Field | P | — | — | Frozen enemies shatter on death, dealing 100% ATK to neighbors |

#### C28 — Bio Freeze 🧊🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Bio Frost | A | 3s | M | 140% ATK + enemy -40% DEF for 4s + slow |
| Weakening Mist | A | 7s | L | Zone: enemies take +50% damage from all sources for 4s |
| Fragile | P | — | — | Enemies below 30% HP take 3× damage from all sources |

#### C29 — Acid Storm ⚡🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Acid Rain | A | 5s | L | Rain (4s): 40% ATK/s + 1 poison stack/s to all in area |
| Electric Dissolution | A | 3s | M | 170% ATK, removes enemy buffs + 3 poison stacks |
| Catalytic Reaction | P | — | — | When lightning hits poisoned enemy: AoE explosion (80% ATK, S) |

#### C30 — Prism Knight 🔥🧊⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Prism Blade | A | 1.5s | S | 180% ATK (cycles fire→ice→thunder), each has unique effect |
| Elemental Burst | A | 6s | M | 3 simultaneous element explosions, 150% ATK each |
| Resonance | P | — | — | Using all 3 elements in 4s triggers bonus 200% ATK blast |

#### C31 — Pandemic Frost 🧊🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Frozen Epidemic | A | 5s | L | 180% ATK, frozen enemies spread poison to 3 neighbors |
| Cryo Contagion | P | — | — | Poison kill → corpse freezes, explodes after 2s (150% ATK ice) |
| Winter Plague | A | 10s | XL | All enemies: slow 60% + 3 poison stacks + 100% ATK |

#### C32 — Chain Decay ⚡🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Decay Chain | A | 2.5s | L | Chain 6 enemies, each loses 10% current HP + poison |
| Corrosive Bolt | A | 4s | L | 200% ATK, enemy DEF → 0 for 3s |
| Decompose | P | — | — | Each chain bounce: +20% damage. Poisoned enemies chain +2 extra |

#### C33 — Chaos Shaman 🧪🧊⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Chaos Ritual | A | 5s | L | Random: 400% ATK single OR 150% ATK to all in range |
| Spirit Storm | A | 8s | XL | Summon storm (5s), random element bolts hit 5 enemies/s |
| Madness | P | — | — | +5% damage per different element used in last 10s (max +20%) |

#### C34 — Primordial Adept (ALL)
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Element Cycle | A | 2s | M | Cycles through all 4 elements rapidly (4 hits, 100% ATK each) |
| Primordial Shield | A | 10s | — | Immune to damage 3s, reflects 50% back |
| Harmony | P | — | — | Balanced elements (within 2 of each other): +30% all damage |

#### C35 — Awakened One (ANY dominant)
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Awakening Pulse | A | 3s | L | 250% ATK in dominant element, heals self 5% |
| Elemental Mastery | P | — | — | Dominant element skills: +50% damage, -30% cooldown |
| Transcend | A | 15s | XL | 400% ATK dominant element, transforms orbs to damage for 5s |

---

### 3rd Class Skills (C36~C45) — Include Ultimate

#### C36 — Phoenix 🔥
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Phoenix Wing | A | 2s | M | 250% ATK fire sweep, heals 3% per enemy hit |
| Eternal Flame | P | — | — | On death: revive with 50% HP + 500% ATK fire explosion |
| **Rebirth Inferno** | **U** | 60s | XL | Transform into Phoenix 10s: fly, immune, 200% ATK/s rain of fire |

#### C37 — Cryomancer 🧊
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Frost Dominion | A | 3s | L | 220% ATK + all enemies on screen slowed 40% |
| Crystal Prison | A | 8s | M | Freeze boss 3s / normal enemies 5s |
| **Absolute Blizzard** | **U** | 60s | XL | 10s blizzard: all enemies frozen, 100% ATK/s ice damage |

#### C38 — Ragnarok ⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| God's Wrath | A | 1s | L | 300% ATK, guaranteed crit, chains to 2 |
| Thunder Realm | P | — | L | Permanent field: enemies take 50% ATK/s lightning |
| **Divine Thunder** | **U** | 45s | XL | Single bolt: 2000% ATK to strongest enemy, chains to ALL others at 50% |

#### C39 — Pandemic 🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Patient Zero | A | 5s | L | 200% ATK + infected: passes poison on contact with other enemies |
| Mutation | P | — | — | Poison evolves: 10 stacks → super-poison (3× tick, uncleansable) |
| **Viral Apocalypse** | **U** | 60s | XL | All enemies get 20 poison stacks, die → infect, chain reaction |

#### C40 — Antimatter 🔥🧊
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Gravity Well | A | 5s | L | Pull all enemies to center, 150% ATK/s while held (3s) |
| Matter Collapse | A | 8s | M | 350% ATK implosion, enemies can't move 2s |
| **Singularity** | **U** | 60s | XL | Black hole 8s: pulls ALL enemies, 200% ATK/s, ends with 800% ATK explosion |

#### C41 — Supernova 🔥⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Solar Beam | A | 3s | XL | 280% ATK penetrating beam |
| Corona | P | — | M | Permanent fire+lightning aura: 80% ATK/s to nearby |
| **Solar Flare** | **U** | 50s | XL | Screen-clear: 1500% ATK to ALL enemies, blinds survivors 3s |

#### C42 — Entropy 🧊⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Time Fracture | A | 6s | L | Freeze time for enemies 3s (player still moves/attacks) |
| Paradox Bolt | A | 2s | L | 200% ATK, resets enemy attack timers |
| **Frozen Lightning** | **U** | 60s | XL | Stop ALL enemies 8s + lightning rain 150% ATK/s entire duration |

#### C43 — Archfiend 🔥🧪
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Summon Greater Demon | A | 10s | — | Large demon (60s, 150% ATK attacks, AoE fire+poison) |
| Demon Army | P | — | — | Max 3 summons active, each buffs others +20% damage |
| **Demon Gate** | **U** | 60s | XL | Open hell portal 10s: endless stream of demons, 100% ATK each |

#### C44 — Avatar 🔥🧊⚡
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Tri-Force | A | 2s | M | 3 simultaneous element blasts, 200% ATK each |
| Element Unity | P | — | — | All 3 elements active = +60% damage, +30% speed |
| **Prism Apocalypse** | **U** | 60s | XL | 3 element pillars converge: 1200% ATK + permanent +20% all stats |

#### C45 — Primordial God (ALL)
| Skill | Type | CD | Range | Effect |
|-------|------|----|-------|--------|
| Omni-Element | A | 1.5s | L | All 4 elements simultaneously, 250% ATK |
| Creation/Destruction | P | — | — | Kills heal 5%, taking damage boosts ATK 10% for 5s (stacks) |
| **Genesis** | **U** | 90s | XL | Reshape battlefield: all enemies take 999% ATK, reset all CDs, full heal |
