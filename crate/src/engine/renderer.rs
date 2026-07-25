use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::WebGl2RenderingContext as GL;
use bytemuck;
use glam::Mat4;

use super::camera::Camera;
use super::mesh::{Mesh, Vertex};
use super::shader::ShaderProgram;
use crate::game::World;

const VERT_SHADER: &str = r#"#version 300 es
precision highp float;

layout(location = 0) in vec3 a_position;
layout(location = 1) in vec3 a_normal;
layout(location = 2) in vec4 a_color;

uniform mat4 u_view;
uniform mat4 u_proj;
uniform mat4 u_model;

out vec3 v_normal;
out vec4 v_color;
out vec3 v_position;

void main() {
    vec4 worldPos = u_model * vec4(a_position, 1.0);
    gl_Position = u_proj * u_view * worldPos;
    v_normal = mat3(u_model) * a_normal;
    v_color = a_color;
    v_position = worldPos.xyz;
}
"#;

const FRAG_SHADER: &str = r#"#version 300 es
precision highp float;

in vec3 v_normal;
in vec4 v_color;
in vec3 v_position;

uniform vec3 u_light_dir;
uniform vec3 u_ambient;
uniform float u_time;

out vec4 fragColor;

void main() {
    vec3 norm = normalize(v_normal);
    float diff = max(dot(norm, normalize(u_light_dir)), 0.0);

    // Rim light (edge glow for horror feel)
    float rim = 1.0 - max(dot(norm, vec3(0.0, 0.3, 0.7)), 0.0);
    rim = pow(rim, 3.0) * 0.3;

    vec3 lighting = u_ambient + diff * vec3(0.7, 0.75, 0.8);
    vec3 color = v_color.rgb * lighting;

    // Add rim light (reddish for horror)
    color += vec3(0.4, 0.05, 0.0) * rim;

    // Distance fog (darkness creeping in)
    float dist = length(v_position.xz);
    float fog = 1.0 - exp(-dist * 0.04);
    vec3 fogColor = vec3(0.02, 0.01, 0.03); // near-black purple fog
    color = mix(color, fogColor, fog * 0.7);

    // Flickering fluorescent light effect
    float flicker = 0.95 + 0.05 * sin(u_time * 15.0) * sin(u_time * 23.0 + v_position.x);
    color *= flicker;

    // Subtle red emergency light pulse
    float emergency = sin(u_time * 2.0) * 0.5 + 0.5;
    color += vec3(0.08, 0.0, 0.0) * emergency * (1.0 - fog);

    fragColor = vec4(color, v_color.a);
}
"#;

pub struct Renderer {
    gl: GL,
    shader: ShaderProgram,
    camera: Camera,
    time: f32,
    // Uniform locations
    u_view: Option<web_sys::WebGlUniformLocation>,
    u_proj: Option<web_sys::WebGlUniformLocation>,
    u_model: Option<web_sys::WebGlUniformLocation>,
    u_light_dir: Option<web_sys::WebGlUniformLocation>,
    u_ambient: Option<web_sys::WebGlUniformLocation>,
    u_time: Option<web_sys::WebGlUniformLocation>,
}

impl Renderer {
    pub fn new(canvas_id: &str, width: u32, height: u32) -> Result<Self, JsValue> {
        let window = web_sys::window().ok_or("No window")?;
        let document = window.document().ok_or("No document")?;
        let canvas = document
            .get_element_by_id(canvas_id)
            .ok_or("No canvas")?
            .dyn_into::<web_sys::HtmlCanvasElement>()?;

        canvas.set_width(width);
        canvas.set_height(height);

        let gl = canvas
            .get_context("webgl2")?
            .ok_or("No WebGL2")?
            .dyn_into::<GL>()?;

        gl.enable(GL::DEPTH_TEST);
        gl.enable(GL::CULL_FACE);
        gl.clear_color(0.04, 0.055, 0.1, 1.0); // #0a0e1a

        let shader = ShaderProgram::new(&gl, VERT_SHADER, FRAG_SHADER)?;

        let u_view = gl.get_uniform_location(&shader.program, "u_view");
        let u_proj = gl.get_uniform_location(&shader.program, "u_proj");
        let u_model = gl.get_uniform_location(&shader.program, "u_model");
        let u_light_dir = gl.get_uniform_location(&shader.program, "u_light_dir");
        let u_ambient = gl.get_uniform_location(&shader.program, "u_ambient");
        let u_time = gl.get_uniform_location(&shader.program, "u_time");

        let aspect = width as f32 / height as f32;
        let camera = Camera::new(aspect);

        Ok(Renderer {
            gl,
            shader,
            camera,
            time: 0.0,
            u_view,
            u_proj,
            u_model,
            u_light_dir,
            u_ambient,
            u_time,
        })
    }

