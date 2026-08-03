/**
 * Premium 2.5D v2 — 16-Direction Sprite System
 * 
 * - 16 unique direction textures (NO flip/mirror)
 * - Right-hand weapon, left-hand casting (anatomically fixed)
 * - 22.5° per direction step
 * - 3° hysteresis + 70ms minimum facing hold
 * - Lazy atlas loading (Idle/Run preloaded, others on-demand)
 * - Attack/Dash direction lock during contact
 */

import * as THREE from 'three';

// 16 directions clockwise from South
export const DIRECTIONS_16 = [
  's', 'ssw', 'sw', 'wsw',
  'w', 'wnw', 'nw', 'nnw',
  'n', 'nne', 'ne', 'ene',
  'e', 'ese', 'se', 'sse'
];

// Quantize facing angle to 16-direction index
// dx/dy in SCREEN space (x+ = right, y+ = down)
export function quantizeDirection16(dx, dy, previousIndex = 0) {
  if (dx * dx + dy * dy < 0.0001) return previousIndex;
  const step = Math.PI / 8; // 22.5°
  return ((Math.round(Math.atan2(-dx, dy) / step) % 16) + 16) % 16;
}

// Hysteresis: only change direction if angle difference > threshold
export function applyHysteresis(newIndex, prevIndex, dx, dy, thresholdDeg = 3) {
  if (newIndex === prevIndex) return prevIndex;
  const angle = Math.atan2(-dx, dy);
  const step = Math.PI / 8;
  const centerAngle = prevIndex * step;
  let diff = angle - centerAngle;
  while (diff > Math.PI) diff -= 2 * Math.PI;
  while (diff < -Math.PI) diff += 2 * Math.PI;
  const threshold = (step / 2) + (thresholdDeg * Math.PI / 180);
  return Math.abs(diff) > threshold ? newIndex : prevIndex;
}

/**
 * Premium25Dv2 — 16-direction sprite controller
 */
export class Premium25Dv2 {
  constructor(scene, camera, playerRoot, visualRoot) {
    this.scene = scene;
    this.camera = camera;
    this.playerRoot = playerRoot;
    this.visualRoot = visualRoot;

    this.active = false;
    this.dirIndex = 0;        // current 16-dir index
    this.lastDirTime = 0;     // timestamp of last direction change
    this.dirLocked = false;   // lock during attack/dash contact
    this.currentClip = 'idle';
    this.frame = 0;
    this.timer = 0;

    // Atlas cache: { clipName: { dirIndex: THREE.Texture } }
    this.atlasCache = {};
    this.preloadedClips = new Set();

    // Sprite mesh
    const geo = new THREE.PlaneGeometry(2.0, 2.0);
    const mat = new THREE.MeshBasicMaterial({
      transparent: true, alphaTest: 0.02, depthWrite: false,
      side: THREE.DoubleSide, blending: THREE.NormalBlending,
    });
    this.sprite = new THREE.Mesh(geo, mat);
    this.sprite.position.y = 0.55;
    this.sprite.visible = false;
    this.visualRoot.add(this.sprite);

    // Contact shadow
    this.shadow = null;

    // Clip manifest (will be loaded)
    this.manifest = null;
    this.basePath = './sprites/huntress25d-v2/';
  }

  async load(manifestUrl) {
    try {
      const res = await fetch(manifestUrl || this.basePath + 'manifest.json');
      this.manifest = await res.json();
    } catch (e) {
      // No manifest yet — use placeholder structure
      this.manifest = {
        clips: {
          idle: { frames: 8, fps: 6, loop: true },
          run: { frames: 10, fps: 12, loop: true },
          dash: { frames: 8, fps: 16, loop: false, eventFrame: 2 },
          moving_attack: { frames: 10, fps: 14, loop: false, eventFrame: 5 },
          gesture_skill: { frames: 12, fps: 12, loop: false, eventFrame: 7 },
          hit: { frames: 6, fps: 14, loop: false },
          death: { frames: 12, fps: 10, loop: false },
        }
      };
    }

    // Preload idle and run for all 16 directions
    await this._preloadClip('idle');
    await this._preloadClip('run');

    this.active = true;
    this.sprite.visible = true;
    console.log(`✅ Premium 2.5D v2 (16-dir) ready. Preloaded: idle, run`);
  }

