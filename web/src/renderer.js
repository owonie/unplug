import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { loadAtlas, applyAtlasFrame, makeVfxMaterial, makeItemMaterial } from './atlas-loader.js';
import { vfxMethods, vfxShieldMethods, vfxDirectionalMethods } from './vfx.js';

export class ThreeRenderer {
  constructor(canvas) {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Camera — top-down follow
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 200);
    this.camera.position.set(50, 12, 60); // 플레이어 시작점(50,50) 기준
    this.camera.lookAt(50, 0, 50);

    // Resize
    window.addEventListener('resize', () => {
      const w = window.innerWidth, h = window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });

    // === ART: Dark dungeon with naturalistic warm/cool lighting ===
    this.scene.background = new THREE.Color(0x0a0a0f);

    // KEY LIGHT: warm torchlight from upper-right (주광)
    const key = new THREE.DirectionalLight(0xffd4a0, 1.3);
    key.position.set(8, 20, 12);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.left = -30;
    key.shadow.camera.right = 30;
    key.shadow.camera.top = 30;
    key.shadow.camera.bottom = -30;
    this.scene.add(key);

    // FILL LIGHT: cool moonlight from opposite (보조광)
    const fill = new THREE.DirectionalLight(0x6080bb, 0.35);
    fill.position.set(-10, 12, -8);
    this.scene.add(fill);

    // AMBIENT: very subtle warm (그림자가 완전 검정이 되지 않도록)
    const ambient = new THREE.AmbientLight(0x443322, 0.35);
    this.scene.add(ambient);

    // Player light — warm point light follows player (횃불 느낌)
    this.playerLight = new THREE.PointLight(0xffcc88, 2.5, 14);
    this.playerLight.position.set(50, 3, 50);
    this.scene.add(this.playerLight);

    // === PROCEDURAL GROUND SHADER: dark stone tiles + cracks + rune circle ===
    const groundGeo = new THREE.PlaneGeometry(120, 120, 1, 1);
    const groundMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPlayerPos: { value: new THREE.Vector2(50, 50) },
        uKeyColor: { value: new THREE.Color(0xffd4a0) },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorldPos;
        void main() {
          vUv = uv;
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec2 uPlayerPos;
        uniform vec3 uKeyColor;
        varying vec2 vUv;
        varying vec3 vWorldPos;

        // Simplex-like noise
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          float a = hash(i); float b = hash(i + vec2(1,0));
          float c = hash(i + vec2(0,1)); float d = hash(i + vec2(1,1));
          return mix(mix(a,b,f.x), mix(c,d,f.x), f.y);
        }

        // Voronoi for stone tile pattern
        float voronoi(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          float minDist = 1.0;
          for(int y=-1; y<=1; y++) {
            for(int x=-1; x<=1; x++) {
              vec2 neighbor = vec2(float(x), float(y));
              vec2 point = hash(i + neighbor) * vec2(0.8) + vec2(0.1);
              float d = length(neighbor + point - f);
              minDist = min(minDist, d);
            }
          }
          return minDist;
        }

