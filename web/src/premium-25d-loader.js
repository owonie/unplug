/**
 * Premium 2.5D Sprite Loader
 * - 3-direction system: down, side, up (right = side flipped)
 * - Layered: color, emissive, contact_shadow, weapon_arc, gesture_vfx
 * - All clips: fixed visual scale, pivot (0.5, 0.92)
 * - Fallback to Motion Set v8 single-direction sprites
 */

// Direction state from movement/mouse angle
export function getDirection(dx, dz) {
  // Top-down perspective: dz < 0 = moving "up" on screen
  const angle = Math.atan2(dz, Math.abs(dx));
  if (angle < -0.6) return 'up';    // moving away from camera
  if (angle > 0.6) return 'down';   // moving toward camera
  return 'side';                     // left/right
}

// Get facing flip (side sprites: negative X = flip)
export function getFacing(dx) {
  return dx < 0 ? -1 : 1;
}

// Premium 2.5D clip manifest (from ASSET_MANIFEST_KO.md)
export const PREMIUM_25D_CLIPS = {
  idle:           { frames: 8,  fps: 6,  loop: true  },
  run:            { frames: 10, fps: 12, loop: true  },
  run_stop:       { frames: 6,  fps: 12, loop: false },
  dash:           { frames: 8,  fps: 16, loop: false },
  attack_move:    { frames: 10, fps: 14, loop: false },
  gesture:        { frames: 12, fps: 12, loop: false },
  hit:            { frames: 6,  fps: 14, loop: false },
  death:          { frames: 12, fps: 10, loop: false },
};

// File naming: huntress_{action}_{direction}.png
// Example: huntress_run_side.png, huntress_idle_down.png
export function getSpriteFileName(action, direction) {
  return `./sprites/huntress/premium25d/huntress_${action}_${direction}.png`;
}

// Layer types
export const LAYERS = {
  COLOR: 'color',           // main body (NormalBlending)
  EMISSIVE: 'emissive',     // rune blade glow (AdditiveBlending, optional)
  CONTACT_SHADOW: 'shadow', // ground-fixed shadow
  WEAPON_ARC: 'weapon_arc', // attack VFX (AdditiveBlending)
  GESTURE_VFX: 'gesture',   // rune circle/bolt flipbook
};

// Technical specs
export const SPEC = {
  cellSize: 256,            // runtime cell (256×256)
  masterCellSize: 512,      // source cell (512×512)
  pivot: { x: 0.5, y: 0.92 },
  alphaTest: 0.02,
  edgeDilation: 2,          // px
  colorSpace: 'sRGB',
  filter: 'LinearFilter',
  depthWrite: false,
  fixedScale: true,         // NO per-clip scale changes
  directions: ['down', 'side', 'up'],  // right = side flipped
  maxHeadBounce: 0.015,     // 1.5% max
  lightTint: 0.12,          // 10-15% env light on sprite
};
