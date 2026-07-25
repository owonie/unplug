use wasm_bindgen::prelude::*;

pub mod engine;
pub mod game;
pub mod ai;

use game::World;

#[wasm_bindgen]
pub struct GameEngine {
    world: World,
    last_time: f64,
}

#[wasm_bindgen]
impl GameEngine {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Result<GameEngine, JsValue> {
        console_error_panic_hook::set_once();
        Ok(GameEngine {
            world: World::new(),
            last_time: 0.0,
        })
    }

    pub fn update(&mut self, timestamp: f64) {
        let delta = if self.last_time == 0.0 { 16.0 } else { (timestamp - self.last_time).min(100.0) };
        self.last_time = timestamp;
        self.world.update((delta / 1000.0) as f32);
    }

    pub fn on_key_down(&mut self, key: &str) { self.world.input.key_down(key); }
    pub fn on_key_up(&mut self, key: &str) { self.world.input.key_up(key); }

    pub fn choose_upgrade(&mut self, choice: u32) { self.world.choose_upgrade(choice); }

    // === Player ===
    pub fn player_x(&self) -> f32 { self.world.player.x }
    pub fn player_z(&self) -> f32 { self.world.player.z }
    pub fn player_hp(&self) -> f32 { self.world.player.hp }
    pub fn player_max_hp(&self) -> f32 { self.world.player.max_hp }
    pub fn player_moving(&self) -> bool { self.world.player.moving }
    pub fn player_dir_x(&self) -> f32 { self.world.player.dir_x }
    pub fn player_dir_z(&self) -> f32 { self.world.player.dir_z }
    pub fn player_level(&self) -> u32 { self.world.player.level }
    pub fn player_xp(&self) -> u32 { self.world.player.xp }
    pub fn player_xp_max(&self) -> u32 { self.world.player.xp_to_next }
    pub fn player_alive(&self) -> bool { self.world.player.alive }
    pub fn player_damage(&self) -> f32 { self.world.player.attack_damage }
    pub fn player_speed(&self) -> f32 { self.world.player.speed }
    pub fn player_atk_speed(&self) -> f32 { 1.0 / self.world.player.attack_cooldown }
    pub fn player_range(&self) -> f32 { self.world.player.attack_range }
    pub fn player_crit(&self) -> f32 { self.world.player.crit_chance }
    pub fn player_pierce(&self) -> u32 { self.world.player.pierce }
    pub fn player_lifesteal(&self) -> f32 { self.world.player.lifesteal }
    pub fn player_multi(&self) -> u32 { self.world.player.attack_count }
    pub fn player_hit(&self) -> bool { self.world.player.invuln_timer > 0.3 }
    pub fn player_attacking(&self) -> bool {
        self.world.attacking
    }
    pub fn nearest_enemy_dir_x(&self) -> f32 {
        let px = self.world.player.x;
        let pz = self.world.player.z;
        self.world.enemies.iter()
            .filter(|e| e.alive)
            .min_by(|a, b| {
                let da = (a.x - px).powi(2) + (a.z - pz).powi(2);
                let db = (b.x - px).powi(2) + (b.z - pz).powi(2);
                da.partial_cmp(&db).unwrap()
            })
            .map(|e| e.x - px)
            .unwrap_or(1.0)
    }

    // === Game state ===
    pub fn kills(&self) -> u32 { self.world.kills }
    pub fn game_time(&self) -> f32 { self.world.game_time }
    pub fn level_up_pending(&self) -> bool { self.world.level_up_pending }
    pub fn level_up_choice(&self, idx: u32) -> u32 { self.world.level_up_choices[idx as usize % 3] }

    // === Enemies ===
    pub fn enemy_count(&self) -> u32 { self.world.enemies.len() as u32 }
    pub fn enemy_x(&self, i: u32) -> f32 { self.world.enemies.get(i as usize).map(|e| e.x).unwrap_or(0.0) }
    pub fn enemy_z(&self, i: u32) -> f32 { self.world.enemies.get(i as usize).map(|e| e.z).unwrap_or(0.0) }
    pub fn enemy_type(&self, i: u32) -> u32 { self.world.enemies.get(i as usize).map(|e| e.enemy_type).unwrap_or(0) }
    pub fn enemy_hit(&self, i: u32) -> bool { self.world.enemies.get(i as usize).map(|e| e.hit_timer > 0.0).unwrap_or(false) }

    // === Damage events (for popups) ===
    pub fn damage_event_count(&self) -> u32 { self.world.damage_events.len() as u32 }
    pub fn damage_event_x(&self, i: u32) -> f32 { self.world.damage_events.get(i as usize).map(|d| d.0).unwrap_or(0.0) }
    pub fn damage_event_z(&self, i: u32) -> f32 { self.world.damage_events.get(i as usize).map(|d| d.1).unwrap_or(0.0) }
    pub fn damage_event_amount(&self, i: u32) -> f32 { self.world.damage_events.get(i as usize).map(|d| d.2).unwrap_or(0.0) }
    pub fn damage_event_crit(&self, i: u32) -> bool { self.world.damage_events.get(i as usize).map(|d| d.3).unwrap_or(false) }

    // === Death events (for explosion particles) ===
    pub fn death_event_count(&self) -> u32 { self.world.death_events.len() as u32 }
    pub fn death_event_x(&self, i: u32) -> f32 { self.world.death_events.get(i as usize).map(|d| d.0).unwrap_or(0.0) }
    pub fn death_event_z(&self, i: u32) -> f32 { self.world.death_events.get(i as usize).map(|d| d.1).unwrap_or(0.0) }

    // === Bullets ===
    pub fn bullet_count(&self) -> u32 { self.world.bullets.len() as u32 }
    pub fn bullet_x(&self, i: u32) -> f32 { self.world.bullets.get(i as usize).map(|b| b.x).unwrap_or(0.0) }
    pub fn bullet_z(&self, i: u32) -> f32 { self.world.bullets.get(i as usize).map(|b| b.z).unwrap_or(0.0) }

    // === XP Orbs ===
    pub fn orb_count(&self) -> u32 { self.world.xp_orbs.len() as u32 }
    pub fn orb_x(&self, i: u32) -> f32 { self.world.xp_orbs.get(i as usize).map(|o| o.x).unwrap_or(0.0) }
    pub fn orb_z(&self, i: u32) -> f32 { self.world.xp_orbs.get(i as usize).map(|o| o.z).unwrap_or(0.0) }

    // === Log ===
    pub fn pop_log(&mut self) -> Option<String> { self.world.log_queue.pop_front() }
}

mod console_error_panic_hook {
    use std::sync::Once;
    static SET_HOOK: Once = Once::new();
    pub fn set_once() {
        SET_HOOK.call_once(|| {
            std::panic::set_hook(Box::new(|info| {
                let msg = format!("WASM panic: {}", info);
                web_sys::console::error_1(&msg.into());
            }));
        });
    }
}
