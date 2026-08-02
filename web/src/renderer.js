import * as THREE from 'three';
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

    // Load Huntress sprite sheets
    this.sprites = {};
    // Feature flag: ?v2sprite in URL enables prototype sprite from art handoff
    const useV2Idle = window.location.search.includes('v2sprite');
    const spriteData = {
      // === Runtime Animation Pack v1 (full set) ===
      idle: { file: './sprites/huntress/huntress_idle.png', frames: 6, speed: 10, loop: true, fallback: './sprites/huntress/Idle.png', fallbackFrames: 8 },
      run: { file: './sprites/huntress/huntress_run.png', frames: 8, speed: 14, loop: true, fallback: './sprites/huntress/Run.png', fallbackFrames: 8 },
      attack: { file: './sprites/huntress/huntress_attack.png', frames: 6, speed: 18, loop: false, eventFrame: 3, fallback: './sprites/huntress/Attack1.png', fallbackFrames: 5 },
      dash: { file: './sprites/huntress/huntress_dash.png', frames: 6, speed: 22, loop: false, eventFrame: 2 },
      gesture: { file: './sprites/huntress/huntress_gesture_cast.png', frames: 6, speed: 18, loop: false, eventFrame: 4 },
      hit: { file: './sprites/huntress/huntress_hit.png', frames: 4, speed: 18, loop: false, eventFrame: 1, fallback: './sprites/huntress/Take hit.png', fallbackFrames: 3 },
      death: { file: './sprites/huntress/huntress_death.png', frames: 8, speed: 14, loop: false, fallback: './sprites/huntress/Death.png', fallbackFrames: 8 },
      revive: { file: './sprites/huntress/huntress_revive.png', frames: 8, speed: 16, loop: false, eventFrame: 6 },
    };

    for (const [key, data] of Object.entries(spriteData)) {
      try {
        const tex = await loader.loadAsync(data.file);
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        tex.colorSpace = THREE.SRGBColorSpace;
        const recolored = this._recolorTexture(tex);
        this.sprites[key] = {
          texture: recolored, frames: data.frames, speed: data.speed,
          loop: data.loop !== false, // default true
          eventFrame: data.eventFrame || null,
        };
      } catch (e) {
        console.warn(`Failed to load sprite: ${key}, trying fallback...`, e);
        // Fallback to legacy asset
        if (data.fallback) {
          try {
            const fbTex = await loader.loadAsync(data.fallback);
            fbTex.magFilter = THREE.NearestFilter;
            fbTex.minFilter = THREE.NearestFilter;
            fbTex.colorSpace = THREE.SRGBColorSpace;
            const recolored = this._recolorTexture(fbTex);
            this.sprites[key] = { texture: recolored, frames: data.fallbackFrames || data.frames, speed: data.speed, loop: true, eventFrame: null };
          } catch (e2) {
            console.warn(`Fallback also failed for: ${key}`);
          }
        }
      }
    }

    this.setupSpritePlayer();
    console.log('✅ Sprite system loaded');

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
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        tex.colorSpace = THREE.SRGBColorSpace;
        this.ashHoundSprites[key] = { texture: tex, frames: data.frames, speed: data.speed, loop: data.loop, eventFrame: data.eventFrame || null };
      } catch (e) {
        console.warn(`Ash Hound sprite failed: ${key}`);
      }
    }
    if (this.ashHoundSprites.idle) console.log('✅ Ash Hound sprites loaded');
  }

  _recolorTexture(tex) {
    // No recolor — use original sprite (clear silhouette against dark ground)
    return tex;
  }

  setupSpritePlayer() {
    if (!this.sprites.idle) { this.setupFallbackPlayer(); return; }

    const tex = this.sprites.idle.texture.clone();
    tex.repeat.set(1 / this.sprites.idle.frames, 1);
    tex.offset.set(0, 0);

    // Plane mesh — sized for 256px sprites at game scale
    const geo = new THREE.PlaneGeometry(2.0, 2.0);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, alphaTest: 0.1, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(30, 1.5, 30);

    // Foot rune — class/element indicator (발밑 문양)
    const runeGeo = new THREE.RingGeometry(0.4, 0.55, 24);
    const runeMat = new THREE.MeshBasicMaterial({ color: 0xDCE8FF, transparent: true, opacity: 0.2, side: THREE.DoubleSide });
    this.playerRuneMesh = new THREE.Mesh(runeGeo, runeMat);
    this.playerRuneMesh.rotation.x = -Math.PI / 2;
    this.playerRuneMesh.position.set(30, 0.02, 30);
    this.scene.add(this.playerRuneMesh);

    this.playerGroup = mesh;
    this.playerSpriteMat = mat;
    this.playerSpriteFrame = 0;
    this.playerSpriteTimer = 0;
    this.playerCurrentAnim = 'idle';
    this.playerFacing = 1;
    this.scene.add(mesh);
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

    // === Camera Shake ===
    let shakeX = 0, shakeZ = 0;
    if (this._shakeTimer > 0) {
      this._shakeTimer -= dt;
      const progress = Math.max(0, this._shakeTimer / this._shakeDuration);
      const intensity = this._shakeIntensity * progress * progress; // ease-out decay
      shakeX = (Math.random() - 0.5) * intensity;
      shakeZ = (Math.random() - 0.5) * intensity;
    }

    // Camera follows player smoothly
    const camSpeed = state.playerDashing && state.dashType === 1 ? 0.03 : 0.06;
    const targetCamPos = new THREE.Vector3(playerX + shakeX, 12, playerZ + 10 + shakeZ);
    this.camera.position.lerp(targetCamPos, camSpeed);
    this.camera.lookAt(playerX, 0, playerZ); // NO shake on lookAt — prevents nausea

    this.playerLight.position.set(playerX, 3, playerZ);
    // Update ground shader uniforms
    if (this.groundMat && this.groundMat.uniforms) {
      this.groundMat.uniforms.uPlayerPos.value.set(playerX, playerZ);
    }

    // Player position + sprite animation
    if (this.playerGroup) {
      // Pivot 0.93 = foot at 93% down from top of 256px cell
      // PlaneGeo 2.0 height → center at 1.0, foot offset = 1.0 * (0.93 - 0.5) = 0.43 below center
      // So position.y should be ~0.5 to put feet near ground
      this.playerGroup.position.set(playerX, 0.6, playerZ);

      // Billboard: face camera (simple quaternion copy)
      this.playerGroup.quaternion.copy(this.camera.quaternion);

      // Flip: movement direction when moving, mouse direction when idle
      let faceDir = 0;
      if (playerMoving) {
        faceDir = playerDirX; // 이동 중 = 이동 방향
      } else if (state.mouseWorldX !== undefined) {
        faceDir = state.mouseWorldX - playerX; // 정지 시 = 마우스 방향
      } else if (state.nearestEnemyDirX !== undefined) {
        faceDir = state.nearestEnemyDirX;
      }
      if (faceDir < -0.01) this.playerFacing = -1;
      else if (faceDir > 0.01) this.playerFacing = 1;

      // Scale: 1.0 for proper size (256px cell at 2.0 geo = ~2 world units)
      const baseScale = 1.0;
      this.playerGroup.scale.set(baseScale * this.playerFacing, baseScale, 1);

      // Foot rune follows player + element color
      if (this.playerRuneMesh) {
        this.playerRuneMesh.position.set(playerX, 0.02, playerZ);
        const elemRuneColors = { 1: 0xff4400, 2: 0x44ccff, 3: 0xffcc00, 4: 0x9933ff };
        const runeColor = elemRuneColors[state.element] || 0xDCE8FF;
        this.playerRuneMesh.material.color.set(runeColor);
        this.playerRuneMesh.material.opacity = state.promoted ? 0.4 : 0.15;
        this.playerRuneMesh.rotation.z = this.clock.getElapsedTime() * 0.5;

        // HP-based visual feedback: rune pulses faster at low HP
        const hpRatio = state.hp / state.maxHp;
        if (hpRatio < 0.3) {
          // Critical: rune blinks red
          const blink = Math.sin(this.clock.getElapsedTime() * 10) > 0;
          this.playerRuneMesh.material.color.set(blink ? 0xff2222 : runeColor);
          this.playerRuneMesh.material.opacity = 0.5;
        }
      }

      // Hit flash: brief white sprite tint
      if (state.playerHit) {
        this.playerSpriteMat.color = this.playerSpriteMat.color || new THREE.Color(1,1,1);
        this.playerSpriteMat.color.set(0xffffff);
        this.playerHitFlash = 0.1;
      } else if (this.playerHitFlash > 0) {
        this.playerHitFlash -= dt;
        if (this.playerHitFlash <= 0) {
          this.playerSpriteMat.color.set(0xffffff); // reset
        }
      }

      // Determine animation state — with animation lock (play-to-completion)
      let targetAnim = 'idle';

      // Lock: non-looping animations play to completion before allowing switch
      if (this._animLock && this._animLockTimer > 0) {
        this._animLockTimer -= dt;
        targetAnim = this._animLock;
        if (this._animLockTimer <= 0) {
          this._animLock = null; // release lock
        }
      } else {
        if (state.playerDashing) {
          targetAnim = this.sprites.dash ? 'dash' : 'run';
          // Lock dash animation for its full duration
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
          targetAnim = 'attack';
          if (this.sprites.attack && this._animLock !== 'attack') {
            this._animLock = 'attack';
            this._animLockTimer = this.sprites.attack.frames / this.sprites.attack.speed;
          }
        } else if (state.playerCasting && this.sprites.gesture) {
          targetAnim = 'gesture';
        } else if (playerMoving) {
          targetAnim = 'run';
        }
      }

      // Dash visual: element-specific
      const dashType = state.dashType || 5;
      if (state.playerDashing) {
        if (!this._dashTrail) this._dashTrail = [];
        // Ground decal for dash path
        if (Math.random() < 0.4) this.spawnDashDecal(playerX, playerZ, state.element || 0);

        if (dashType === 4) {
          // ☠️ Smoke: subtle dark purple wisps, player almost invisible
          this.playerSpriteMat.opacity = 0.08;
          const wisp = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 4, 4),
            new THREE.MeshBasicMaterial({ color: 0x220033, transparent: true, opacity: 0.25 })
          );
          wisp.position.copy(this.playerGroup.position);
          wisp.position.y = 0.4;
          wisp.position.x += (Math.random() - 0.5) * 0.3;
          wisp.position.z += (Math.random() - 0.5) * 0.3;
          this.scene.add(wisp);
          this._dashTrail.push({ mesh: wisp, life: 0.4 });
        } else if (dashType === 3) {
          // ⚡ Triple: yellow electric sparks
          this.playerSpriteMat.opacity = 0.6;
          const spark = new THREE.Mesh(
            new THREE.SphereGeometry(0.08, 4, 4),
            new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.9 })
          );
          spark.position.set(
            this.playerGroup.position.x + (Math.random()-0.5)*0.5,
            0.5 + Math.random() * 0.8,
            this.playerGroup.position.z + (Math.random()-0.5)*0.5
          );
          this.scene.add(spark);
          this._dashTrail.push({ mesh: spark, life: 0.15 });
        } else if (dashType === 1) {
          // 🔥 Blink: already teleported, just flash
          this.playerSpriteMat.opacity = 0.3;
        } else {
          // Default: afterimage
          this.playerSpriteMat.opacity = 0.5;
          const ghost = this.playerGroup.clone();
          ghost.traverse(c => { if (c.material) { c.material = c.material.clone(); c.material.opacity = 0.3; c.material.transparent = true; } });
          ghost.position.copy(this.playerGroup.position);
          this.scene.add(ghost);
          this._dashTrail.push({ mesh: ghost, life: 0.2 });
        }
      } else {
        this.playerSpriteMat.opacity = 1.0;
        // ❄️ Ice Skate: leave frost footprints while moving
        if (dashType === 2 && playerMoving && Math.random() < 0.3) {
          const footprint = new THREE.Mesh(
            new THREE.CircleGeometry(0.15, 6),
            new THREE.MeshBasicMaterial({ color: 0x446677, transparent: true, opacity: 0.2, side: THREE.DoubleSide })
          );
          footprint.position.set(playerX, 0.02, playerZ);
          footprint.rotation.x = -Math.PI / 2;
          this.scene.add(footprint);
          if (!this._dashTrail) this._dashTrail = [];
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

      // Switch animation
      if (targetAnim !== this.playerCurrentAnim && this.sprites[targetAnim]) {
        this.playerCurrentAnim = targetAnim;
        this.playerSpriteFrame = 0;
        this.playerSpriteTimer = 0;
        const spriteInfo = this.sprites[targetAnim];
        const tex = spriteInfo.texture.clone();
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        tex.repeat.set(1 / spriteInfo.frames, 1);
        tex.offset.set(0, 0);
        this.playerSpriteMat.map = tex;
        this.playerSpriteMat.needsUpdate = true;
      }

      // Animate frames
      const spriteInfo = this.sprites[this.playerCurrentAnim];
      if (spriteInfo && this.playerSpriteMat.map) {
        // Run speed scales with actual movement (prevents sliding feel)
        let animSpeed = spriteInfo.speed;
        if (this.playerCurrentAnim === 'run' && state.playerSpeed) {
          animSpeed = spriteInfo.speed * Math.max(0.5, state.playerSpeed / 5.0);
        }
        this.playerSpriteTimer += dt * animSpeed;
        if (this.playerSpriteTimer >= 1) {
          this.playerSpriteTimer = 0;
          if (spriteInfo.loop === false && this.playerSpriteFrame >= spriteInfo.frames - 1) {
            // Stay on last frame (death, etc)
            this.playerSpriteFrame = spriteInfo.frames - 1;
          } else {
            this.playerSpriteFrame = (this.playerSpriteFrame + 1) % spriteInfo.frames;
          }
          this.playerSpriteMat.map.offset.x = this.playerSpriteFrame / spriteInfo.frames;
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

    // Animate orbs around player
    if (this.elementOrbs.length > 0) {
      const t = this.clock.getElapsedTime();
      const orbCount = this.elementOrbs.length;
      this.elementOrbs.forEach((orb, i) => {
        const angle = t * 2.5 + (i * Math.PI * 2 / orbCount);
        const radius = 1.0 + Math.sin(t * 1.5 + i) * 0.2;
        orb.position.set(
          playerX + Math.cos(angle) * radius,
          0.6 + Math.sin(t * 3 + i * 2) * 0.2,
          playerZ + Math.sin(angle) * radius
        );
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

    // Animate enemies (bob + hit flash + attack telegraph)
    this.enemyMeshes.forEach((m, i) => {
      if (m.visible && enemies[i]) {
        m.position.y = Math.sin(t * 3 + i * 2) * 0.04;

        // Ash Hound sprite animation tick
        if (m.userData.isSprite && m.userData.spriteMat) {
          // Billboard: face camera
          m.children.forEach(c => { if (c.material === m.userData.spriteMat) c.quaternion.copy(this.camera.quaternion); });
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
        }

        // Face player
        const dx = playerX - m.position.x;
        const dz = playerZ - m.position.z;
        if (Math.abs(dx) > 0.1 || Math.abs(dz) > 0.1) {
          m.rotation.y = Math.atan2(dx, dz);
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
          const distToPlayer = Math.sqrt(dx * dx + dz * dz);
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
          const distToPlayer = Math.sqrt(dx * dx + dz * dz);
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
        // Scale punch on hit
        const s = isHit ? 1.2 : 1.0;
        m.scale.set(s, s, s);
      }
    });

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
        sprite.position.y = 1.0 * scale;
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
        // Cleanup telegraph lines
        if (m._telegraphLine) { this.scene.remove(m._telegraphLine); m._telegraphLine.geometry.dispose(); m._telegraphLine.material.dispose(); }
        if (m._rushLine) { this.scene.remove(m._rushLine); m._rushLine.geometry.dispose(); m._rushLine.material.dispose(); }
        this.scene.remove(m);
        if(m.geometry) m.geometry.dispose();
      }
    }
    // Hide excess
    for (let i = data.length; i < pool.length; i++) {
      pool[i].visible = false;
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
}

// Mixin VFX methods onto ThreeRenderer prototype
Object.assign(ThreeRenderer.prototype, vfxMethods, vfxShieldMethods, vfxDirectionalMethods);