  async _preloadClip(clipName) {
    if (this.preloadedClips.has(clipName)) return;
    const loader = new THREE.TextureLoader();
    if (!this.atlasCache[clipName]) this.atlasCache[clipName] = {};

    for (let i = 0; i < 16; i++) {
      const dir = DIRECTIONS_16[i];
      const path = `${this.basePath}${clipName}/huntress_${clipName}_${dir}.png`;
      try {
        const tex = await loader.loadAsync(path);
        tex.magFilter = THREE.LinearFilter;
        tex.minFilter = THREE.LinearFilter;
        tex.colorSpace = THREE.SRGBColorSpace;
        const clipData = this.manifest.clips[clipName];
        if (clipData) {
          tex.repeat.set(1 / clipData.frames, 1);
          tex.offset.set(0, 0);
        }
        this.atlasCache[clipName][i] = tex;
      } catch (e) {
        // Missing direction — will assign fallback below
      }
    }

    // Fill missing directions with nearest available (no flip!)
    for (let i = 0; i < 16; i++) {
      if (this.atlasCache[clipName][i]) continue;
      // Search nearest loaded direction (±1, ±2, etc.)
      for (let offset = 1; offset <= 8; offset++) {
        const prev = (i - offset + 16) % 16;
        const next = (i + offset) % 16;
        if (this.atlasCache[clipName][prev]) {
          this.atlasCache[clipName][i] = this.atlasCache[clipName][prev];
          break;
        }
        if (this.atlasCache[clipName][next]) {
          this.atlasCache[clipName][i] = this.atlasCache[clipName][next];
          break;
        }
      }
    }

    const loaded = Object.keys(this.atlasCache[clipName]).length;
    this.preloadedClips.add(clipName);
    console.log(`[P25Dv2] ${clipName}: ${loaded}/16 directions (fallback applied)`);
  }

  // Lazy load action atlas when needed
  async _ensureClipLoaded(clipName) {
    if (this.preloadedClips.has(clipName)) return;
    await this._preloadClip(clipName);
  }

  /**
   * Update every frame
   * @param {object} state - game state
   * @param {number} dt - delta time
   * @param {string} animState - current animation state name from sprite state machine
   */
  update(state, dt, animState) {
    if (!this.active) return;

    const { playerX, playerZ, playerMoving, playerDirX, playerDirZ } = state;
    const now = performance.now();

    // === DIRECTION QUANTIZATION ===
    let dx = 0, dy = 0;
    if (playerMoving) {
      dx = playerDirX;
      dy = playerDirZ; // screen y+ = world z+ (toward camera = down)
    } else if (state.mouseWorldX !== undefined) {
      dx = state.mouseWorldX - playerX;
      dy = (state.mouseWorldZ || playerZ) - playerZ;
    }

    if (!this.dirLocked) {
      const rawIndex = quantizeDirection16(dx, dy, this.dirIndex);
      const newIndex = applyHysteresis(rawIndex, this.dirIndex, dx, dy, 3);

      // Minimum facing hold: 70ms
      if (newIndex !== this.dirIndex && (now - this.lastDirTime) > 70) {
        this.dirIndex = newIndex;
        this.lastDirTime = now;
      }
    }

    // === CLIP MAPPING ===
    const clipMap = {
      idle: 'idle', run: 'run', run_stop: 'run',
      dash: 'dash', attack: 'moving_attack', attack_move: 'moving_attack',
      gesture: 'gesture_skill', hit: 'hit', death: 'death',
    };
    const targetClip = clipMap[animState] || 'idle';

    // Direction lock during attack/dash contact
    if ((targetClip === 'moving_attack' || targetClip === 'dash') && !this.dirLocked) {
      this.dirLocked = true;
    }
    if (targetClip === 'idle' || targetClip === 'run') {
      this.dirLocked = false;
    }

    // Ensure atlas is loaded
    this._ensureClipLoaded(targetClip);

    // Clip changed
    if (targetClip !== this.currentClip) {
      this.currentClip = targetClip;
      this.frame = 0;
      this.timer = 0;
    }

    // Texture swap (clip + direction)
    const tex = this.atlasCache[this.currentClip]?.[this.dirIndex];
    if (tex && this.sprite.material.map !== tex) {
      this.sprite.material.map = tex;
      this.sprite.material.needsUpdate = true;
    }

    // === FRAME ANIMATION ===
    const clipData = this.manifest.clips[this.currentClip];
    if (clipData && tex) {
      this.timer += dt * clipData.fps;
      if (this.timer >= 1) {
        this.timer = 0;
        if (!clipData.loop && this.frame >= clipData.frames - 1) {
          this.frame = clipData.frames - 1; // clamp
        } else {
          this.frame = (this.frame + 1) % clipData.frames;
        }
        tex.offset.x = this.frame / clipData.frames;
      }
    }

    // Billboard
    this.sprite.quaternion.copy(this.camera.quaternion);

    // NO scale.x flip — ever
    this.visualRoot.scale.set(1, 1, 1);
  }

  dispose() {
    // Clean up all cached textures
    for (const clip of Object.values(this.atlasCache)) {
      for (const tex of Object.values(clip)) {
        tex.dispose();
      }
    }
    this.atlasCache = {};
    if (this.sprite) {
      this.visualRoot.remove(this.sprite);
      this.sprite.geometry.dispose();
      this.sprite.material.dispose();
    }
  }
}
