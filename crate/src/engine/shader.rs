use wasm_bindgen::prelude::*;
use web_sys::WebGl2RenderingContext as GL;

pub struct ShaderProgram {
    pub program: web_sys::WebGlProgram,
}

impl ShaderProgram {
    pub fn new(gl: &GL, vert_src: &str, frag_src: &str) -> Result<Self, JsValue> {
        let vert = Self::compile(gl, GL::VERTEX_SHADER, vert_src)?;
        let frag = Self::compile(gl, GL::FRAGMENT_SHADER, frag_src)?;

        let program = gl.create_program().ok_or("Cannot create program")?;
        gl.attach_shader(&program, &vert);
        gl.attach_shader(&program, &frag);
        gl.link_program(&program);

        if !gl.get_program_parameter(&program, GL::LINK_STATUS).as_bool().unwrap_or(false) {
            let log = gl.get_program_info_log(&program).unwrap_or_default();
            return Err(JsValue::from_str(&format!("Link error: {}", log)));
        }

        gl.delete_shader(Some(&vert));
        gl.delete_shader(Some(&frag));

        Ok(ShaderProgram { program })
    }

    fn compile(gl: &GL, shader_type: u32, source: &str) -> Result<web_sys::WebGlShader, JsValue> {
        let shader = gl.create_shader(shader_type).ok_or("Cannot create shader")?;
        gl.shader_source(&shader, source);
        gl.compile_shader(&shader);

        if !gl.get_shader_parameter(&shader, GL::COMPILE_STATUS).as_bool().unwrap_or(false) {
            let log = gl.get_shader_info_log(&shader).unwrap_or_default();
            return Err(JsValue::from_str(&format!("Compile error: {}", log)));
        }

        Ok(shader)
    }
}
