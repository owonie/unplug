"""
Huntress v5: Sculpt & Proportion Pass
- Subdivision for smooth surfaces
- Proportional body corrections (game character silhouette)
- Edge flow cleanup for better deformation
- Sculpt smooth pass

Input: v3 polished model (39 meshes)
Output: reshaped single mesh ready for Mixamo
"""
import bpy
import sys
import bmesh
from mathutils import Vector

argv = sys.argv
args_start = argv.index('--') + 1 if '--' in argv else len(argv)
args = argv[args_start:]
input_path = args[args.index('--input') + 1]
output_path = args[args.index('--output') + 1]

# Clean
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=input_path)
print(f"[V5] Imported: {input_path}")

# Remove non-mesh
for obj in list(bpy.data.objects):
    if obj.type in ('EMPTY', 'CAMERA', 'LIGHT'):
        bpy.data.objects.remove(obj)

# Collect meshes
meshes = [o for o in bpy.data.objects if o.type == 'MESH']
print(f"[V5] Meshes: {len(meshes)}")

# Unparent + apply transforms
for m in meshes:
    if m.parent:
        wm = m.matrix_world.copy()
        m.parent = None
        m.matrix_world = wm
    m.select_set(True)

bpy.context.view_layer.objects.active = meshes[0]
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

# Join all
bpy.ops.object.join()
body = bpy.context.active_object
body.name = 'Huntress'
print(f"[V5] Joined: {len(body.data.vertices)} verts")

# === 1. SUBDIVISION: smooth out angular faces ===
subsurf = body.modifiers.new('Subdivision', 'SUBSURF')
subsurf.levels = 1  # 1 level = 4x faces, smooth but not too heavy
subsurf.render_levels = 2
# Apply subdivision
bpy.ops.object.modifier_apply(modifier='Subdivision')
print(f"[V5] After subdiv: {len(body.data.vertices)} verts")

# === 2. SMOOTH NORMALS ===
bpy.ops.object.shade_smooth()
# Auto smooth (angle-based)
body.data.auto_smooth_angle = 1.0472  # 60°

# === 3. PROPORTIONAL SCULPT: game character silhouette ===
# Scale adjustments for heroic proportions:
# - Slightly larger head
# - Narrower waist  
# - Wider shoulders
# - Longer legs

bpy.ops.object.mode_set(mode='EDIT')
bm = bmesh.from_edit_mesh(body.data)
bm.verts.ensure_lookup_table()

# Find center of mass and bounds
all_verts = [v.co for v in bm.verts]
min_y = min(v.y for v in all_verts)
max_y = max(v.y for v in all_verts)
height = max_y - min_y

# Define body zones by height ratio
head_threshold = min_y + height * 0.85  # top 15% = head
shoulder_threshold = min_y + height * 0.75  # 75-85% = shoulders
waist_threshold = min_y + height * 0.55  # 55-75% = torso
hip_threshold = min_y + height * 0.45  # 45-55% = hips

for v in bm.verts:
    y = v.co.y
    
    # Head: scale up slightly (1.08x XZ)
    if y > head_threshold:
        v.co.x *= 1.08
        v.co.z *= 1.08
    
    # Shoulders: widen (1.12x X)
    elif y > shoulder_threshold:
        v.co.x *= 1.12
    
    # Waist: narrow (0.88x X, 0.92x Z)
    elif y > waist_threshold and y < shoulder_threshold:
        ratio = (y - waist_threshold) / (shoulder_threshold - waist_threshold)
        # Gradual: more narrow at center of waist
        narrow = 0.88 + ratio * 0.12  # 0.88 at bottom → 1.0 at top
        v.co.x *= narrow
        v.co.z *= (0.92 + ratio * 0.08)
    
    # Legs: slightly longer (stretch Y below hip)
    elif y < hip_threshold:
        # Stretch legs 5% longer
        leg_ratio = (hip_threshold - y) / (hip_threshold - min_y)
        v.co.y -= leg_ratio * height * 0.03

bmesh.update_edit_mesh(body.data)
bpy.ops.object.mode_set(mode='OBJECT')
print("[V5] Proportions adjusted (heroic silhouette)")

# === 4. SMOOTH SCULPT PASS ===
# Use corrective smooth modifier for organic feel
smooth_mod = body.modifiers.new('CorrectiveSmooth', 'CORRECTIVE_SMOOTH')
smooth_mod.factor = 0.4
smooth_mod.iterations = 5
smooth_mod.smooth_type = 'LENGTH_WEIGHTED'
bpy.ops.object.modifier_apply(modifier='CorrectiveSmooth')
print("[V5] Corrective smooth applied")

# === 5. DECIMATE: keep game-friendly polycount ===
# Target: ~8000-12000 tris for mobile/web game character
current_faces = len(body.data.polygons)
if current_faces > 12000:
    dec = body.modifiers.new('Decimate', 'DECIMATE')
    dec.ratio = min(1.0, 10000 / current_faces)
    bpy.ops.object.modifier_apply(modifier='Decimate')
    print(f"[V5] Decimated: {len(body.data.polygons)} faces")
else:
    print(f"[V5] Polycount OK: {current_faces} faces")

# Final stats
print(f"[V5] Final: {len(body.data.vertices)} verts, {len(body.data.polygons)} faces")

# === EXPORT FBX (for Mixamo) ===
bpy.ops.export_scene.fbx(
    filepath=output_path.replace('.glb', '.fbx'),
    use_selection=False,
    apply_scale_options='FBX_SCALE_ALL',
    mesh_smooth_type='FACE',
)

# === EXPORT GLB (for direct testing) ===
bpy.ops.export_scene.gltf(
    filepath=output_path,
    export_format='GLB',
    use_selection=False,
    export_apply=True,
    export_yup=True,
)

import os
print(f"\n[V5] === DONE ===")
print(f"[V5] GLB: {output_path} ({os.path.getsize(output_path)/1024:.0f} KB)")
print(f"[V5] FBX: {output_path.replace('.glb','.fbx')} ({os.path.getsize(output_path.replace('.glb','.fbx'))/1024:.0f} KB)")