        void main() {
          vec2 worldUV = vWorldPos.xz; // world-space coords
          
          // Base stone color (warm dark brown — visible but not bright)
          vec3 baseColor = vec3(0.16, 0.13, 0.10);
          
          // Stone tile pattern (voronoi) — high detail
          float tiles = voronoi(worldUV * 2.5);
          float tileEdge = smoothstep(0.03, 0.08, tiles); // dark cracks between tiles
          baseColor *= (0.75 + tileEdge * 0.35);
          
          // Micro noise for surface roughness
          float n = noise(worldUV * 8.0) * 0.06;
          baseColor += vec3(n * 0.8, n * 0.6, n * 0.4);
          
          // Large-scale color variation
          float largeNoise = noise(worldUV * 0.15);
          baseColor *= (0.85 + largeNoise * 0.3);
          
          // Rune circle at world center (50, 50)
          float distToCenter = length(worldUV - vec2(50.0, 50.0));
          float runeRing = smoothstep(0.1, 0.0, abs(distToCenter - 10.0) - 0.15);
          runeRing += smoothstep(0.1, 0.0, abs(distToCenter - 12.0) - 0.1) * 0.5;
          vec3 runeColor = vec3(0.4, 0.25, 0.1); // warm gold-brown
          baseColor = mix(baseColor, runeColor, runeRing * 0.4);
          
          // Player proximity glow (subtle warm light around player)
          float distToPlayer = length(worldUV - uPlayerPos);
          float playerGlow = smoothstep(8.0, 1.0, distToPlayer) * 0.15;
          baseColor += uKeyColor * playerGlow;
          
          // Darken edges (natural vignette on ground)
          float edgeDist = length(worldUV - vec2(50.0, 50.0)) / 60.0;
          baseColor *= (1.0 - edgeDist * 0.5);
          
          gl_FragColor = vec4(baseColor, 1.0);
        }
      `,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(50, 0, 50);
    this.groundMat = groundMat; // reference for updating uniforms
    this.scene.add(ground);

    // Remove old ring/cross (now in shader)
    // Central rune is now part of ground shader

    // Environment: low ruined pillars
    const pillarGeo = new THREE.CylinderGeometry(0.25, 0.35, 1.8, 5);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x3a3028, roughness: 0.9 });
    const pillarPositions = [
      [35, 35], [65, 35], [35, 65], [65, 65],
      [30, 50], [70, 50], [50, 30], [50, 70],
    ];
    for (const [px, pz] of pillarPositions) {
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(px, 0.9, pz);
      pillar.castShadow = true;
      this.scene.add(pillar);
      // Broken top — no glowing sphere (decorative only, dark)
      const capGeo = new THREE.ConeGeometry(0.3, 0.3, 5);
      const cap = new THREE.Mesh(capGeo, pillarMat);
      cap.position.set(px, 1.85, pz);
      cap.rotation.x = Math.PI; // inverted
      this.scene.add(cap);
    }

    // Fog — matches background, gentle fade
    this.scene.fog = new THREE.FogExp2(0x0a0a0f, 0.006);

    // No post-processing — direct rendering for performance and visibility

    // Object pools
    this.playerGroup = null;
    this.playerSpriteMat = null;
    this.playerSpriteFrame = 0;
    this.playerSpriteTimer = 0;
    this.playerCurrentAnim = 'idle';
    this.sprites = {};
    this.enemyMeshes = [];
    this.bulletMeshes = [];
    this.orbMeshes = [];

    this.loadModels();
    // Load runtime asset pack atlases
    this.itemsAtlas = null;
    this.vfxAtlas = null;
    this._loadAtlases();
    this.playerHitFlash = 0;
    this._animLock = null;
    this._animLockTimer = 0;
    this.deathParticles = [];
    this.prevEnemyCount = 0;
    this.slashEffects = []; // {mesh, life, maxLife}
    this.elementOrbs = [];
    this._orbKey = '';
    // Hit feedback
    this._shakeTimer = 0;
    this._shakeIntensity = 0;
    this._shakeDuration = 0;
    this._hitStopTimer = 0;
    this._zoomPunchTimer = 0;
    this._zoomPunchDuration = 0;
    this._zoomPunchIntensity = 0;
  }

  async _loadAtlases() {
    try {
      this.itemsAtlas = await loadAtlas('./assets/items/items-atlas');
      this.vfxAtlas = await loadAtlas('./assets/vfx/elemental-vfx-atlas');
      console.log('✅ Runtime atlases loaded (items: 20, vfx: 16)');
    } catch (e) {
      console.warn('Atlas load failed (using fallback VFX):', e.message);
    }
  }

  async loadModels() {
    // 2D Sprite billboard system instead of 3D models
    const loader = new THREE.TextureLoader();

    // Load Huntress sprite sheets — Motion Set v8 structure
    // Each clip: { file, frames, fps, loop, eventFrame?, fallbacks[] }
    // v8 규격: 256×256 cell, pivot (0.5, 0.93), worldScale 1.0, no per-state scale
    this.sprites = {};
    const spriteData = {
      idle: {
        file: './sprites/huntress/huntress_idle_calm_v3_neutral_v5.png',
        frames: 8, fps: 6, loop: true, eventFrame: null,
        fallbacks: ['./sprites/huntress/huntress_idle_calm_v3_neutral_v4.png'],
      },
      run: {
        // Motion Set v8: Run v7 (12fr, head stable)
        // Frame timing: contact frames hold longer, flight frames pass quickly
        file: './sprites/huntress/huntress_run_head_stable_v7.png',
        frames: 12, fps: 14, loop: true, eventFrame: null,
        // Per-frame duration multiplier: subtle rhythm (not extreme)
        // Contact frames slightly longer, flight slightly shorter
        frameTiming: [1.2, 0.85, 0.85, 1.25, 1.2, 0.85, 0.85, 1.2, 0.85, 0.85, 1.25, 1.2],
        fallbacks: ['./sprites/huntress/huntress_run_neutral_v5.png', './sprites/huntress/huntress_run_neutral_v4.png'],
      },
      attack: {
        // Motion Set v8: Attack stable v8 (11fr, standing/slow attack)
        file: './sprites/huntress/huntress_attack_stable_v8.png',
        frames: 11, fps: 24, loop: false, eventFrame: 6,
        fallbacks: ['./sprites/huntress/huntress_attack_v2_neutral_v5.png', './sprites/huntress/huntress_attack_v2_neutral_v4.png'],
      },
      attack_move: {
        // Motion Set v8: Attack Move v9 (12fr, running attack)
        file: './sprites/huntress/huntress_attack_move_v9.png',
        frames: 12, fps: 24, loop: false, eventFrame: 7,
        fallbacks: ['./sprites/huntress/huntress_attack_stable_v8.png'],
      },
      dash: {
        // Motion Set v8: Dash v8 (10fr@36fps, head stable, body only)
        file: './sprites/huntress/huntress_dash_v8.png',
        frames: 10, fps: 36, loop: false, eventFrame: 2,
        fallbacks: ['./sprites/huntress/huntress_dash_neutral_v5.png', './sprites/huntress/huntress_dash_neutral_v4.png'],
      },
      gesture: {
        // Motion Set v8: Gesture Cast v8 (12fr@24fps, body only)
        file: './sprites/huntress/huntress_gesture_cast_v8.png',
        frames: 12, fps: 24, loop: false, eventFrame: 9,
        fallbacks: ['./sprites/huntress/huntress_gesture_cast_neutral_v5.png', './sprites/huntress/huntress_gesture_cast_neutral_v4.png'],
      },
      hit: {
        // Motion Set v8: Hit v8 (6fr@24fps, impactFrame 1, staggerFrame 2)
        file: './sprites/huntress/huntress_hit_v8.png',
        frames: 6, fps: 24, loop: false, eventFrame: 1,
        fallbacks: ['./sprites/huntress/huntress_hit_neutral_v5.png', './sprites/huntress/huntress_hit_neutral_v4.png'],
      },
      death: {
        // Motion Set v8: Death v8 (11fr@18fps, hold frame 10)
        file: './sprites/huntress/huntress_death_v8.png',
        frames: 11, fps: 18, loop: false, eventFrame: null,
        fallbacks: ['./sprites/huntress/huntress_death_neutral_v5.png', './sprites/huntress/huntress_death_neutral_v4.png'],
      },
      revive: {
        // Motion Set v8: Revive v8 (12fr@20fps, readyFrame 11)
        file: './sprites/huntress/huntress_revive_v8.png',
        frames: 12, fps: 20, loop: false, eventFrame: 11,
        fallbacks: ['./sprites/huntress/huntress_revive_neutral_v5.png', './sprites/huntress/huntress_revive_neutral_v4.png'],
      },
      run_stop: {
        // Motion Set v8: Run Stop v8 (6fr@18fps, idleHandoff frame 5)
        file: './sprites/huntress/huntress_run_stop_v8.png',
        frames: 6, fps: 18, loop: false, eventFrame: 5,
        fallbacks: [],
      },
    };

    for (const [key, data] of Object.entries(spriteData)) {
      const candidates = [data.file, ...(data.fallbacks || [])];
      let loaded = false;
      for (const path of candidates) {
        try {
          const tex = await loader.loadAsync(path);
          tex.magFilter = THREE.LinearFilter;
          tex.minFilter = THREE.LinearFilter;
          tex.colorSpace = THREE.SRGBColorSpace;
          this.sprites[key] = {
            texture: tex, frames: data.frames, speed: data.fps,
            loop: data.loop !== false, eventFrame: data.eventFrame,
          };
          loaded = true;
          break;
        } catch (e) {
          console.warn(`Sprite load failed: ${path}, trying next...`);
        }
      }
      if (!loaded) console.warn(`All candidates failed for: ${key}`);
    }

    // Load contact shadow
    try {
      const shadowTex = await loader.loadAsync('./sprites/huntress/huntress_contact_shadow.png');
      shadowTex.magFilter = THREE.LinearFilter;
      shadowTex.minFilter = THREE.LinearFilter;
      shadowTex.colorSpace = THREE.SRGBColorSpace;
      this._contactShadowTex = shadowTex;
    } catch (e) {
      console.warn('Contact shadow not loaded:', e.message);
    }

    // Load weapon arc VFX (separate sprite, additive blending)
    try {
      const arcTex = await loader.loadAsync('./sprites/vfx/weapon_arc_v1.png');
      arcTex.magFilter = THREE.LinearFilter;
      arcTex.minFilter = THREE.LinearFilter;
      arcTex.colorSpace = THREE.SRGBColorSpace;
      this._weaponArcTex = arcTex;
    } catch (e) {
      console.warn('Weapon arc not loaded:', e.message);
    }

    this.setupSpritePlayer();
    console.log('✅ Sprite system loaded (neutral_light_v4)');

    // === 3D GLB PLAYER (feature flag: ?3d or ?3dv2 or ?3dv3 or ?3dv4) ===
    if (window.location.search.includes('3dv4')) {
      await this._load3DPlayer('./models/huntress_skinned_v4.glb');
    } else if (window.location.search.includes('3dv3')) {
      await this._load3DPlayer('./models/huntress_commercial_polish_v3.glb');
    } else if (window.location.search.includes('3dv2')) {
      await this._load3DPlayer('./models/huntress_lowpoly_refined_v2.glb');
    } else if (window.location.search.includes('3d')) {
      await this._load3DPlayer('./models/huntress_lowpoly_prototype_v1.glb');
    }

    // Load Ash Hound enemy sprites
    this.ashHoundSprites = {};
    const ashHoundData = {
      idle: { file: './sprites/ash_hound/ash_hound_idle.png', frames: 6, speed: 10, loop: true },
      attack: { file: './sprites/ash_hound/ash_hound_attack.png', frames: 6, speed: 18, loop: false, eventFrame: 3 },
      death: { file: './sprites/ash_hound/ash_hound_death.png', frames: 8, speed: 14, loop: false },
    };
    for (const [key, data] of Object.entries(ashHoundData)) {
      try {
        const tex = await loader.loadAsync(data.file);
        tex.magFilter = THREE.LinearFilter;
        tex.minFilter = THREE.LinearFilter;
        tex.colorSpace = THREE.SRGBColorSpace;
        this.ashHoundSprites[key] = { texture: tex, frames: data.frames, speed: data.speed, loop: data.loop, eventFrame: data.eventFrame || null };
      } catch (e) {
        console.warn(`Ash Hound sprite failed: ${key}`);
      }
    }
    if (this.ashHoundSprites.idle) console.log('✅ Ash Hound sprites loaded');
  }

  // === 3D GLB PLAYER SYSTEM ===
  async _load3DPlayer(modelPath) {
    try {
      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync(modelPath);

      // Hide sprite player
      if (this._spriteA) this._spriteA.visible = false;
      if (this._spriteB) this._spriteB.visible = false;
      if (this._contactShadow) this._contactShadow.visible = false;

      // Setup 3D model with correction node (+Z forward → +X forward)
      this._3dModel = gltf.scene;
      this._3dModel.traverse(child => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Compute bounds for y=0 correction and scale
      const box = new THREE.Box3().setFromObject(this._3dModel);
      const size = box.getSize(new THREE.Vector3());

      // Target height: ~1.6 world units (same as sprite)
      const targetHeight = 1.6;
      const modelScale = targetHeight / size.y;
      this._3dModel.scale.setScalar(modelScale);

      // Model correction: +Z forward → +X forward (baseYaw = PI/2)
      this._3dModelCorrection = new THREE.Object3D();
      this._3dModelCorrection.rotation.y = Math.PI / 2;
      this._3dModelCorrection.add(this._3dModel);

      // Offset so feet are at y=0
      const feetOffset = -box.min.y * modelScale;
      this._3dModel.position.y = feetOffset;

      // Visual root for 3D (separate from sprite visualRoot)
      this._3dVisualRoot = new THREE.Object3D();
      this._3dVisualRoot.add(this._3dModelCorrection);
      this.playerRoot.add(this._3dVisualRoot);

      // AnimationMixer
      this._mixer = new THREE.AnimationMixer(this._3dModel);
      this._3dClips = {};
      this._3dActions = {};
      gltf.animations.forEach(clip => {
        this._3dClips[clip.name] = clip;
        const action = this._mixer.clipAction(clip);
        this._3dActions[clip.name] = action;
      });

      // State mapping: game state → clip name
      this._3dStateMap = {
        idle: 'Idle',
        run: 'Run',
        run_stop: 'Idle', // no dedicated clip, use idle
        dash: 'Dash',
        attack: 'Attack',
        attack_move: 'Attack',
        gesture: 'GestureSkill',
        hit: 'Hit',
        death: 'Death',
      };

      // Clip config from Codex contract
      this._3dClipConfig = {
        Idle:         { loop: THREE.LoopRepeat, crossIn: 0.12 },
        Run:          { loop: THREE.LoopRepeat, crossIn: 0.12 },
        Dash:         { loop: THREE.LoopOnce, crossIn: 0.04, clamp: true },
        Attack:       { loop: THREE.LoopOnce, crossIn: 0.07, clamp: false, lockDuration: 0.55 },
        GestureSkill: { loop: THREE.LoopOnce, crossIn: 0.08, clamp: true },
        Hit:          { loop: THREE.LoopOnce, crossIn: 0.03, clamp: true, lockDuration: 0.42 },
        Death:        { loop: THREE.LoopOnce, crossIn: 0.06, clamp: true },
      };

      // State priority (higher = overrides lower)
      this._3dPriority = { Idle: 0, Run: 1, Attack: 2, GestureSkill: 3, Hit: 4, Dash: 5, Death: 6 };

      // Start idle
      this._3dCurrentClip = 'Idle';
      const idleAction = this._3dActions['Idle'];
      idleAction.setLoop(THREE.LoopRepeat);
      idleAction.play();

      // Dash timeScale sync
      // game dash varies by element: fire=0.05s, thunder=0.12s, poison=0.15s, default=0.2~0.3s
      // We'll set dynamically when dash activates

      this._use3D = true;
      this._3dFacingAngle = 0;
      console.log('✅ 3D GLB player loaded', { scale: modelScale.toFixed(3), clips: Object.keys(this._3dClips) });
    } catch (e) {
      console.warn('3D player load failed, using sprites:', e.message);
      this._use3D = false;
    }
  }

  _update3DPlayer(state, dt) {
    if (!this._use3D || !this._mixer) return;

    // Update mixer
    this._mixer.update(dt);

    // Determine target clip from game state
    const anim = this.playerCurrentAnim;
    const targetClipName = this._3dStateMap[anim] || 'Idle';

    // Transition clips (with priority check)
    if (targetClipName !== this._3dCurrentClip) {
      const curPriority = this._3dPriority[this._3dCurrentClip] || 0;
      const newPriority = this._3dPriority[targetClipName] || 0;
      const config = this._3dClipConfig[targetClipName] || { crossIn: 0.1 };
      const nextAction = this._3dActions[targetClipName];

      if (nextAction && (newPriority >= curPriority || this._3dCurrentClip === targetClipName)) {
        const prevAction = this._3dActions[this._3dCurrentClip];

        nextAction.reset();
        nextAction.setLoop(config.loop || THREE.LoopRepeat);
        if (config.clamp) nextAction.clampWhenFinished = true;

        // Dash timeScale sync with game
        if (targetClipName === 'Dash' && state.playerDashing) {
          // Rough game dash durations by type
          const dashDurations = { 1: 0.05, 3: 0.12, 4: 0.15, 5: 0.25, 0: 0.25 };
          const gameDash = dashDurations[state.dashType] || 0.25;
          nextAction.timeScale = 0.55 / Math.max(0.15, gameDash);
        } else {
          nextAction.timeScale = 1.0;
        }

        nextAction.play();
        if (prevAction) {
          prevAction.crossFadeTo(nextAction, config.crossIn, true);
        }
        this._3dCurrentClip = targetClipName;
      }
    }

    // Facing: smooth Y rotation toward movement/mouse direction
    let targetAngle = this._3dFacingAngle;
    if (state.playerMoving) {
      targetAngle = Math.atan2(state.playerDirX, -state.playerDirZ);
    } else if (state.mouseWorldX !== undefined) {
      const dx = state.mouseWorldX - state.playerX;
      const dz = (state.mouseWorldZ || state.playerZ) - state.playerZ;
      if (Math.abs(dx) > 0.1 || Math.abs(dz) > 0.1) {
        targetAngle = Math.atan2(dx, -dz);
      }
    }
    // Smooth rotation
    let angleDiff = targetAngle - this._3dFacingAngle;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    this._3dFacingAngle += angleDiff * Math.min(1, 12 * dt);
    this._3dVisualRoot.rotation.y = this._3dFacingAngle;
  }

  _recolorTexture(tex) {
    // v4 neutral light — no recolor needed, original clean art
    return tex;
  }

  setupSpritePlayer() {
    if (!this.sprites.idle) { this.setupFallbackPlayer(); return; }

    // === ARCHITECTURE: playerRoot (collision body) / visualRoot (sprites) separation ===
    // playerRoot: world position (collision body, gameplay logic)
    this.playerRoot = new THREE.Object3D();
    this.playerRoot.position.set(30, 0, 30);
    this.scene.add(this.playerRoot);

    // visualRoot: attached to playerRoot, holds all visual layers
    this.visualRoot = new THREE.Object3D();
    this.playerRoot.add(this.visualRoot);

    // === DUAL-SPRITE CROSSFADE SYSTEM ===
    // Two identical plane meshes: spriteA (current) and spriteB (outgoing)
    const geo = new THREE.PlaneGeometry(1.6, 1.6);

    // Sprite A (primary/incoming)
    const texA = this.sprites.idle.texture.clone();
    texA.repeat.set(1 / this.sprites.idle.frames, 1);
    texA.offset.set(0, 0);
    const matA = new THREE.MeshBasicMaterial({
      map: texA, transparent: true, side: THREE.DoubleSide,
      alphaTest: 0.02, depthWrite: false,
      blending: THREE.NormalBlending, // v4: NormalBlending on body
    });
    // Subtle ambient tint (10-20% desaturated scene color)
    matA.color = new THREE.Color(0xf4eef0);
    this._spriteA = new THREE.Mesh(geo, matA);
    this._spriteA.position.y = 0.45; // pivot-based offset for 1.6 geo
    this.visualRoot.add(this._spriteA);

    // Sprite B (outgoing — fades out during crossfade)
    const texB = this.sprites.idle.texture.clone();
    texB.repeat.set(1 / this.sprites.idle.frames, 1);
    texB.offset.set(0, 0);
    const matB = new THREE.MeshBasicMaterial({
      map: texB, transparent: true, side: THREE.DoubleSide,
      alphaTest: 0.02, depthWrite: false, opacity: 0,
      blending: THREE.NormalBlending,
    });
    matB.color = new THREE.Color(0xf4eef0);
    this._spriteB = new THREE.Mesh(geo.clone(), matB);
    this._spriteB.position.y = 0.45;
    this._spriteB.visible = false;
    this.visualRoot.add(this._spriteB);

    // Crossfade state
    this._crossfade = { active: false, progress: 0, duration: 0.09, outAnim: null, outFrame: 0 };

    // === CONTACT SHADOW ===
    if (this._contactShadowTex) {
      const shadowMat = new THREE.MeshBasicMaterial({
        map: this._contactShadowTex, transparent: true, opacity: 0.2,
        depthWrite: false, side: THREE.DoubleSide,
        blending: THREE.NormalBlending,
      });
      const shadowGeo = new THREE.PlaneGeometry(1.6, 1.6);
      this._contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
      this._contactShadow.rotation.x = -Math.PI / 2;
      this._contactShadow.position.y = 0.02; // just above ground
      this.playerRoot.add(this._contactShadow);
    }

    // Legacy references for backward compat
    this.playerGroup = this._spriteA;
    this.playerSpriteMat = matA;
    this.playerSpriteFrame = 0;
    this.playerSpriteTimer = 0;
    this.playerCurrentAnim = 'idle';
    this.playerFacing = 1;

    // Foot rune — class/element indicator (발밑 문양)
    const runeGeo = new THREE.RingGeometry(0.4, 0.55, 24);
    const runeMat = new THREE.MeshBasicMaterial({ color: 0xDCE8FF, transparent: true, opacity: 0.2, side: THREE.DoubleSide });
    this.playerRuneMesh = new THREE.Mesh(runeGeo, runeMat);
    this.playerRuneMesh.rotation.x = -Math.PI / 2;
    this.playerRuneMesh.position.y = 0.02;
    this.playerRoot.add(this.playerRuneMesh);

    // === MOTION POLISH CONSTANTS (from huntress-motion-polish-profile.json) ===
    this._transitions = {
      idle_to_run: 0.090,
      run_to_idle: 0.110,
      locomotion_to_attack: 0.045,
      attack_to_locomotion: 0.085,
      locomotion_to_dash: 0.030,
      dash_to_locomotion: 0.070,
      any_to_hit: 0.025,
      hit_to_locomotion: 0.080,
    };
    this._contactHoldMs = 28;
    this._contactHoldTimer = 0;
    this._contactHoldActive = false;
    this._attackEventFired = false;

    console.log('✅ Player visual root setup (playerRoot/visualRoot split, dual-sprite, contact shadow)');
  }

  setupPlayer(gltf) {
    this.setupSpritePlayer();
  }

  setupFallbackPlayer() {
    const group = new THREE.Group();
    // Body
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.3, 1.0, 8, 16),
      new THREE.MeshStandardMaterial({ color: 0x3a6a2a })
    );
    body.position.y = 0.8;
    body.castShadow = true;
    group.add(body);
    // Head
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 12, 8),
      new THREE.MeshStandardMaterial({ color: 0xd4a574 })
    );
    head.position.y = 1.6;
    head.castShadow = true;
    group.add(head);

    this.playerGroup = group;
    this.scene.add(group);
  }

  update(state, dt) {
    const { playerX, playerZ, playerMoving, playerDirX, playerDirZ, enemies, bullets, orbs } = state;

    // === Hit Stop (freeze frame on big hits) ===
    if (this._hitStopTimer > 0) {
      this._hitStopTimer -= dt;
      return; // freeze everything
    }

    // === Zoom Punch recovery ===
    if (this._zoomPunchTimer > 0) {
      this._zoomPunchTimer -= dt;
      if (this._zoomPunchTimer <= 0) {
        this.camera.fov = 50; // reset to base
        this.camera.updateProjectionMatrix();
      } else {
        const progress = 1.0 - (this._zoomPunchTimer / this._zoomPunchDuration);
        this.camera.fov = 50 - this._zoomPunchIntensity * (1.0 - progress);
        this.camera.updateProjectionMatrix();
      }
    }

    // === Camera Shake (inner rig only, not chase position) ===
    let shakeX = 0, shakeZ = 0;
    if (this._shakeTimer > 0) {
      this._shakeTimer -= dt;
      const progress = Math.max(0, this._shakeTimer / this._shakeDuration);
      // Edge damping: reduce shake when player is near viewport edge (14% safe area)
      let edgeDamp = 1.0;
      if (this.playerRoot) {
        const projected = new THREE.Vector3(playerX, 0, playerZ).project(this.camera);
        const distFromEdge = Math.min(
          1.0 - Math.abs(projected.x),
          1.0 - Math.abs(projected.y)
        );
        if (distFromEdge < 0.28) { // 14% each side = 28% total margin
          edgeDamp = distFromEdge / 0.28;
        }
      }
      const intensity = this._shakeIntensity * progress * progress * edgeDamp;
      shakeX = (Math.random() - 0.5) * intensity;
      shakeZ = (Math.random() - 0.5) * intensity;
    }

    // Camera follows player smoothly (chase position — no shake applied here)
    const camSpeed = state.playerDashing && state.dashType === 1 ? 0.03 : 0.06;
    const targetCamPos = new THREE.Vector3(playerX, 12, playerZ + 10);
    this.camera.position.lerp(targetCamPos, camSpeed);
    this.camera.lookAt(playerX, 0, playerZ);
    // Inner rig shake offset (applied after chase, clamped)
    this.camera.position.x += shakeX;
    this.camera.position.z += shakeZ;

    this.playerLight.position.set(playerX, 3, playerZ);
    // Update ground shader uniforms
    if (this.groundMat && this.groundMat.uniforms) {
      this.groundMat.uniforms.uPlayerPos.value.set(playerX, playerZ);
    }

    // Player position + sprite animation (playerRoot/visualRoot architecture)
    if (this.playerRoot) {
      // === ROOT POSITION: always follows game state (collision body) ===
      // "lockRootWorldPosition" means: don't add extra code-driven offset during attack
      // (the sprite art itself has the pose change — no knock-forward needed)
      this.playerRoot.position.set(playerX, 0, playerZ);

      // === 3D Player update (if active) ===
      if (this._use3D) {
        this._update3DPlayer(state, dt);
        // Skip sprite rendering below
      }

      // visualRoot: sprites follow playerRoot (no additional transform during attack)
      // Billboard: face camera
      if (!this._use3D) this._spriteA.quaternion.copy(this.camera.quaternion);
      if (!this._use3D && this._spriteB.visible) this._spriteB.quaternion.copy(this.camera.quaternion);

      // Flip: movement direction when moving, mouse direction when idle
      let faceDir = 0;
      if (playerMoving) {
        faceDir = playerDirX;
      } else if (state.mouseWorldX !== undefined) {
        faceDir = state.mouseWorldX - playerX;
      } else if (state.nearestEnemyDirX !== undefined) {
        faceDir = state.nearestEnemyDirX;
      }
      if (faceDir < -0.01) this.playerFacing = -1;
      else if (faceDir > 0.01) this.playerFacing = 1;

      // === DIRECTION STATE (for premium 2.5D: down/side/up) ===
      // Based on movement direction relative to camera (top-down perspective)
      let dirZ = playerMoving ? playerDirZ : (state.mouseWorldZ !== undefined ? state.mouseWorldZ - playerZ : 0);
      let dirState = 'side'; // default
      if (Math.abs(dirZ) > Math.abs(faceDir) * 0.8) {
        dirState = dirZ > 0.3 ? 'down' : dirZ < -0.3 ? 'up' : 'side';
      }
      this._playerDirection = dirState; // stored for premium 2.5D texture swap

      // Scale: fixed 1.0 — NO scale change during attack/dash
      this.visualRoot.scale.set(this.playerFacing, 1, 1);

      // === CONTACT SHADOW opacity by state ===
      if (this._contactShadow) {
        let shadowOpacity = 0.20; // idle/run default
        if (state.playerDashing) shadowOpacity = 0.07; // dash travel
        else if (this._animLock === 'attack') shadowOpacity = 0.17;
        else if (this.playerCurrentAnim === 'death') shadowOpacity = 0.12;
        this._contactShadow.material.opacity = shadowOpacity;
        // Dash airborne: shrink shadow
        if (state.playerDashing) {
          this._contactShadow.scale.set(0.75, 0.75, 1);
        } else {
          this._contactShadow.scale.set(1, 1, 1);
        }
      }

      // Foot rune follows playerRoot (now local child)
      if (this.playerRuneMesh) {
        const elemRuneColors = { 1: 0xff4400, 2: 0x44ccff, 3: 0xffcc00, 4: 0x9933ff };
        const runeColor = elemRuneColors[state.element] || 0xDCE8FF;
        this.playerRuneMesh.material.color.set(runeColor);
        this.playerRuneMesh.material.opacity = state.promoted ? 0.4 : 0.15;
        this.playerRuneMesh.rotation.z = this.clock.getElapsedTime() * 0.5;
        const hpRatio = state.hp / state.maxHp;
        if (hpRatio < 0.3) {
          const blink = Math.sin(this.clock.getElapsedTime() * 10) > 0;
          this.playerRuneMesh.material.color.set(blink ? 0xff2222 : runeColor);
          this.playerRuneMesh.material.opacity = 0.5;
        }
      }

      // Hit flash
      if (state.playerHit) {
        this.playerSpriteMat.color.set(0xffffff);
        this.playerHitFlash = 0.1;
      } else if (this.playerHitFlash > 0) {
        this.playerHitFlash -= dt;
        if (this.playerHitFlash <= 0) {
          this.playerSpriteMat.color.set(0xf4eef0); // reset to neutral tint
        }
      }

      // === ANIMATION STATE MACHINE (with lock + crossfade) ===
      let targetAnim = 'idle';
      if (this._animLock && this._animLockTimer > 0) {
        this._animLockTimer -= dt;
        targetAnim = this._animLock;
        if (this._animLockTimer <= 0) {
          this._animLock = null;
          this._attackEventFired = false;
        }
      } else {
        if (state.playerDashing) {
          targetAnim = this.sprites.dash ? 'dash' : 'run';
          if (this.sprites.dash && this._animLock !== 'dash') {
            this._animLock = 'dash';
            this._animLockTimer = this.sprites.dash.frames / this.sprites.dash.speed;
          }
        } else if (state.playerHit) {
          targetAnim = 'hit';
          if (this.sprites.hit && this._animLock !== 'hit') {
            this._animLock = 'hit';
            this._animLockTimer = this.sprites.hit.frames / this.sprites.hit.speed;
          }
        } else if (state.playerAttacking) {
          // Speed-based attack selection: moving > 20% maxSpeed → attack_move
          const isMovingFast = state.playerSpeed && state.playerSpeed > 4.5 * 0.2;
          const atkClip = (isMovingFast && this.sprites.attack_move) ? 'attack_move' : 'attack';
          targetAnim = atkClip;
          if (this.sprites[atkClip] && this._animLock !== 'attack' && this._animLock !== 'attack_move') {
            this._animLock = atkClip;
            this._animLockTimer = this.sprites[atkClip].frames / this.sprites[atkClip].speed;
            this._attackEventFired = false;
            this._weaponArcStarted = false;
          }
        } else if (state.playerCasting && this.sprites.gesture) {
          targetAnim = 'gesture';
        } else if (playerMoving) {
          targetAnim = 'run';
        }
      }

      // === RUN→IDLE DECELERATION (90ms grace, 80ms cancel window, run_stop insert) ===
      if (!this._runToIdleTimer) this._runToIdleTimer = 0;
      if (!this._runToIdleFade) this._runToIdleFade = { active: false, progress: 0 };

      if (this.playerCurrentAnim === 'run' && targetAnim === 'idle') {
        if (this._runToIdleTimer === 0) {
          this._runToIdleTimer = 0.001;
        }
        this._runToIdleTimer += dt;
        if (this._runToIdleTimer < 0.090) {
          targetAnim = 'run'; // keep running during grace
        } else if (this.sprites.run_stop && state.playerSpeed > 4.5 * 0.25 && this._animLock !== 'run_stop') {
          // Fast stop: insert run_stop animation before idle
          targetAnim = 'run_stop';
          this._animLock = 'run_stop';
          this._animLockTimer = this.sprites.run_stop.frames / this.sprites.run_stop.speed;
        }
      } else if (targetAnim === 'run' && this._runToIdleTimer > 0 && this._runToIdleTimer < 0.080) {
        // Input resumed within 80ms cancel window — stay run
        this._runToIdleTimer = 0;
        this._runToIdleFade = { active: false, progress: 0 };
        this._spriteB.visible = false;
      } else if (targetAnim !== 'idle' || this.playerCurrentAnim !== 'run') {
        this._runToIdleTimer = 0;
      }

      // === ANIMATION SWITCH ===
      if (targetAnim !== this.playerCurrentAnim && this.sprites[targetAnim]) {
        const from = this.playerCurrentAnim;
        const to = targetAnim;
        const isLocomotionTransition = (from === 'run' && to === 'idle') || (from === 'idle' && to === 'run');
        const isAttackToLoco = (from === 'attack' || from === 'attack_move') && (to === 'idle' || to === 'run');
        const isLocoToAttack = (from === 'idle' || from === 'run') && (to === 'attack' || to === 'attack_move');
        const isDashToLoco = from === 'dash' && (to === 'idle' || to === 'run');
        const isGestureToLoco = from === 'gesture' && (to === 'idle' || to === 'run');
        const isHitToLoco = from === 'hit' && (to === 'idle' || to === 'run');
        const isRunStopToIdle = from === 'run_stop' && to === 'idle';
        const isRunToRunStop = from === 'run' && to === 'run_stop';

        if (isLocomotionTransition || isAttackToLoco || isLocoToAttack || isDashToLoco || isGestureToLoco || isHitToLoco || isRunStopToIdle || isRunToRunStop) {
          // Dual-sprite crossfade (same pivot/scale guaranteed)
          this._spriteB.material.map = this._spriteA.material.map;
          this._spriteB.material.opacity = 1.0;
          this._spriteB.visible = true;
          let fadeDur;
          if (from === 'run' && to === 'idle') fadeDur = 0.110;
          else if (from === 'idle' && to === 'run') fadeDur = 0.090;
          else if (isLocoToAttack) fadeDur = 0.045; // locomotion→attack
          else if (from === 'attack_move') fadeDur = 0.075; // attack_move→run
          else if (isDashToLoco) fadeDur = 0.070; // dash→locomotion
          else if (isGestureToLoco) fadeDur = 0.080; // gesture→locomotion
          else if (isHitToLoco) fadeDur = 0.080; // hit→locomotion
          else if (isRunStopToIdle) fadeDur = 0.060; // run_stop→idle
          else if (isRunToRunStop) fadeDur = 0.045; // run→run_stop (quick)
          else fadeDur = 0.085; // attack_stable→locomotion
          // Save run frame for phase preservation
          if ((isLocoToAttack || isDashToLoco || isGestureToLoco || isHitToLoco || isRunToRunStop) && from === 'run') {
            this._savedRunFrame = this.playerSpriteFrame;
          }
          this._runToIdleFade = { active: true, progress: 0, duration: fadeDur };

          // Set new clip on A — preserve run phase after attack
          this.playerCurrentAnim = targetAnim;
          // Only reset frame for non-run targets or fresh starts (preserve run phase after attack/dash)
          if ((isAttackToLoco || isDashToLoco || isGestureToLoco || isHitToLoco) && to === 'run' && this._savedRunFrame !== undefined) {
            this.playerSpriteFrame = this._savedRunFrame;
          } else {
            this.playerSpriteFrame = 0;
          }
          this.playerSpriteTimer = 0;
          const spriteInfo = this.sprites[targetAnim];
          const newTex = spriteInfo.texture.clone();
          newTex.magFilter = THREE.LinearFilter;
          newTex.minFilter = THREE.LinearFilter;
          newTex.repeat.set(1 / spriteInfo.frames, 1);
          newTex.offset.set(0, 0);
          this._spriteA.material.map = newTex;
          this._spriteA.material.opacity = 0.0;
          this._spriteA.material.needsUpdate = true;
        } else {
          // Instant switch for other transitions (attack, dash, etc.)
          this.playerCurrentAnim = targetAnim;
          this.playerSpriteFrame = 0;
          this.playerSpriteTimer = 0;
          const spriteInfo = this.sprites[targetAnim];
          const newTex = spriteInfo.texture.clone();
          newTex.magFilter = THREE.LinearFilter;
          newTex.minFilter = THREE.LinearFilter;
          newTex.repeat.set(1 / spriteInfo.frames, 1);
          newTex.offset.set(0, 0);
          this._spriteA.material.map = newTex;
          this._spriteA.material.opacity = 1.0;
          this._spriteA.material.needsUpdate = true;
          this._spriteB.visible = false;
          this._runToIdleTimer = 0;
        }
      }

      // Update Run↔Idle crossfade
      if (this._runToIdleFade && this._runToIdleFade.active) {
        this._runToIdleFade.progress += dt / this._runToIdleFade.duration;
        if (this._runToIdleFade.progress >= 1.0) {
          this._runToIdleFade.active = false;
          this._spriteA.material.opacity = 1.0;
          this._spriteB.visible = false;
          this._spriteB.material.opacity = 0;
          this._runToIdleTimer = 0;
        } else {
          const t = this._runToIdleFade.progress;
          const smooth = t * t * (3 - 2 * t); // smoothstep
          this._spriteA.material.opacity = smooth;
          this._spriteB.material.opacity = 1.0 - smooth;
        }
      }

      // Dash visual: v8 — body stays NormalBlending, no opacity/scale change
      // Afterimages spawned from code (frames 3-6)
      const dashType = state.dashType || 5;
      if (state.playerDashing) {
        if (!this._dashTrail) this._dashTrail = [];
        if (Math.random() < 0.4) this.spawnDashDecal(playerX, playerZ, state.element || 0);

        // Dash v8 afterimage: frames 3-6, spawn body clone behind player
        const dashFrame = this.playerSpriteFrame;
        if (dashFrame >= 3 && dashFrame <= 6 && this.playerCurrentAnim === 'dash') {
          // Element color at 15-25% saturation
          const elemColors = { 1: 0xffaa88, 2: 0x88ccdd, 3: 0xddcc88, 4: 0x99bb99 };
          const tint = elemColors[state.element] || 0xcccccc;
          const opacities = [0.18, 0.14, 0.09, 0.05]; // fade per spawn
          const idx = dashFrame - 3;
          const ghost = this._spriteA.clone();
          ghost.material = ghost.material.clone();
          ghost.material.opacity = opacities[idx] || 0.09;
          ghost.material.blending = THREE.NormalBlending; // NOT additive on afterimage
          ghost.material.color = new THREE.Color(tint);
          // Position behind player (opposite of movement direction)
          const offsetDist = 0.12 + idx * 0.04;
          const dirX = playerDirX || this.playerFacing;
          const dirZ = playerDirZ || 0;
          ghost.position.set(
            playerX - dirX * offsetDist,
            0.45,
            playerZ - dirZ * offsetDist
          );
          ghost.quaternion.copy(this.camera.quaternion);
          this.scene.add(ghost);
          this._dashTrail.push({ mesh: ghost, life: 0.09 + idx * 0.02 });
        }

        // Element-specific particles (small, not body changes)
        if (dashType === 4 && Math.random() < 0.5) {
          const wisp = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 4, 4),
            new THREE.MeshBasicMaterial({ color: 0x220033, transparent: true, opacity: 0.2 })
          );
          wisp.position.set(playerX + (Math.random()-0.5)*0.3, 0.3, playerZ + (Math.random()-0.5)*0.3);
          this.scene.add(wisp);
          this._dashTrail.push({ mesh: wisp, life: 0.3 });
        } else if (dashType === 3 && Math.random() < 0.4) {
          const spark = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 4, 4),
            new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.7 })
          );
          spark.position.set(playerX + (Math.random()-0.5)*0.4, 0.4 + Math.random()*0.5, playerZ + (Math.random()-0.5)*0.4);
          this.scene.add(spark);
          this._dashTrail.push({ mesh: spark, life: 0.12 });
        }
      } else {
        // Not dashing — ensure full opacity
        if (!this._runToIdleFade || !this._runToIdleFade.active) {
          this._spriteA.material.opacity = 1.0;
        }
        // Ice footprints
        if (dashType === 2 && playerMoving && Math.random() < 0.3) {
          if (!this._dashTrail) this._dashTrail = [];
          const footprint = new THREE.Mesh(
            new THREE.CircleGeometry(0.15, 6),
            new THREE.MeshBasicMaterial({ color: 0x446677, transparent: true, opacity: 0.2, side: THREE.DoubleSide })
          );
          footprint.position.set(playerX, 0.02, playerZ);
          footprint.rotation.x = -Math.PI / 2;
          this.scene.add(footprint);
          this._dashTrail.push({ mesh: footprint, life: 1.5 });
        }
      }

      // Update dash trail
      if (this._dashTrail) {
        for (let i = this._dashTrail.length - 1; i >= 0; i--) {
          this._dashTrail[i].life -= dt;
          if (this._dashTrail[i].life <= 0) {
            this.scene.remove(this._dashTrail[i].mesh);
            if (this._dashTrail[i].mesh.geometry) this._dashTrail[i].mesh.geometry.dispose();
            if (this._dashTrail[i].mesh.material) this._dashTrail[i].mesh.material.dispose();
            this._dashTrail.splice(i, 1);
          } else {
            const opacity = this._dashTrail[i].life * 1.0;
            this._dashTrail[i].mesh.traverse(c => { if (c.material && c.material.opacity !== undefined) c.material.opacity = Math.min(opacity, 0.5); });
          }
        }
      }

      // === ANIMATE FRAMES (with contact hold) ===
      const spriteInfo = this.sprites[this.playerCurrentAnim];
      if (spriteInfo && this._spriteA.material.map) {
        // Contact hold: pause on eventFrame for 28ms
        if (this._contactHoldActive) {
          this._contactHoldTimer -= dt * 1000; // ms
          if (this._contactHoldTimer <= 0) {
            this._contactHoldActive = false;
          }
          // Don't advance frame during hold
        } else {
          // Run animation speed scales with movement speed
          // Base speed 4.5 → 1.0x playback, capped for weighty feel
          let animSpeed = spriteInfo.speed;
          if (this.playerCurrentAnim === 'run' && state.playerSpeed !== undefined) {
            const speedRatio = Math.max(0.6, Math.min(1.3, state.playerSpeed / 4.5));
            animSpeed = spriteInfo.speed * speedRatio;
          }
          // Gesture: stretch animation across 2.5s timer (12fr / 2.5s = 4.8fps)
          if (this.playerCurrentAnim === 'gesture') {
            animSpeed = spriteInfo.frames / 2.5; // ~4.8fps for 12fr over 2.5s
          }
          // Per-frame timing: contact frames hold longer, flight frames pass quickly
          let frameHold = 1.0;
          if (spriteInfo.frameTiming && spriteInfo.frameTiming[this.playerSpriteFrame]) {
            frameHold = spriteInfo.frameTiming[this.playerSpriteFrame];
          }
          this.playerSpriteTimer += dt * animSpeed / frameHold;
          if (this.playerSpriteTimer >= 1) {
            this.playerSpriteTimer = 0;
            if (spriteInfo.loop === false && this.playerSpriteFrame >= spriteInfo.frames - 1) {
              this.playerSpriteFrame = spriteInfo.frames - 1;
            } else {
              this.playerSpriteFrame = (this.playerSpriteFrame + 1) % spriteInfo.frames;
            }

            // Attack contact frame: fire event + hold (both attack and attack_move)
            const isAtkAnim = this.playerCurrentAnim === 'attack' || this.playerCurrentAnim === 'attack_move';
            if (isAtkAnim && spriteInfo.eventFrame && this.playerSpriteFrame === spriteInfo.eventFrame && !this._attackEventFired) {
              this._attackEventFired = true;
              this._contactHoldActive = true;
              this._contactHoldTimer = this.playerCurrentAnim === 'attack_move' ? 24 : this._contactHoldMs;
              // Spawn slash arc VFX in mouse aim direction (separate from body)
              const aimX = state.mouseWorldX !== undefined ? state.mouseWorldX - playerX : this.playerFacing;
              const aimZ = state.mouseWorldZ !== undefined ? state.mouseWorldZ - playerZ : 0;
              // Normalize aim direction
              const aimLen = Math.sqrt(aimX * aimX + aimZ * aimZ) || 1;
              const nAimX = aimX / aimLen;
              const nAimZ = aimZ / aimLen;
              // Spawn slash VFX: from player → toward aim (1.4 unit forward)
              const slashToX = playerX + nAimX * 1.8;
              const slashToZ = playerZ + nAimZ * 1.8;
              this.spawnSlash(playerX, playerZ, slashToX, slashToZ, false, 25, state.element || 0);
              // Dispatch contact event for external sync
              if (this._onAttackContact) this._onAttackContact();
            }
            // Weapon Arc: start at frame 5 of attack clips (separate additive sprite)
            if (isAtkAnim && this.playerSpriteFrame === 5 && !this._weaponArcStarted && this._weaponArcTex) {
              this._weaponArcStarted = true;
              const wAimX = state.mouseWorldX !== undefined ? state.mouseWorldX - playerX : this.playerFacing;
              const wAimZ = state.mouseWorldZ !== undefined ? state.mouseWorldZ - playerZ : 0;
              const wLen = Math.sqrt(wAimX * wAimX + wAimZ * wAimZ) || 1;
              this._spawnWeaponArc(playerX, playerZ, state, wAimX / wLen, wAimZ / wLen);
            }
            // Dash shake on movement start frame
            if (this.playerCurrentAnim === 'dash' && this.playerSpriteFrame === 2) {
              this.shake(0.05, 0.090);
            }
          }
          this._spriteA.material.map.offset.x = this.playerSpriteFrame / spriteInfo.frames;
        }
      }
    }

    // No mixer needed for sprites

    // === Element Orbs — 항상 표시 (전직 후에도 계속 모음) ===
    const orbKey = `${state.fireLv||0}_${state.iceLv||0}_${state.thunderLv||0}_${state.poisonLv||0}_${state.promoted?1:0}`;
    if (orbKey !== this._orbKey) {
      this.elementOrbs.forEach(o => {
        this.scene.remove(o);
        if (o.geometry) o.geometry.dispose();
        if (o.material) o.material.dispose();
      });
      this.elementOrbs = [];
      this._orbKey = orbKey;

      const elemData = [
        { level: state.fireLv || 0, color: 0xff4400 },
        { level: state.iceLv || 0, color: 0x44ccff },
        { level: state.thunderLv || 0, color: 0xffcc00 },
        { level: state.poisonLv || 0, color: 0x44ff44 },
      ];
      for (const ed of elemData) {
        for (let i = 0; i < ed.level; i++) {
          const size = 0.1 + ed.level * 0.012;
          const geo = new THREE.SphereGeometry(size, 8, 6);
          const mat = new THREE.MeshBasicMaterial({ color: ed.color, transparent: true, opacity: 0.8 });
          const orb = new THREE.Mesh(geo, mat);
          const light = new THREE.PointLight(ed.color, 0.2, 1.5);
          orb.add(light);
          this.scene.add(orb);
          this.elementOrbs.push(orb);
        }
      }

      // 전직 후: 플레이어 글로우 강화 + 대기 파티클
      if (state.promoted && this.playerLight) {
        const elemColors = { 1: 0xff4400, 2: 0x44ccff, 3: 0xffcc00, 4: 0x9933ff };
        const elemColor = elemColors[state.element] || 0xffffcc;
        this.playerLight.color.set(elemColor);
        this.playerLight.intensity = 3.0;
        this.playerLight.distance = 8;

        // Ambient element particles (spawn rarely, drift upward)
        if (!this._ambientParticles) this._ambientParticles = [];
        if (Math.random() < 0.08 && this._ambientParticles.length < 6) {
          const size = 0.03 + Math.random() * 0.03;
          const geo = new THREE.SphereGeometry(size, 4, 4);
          const mat = new THREE.MeshBasicMaterial({ color: elemColor, transparent: true, opacity: 0.6 });
          const p = new THREE.Mesh(geo, mat);
          p.position.set(
            playerX + (Math.random() - 0.5) * 1.0,
            0.3 + Math.random() * 0.5,
            playerZ + (Math.random() - 0.5) * 1.0
          );
          this.scene.add(p);
          this._ambientParticles.push({ mesh: p, life: 1.5 + Math.random() });
        }
      }
      // Update ambient particles
      if (this._ambientParticles) {
        for (let i = this._ambientParticles.length - 1; i >= 0; i--) {
          const ap = this._ambientParticles[i];
          ap.mesh.position.y += dt * 0.5;
          ap.life -= dt;
          ap.mesh.material.opacity = Math.max(0, ap.life * 0.4);
          if (ap.life <= 0) {
            this.scene.remove(ap.mesh);
            ap.mesh.geometry.dispose();
            ap.mesh.material.dispose();
            this._ambientParticles.splice(i, 1);
          }
        }
      }
    }

    // Animate orbs around player (delayed follow — satellite-like)
    if (this.elementOrbs.length > 0) {
      const t = this.clock.getElapsedTime();
      const orbCount = this.elementOrbs.length;
      // Orbit center follows player with lag (creates trailing effect on movement)
      if (!this._orbCenter) this._orbCenter = { x: playerX, z: playerZ };
      const lagSpeed = 25; // very tight — orbs never leave body
      this._orbCenter.x += (playerX - this._orbCenter.x) * lagSpeed * dt;
      this._orbCenter.z += (playerZ - this._orbCenter.z) * lagSpeed * dt;
      const cx = this._orbCenter.x;
      const cz = this._orbCenter.z;

      this.elementOrbs.forEach((orb, i) => {
        // Each orb has its own phase offset → staggered trailing
        const phaseDelay = i * 0.08; // later orbs lag slightly more
        const angle = t * 2.5 + (i * Math.PI * 2 / orbCount);
        const radius = 1.0 + Math.sin(t * 1.5 + i) * 0.2;
        // Target position (orbit around lagged center)
        const targetX = cx + Math.cos(angle) * radius;
        const targetZ = cz + Math.sin(angle) * radius;
        const targetY = 0.6 + Math.sin(t * 3 + i * 2) * 0.2;
        // Each orb lerps to its target (close follow with slight inertia)
        const orbLag = 20.0 - phaseDelay * 6;
        orb.position.x += (targetX - orb.position.x) * Math.min(1, orbLag * dt);
        orb.position.z += (targetZ - orb.position.z) * Math.min(1, orbLag * dt);
        orb.position.y += (targetY - orb.position.y) * Math.min(1, 20 * dt);
      });
    }

    // Enemies
    this.updatePool(this.enemyMeshes, enemies, (e) => this.createZombie(e.type));

    // Boss
    if (state.bossActive) {
      if (!this.bossMesh) {
        const group = new THREE.Group();
        const body = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.6, 1.5, 8, 12),
          new THREE.MeshStandardMaterial({ color: 0x440000, roughness: 0.7 })
        );
        body.position.y = 1.0;
        body.castShadow = true;
        group.add(body);
        const head = new THREE.Mesh(
          new THREE.SphereGeometry(0.4, 8, 6),
          new THREE.MeshStandardMaterial({ color: 0x660000 })
        );
        head.position.y = 2.2;
        group.add(head);
        // Crown
        const crown = new THREE.Mesh(
          new THREE.ConeGeometry(0.25, 0.3, 6),
          new THREE.MeshStandardMaterial({ color: 0xffcc00, emissive: 0xff8800, emissiveIntensity: 1 })
        );
        crown.position.y = 2.6;
        group.add(crown);
        // Eyes
        const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const le = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 4), eyeMat);
        le.position.set(-0.12, 2.25, 0.3); group.add(le);
        const re = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 4), eyeMat);
        re.position.set(0.12, 2.25, 0.3); group.add(re);
        // Aura light
        const light = new THREE.PointLight(0xff2200, 2, 5);
        light.position.y = 1.5;
        group.add(light);

        this.bossMesh = group;
        this.scene.add(group);
      }
      this.bossMesh.visible = true;
      this.bossMesh.position.set(state.bossX, 0, state.bossZ);
      // Face player
      const dx = playerX - state.bossX;
      const dz = playerZ - state.bossZ;
      this.bossMesh.rotation.y = Math.atan2(dx, dz);
      // Pulse
      const pulse = 1.0 + Math.sin(this.clock.getElapsedTime() * 3) * 0.05;
      this.bossMesh.scale.set(pulse, pulse, pulse);
    } else if (this.bossMesh) {
      this.bossMesh.visible = false;
    }

    // No bullets - melee attack (create slash effect instead)
    // Bullets (enemy projectiles)
    this.updatePool(this.bulletMeshes, bullets, () => {
      // Enemy projectiles — DISTINCT from XP orbs (diamond shape, red, pulsing)
      const geo = new THREE.OctahedronGeometry(0.14, 0);
      const mat = new THREE.MeshBasicMaterial({ color: 0xff2222, transparent: true, opacity: 0.9 });
      const mesh = new THREE.Mesh(geo, mat);
      // Add inner glow point light
      const glow = new THREE.PointLight(0xff0000, 1.5, 2);
      mesh.add(glow);
      mesh.castShadow = false;
      return mesh;
    });
    this.bulletMeshes.forEach((m, i) => {
      if (m.visible && bullets[i]) {
        m.position.set(bullets[i].x, 0.5, bullets[i].z);
        // Spin for visibility
        m.rotation.y += 0.15;
        m.rotation.x += 0.1;
      }
    });

    // XP Orbs — size/color by type (0=small, 1=med, 2=large, 3=boss)
    this.updatePool(this.orbMeshes, orbs, (data) => {
      const t = data ? (data.type || 0) : 0;
      const sizes = [0.1, 0.15, 0.22, 0.3];
      const colors = [0x66eebb, 0x44ddff, 0xffcc00, 0xff88dd]; // green-cyan base, distinct from red bullets
      const emissives = [0x22cc88, 0x2288ff, 0xff8800, 0xff0088];
      const size = sizes[t] || 0.1;
      const m = new THREE.Mesh(
        new THREE.OctahedronGeometry(size, 0),
        new THREE.MeshStandardMaterial({ color: colors[t] || 0xaa88ff, emissive: emissives[t] || 0x6644ff, emissiveIntensity: 1.5, transparent: true, opacity: 0.85 })
      );
      return m;
    });

    // Animate orbs (spin + bob + 플레이어 방향 끌림)
    const t = this.clock.getElapsedTime();
    this.orbMeshes.forEach((m, i) => {
      if (m.visible) {
        m.rotation.y = t * 3 + i;
        m.rotation.x = t * 2 + i * 0.5;
        m.position.y = 0.3 + Math.sin(t * 4 + i) * 0.1;
      }
    });

    // Animate enemies (2.5D billboard — NO rotation.x tilt)
    this.enemyMeshes.forEach((m, i) => {
      if (m.visible && enemies[i]) {
        // Distance to player
        const dx = playerX - m.position.x;
        const dz = playerZ - m.position.z;
        const distToPlayer = Math.sqrt(dx * dx + dz * dz);
        const isCharging = distToPlayer > 1.5 && distToPlayer < 12;

        // === NO rotation.x tilt — billboard stays screen-vertical ===
        m.rotation.x = 0;
        
        // Minimal bob: idle 0.5%, chase 1.0% of height (0.008~0.012 units)
        const bobSpeed = isCharging ? 7 : 3;
        const bobAmount = isCharging ? 0.012 : 0.006;
        m.position.y = Math.abs(Math.sin(t * bobSpeed + i * 2)) * bobAmount;

        // Ash Hound sprite animation tick
        if (m.userData.isSprite && m.userData.spriteMat) {
          // Billboard: face camera (pure quaternion, no parent rotation leak)
          m.children.forEach(c => {
            if (c.material === m.userData.spriteMat) {
              c.quaternion.copy(this.camera.quaternion);
              // Fix foot pivot: 0.6 for 1.2 geo (pivot 0.93)
              c.position.y = 0.6;
            }
          });
          const info = m.userData.spriteInfo;
          if (info) {
            m.userData.spriteTimer += dt * info.speed;
            if (m.userData.spriteTimer >= 1) {
              m.userData.spriteTimer = 0;
              if (info.loop === false && m.userData.spriteFrame >= info.frames - 1) {
                m.userData.spriteFrame = info.frames - 1;
              } else {
                m.userData.spriteFrame = (m.userData.spriteFrame + 1) % info.frames;
              }
              m.userData.spriteMat.map.offset.x = m.userData.spriteFrame / info.frames;
            }
          }
          // Flip sprite toward player (scale.x)
          if (dx < -0.1) m.scale.x = -1;
          else if (dx > 0.1) m.scale.x = 1;
        }

        // Face player (Y rotation only for 3D mesh enemies)
        if (!m.userData.isSprite) {
          if (Math.abs(dx) > 0.1 || Math.abs(dz) > 0.1) {
            m.rotation.y = Math.atan2(dx, dz);
          }
        }

        // === CONTACT SHADOW (ground plane, fixed to ground) ===
        if (!m._contactShadow) {
          const shadowGeo = new THREE.CircleGeometry(0.4, 8);
          const shadowMat = new THREE.MeshBasicMaterial({
            color: 0x000000, transparent: true, opacity: 0.22,
            depthWrite: false, side: THREE.DoubleSide,
          });
          m._contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
          m._contactShadow.rotation.x = -Math.PI / 2;
          m._contactShadow.position.y = 0.012;
          this.scene.add(m._contactShadow);
        }
        m._contactShadow.position.x = m.position.x;
        m._contactShadow.position.z = m.position.z;
        m._contactShadow.visible = m.visible;

        // === 2.5D DEPTH SILHOUETTE (dark offset behind body) ===
        if (!m._depthSilhouette && m.userData.isSprite && m.userData.spriteMat) {
          const silGeo = new THREE.PlaneGeometry(1.2, 1.2);
          const silMat = new THREE.MeshBasicMaterial({
            map: m.userData.spriteMat.map, transparent: true, opacity: 0.18,
            color: 0x111122, depthWrite: false, side: THREE.DoubleSide,
          });
          m._depthSilhouette = new THREE.Mesh(silGeo, silMat);
          m._depthSilhouette.position.y = 0.58; // same as sprite
          m.add(m._depthSilhouette);
        }
        if (m._depthSilhouette) {
          m._depthSilhouette.quaternion.copy(this.camera.quaternion);
          // Offset: 2-3px equivalent (0.02 world units down-right)
          m._depthSilhouette.position.x = 0.02;
          m._depthSilhouette.position.z = -0.01;
        }

        // === ATTACK TELEGRAPH: ranged enemies (type 3=caster, 5=archer) show aim line ===
        const eType = enemies[i].type;
        if ((eType === 3 || eType === 5) && !m._telegraphLine) {
          const lineMat = new THREE.MeshBasicMaterial({ color: 0xff3333, transparent: true, opacity: 0, side: THREE.DoubleSide });
          const lineGeo = new THREE.PlaneGeometry(0.04, 3);
          const line = new THREE.Mesh(lineGeo, lineMat);
          line.rotation.x = -Math.PI / 2;
          this.scene.add(line);
          m._telegraphLine = line;
          m._telegraphTimer = 0;
        }
        if (m._telegraphLine) {
          // Show telegraph when within attack range (5-8 units)
          if (distToPlayer < 8 && distToPlayer > 1) {
            m._telegraphTimer += dt;
            // Pulse opacity
            const pulse = Math.abs(Math.sin(m._telegraphTimer * 8)) * 0.4;
            m._telegraphLine.material.opacity = pulse;
            // Position: from enemy to halfway to player
            const midX = m.position.x + dx * 0.4;
            const midZ = m.position.z + dz * 0.4;
            m._telegraphLine.position.set(midX, 0.03, midZ);
            m._telegraphLine.rotation.z = -Math.atan2(dz, dx);
            m._telegraphLine.scale.y = distToPlayer * 0.5;
            m._telegraphLine.visible = true;
          } else {
            m._telegraphLine.visible = false;
            m._telegraphTimer = 0;
          }
        }

        // === CHARGER TELEGRAPH: type 1,6 show rush direction ===
        if ((eType === 1 || eType === 6) && !m._rushLine) {
          const rushMat = new THREE.MeshBasicMaterial({ color: 0xff6600, transparent: true, opacity: 0, side: THREE.DoubleSide });
          const rushGeo = new THREE.PlaneGeometry(0.08, 2);
          const rushLine = new THREE.Mesh(rushGeo, rushMat);
          rushLine.rotation.x = -Math.PI / 2;
          this.scene.add(rushLine);
          m._rushLine = rushLine;
        }
        if (m._rushLine) {
          if (distToPlayer < 5 && distToPlayer > 1.5) {
            m._rushLine.material.opacity = 0.3;
            const fwdX = m.position.x + dx * 0.3;
            const fwdZ = m.position.z + dz * 0.3;
            m._rushLine.position.set(fwdX, 0.03, fwdZ);
            m._rushLine.rotation.z = -Math.atan2(dz, dx);
            m._rushLine.scale.y = distToPlayer * 0.3;
            m._rushLine.visible = true;
          } else {
            m._rushLine.visible = false;
          }
        }
        // Hit flash — brief bright tint (NOT pure white, gentler on eyes)
        const isHit = enemies[i].hit;
        m.traverse(child => {
          if (child.isMesh && child.material && child.material.color) {
            if (isHit) {
              if (!child.material._origColor) child.material._origColor = child.material.color.getHex();
              child.material.color.set(0xccddee); // light blue-white, not pure white
              if (child.material.emissive) {
                child.material.emissive.set(0x445566);
                child.material.emissiveIntensity = 1.0; // was 3, too bright
              }
            } else {
              if (child.material._origColor) {
                child.material.color.set(child.material._origColor);
              }
              if (child.material.emissive) {
                child.material.emissiveIntensity = 0;
              }
            }
          }
        });
        // No scale punch — prevents "squish" feel (scale stays 1.0)
      }
    });

    // Update weapon arc VFX
    this._updateWeaponArcs(dt);

    this.renderer.render(this.scene, this.camera);

    // Update slash effects
    this.updateSlashes(dt);

    // Update death particles (spawned from JS via spawnDeathParticles)
    // === PARTICLE POOL: cap at 300 to prevent OOM ===
    while (this.deathParticles.length > 300) {
      const oldest = this.deathParticles.shift();
      this.scene.remove(oldest.mesh);
      if (oldest.mesh.geometry) oldest.mesh.geometry.dispose();
      if (oldest.mesh.material) oldest.mesh.material.dispose();
    }

    for (let i = this.deathParticles.length - 1; i >= 0; i--) {
      const p = this.deathParticles[i];
      if (p.isRing) {
        if (!p.noScale) {
          p.scale += dt * 6;
          p.mesh.scale.setScalar(p.scale);
        }
        // Fade over entire lifetime (not just last 0.3s)
        if (!p._maxLife) p._maxLife = p.life; // store initial life
        const lifeRatio = Math.max(0, p.life / p._maxLife);
        p.mesh.material.opacity = lifeRatio * (p._initOpacity || 0.4);
        p.mesh.position.x += (p.vx || 0) * dt;
        p.mesh.position.y += (p.vy || 0) * dt;
        p.mesh.position.z += (p.vz || 0) * dt;
        p.life -= dt;
      } else {
        p.mesh.position.x += p.vx * dt;
        p.mesh.position.y += p.vy * dt;
        p.mesh.position.z += p.vz * dt;
        p.vy -= 10 * dt;
        p.life -= dt;
        p.mesh.scale.setScalar(Math.max(0.01, p.life * 2.5));
        if (p.mesh.material.opacity !== undefined) p.mesh.material.opacity = Math.min(1, p.life * 3);
      }
      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        if (p.mesh.geometry) p.mesh.geometry.dispose();
        if (p.mesh.material) p.mesh.material.dispose();
        this.deathParticles.splice(i, 1);
      }
    }
  }

  // VFX methods (spawnDeathParticles, spawnSlash, updateSlashes) → see vfx.js

  createZombie(type) {
    const group = new THREE.Group();
    group.userData = { hitTimer: 0 };

    // === ART: 역할별 색상 차별화 ===
    // Eye colors by role: follower=green, charger=orange, caster=purple, shield=blue, elite=pink, boss=red
    const eyeColors = [0x44ff66, 0xff8822, 0x4488ff, 0xaa44ff, 0x44ff66, 0xaa44ff, 0xff8822, 0xff44ff, 0xff2200];
    const bodyAccents = [0x556655, 0x665544, 0x445566, 0x554466, 0x556655, 0x554466, 0x665544, 0x664455, 0x553333];
    const baseGray = bodyAccents[type] || 0x687080;
    const darkGray = 0x4a5060;

    // Scale by type
    const scales = [1.0, 1.6, 0.7, 1.0, 0.6, 0.9, 1.3, 1.8, 2.5];
    const scale = scales[type] || 1.0;
    const eyeColor = eyeColors[type] || 0x88ffaa;

    if (type === 0 || type === 4) {
      // === Ash Hound (Runtime Animation Pack v1) — billboard sprite if loaded ===
      if (this.ashHoundSprites && this.ashHoundSprites.idle) {
        const tex = this.ashHoundSprites.idle.texture.clone();
        tex.repeat.set(1 / this.ashHoundSprites.idle.frames, 1);
        tex.offset.set(0, 0);
        const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.02, depthWrite: false, side: THREE.DoubleSide });
        const geo = new THREE.PlaneGeometry(1.2 * scale, 1.2 * scale);
        const sprite = new THREE.Mesh(geo, mat);
        sprite.position.y = 0.6 * scale; // pivot (0.5, 0.93) → feet near ground
        group.add(sprite);
        group.userData.isSprite = true;
        group.userData.spriteMat = mat;
        group.userData.spriteFrame = 0;
        group.userData.spriteTimer = 0;
        group.userData.spriteInfo = this.ashHoundSprites.idle;
        group.userData.spriteAnim = 'idle';
      } else {
        // Fallback: 3D mesh
        const bodyGeo = new THREE.SphereGeometry(0.35 * scale, 8, 6);
        const body = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: baseGray, roughness: 0.85 }));
        body.position.y = 0.4 * scale;
        body.scale.set(1.2, 0.9, 1.0);
        body.castShadow = true;
        group.add(body);
        const headGeo = new THREE.SphereGeometry(0.15 * scale, 6, 4);
        const head = new THREE.Mesh(headGeo, new THREE.MeshStandardMaterial({ color: baseGray, roughness: 0.8 }));
        head.position.y = 0.75 * scale;
        group.add(head);
      }
    } else if (type === 6 || type === 1) {
      // === 사냥개/돌격 (Charger): 낮고 뾰족한 실루엣 ===
      const bodyGeo = new THREE.ConeGeometry(0.3 * scale, 0.8 * scale, 5);
      const body = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: darkGray, roughness: 0.8 }));
      body.position.y = 0.4 * scale;
      body.rotation.x = Math.PI / 2 * 0.3; // leaning forward
      body.scale.set(1.0, 0.7, 1.6); // long, low
      body.castShadow = true;
      group.add(body);
      // Sharp snout
      const snout = new THREE.Mesh(
        new THREE.ConeGeometry(0.1 * scale, 0.4 * scale, 4),
        new THREE.MeshStandardMaterial({ color: baseGray, roughness: 0.7 })
      );
      snout.position.set(0, 0.35 * scale, 0.35 * scale);
      snout.rotation.x = -Math.PI / 2;
      group.add(snout);
    } else if (type === 5 || type === 3) {
      // === 술사 (Caster): 키가 크고 가는 실루엣 ===
      const bodyGeo = new THREE.CylinderGeometry(0.12 * scale, 0.18 * scale, 1.2 * scale, 6);
      const body = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: baseGray, roughness: 0.85 }));
      body.position.y = 0.6 * scale;
      body.castShadow = true;
      group.add(body);
      // Tall pointed hood
      const hood = new THREE.Mesh(
        new THREE.ConeGeometry(0.15 * scale, 0.5 * scale, 5),
        new THREE.MeshStandardMaterial({ color: darkGray, roughness: 0.9 })
      );
      hood.position.y = 1.35 * scale;
      group.add(hood);
      // Staff (thin vertical line)
      const staff = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02 * scale, 0.02 * scale, 1.4 * scale, 4),
        new THREE.MeshStandardMaterial({ color: 0x3a4050, roughness: 0.9 })
      );
      staff.position.set(0.2 * scale, 0.7 * scale, 0);
      group.add(staff);
      // Staff tip glow
      const tipGlow = new THREE.Mesh(
        new THREE.SphereGeometry(0.05 * scale, 6, 4),
        new THREE.MeshBasicMaterial({ color: eyeColor, transparent: true, opacity: 0.8 })
      );
      tipGlow.position.set(0.2 * scale, 1.4 * scale, 0);
      group.add(tipGlow);
    } else if (type === 2) {
      // === 방패병 (Shield): 넓은 전면 실루엣 ===
      const bodyGeo = new THREE.BoxGeometry(0.5 * scale, 0.7 * scale, 0.3 * scale);
      const body = new THREE.Mesh(bodyGeo, new THREE.MeshStandardMaterial({ color: darkGray, roughness: 0.9 }));
      body.position.y = 0.5 * scale;
      body.castShadow = true;
      group.add(body);
      // Wide shield in front
      const shieldGeo = new THREE.BoxGeometry(0.6 * scale, 0.65 * scale, 0.08 * scale);
      const shield = new THREE.Mesh(shieldGeo, new THREE.MeshStandardMaterial({
        color: 0x556070, roughness: 0.7, metalness: 0.3,
      }));
      shield.position.set(0, 0.45 * scale, 0.22 * scale);
      group.add(shield);
      // Small head
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.12 * scale, 6, 4),
        new THREE.MeshStandardMaterial({ color: baseGray, roughness: 0.8 })
      );
      head.position.y = 0.9 * scale;
      group.add(head);
    } else {
      // === 기본 (7: 엘리트, 8: 보스 포함) — 크고 위압적 ===
      const body = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.25 * scale, 0.8 * scale, 6, 8),
        new THREE.MeshStandardMaterial({ color: baseGray, roughness: 0.8 })
      );
      body.position.y = 0.6 * scale;
      body.castShadow = true;
      group.add(body);
      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.18 * scale, 8, 6),
        new THREE.MeshStandardMaterial({ color: baseGray, roughness: 0.7 })
      );
      head.position.y = 1.2 * scale;
      group.add(head);
      // Elites/bosses get crown-like protrusions
      if (type >= 7) {
        for (let i = 0; i < 3; i++) {
          const spike = new THREE.Mesh(
            new THREE.ConeGeometry(0.06 * scale, 0.3 * scale, 4),
            new THREE.MeshStandardMaterial({ color: eyeColor, emissive: eyeColor, emissiveIntensity: 1.5 })
          );
          spike.position.set((i - 1) * 0.12 * scale, 1.45 * scale, 0);
          group.add(spike);
        }
      }
    }

    // Eyes — all types get glowing eyes (danger indicator, brighter = more dangerous)
    const eyeIntensity = type >= 7 ? 5 : type >= 5 ? 3 : 2;
    const eyeMat = new THREE.MeshStandardMaterial({
      color: eyeColor, emissive: eyeColor, emissiveIntensity: eyeIntensity,
    });
    const eyeSize = 0.03 * scale;
    const eyeY = type === 2 ? 0.9 * scale : type === 6 || type === 1 ? 0.5 * scale : (type === 5 || type === 3) ? 1.2 * scale : 0.75 * scale;
    const le = new THREE.Mesh(new THREE.SphereGeometry(eyeSize, 4, 4), eyeMat);
    le.position.set(-0.06 * scale, eyeY, 0.15 * scale);
    group.add(le);
    const re = new THREE.Mesh(new THREE.SphereGeometry(eyeSize, 4, 4), eyeMat);
    re.position.set(0.06 * scale, eyeY, 0.15 * scale);
    group.add(re);

    return group;
  }

  updatePool(pool, data, createFn) {
    // Remove excess meshes from pool (GC — prevent memory leak)
    const maxPool = data.length + 10; // keep small buffer
    while (pool.length > maxPool) {
      const m = pool.pop();
      if (m) {
        // Cleanup telegraph lines + contact shadow
        if (m._telegraphLine) { this.scene.remove(m._telegraphLine); m._telegraphLine.geometry.dispose(); m._telegraphLine.material.dispose(); }
        if (m._rushLine) { this.scene.remove(m._rushLine); m._rushLine.geometry.dispose(); m._rushLine.material.dispose(); }
        if (m._contactShadow) { this.scene.remove(m._contactShadow); m._contactShadow.geometry.dispose(); m._contactShadow.material.dispose(); }
        this.scene.remove(m);
        if(m.geometry) m.geometry.dispose();
      }
    }
    // Hide excess
    for (let i = data.length; i < pool.length; i++) {
      pool[i].visible = false;
      if (pool[i]._contactShadow) pool[i]._contactShadow.visible = false;
      if (pool[i]._telegraphLine) pool[i]._telegraphLine.visible = false;
      if (pool[i]._rushLine) pool[i]._rushLine.visible = false;
      // Hide associated telegraph lines
      if (pool[i]._telegraphLine) pool[i]._telegraphLine.visible = false;
      if (pool[i]._rushLine) pool[i]._rushLine.visible = false;
    }
    // Show/create — check type match for enemies
    for (let i = 0; i < data.length; i++) {
      let mesh = pool[i];

      // 타입이 다르면 재생성 (적 종류 변경 방지)
      if (mesh && mesh.userData.entityType !== undefined && data[i].type !== undefined && mesh.userData.entityType !== data[i].type) {
        this.scene.remove(mesh);
        mesh = null;
        pool[i] = null;
      }

      if (!mesh) {
        mesh = createFn(data[i]);
        mesh.userData.entityType = data[i].type !== undefined ? data[i].type : -1;
        this.scene.add(mesh);
        pool[i] = mesh;
      }
      mesh.visible = true;
      mesh.position.x = data[i].x;
      mesh.position.z = data[i].z;
    }

    // Clean up nulls
    for (let i = pool.length - 1; i >= 0; i--) {
      if (pool[i] === null) pool.splice(i, 1);
    }
  }

  // === Hit Feedback ===
  shake(intensity = 0.3, duration = 0.15) {
    this._shakeTimer = duration;
    this._shakeIntensity = intensity;
    this._shakeDuration = duration;
  }

  hitStop(duration = 0.04) {
    this._hitStopTimer = duration;
  }

  // Camera zoom punch (short FOV kick for impact)
  zoomPunch(intensity = 2, duration = 0.12) {
    if (this._zoomPunchTimer > 0) return;
    this._zoomPunchTimer = duration;
    this._zoomPunchDuration = duration;
    this._zoomPunchIntensity = intensity;
    this.camera.fov -= intensity;
    this.camera.updateProjectionMatrix();
  }

  // Convert world position to screen pixel coordinates
  projectToScreen(wx, wy, wz) {
    const vec = new THREE.Vector3(wx, wy, wz);
    vec.project(this.camera);
    const w = this.renderer.domElement.clientWidth;
    const h = this.renderer.domElement.clientHeight;
    return {
      x: (vec.x * 0.5 + 0.5) * w,
      y: (-vec.y * 0.5 + 0.5) * h,
    };
  }

  // VFX methods (shield, ultimate, directional, element-specific) → see vfx.js

  // === WEAPON ARC VFX (separate sprite, additive, 6fr@30fps) ===
  _spawnWeaponArc(px, pz, state, aimX, aimZ) {
    if (!this._weaponArcTex) return;
    const tex = this._weaponArcTex.clone();
    tex.repeat.set(1 / 6, 1);
    tex.offset.set(0, 0);
    // Element tint
    const elemColors = { 1: 0xff6633, 2: 0x66ccff, 3: 0xffee33, 4: 0x66ff66 };
    const tint = elemColors[state.element] || 0xffffff;
    const mat = new THREE.MeshBasicMaterial({
      map: tex, transparent: true, opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false, side: THREE.DoubleSide,
      color: tint,
    });
    const geo = new THREE.PlaneGeometry(2.4, 2.4); // weapon arc at game scale
    const mesh = new THREE.Mesh(geo, mat);
    // Position in aim direction (weapon socket offset)
    mesh.position.set(px + (aimX || this.playerFacing) * 1.2, 0.7, pz + (aimZ || 0) * 1.2);
    mesh.quaternion.copy(this.camera.quaternion);
    this.scene.add(mesh);

    // Animate 6 frames at 30fps then remove
    let frame = 0;
    const totalFrames = 6;
    const fps = 30;
    let timer = 0;
    const arc = { mesh, timer: 0, frame: 0 };
    if (!this._weaponArcs) this._weaponArcs = [];
    this._weaponArcs.push(arc);
  }

  _updateWeaponArcs(dt) {
    if (!this._weaponArcs) return;
    for (let i = this._weaponArcs.length - 1; i >= 0; i--) {
      const arc = this._weaponArcs[i];
      arc.timer += dt * 30; // 30 fps
      if (arc.timer >= 1) {
        arc.timer = 0;
        arc.frame++;
        if (arc.frame >= 6) {
          this.scene.remove(arc.mesh);
          arc.mesh.geometry.dispose();
          arc.mesh.material.dispose();
          this._weaponArcs.splice(i, 1);
          continue;
        }
        arc.mesh.material.map.offset.x = arc.frame / 6;
        // Scale pulse: peak at frame 2 (1.08x), then back
        const scalePulse = arc.frame === 2 ? 1.08 : 1.0;
        arc.mesh.scale.set(scalePulse, scalePulse, 1);
      }
      // Billboard
      arc.mesh.quaternion.copy(this.camera.quaternion);
    }
  }
}

// Mixin VFX methods onto ThreeRenderer prototype
Object.assign(ThreeRenderer.prototype, vfxMethods, vfxShieldMethods, vfxDirectionalMethods);
