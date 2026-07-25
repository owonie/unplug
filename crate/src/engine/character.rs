use glam::{Vec3, Mat4};

/// Low-poly character meshes for zombie survival
/// Player = armed survivor, Enemies = zombie types

pub struct CharacterMesh;

impl CharacterMesh {
    /// Player — armed survivor with backpack
    pub fn player() -> Vec<MeshInstance> {
        vec![
            // Head
            MeshInstance::cube(Vec3::new(0.0, 1.55, 0.0), Vec3::new(0.32, 0.32, 0.32), [0.87, 0.72, 0.53, 1.0]),
            // Helmet/cap
            MeshInstance::cube(Vec3::new(0.0, 1.73, 0.0), Vec3::new(0.35, 0.08, 0.35), [0.25, 0.32, 0.20, 1.0]),
            // Eyes
            MeshInstance::cube(Vec3::new(-0.07, 1.55, 0.16), Vec3::new(0.05, 0.04, 0.02), [0.2, 0.2, 0.2, 1.0]),
            MeshInstance::cube(Vec3::new(0.07, 1.55, 0.16), Vec3::new(0.05, 0.04, 0.02), [0.2, 0.2, 0.2, 1.0]),
            // Torso (military jacket)
            MeshInstance::cube(Vec3::new(0.0, 1.1, 0.0), Vec3::new(0.4, 0.5, 0.25), [0.28, 0.35, 0.22, 1.0]),
            // Belt
            MeshInstance::cube(Vec3::new(0.0, 0.82, 0.0), Vec3::new(0.42, 0.06, 0.27), [0.3, 0.2, 0.1, 1.0]),
            // Backpack
            MeshInstance::cube(Vec3::new(0.0, 1.15, -0.18), Vec3::new(0.3, 0.4, 0.15), [0.35, 0.3, 0.2, 1.0]),
            // Left arm
            MeshInstance::cube(Vec3::new(-0.3, 1.05, 0.0), Vec3::new(0.12, 0.4, 0.12), [0.28, 0.35, 0.22, 1.0]),
            // Right arm
            MeshInstance::cube(Vec3::new(0.3, 1.05, 0.05), Vec3::new(0.12, 0.4, 0.12), [0.28, 0.35, 0.22, 1.0]),
            // Hands
            MeshInstance::cube(Vec3::new(-0.3, 0.8, 0.0), Vec3::new(0.09, 0.09, 0.09), [0.87, 0.72, 0.53, 1.0]),
            MeshInstance::cube(Vec3::new(0.3, 0.75, 0.12), Vec3::new(0.09, 0.09, 0.09), [0.87, 0.72, 0.53, 1.0]),
            // Rifle
            MeshInstance::cube(Vec3::new(0.3, 0.85, 0.25), Vec3::new(0.04, 0.04, 0.4), [0.2, 0.2, 0.2, 1.0]),
            MeshInstance::cube(Vec3::new(0.3, 0.85, 0.5), Vec3::new(0.03, 0.06, 0.08), [0.15, 0.15, 0.15, 1.0]),
            // Legs
            MeshInstance::cube(Vec3::new(-0.12, 0.4, 0.0), Vec3::new(0.13, 0.4, 0.13), [0.2, 0.22, 0.18, 1.0]),
            MeshInstance::cube(Vec3::new(0.12, 0.4, 0.0), Vec3::new(0.13, 0.4, 0.13), [0.2, 0.22, 0.18, 1.0]),
            // Boots
            MeshInstance::cube(Vec3::new(-0.12, 0.08, 0.02), Vec3::new(0.14, 0.1, 0.18), [0.2, 0.15, 0.1, 1.0]),
            MeshInstance::cube(Vec3::new(0.12, 0.08, 0.02), Vec3::new(0.14, 0.1, 0.18), [0.2, 0.15, 0.1, 1.0]),
        ]
    }