    pub fn render(&mut self, world: &World) {
        let gl = &self.gl;
        self.time += 0.016;

        // Follow player
        self.camera.follow(world.player.x, world.player.z);

        gl.clear(GL::COLOR_BUFFER_BIT | GL::DEPTH_BUFFER_BIT);
        gl.use_program(Some(&self.shader.program));

        // Set camera uniforms
        let view = self.camera.view_matrix();
        let proj = self.camera.projection_matrix();
        gl.uniform_matrix4fv_with_f32_array(self.u_view.as_ref(), false, &mat4_to_array(view));
        gl.uniform_matrix4fv_with_f32_array(self.u_proj.as_ref(), false, &mat4_to_array(proj));

        // Light — horror subway atmosphere
        gl.uniform3f(self.u_light_dir.as_ref(), 0.2, 0.8, 0.3);
        let (ar, ag, ab) = if world.wave.is_night {
            (0.08, 0.06, 0.1) // 밤: 아주 어둡고 보라빛
        } else {
            (0.3, 0.28, 0.25) // 낮: 형광등 느낌
        };
        gl.uniform3f(self.u_ambient.as_ref(), ar, ag, ab);
        gl.uniform1f(self.u_time.as_ref(), self.time);

        // Render ground
        self.draw_ground(world);

        // Render walls
        self.draw_walls(world);

        // Render player
        self.draw_player(world);

        // Render enemies
        self.draw_enemies(world);

        // Render buildings
        self.draw_buildings(world);

        // Render resources
        self.draw_resources(world);

        // Render bullets
        self.draw_bullets(world);

        // Render decoys
        self.draw_decoys(world);

        // Render click indicators
        self.draw_click_indicators(world);

        // Render fire zones
        self.draw_fire_zones(world);

        // Render landmines
        self.draw_landmines(world);
    }

