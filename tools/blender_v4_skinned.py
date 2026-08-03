"""
Huntress v4: Rigid-body skinned mesh conversion.
Converts controller-rig (CTRL_* empties) to proper Armature+SkinnedMesh.
Each mesh part gets 100% weight to its original controller bone.
"""
import bpy
import sys
from mathutils import Vector

# Parse args
argv = sys.argv
args_start = argv.index('--') + 1 if '--' in argv else len(argv)
args = argv[args_start:]
input_path = args[args.index('--input') + 1]
output_path = args[args.index('--output') + 1]

# Clean scene
bpy.ops.wm.read_factory_settings(use_empty=True)

# Import
bpy.ops.import_scene.gltf(filepath=input_path)
print(f"[V4] Imported: {input_path}")

# Gather objects
ctrl_empties = {obj.name: obj for obj in bpy.data.objects if obj.name.startswith('CTRL_') and obj.type == 'EMPTY'}
mesh_objects = [obj for obj in bpy.data.objects if obj.type == 'MESH' and obj.name != 'Cube']
print(f"[V4] {len(ctrl_empties)} controllers, {len(mesh_objects)} meshes")

# Record mesh→controller mapping
mesh_ctrl_map = {}
for m in mesh_objects:
    p = m.parent
    while p and not p.name.startswith('CTRL_'):
        p = p.parent
    mesh_ctrl_map[m.name] = p.name if p else 'CTRL_Hips'

# Store existing actions
orig_actions = {a.name: a for a in bpy.data.actions}
print(f"[V4] Actions: {list(orig_actions.keys())}")

# === Step 1: Create Armature from CTRL hierarchy ===
arm_data = bpy.data.armatures.new('Armature')
arm_obj = bpy.data.objects.new('HuntressRig', arm_data)
bpy.context.collection.objects.link(arm_obj)
bpy.context.view_layer.objects.active = arm_obj
bpy.ops.object.mode_set(mode='EDIT')

bone_map = {}  # CTRL_name → bone_name
for ctrl_name, ctrl_obj in sorted(ctrl_empties.items()):
    bone_name = ctrl_name.replace('CTRL_', '')
    bone = arm_data.edit_bones.new(bone_name)
    pos = ctrl_obj.matrix_world.translation
    bone.head = pos
    bone.tail = pos + Vector((0, 0.12, 0))
    bone.use_deform = True
    bone_map[ctrl_name] = bone_name

# Set bone parents
for ctrl_name, ctrl_obj in ctrl_empties.items():
    if ctrl_obj.parent and ctrl_obj.parent.name in ctrl_empties:
        parent_bone_name = bone_map[ctrl_obj.parent.name]
        child_bone_name = bone_map[ctrl_name]
        child_bone = arm_data.edit_bones[child_bone_name]
        parent_bone = arm_data.edit_bones[parent_bone_name]
        child_bone.parent = parent_bone

bpy.ops.object.mode_set(mode='OBJECT')
print(f"[V4] Armature: {len(arm_data.bones)} bones")

# === Step 2: Assign weights per mesh, then join ===
# First, assign vertex groups to each mesh individually (before join)
for m in mesh_objects:
    ctrl_name = mesh_ctrl_map[m.name]
    bone_name = bone_map.get(ctrl_name, 'Hips')
    # Create ALL bone vertex groups (GLTF needs all groups on joined mesh)
    for bn in bone_map.values():
        if bn not in [vg.name for vg in m.vertex_groups]:
            m.vertex_groups.new(name=bn)
    # Assign all verts to this mesh's bone with weight 1.0
    vg = m.vertex_groups[bone_name]
    vg.add(list(range(len(m.data.vertices))), 1.0, 'REPLACE')

# Unparent meshes keeping world transform
for m in mesh_objects:
    wm = m.matrix_world.copy()
    m.parent = None
    m.matrix_world = wm

# Apply transforms
bpy.ops.object.select_all(action='DESELECT')
for m in mesh_objects:
    m.select_set(True)
