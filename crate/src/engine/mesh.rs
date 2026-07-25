use bytemuck::{Pod, Zeroable};

#[repr(C)]
#[derive(Copy, Clone, Pod, Zeroable)]
pub struct Vertex {
    pub position: [f32; 3],
    pub normal: [f32; 3],
    pub color: [f32; 4],
}

pub struct Mesh {
    pub vertices: Vec<Vertex>,
    pub indices: Vec<u16>,
}

impl Mesh {
    /// Unit cube (1x1x1 centered at origin)
    pub fn cube(color: [f32; 4]) -> Self {
        let p = 0.5_f32;
        let n = -0.5_f32;

        let vertices = vec![
            // Front face
            Vertex { position: [n, n, p], normal: [0.0, 0.0, 1.0], color },
            Vertex { position: [p, n, p], normal: [0.0, 0.0, 1.0], color },
            Vertex { position: [p, p, p], normal: [0.0, 0.0, 1.0], color },
            Vertex { position: [n, p, p], normal: [0.0, 0.0, 1.0], color },
            // Back face
            Vertex { position: [p, n, n], normal: [0.0, 0.0, -1.0], color },
            Vertex { position: [n, n, n], normal: [0.0, 0.0, -1.0], color },
            Vertex { position: [n, p, n], normal: [0.0, 0.0, -1.0], color },
            Vertex { position: [p, p, n], normal: [0.0, 0.0, -1.0], color },
            // Top face
            Vertex { position: [n, p, p], normal: [0.0, 1.0, 0.0], color },
            Vertex { position: [p, p, p], normal: [0.0, 1.0, 0.0], color },
            Vertex { position: [p, p, n], normal: [0.0, 1.0, 0.0], color },
            Vertex { position: [n, p, n], normal: [0.0, 1.0, 0.0], color },
            // Bottom face
            Vertex { position: [n, n, n], normal: [0.0, -1.0, 0.0], color },
            Vertex { position: [p, n, n], normal: [0.0, -1.0, 0.0], color },
            Vertex { position: [p, n, p], normal: [0.0, -1.0, 0.0], color },
            Vertex { position: [n, n, p], normal: [0.0, -1.0, 0.0], color },
            // Right face
            Vertex { position: [p, n, p], normal: [1.0, 0.0, 0.0], color },
            Vertex { position: [p, n, n], normal: [1.0, 0.0, 0.0], color },
            Vertex { position: [p, p, n], normal: [1.0, 0.0, 0.0], color },
            Vertex { position: [p, p, p], normal: [1.0, 0.0, 0.0], color },
            // Left face
            Vertex { position: [n, n, n], normal: [-1.0, 0.0, 0.0], color },
            Vertex { position: [n, n, p], normal: [-1.0, 0.0, 0.0], color },
            Vertex { position: [n, p, p], normal: [-1.0, 0.0, 0.0], color },
            Vertex { position: [n, p, n], normal: [-1.0, 0.0, 0.0], color },
        ];

        let indices = vec![
            0, 1, 2, 0, 2, 3,       // front
            4, 5, 6, 4, 6, 7,       // back
            8, 9, 10, 8, 10, 11,    // top
            12, 13, 14, 12, 14, 15, // bottom
            16, 17, 18, 16, 18, 19, // right
            20, 21, 22, 20, 22, 23, // left
        ];

        Mesh { vertices, indices }
    }

    /// Flat ground plane
    pub fn plane(size: f32, color: [f32; 4]) -> Self {
        let h = size / 2.0;
        let vertices = vec![
            Vertex { position: [-h, 0.0, -h], normal: [0.0, 1.0, 0.0], color },
            Vertex { position: [h, 0.0, -h], normal: [0.0, 1.0, 0.0], color },
            Vertex { position: [h, 0.0, h], normal: [0.0, 1.0, 0.0], color },
            Vertex { position: [-h, 0.0, h], normal: [0.0, 1.0, 0.0], color },
        ];
        let indices = vec![0, 1, 2, 0, 2, 3];
        Mesh { vertices, indices }
    }
}
