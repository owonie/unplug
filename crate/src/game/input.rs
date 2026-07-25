use std::collections::HashSet;

pub struct InputState {
    keys: HashSet<String>,
    keys_just_pressed: HashSet<String>,
}

impl InputState {
    pub fn new() -> Self {
        InputState {
            keys: HashSet::new(),
            keys_just_pressed: HashSet::new(),
        }
    }

    pub fn key_down(&mut self, key: &str) {
        let k = key.to_lowercase();
        if !self.keys.contains(&k) {
            self.keys_just_pressed.insert(k.clone());
        }
        self.keys.insert(k);
    }

    pub fn key_up(&mut self, key: &str) {
        self.keys.remove(&key.to_lowercase());
    }

    pub fn is_key_down(&self, key: &str) -> bool {
        self.keys.contains(key)
    }

    pub fn is_key_just_pressed(&self, key: &str) -> bool {
        self.keys_just_pressed.contains(key)
    }

    pub fn end_frame(&mut self) {
        self.keys_just_pressed.clear();
    }
}