    /// Walker zombie — slow, standard
    pub fn zombie_walker() -> Vec<MeshInstance> {
        vec![
            // Head (grey-green skin)
            MeshInstance::cube(Vec3::new(0.0, 1.45, 0.05), Vec3::new(0.3, 0.3, 0.3), [0.4, 0.5, 0.35, 1.0]),
            // Jaw (hanging)
            MeshInstance::cube(Vec3::new(0.0, 1.32, 0.12), Vec3::new(0.2, 0.08, 0.1), [0.35, 0.4, 0.3, 1.0]),
            // Eyes (glowing)
            MeshInstance::cube(Vec3::new(-0.07, 1.48, 0.15), Vec3::new(0.05, 0.05, 0.02), [0.9, 0.2, 0.1, 1.0]),
            MeshInstance::cube(Vec3::new(0.07, 1.48, 0.15), Vec3::new(0.05, 0.05, 0.02), [0.9, 0.2, 0.1, 1.0]),
            // Torso (torn clothes)
            MeshInstance::cube(Vec3::new(0.0, 1.0, 0.0), Vec3::new(0.35, 0.45, 0.22), [0.3, 0.25, 0.2, 1.0]),
            // Exposed ribs
            MeshInstance::cube(Vec3::new(0.1, 1.05, 0.11), Vec3::new(0.12, 0.15, 0.02), [0.6, 0.55, 0.45, 1.0]),
            // Left arm (reaching)
            MeshInstance::cube(Vec3::new(-0.28, 1.0, 0.15), Vec3::new(0.1, 0.4, 0.1), [0.4, 0.5, 0.35, 1.0]),
            // Right arm (hanging)
            MeshInstance::cube(Vec3::new(0.28, 0.85, 0.0), Vec3::new(0.1, 0.45, 0.1), [0.4, 0.5, 0.35, 1.0]),
            // Legs (shambling)
            MeshInstance::cube(Vec3::new(-0.1, 0.35, 0.0), Vec3::new(0.12, 0.35, 0.12), [0.25, 0.2, 0.18, 1.0]),
            MeshInstance::cube(Vec3::new(0.12, 0.35, 0.05), Vec3::new(0.12, 0.35, 0.12), [0.25, 0.2, 0.18, 1.0]),
        ]
    }

    /// Bloater — fat, slow, explodes
    pub fn zombie_bloater() -> Vec<MeshInstance> {
        vec![
            // Head (small relative to body)
            MeshInstance::cube(Vec3::new(0.0, 1.5, 0.0), Vec3::new(0.25, 0.25, 0.25), [0.45, 0.55, 0.3, 1.0]),
            // Eyes
            MeshInstance::cube(Vec3::new(-0.06, 1.5, 0.13), Vec3::new(0.04, 0.04, 0.02), [1.0, 0.8, 0.0, 1.0]),
            MeshInstance::cube(Vec3::new(0.06, 1.5, 0.13), Vec3::new(0.04, 0.04, 0.02), [1.0, 0.8, 0.0, 1.0]),
            // Massive torso
            MeshInstance::cube(Vec3::new(0.0, 0.95, 0.0), Vec3::new(0.6, 0.6, 0.5), [0.5, 0.55, 0.25, 1.0]),
            // Belly bulge
            MeshInstance::cube(Vec3::new(0.0, 0.8, 0.15), Vec3::new(0.45, 0.35, 0.25), [0.55, 0.6, 0.3, 1.0]),
            // Boils
            MeshInstance::cube(Vec3::new(0.2, 1.1, 0.2), Vec3::new(0.1, 0.1, 0.1), [0.6, 0.7, 0.1, 1.0]),
            MeshInstance::cube(Vec3::new(-0.15, 0.9, 0.22), Vec3::new(0.08, 0.08, 0.08), [0.6, 0.7, 0.1, 1.0]),
            // Arms (stubby)
            MeshInstance::cube(Vec3::new(-0.4, 0.95, 0.0), Vec3::new(0.12, 0.3, 0.12), [0.45, 0.5, 0.3, 1.0]),
            MeshInstance::cube(Vec3::new(0.4, 0.95, 0.0), Vec3::new(0.12, 0.3, 0.12), [0.45, 0.5, 0.3, 1.0]),
            // Legs (thick)
            MeshInstance::cube(Vec3::new(-0.15, 0.3, 0.0), Vec3::new(0.15, 0.3, 0.15), [0.3, 0.28, 0.2, 1.0]),
            MeshInstance::cube(Vec3::new(0.15, 0.3, 0.0), Vec3::new(0.15, 0.3, 0.15), [0.3, 0.28, 0.2, 1.0]),
        ]
    }