    fn draw_ground(&self, world: &World) {
        let size = world.map_size as f32;
        // Main floor (dark grey tile)
        let mesh = Mesh::cube([0.12, 0.12, 0.13, 1.0]);
        let model = Mat4::from_scale_rotation_translation(
            glam::Vec3::new(size, 0.1, size),
            glam::Quat::IDENTITY,
            glam::Vec3::new(size / 2.0, -0.05, size / 2.0),
        );
        self.draw_mesh(&mesh, model);

        // Yellow safety line along platforms (점자블록)
        let yellow = Mesh::cube([0.8, 0.7, 0.0, 1.0]);
        // 1호선 플랫폼 가장자리
        for z in 27..37 {
            let m = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(0.3, 0.05, 0.9),
                glam::Quat::IDENTITY,
                glam::Vec3::new(4.0, 0.03, z as f32 + 0.5),
            );
            self.draw_mesh(&yellow, m);
        }
        // 2호선 플랫폼 가장자리
        for z in 27..37 {
            let m = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(0.3, 0.05, 0.9),
                glam::Quat::IDENTITY,
                glam::Vec3::new(36.0, 0.03, z as f32 + 0.5),
            );
            self.draw_mesh(&yellow, m);
        }

        // 대합실 타일 (밝은 바닥)
        let hall_floor = Mesh::cube([0.18, 0.17, 0.16, 1.0]);
        let hm = Mat4::from_scale_rotation_translation(
            glam::Vec3::new(19.0, 0.02, 10.0),
            glam::Quat::IDENTITY,
            glam::Vec3::new(19.5, 0.01, 17.0),
        );
        self.draw_mesh(&hall_floor, hm);
    }

    fn draw_walls(&self, world: &World) {
        for &(wx, wz) in &world.walls {
            let x = wx as f32 + 0.5;
            let z = wz as f32 + 0.5;

            // 기둥 (특정 위치) vs 일반 벽
            let is_pillar = (wx == 14 || wx == 25 || wx == 7 || wx == 12 || wx == 28 || wx == 33)
                && (wz == 15 || wz == 19 || wz == 28 || wz == 31 || wz == 34);

            let (color, height, width) = if is_pillar {
                // 스테인리스 기둥
                ([0.5, 0.5, 0.52, 1.0], 2.5, 0.4)
            } else if wz == 0 || wz == world.map_size - 1 || wx == 0 || wx == world.map_size - 1 {
                // 외벽 (콘크리트)
                ([0.2, 0.2, 0.22, 1.0], 3.0, 1.0)
            } else if wz == 12 || wz == 22 || wz == 23 {
                // 대합실 벽/개찰구 (밝은 타일)
                ([0.35, 0.35, 0.4, 1.0], 2.0, 1.0)
            } else {
                // 일반 벽 (지하철 타일)
                ([0.25, 0.25, 0.28, 1.0], 2.5, 1.0)
            };

            let mesh = Mesh::cube(color);
            let model = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(width, height, width),
                glam::Quat::IDENTITY,
                glam::Vec3::new(x, height / 2.0, z),
            );
            self.draw_mesh(&mesh, model);
        }
    }

    fn draw_player(&self, world: &World) {
        let p = &world.player;
        let parts = super::character::CharacterMesh::player();
        let base = glam::Vec3::new(p.x, 0.0, p.z);
        // Face toward move target
        let rot = if p.moving {
            (p.target_x - p.x).atan2(p.target_z - p.z)
        } else {
            0.0
        };
        let mesh = Mesh::cube([1.0; 4]); // color overridden per part
        for part in &parts {
            let model = part.to_model_matrix(base, rot);
            // Override mesh color
            let colored_mesh = Mesh::cube(part.color);
            self.draw_mesh(&colored_mesh, model);
        }
    }

    fn draw_enemies(&self, world: &World) {
        for enemy in &world.enemies {
            let parts = match enemy.enemy_type {
                0 => super::character::CharacterMesh::zombie_walker(),
                1 => super::character::CharacterMesh::zombie_bloater(),
                2 => super::character::CharacterMesh::zombie_runner(),
                _ => super::character::CharacterMesh::zombie_spitter(),
            };

            // Bob motion (walking/shambling animation)
            let speed_mult = match enemy.enemy_type {
                0 => 3.0,  // walker - slow shamble
                1 => 2.0,  // bloater - heavy steps
                2 => 8.0,  // runner - fast bob
                _ => 4.0,
            };
            let bob_y = (self.time * speed_mult + enemy.x * 2.0).sin() * 0.06;
            let lean = (self.time * speed_mult * 0.5 + enemy.z).sin() * 0.05;

            let base = glam::Vec3::new(enemy.x + lean, bob_y, enemy.z);
            let rot = (world.player.x - enemy.x).atan2(world.player.z - enemy.z);

            let scale_mult = if enemy.enemy_type == 1 { 1.3 } else { 1.0 };
            for part in &parts {
                let model = part.to_model_matrix(base, rot);
                let final_model = if scale_mult != 1.0 {
                    Mat4::from_translation(glam::Vec3::new(enemy.x, 0.0, enemy.z))
                        * Mat4::from_scale(glam::Vec3::splat(scale_mult))
                        * Mat4::from_translation(glam::Vec3::new(-enemy.x, 0.0, -enemy.z))
                        * model
                } else {
                    model
                };
                let colored_mesh = Mesh::cube(part.color);
                self.draw_mesh(&colored_mesh, final_model);
            }
        }
    }

    fn draw_buildings(&self, world: &World) {
        for building in &world.buildings {
            let progress = building.build_progress;
            let alpha = if building.active { 1.0 } else { 0.5 + progress * 0.5 };

            let (color, height) = if building.building_type == 0 {
                // Barricade — wood/metal barrier
                ([0.45, 0.3, 0.15, alpha], 1.2 * progress)
            } else {
                // Turret — metal structure
                ([0.3, 0.35, 0.3, alpha], 1.5 * progress)
            };

            let mesh = Mesh::cube(color);
            let model = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(0.9, height.max(0.1), 0.9),
                glam::Quat::IDENTITY,
                glam::Vec3::new(building.x, height / 2.0, building.z),
            );
            self.draw_mesh(&mesh, model);

            // Turret barrel (only when active)
            if building.building_type == 1 && building.active {
                let barrel = Mesh::cube([0.2, 0.2, 0.2, 1.0]);
                let bm = Mat4::from_scale_rotation_translation(
                    glam::Vec3::new(0.15, 0.15, 0.5),
                    glam::Quat::from_rotation_y(self.time * 1.5),
                    glam::Vec3::new(building.x, 1.3, building.z),
                );
                self.draw_mesh(&barrel, bm);
            }

            // Construction scaffolding effect (while building)
            if !building.active && progress < 1.0 {
                let scaffold = Mesh::cube([0.6, 0.5, 0.1, 0.3]);
                let sm = Mat4::from_scale_rotation_translation(
                    glam::Vec3::new(1.0, 0.05, 1.0),
                    glam::Quat::IDENTITY,
                    glam::Vec3::new(building.x, height + 0.05, building.z),
                );
                self.draw_mesh(&scaffold, sm);
            }
        }
    }

    fn draw_resources(&self, world: &World) {
        for res in &world.resources_on_map {
            let color = if res.res_type == 0 {
                [0.47, 0.33, 0.28, 1.0] // coffee - brown
            } else {
                [0.46, 1.0, 0.01, 1.0] // commit - green
            };
            let mesh = Mesh::cube(color);
            let bob = (self.time * 3.0 + res.x).sin() * 0.1;
            let model = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(0.3, 0.3, 0.3),
                glam::Quat::from_rotation_y(self.time * 2.0),
                glam::Vec3::new(res.x, 0.3 + bob, res.z),
            );
            self.draw_mesh(&mesh, model);
        }
    }

    fn draw_bullets(&self, world: &World) {
        for bullet in &world.bullets {
            if !bullet.active { continue; }
            // Bullet core (bright)
            let mesh = Mesh::cube([1.0, 0.9, 0.2, 1.0]);
            let model = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(0.12, 0.12, 0.25),
                glam::Quat::from_rotation_y(bullet.vx.atan2(bullet.vz)),
                glam::Vec3::new(bullet.x, 0.5, bullet.z),
            );
            self.draw_mesh(&mesh, model);

            // Trail (fading)
            let trail = Mesh::cube([1.0, 0.5, 0.0, 0.4]);
            let tx = bullet.x - bullet.vx * 0.02;
            let tz = bullet.z - bullet.vz * 0.02;
            let tm = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(0.06, 0.06, 0.3),
                glam::Quat::from_rotation_y(bullet.vx.atan2(bullet.vz)),
                glam::Vec3::new(tx, 0.5, tz),
            );
            self.draw_mesh(&trail, tm);
        }
    }

    fn draw_decoys(&self, world: &World) {
        let mesh = Mesh::cube([0.0, 0.9, 1.0, 0.5]);
        for decoy in &world.decoys {
            let pulse = (self.time * 5.0).sin() * 0.1 + 1.0;
            let model = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(0.5 * pulse, 1.0 * pulse, 0.5 * pulse),
                glam::Quat::from_rotation_y(self.time * 3.0),
                glam::Vec3::new(decoy.x, 0.5, decoy.z),
            );
            self.draw_mesh(&mesh, model);
        }
    }

    fn draw_click_indicators(&self, world: &World) {
        let mesh = Mesh::cube([0.0, 0.9, 1.0, 0.8]);
        for ind in &world.click_indicators {
            let scale = ind.lifetime * 1.5;
            let model = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(scale, 0.02, scale),
                glam::Quat::from_rotation_y(self.time * 8.0),
                glam::Vec3::new(ind.x, 0.05, ind.z),
            );
            self.draw_mesh(&mesh, model);
        }
    }

    fn draw_fire_zones(&self, world: &World) {
        let mesh = Mesh::cube([1.0, 0.3, 0.0, 0.6]); // orange fire
        for zone in &world.fire_zones {
            let flicker = (self.time * 10.0 + zone.x).sin() * 0.2 + 0.8;
            let model = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(zone.radius * flicker, 0.3 * flicker, zone.radius * flicker),
                glam::Quat::from_rotation_y(self.time * 2.0),
                glam::Vec3::new(zone.x, 0.15, zone.z),
            );
            self.draw_mesh(&mesh, model);
            // Inner flame
            let inner = Mesh::cube([1.0, 0.8, 0.0, 0.4]);
            let m2 = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(zone.radius * 0.5, 0.6 * flicker, zone.radius * 0.5),
                glam::Quat::from_rotation_y(-self.time * 3.0),
                glam::Vec3::new(zone.x, 0.3, zone.z),
            );
            self.draw_mesh(&inner, m2);
        }
    }

    fn draw_landmines(&self, world: &World) {
        let mesh = Mesh::cube([0.4, 0.4, 0.4, 1.0]); // grey mine
        for mine in &world.landmines {
            let blink = if (self.time * 4.0) as u32 % 2 == 0 { 1.0 } else { 0.0 };
            let model = Mat4::from_scale_rotation_translation(
                glam::Vec3::new(0.25, 0.1, 0.25),
                glam::Quat::IDENTITY,
                glam::Vec3::new(mine.x, 0.05, mine.z),
            );
            self.draw_mesh(&mesh, model);
            // Red blink light
            if blink > 0.5 {
                let light = Mesh::cube([1.0, 0.0, 0.0, 1.0]);
                let lm = Mat4::from_scale_rotation_translation(
                    glam::Vec3::new(0.05, 0.05, 0.05),
                    glam::Quat::IDENTITY,
                    glam::Vec3::new(mine.x, 0.12, mine.z),
                );
                self.draw_mesh(&light, lm);
            }
        }
    }

    fn draw_mesh(&self, mesh: &Mesh, model: Mat4) {
        let gl = &self.gl;

        gl.uniform_matrix4fv_with_f32_array(self.u_model.as_ref(), false, &mat4_to_array(model));

        // Create VAO
        let vao = gl.create_vertex_array().unwrap();
        gl.bind_vertex_array(Some(&vao));

        // Vertex buffer
        let vert_data: &[u8] = bytemuck::cast_slice(&mesh.vertices);
        let vbo = gl.create_buffer().unwrap();
        gl.bind_buffer(GL::ARRAY_BUFFER, Some(&vbo));
        gl.buffer_data_with_u8_array(GL::ARRAY_BUFFER, vert_data, GL::STATIC_DRAW);

        let stride = std::mem::size_of::<Vertex>() as i32;
        // position
        gl.enable_vertex_attrib_array(0);
        gl.vertex_attrib_pointer_with_i32(0, 3, GL::FLOAT, false, stride, 0);
        // normal
        gl.enable_vertex_attrib_array(1);
        gl.vertex_attrib_pointer_with_i32(1, 3, GL::FLOAT, false, stride, 12);
        // color
        gl.enable_vertex_attrib_array(2);
        gl.vertex_attrib_pointer_with_i32(2, 4, GL::FLOAT, false, stride, 24);

        // Index buffer
        let idx_data: &[u8] = bytemuck::cast_slice(&mesh.indices);
        let ebo = gl.create_buffer().unwrap();
        gl.bind_buffer(GL::ELEMENT_ARRAY_BUFFER, Some(&ebo));
        gl.buffer_data_with_u8_array(GL::ELEMENT_ARRAY_BUFFER, idx_data, GL::STATIC_DRAW);

        gl.draw_elements_with_i32(GL::TRIANGLES, mesh.indices.len() as i32, GL::UNSIGNED_SHORT, 0);

        // Cleanup
        gl.bind_vertex_array(None);
        gl.delete_buffer(Some(&vbo));
        gl.delete_buffer(Some(&ebo));
        gl.delete_vertex_array(Some(&vao));
    }
}

fn mat4_to_array(m: Mat4) -> [f32; 16] {
    m.to_cols_array()
}