bpy.context.view_layer.objects.active = mesh_objects[0]
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

# Join
bpy.ops.object.join()
body = bpy.context.active_object
body.name = 'Huntress_Body'
print(f"[V4] Joined: {len(body.data.vertices)} verts, {len(body.vertex_groups)} vgroups")

# === Step 3: Parent to armature with NAME groups ===
bpy.ops.object.select_all(action='DESELECT')
body.select_set(True)
arm_obj.select_set(True)
bpy.context.view_layer.objects.active = arm_obj
bpy.ops.object.parent_set(type='ARMATURE_NAME')
print("[V4] Parented with ARMATURE_NAME (vertex groups match bones)")

# === Step 4: Convert animations ===
arm_obj.animation_data_create()

for action_name, action in orig_actions.items():
    new_action = bpy.data.actions.new(name=action_name)
    arm_obj.animation_data.action = new_action
    
    frame_start, frame_end = int(action.frame_range[0]), int(action.frame_range[1])
    
    for frame in range(frame_start, frame_end + 1):
        bpy.context.scene.frame_set(frame)
        
        # Apply original action to empties
        for ctrl_name, ctrl_obj in ctrl_empties.items():
            if ctrl_obj.animation_data:
                ctrl_obj.animation_data.action = action
        bpy.context.view_layer.update()
        
        # Transfer to pose bones
        bpy.ops.object.mode_set(mode='POSE')
        for ctrl_name, bone_name in bone_map.items():
            ctrl_obj = ctrl_empties[ctrl_name]
            pb = arm_obj.pose.bones.get(bone_name)
            if not pb:
                continue
            
            # Relative transform: ctrl world vs bone rest world
            ctrl_world = ctrl_obj.matrix_world
            bone_rest = arm_obj.matrix_world @ pb.bone.matrix_local
            relative = bone_rest.inverted() @ ctrl_world
            
            pb.location = relative.to_translation()
            pb.rotation_quaternion = relative.to_quaternion()
            pb.keyframe_insert(data_path='location', frame=frame)
            pb.keyframe_insert(data_path='rotation_quaternion', frame=frame)
        
        bpy.ops.object.mode_set(mode='OBJECT')
    
    new_action.use_fake_user = True
    print(f"[V4]   Baked: {action_name} ({frame_end - frame_start + 1} frames)")

# Set Idle as default
idle = bpy.data.actions.get('Idle')
if idle:
    arm_obj.animation_data.action = idle

# Clean action names (.001 suffix) — remove originals first
for a in list(bpy.data.actions):
    if not a.use_fake_user:
        bpy.data.actions.remove(a)
for a in bpy.data.actions:
    if a.name.endswith('.001'):
        a.name = a.name[:-4]

# === Step 5: Cleanup ===
bpy.ops.object.select_all(action='DESELECT')
for obj in list(bpy.data.objects):
    if obj.type in ('EMPTY', 'CAMERA', 'LIGHT') or obj.name == 'Cube':
        obj.select_set(True)
bpy.ops.object.delete()

# Remove old actions (empty-based)
for a in list(bpy.data.actions):
    if a.name not in orig_actions and not a.use_fake_user:
        bpy.data.actions.remove(a)

# === Step 6: Export ===
bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(
    filepath=output_path,
    export_format='GLB',
    use_selection=False,
    export_animations=True,
    export_skins=True,
    export_rest_position_armature=True,
    export_apply=False,
    export_yup=True,
    export_animation_mode='ACTIONS',
)

import os
size_kb = os.path.getsize(output_path) / 1024
print(f"\n[V4] === DONE ===")
print(f"[V4] Output: {output_path}")
print(f"[V4] Size: {size_kb:.0f} KB")
print(f"[V4] Bones: {len(arm_data.bones)}")
print(f"[V4] Verts: {len(body.data.vertices)}")
print(f"[V4] Actions: {[a.name for a in bpy.data.actions if a.use_fake_user]}")