    /// Runner — fast, thin
    pub fn zombie_runner() -> Vec<MeshInstance> {
        vec![
            // Head (lean)
            MeshInstance::cube(Vec3::new(0.0, 1.5, 0.08), Vec3::new(0.25, 0.28, 0.25), [0.5, 0.4, 0.35, 1.0]),
            // Eyes (bright red)
            MeshInstance::cube(Vec3::new(-0.06, 1.52, 0.15), Vec3::new(0.05, 0.05, 0.02), [1.0, 0.0, 0.0, 1.0]),
            MeshInstance::cube(Vec3::new(0.06, 1.52, 0.15), Vec3::new(0.05, 0.05, 0.02), [1.0, 0.0, 0.0, 1.0]),
            // Mouth (open, screaming)
            MeshInstance::cube(Vec3::new(0.0, 1.4, 0.12), Vec3::new(0.1, 0.06, 0.05), [0.3, 0.0, 0.0, 1.0]),
            // Thin torso
            MeshInstance::cube(Vec3::new(0.0, 1.05, 0.0), Vec3::new(0.28, 0.45, 0.18), [0.4, 0.35, 0.3, 1.0]),
            // Arms (forward, running pose)
            MeshInstance::cube(Vec3::new(-0.22, 1.1, 0.15), Vec3::new(0.08, 0.35, 0.08), [0.5, 0.4, 0.35, 1.0]),
            MeshInstance::cube(Vec3::new(0.22, 0.9, -0.1), Vec3::new(0.08, 0.35, 0.08), [0.5, 0.4, 0.35, 1.0]),
            // Legs (long, stride)
            MeshInstance::cube(Vec3::new(-0.1, 0.35, 0.08), Vec3::new(0.1, 0.4, 0.1), [0.25, 0.2, 0.18, 1.0]),
            MeshInstance::cube(Vec3::new(0.1, 0.35, -0.08), Vec3::new(0.1, 0.4, 0.1), [0.25, 0.2, 0.18, 1.0]),
        ]
    }

    /// Spitter — ranged zombie (not implemented yet in AI)
    pub fn zombie_spitter() -> Vec<MeshInstance> {
        vec![
            // Head (bulging neck)
            MeshInstance::cube(Vec3::new(0.0, 1.45, 0.0), Vec3::new(0.28, 0.3, 0.28), [0.3, 0.5, 0.3, 1.0]),
            // Bulging throat
            MeshInstance::cube(Vec3::new(0.0, 1.3, 0.08), Vec3::new(0.2, 0.15, 0.18), [0.35, 0.6, 0.2, 1.0]),
            // Eyes
            MeshInstance::cube(Vec3::new(-0.07, 1.48, 0.14), Vec3::new(0.04, 0.04, 0.02), [0.2, 1.0, 0.2, 1.0]),
            MeshInstance::cube(Vec3::new(0.07, 1.48, 0.14), Vec3::new(0.04, 0.04, 0.02), [0.2, 1.0, 0.2, 1.0]),
            // Torso (hunched)
            MeshInstance::cube(Vec3::new(0.0, 1.0, 0.05), Vec3::new(0.32, 0.4, 0.25), [0.3, 0.35, 0.25, 1.0]),
            // Arms
            MeshInstance::cube(Vec3::new(-0.25, 0.9, 0.0), Vec3::new(0.1, 0.35, 0.1), [0.3, 0.5, 0.3, 1.0]),
            MeshInstance::cube(Vec3::new(0.25, 0.9, 0.0), Vec3::new(0.1, 0.35, 0.1), [0.3, 0.5, 0.3, 1.0]),
            // Legs
            MeshInstance::cube(Vec3::new(-0.1, 0.35, 0.0), Vec3::new(0.11, 0.35, 0.11), [0.2, 0.22, 0.18, 1.0]),
            MeshInstance::cube(Vec3::new(0.1, 0.35, 0.0), Vec3::new(0.11, 0.35, 0.11), [0.2, 0.22, 0.18, 1.0]),
        ]
    }
}

pub struct MeshInstance {
    pub offset: Vec3,
    pub scale: Vec3,
    pub color: [f32; 4],
}

impl MeshInstance {
    pub fn cube(offset: Vec3, scale: Vec3, color: [f32; 4]) -> Self {
        MeshInstance { offset, scale, color }
    }

    pub fn to_model_matrix(&self, base_pos: Vec3, rotation: f32) -> Mat4 {
        let rot_mat = Mat4::from_rotation_y(rotation);
        let offset_rotated = rot_mat.transform_point3(self.offset);
        Mat4::from_translation(base_pos + offset_rotated)
            * Mat4::from_scale(self.scale)
    }
}
