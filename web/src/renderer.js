import * as THREE from 'three';

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
    this.camera.position.set(30, 12, 40); // 시작 위치
    this.camera.lookAt(30, 0, 30);

    // Resize
    window.addEventListener('resize', () => {
      const w = window.innerWidth, h = window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
    });

    // Scene setup
    this.scene.background = new THREE.Color(0x0a0812);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambient);

    const dir = new THREE.DirectionalLight(0xffeedd, 1.0);
    dir.position.set(10, 20, 10);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.camera.left = -30;
    dir.shadow.camera.right = 30;
    dir.shadow.camera.top = 30;
    dir.shadow.camera.bottom = -30;
    this.scene.add(dir);

    const hemi = new THREE.HemisphereLight(0x8899aa, 0x333322, 0.3);
    this.scene.add(hemi);

    // Player light
    this.playerLight = new THREE.PointLight(0xffffcc, 1.5, 12);
    this.playerLight.position.set(30, 3, 30);
    this.scene.add(this.playerLight);

    // Ground (dark fantasy grass/stone)
    const groundGeo = new THREE.PlaneGeometry(80, 80, 20, 20);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x1a2a1a, roughness: 0.95 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(30, 0, 30);
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Stone circle pattern (arena feel)
    const ringGeo = new THREE.RingGeometry(14, 15, 32);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.9 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(30, 0.01, 30);
    this.scene.add(ring);

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
    this.playerHitFlash = 0;
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
  }

  async loadModels() {
    // 2D Sprite billboard system instead of 3D models
    const loader = new THREE.TextureLoader();

    // Load Huntress sprite sheets
    this.sprites = {};
    const spriteData = {
      idle: { file: './sprites/huntress/Idle.png', frames: 8, speed: 8 },
      run: { file: './sprites/huntress/Run.png', frames: 8, speed: 12 },
      attack: { file: './sprites/huntress/Attack1.png', frames: 5, speed: 15 },
      death: { file: './sprites/huntress/Death.png', frames: 8, speed: 8 },
      hit: { file: './sprites/huntress/Take hit.png', frames: 3, speed: 10 },
    };

    for (const [key, data] of Object.entries(spriteData)) {
      try {
        const tex = await loader.loadAsync(data.file);
        tex.magFilter = THREE.NearestFilter;
        tex.minFilter = THREE.NearestFilter;
        tex.colorSpace = THREE.SRGBColorSpace;
        this.sprites[key] = { texture: tex, frames: data.frames, speed: data.speed };
      } catch (e) {
        console.warn(`Failed to load sprite: ${key}`, e);
      }
    }

    this.setupSpritePlayer();
    console.log('✅ Sprite system loaded');
  }

  setupSpritePlayer() {
    if (!this.sprites.idle) { this.setupFallbackPlayer(); return; }

    const tex = this.sprites.idle.texture.clone();
    tex.repeat.set(1 / this.sprites.idle.frames, 1);
    tex.offset.set(0, 0);

    // Plane mesh — 정사각형 비율 유지 (스프라이트가 150x150 per frame)
    const geo = new THREE.PlaneGeometry(2.5, 2.5);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, alphaTest: 0.1, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(30, 1.25, 30);

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

    // === Camera Shake ===
    let shakeX = 0, shakeZ = 0;
    if (this._shakeTimer > 0) {
      this._shakeTimer -= dt;
      const intensity = this._shakeIntensity * (this._shakeTimer / this._shakeDuration);
      shakeX = (Math.random() - 0.5) * intensity;
      shakeZ = (Math.random() - 0.5) * intensity;
    }

    // Camera follows player smoothly
    const targetCamPos = new THREE.Vector3(playerX + shakeX, 12, playerZ + 10 + shakeZ);
    this.camera.position.lerp(targetCamPos, 0.15);
    this.camera.lookAt(playerX + shakeX * 0.5, 0, playerZ + shakeZ * 0.5);

    this.playerLight.position.set(playerX, 3, playerZ);

    // Player position + sprite animation
    if (this.playerGroup) {
      this.playerGroup.position.set(playerX, 0.9, playerZ);

      // Billboard: face camera (simple quaternion copy)
      this.playerGroup.quaternion.copy(this.camera.quaternion);

      // Flip: 이동 방향 or 적 방향
      let faceDir = 0;
      if (playerMoving) {
        faceDir = playerDirX;
      } else if (state.nearestEnemyDirX !== undefined) {
        faceDir = state.nearestEnemyDirX;
      }
      if (faceDir < -0.01) this.playerFacing = -1;
      else if (faceDir > 0.01) this.playerFacing = 1;

      // Scale (1.8 base, flip X)
      this.playerGroup.scale.set(1.8 * this.playerFacing, 1.8, 1);

      // Determine animation state
      let targetAnim = 'idle';
      if (state.playerDashing) targetAnim = 'run'; // use run frames for dash
      else if (state.playerHit) targetAnim = 'hit';
      else if (state.playerAttacking) targetAnim = 'attack';
      else if (playerMoving) targetAnim = 'run';

      // Dash visual: semi-transparent + afterimage
      if (state.playerDashing) {
        this.playerSpriteMat.opacity = 0.5;
        // Spawn afterimage
        if (!this._dashTrail) this._dashTrail = [];
        const ghost = this.playerGroup.clone();
        ghost.traverse(c => { if (c.material) { c.material = c.material.clone(); c.material.opacity = 0.3; c.material.transparent = true; } });
        ghost.position.copy(this.playerGroup.position);
        this.scene.add(ghost);
        this._dashTrail.push({ mesh: ghost, life: 0.2 });
      } else {
        this.playerSpriteMat.opacity = 1.0;
      }

      // Update dash trail
      if (this._dashTrail) {
        for (let i = this._dashTrail.length - 1; i >= 0; i--) {
          this._dashTrail[i].life -= dt;
          if (this._dashTrail[i].life <= 0) {
            this.scene.remove(this._dashTrail[i].mesh);
            this._dashTrail.splice(i, 1);
          } else {
            this._dashTrail[i].mesh.traverse(c => { if (c.material) c.material.opacity = this._dashTrail[i].life * 1.5; });
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
        this.playerSpriteTimer += dt * spriteInfo.speed;
        if (this.playerSpriteTimer >= 1) {
          this.playerSpriteTimer = 0;
          this.playerSpriteFrame = (this.playerSpriteFrame + 1) % spriteInfo.frames;
          this.playerSpriteMat.map.offset.x = this.playerSpriteFrame / spriteInfo.frames;
        }
      }
    }

    // No mixer needed for sprites

    // === Element Orbs — 항상 표시 (전직 후에도 계속 모음) ===
    const orbKey = `${state.fireLv||0}_${state.iceLv||0}_${state.thunderLv||0}_${state.poisonLv||0}_${state.promoted?1:0}`;
    if (orbKey !== this._orbKey) {
      this.elementOrbs.forEach(o => this.scene.remove(o));
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

      // 전직 후: 플레이어 글로우 강화
      if (state.promoted && this.playerLight) {
        const elemColors = { 1: 0xff4400, 2: 0x44ccff, 3: 0xffcc00, 4: 0x44ff44 };
        if (this.playerLight) {
          this.playerLight.color.set(elemColors[state.element] || 0xffffcc);
          this.playerLight.intensity = 3.0;
          this.playerLight.distance = 8;
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
    // Clear any leftover bullet meshes
    while (this.bulletMeshes.length > 0) {
      const m = this.bulletMeshes.pop();
      this.scene.remove(m);
    }

    // XP Orbs (판타지 = 소울/에센스)
    this.updatePool(this.orbMeshes, orbs, () => {
      const m = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.12, 0),
        new THREE.MeshStandardMaterial({ color: 0xaa88ff, emissive: 0x6644ff, emissiveIntensity: 1.5, transparent: true, opacity: 0.8 })
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

    // Animate enemies (bob + hit flash)
    this.enemyMeshes.forEach((m, i) => {
      if (m.visible && enemies[i]) {
        m.position.y = Math.sin(t * 3 + i * 2) * 0.04;
        // Face player
        const dx = playerX - m.position.x;
        const dz = playerZ - m.position.z;
        if (Math.abs(dx) > 0.1 || Math.abs(dz) > 0.1) {
          m.rotation.y = Math.atan2(dx, dz);
        }
        // Hit flash — turn white briefly
        const isHit = enemies[i].hit;
        m.traverse(child => {
          if (child.isMesh && child.material) {
            if (isHit) {
              child.material.emissive = child.material.emissive || new THREE.Color();
              child.material.emissive.set(0xffffff);
              child.material.emissiveIntensity = 2;
            } else {
              child.material.emissiveIntensity = 0;
            }
          }
        });
        // Scale pulse on hit
        const s = isHit ? 1.15 : 1.0;
        m.scale.set(s, s, s);
      }
    });

    this.renderer.render(this.scene, this.camera);

    // Update slash effects
    this.updateSlashes(dt);

    // Update death particles (spawned from JS via spawnDeathParticles)
    for (let i = this.deathParticles.length - 1; i >= 0; i--) {
      const p = this.deathParticles[i];
      if (p.isRing) {
        // Expanding shockwave ring
        p.scale += dt * 12;
        p.mesh.scale.setScalar(p.scale);
        p.mesh.material.opacity = p.life * 2.5;
        p.life -= dt;
      } else {
        p.mesh.position.x += p.vx * dt;
        p.mesh.position.y += p.vy * dt;
        p.mesh.position.z += p.vz * dt;
        p.vy -= 10 * dt; // stronger gravity
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

  spawnDeathParticles(x, z) {
    const colors = [0xff4400, 0xff8800, 0xffcc00, 0xff2200, 0x44ff00, 0xffffff];
    const count = 12 + Math.floor(Math.random() * 6); // more particles
    for (let i = 0; i < count; i++) {
      const size = 0.06 + Math.random() * 0.12; // varied sizes
      const geo = new THREE.SphereGeometry(size, 4, 4);
      const mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true, opacity: 1.0 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, 0.5 + Math.random() * 0.3, z);
      this.scene.add(mesh);

      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 6;
      this.deathParticles.push({
        mesh,
        vx: Math.cos(angle) * speed,
        vy: 4 + Math.random() * 5,
        vz: Math.sin(angle) * speed,
        life: 0.6 + Math.random() * 0.4,
      });
    }

    // Shockwave ring effect
    const ringGeo = new THREE.RingGeometry(0.1, 0.3, 16);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffcc00, transparent: true, opacity: 0.8, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(x, 0.1, z);
    ring.rotation.x = -Math.PI / 2;
    this.scene.add(ring);
    this.deathParticles.push({ mesh: ring, vx: 0, vy: 0, vz: 0, life: 0.3, isRing: true, scale: 1 });
  }

  spawnSlash(fromX, fromZ, toX, toZ, isCrit, atkPower = 25, element = 0) {
    const dx = toX - fromX;
    const dz = toZ - fromZ;
    const angle = Math.atan2(dx, dz);

    const power = Math.min((atkPower - 25) / 80, 1.0);
    const length = (isCrit ? 2.5 : 1.5) + power * 1.0;
    const baseWidth = (isCrit ? 0.6 : 0.3) + power * 0.3;

    const shape = new THREE.Shape();
    shape.moveTo(0, length / 2);
    shape.lineTo(-baseWidth / 2, -length / 3);
    shape.lineTo(baseWidth / 2, -length / 3);
    shape.closePath();

    const geo = new THREE.ShapeGeometry(shape);

    // 원소별 색상
    let color;
    if (isCrit) {
      color = new THREE.Color(0xff2200);
    } else if (element === 1) {
      // 🔥 Fire: 주황→빨강
      color = new THREE.Color(1.0, 0.4 + power * 0.2, 0.0);
    } else if (element === 2) {
      // ❄️ Ice: 밝은 하늘→진한 시안
      color = new THREE.Color(0.2, 0.7 + power * 0.3, 1.0);
    } else if (element === 3) {
      // ⚡ Thunder: 밝은 노랑→금색
      color = new THREE.Color(1.0, 0.9 - power * 0.2, 0.1);
    } else if (element === 4) {
      // ☠️ Poison: 연두→진한 초록
      color = new THREE.Color(0.2, 0.9 - power * 0.2, 0.1);
    } else {
      // 무원소: 하늘→보라 (기본)
      const r = 0.4 + power * 0.3;
      const g = 0.8 - power * 0.6;
      const b = 1.0;
      color = new THREE.Color(r, g, b);
    }

    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: isCrit ? 1.0 : (0.8 + power * 0.2),
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);

    mesh.position.set(toX, 0.8, toZ);
    mesh.lookAt(this.camera.position);
    mesh.rotateZ(-angle + Math.PI + (Math.random() - 0.5) * 0.3);

    this.scene.add(mesh);
    this.slashEffects.push({ mesh, life: 0.15, maxLife: 0.15, isCrit, expand: false });

    if (isCrit) {
      // 크리티컬 링 (원소 색상)
      const ringColor = element === 1 ? 0xff4400 : element === 2 ? 0x00ccff : element === 3 ? 0xffcc00 : element === 4 ? 0x44ff00 : 0xff4400;
      const ringGeo = new THREE.RingGeometry(0.2, 0.5 + power * 0.3, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: ringColor, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(toX, 0.1, toZ);
      ring.rotation.x = -Math.PI / 2;
      this.scene.add(ring);
      this.slashEffects.push({ mesh: ring, life: 0.25, maxLife: 0.25, isCrit: true, expand: true });
    }
  }

  updateSlashes(dt) {
    for (let i = this.slashEffects.length - 1; i >= 0; i--) {
      const s = this.slashEffects[i];
      s.life -= dt;
      const progress = 1 - (s.life / s.maxLife); // 0→1

      if (s.expand) {
        // 크리티컬 링: 확장되면서 사라짐
        const scale = 1 + progress * 3;
        s.mesh.scale.set(scale, scale, 1);
      } else {
        // 검기: 살짝 앞으로 이동하면서 사라짐
        s.mesh.position.y += dt * 2;
      }

      s.mesh.material.opacity = (1 - progress * progress) * (s.isCrit ? 1.0 : 0.85);

      if (s.life <= 0) {
        this.scene.remove(s.mesh);
        this.slashEffects.splice(i, 1);
      }
    }
  }

  createZombie(type) {
    const group = new THREE.Group();
    group.userData = { hitTimer: 0 };

    // 판타지 몬스터 4종: 스켈레톤, 골렘, 임프, 위스프
    const configs = [
      { bodyColor: 0x8a7a5a, headColor: 0xccbb99, eyeColor: 0x44ff44, scale: 1.0 },  // 스켈레톤
      { bodyColor: 0x4a4a5a, headColor: 0x5a5a6a, eyeColor: 0xff4400, scale: 1.5 },  // 골렘
      { bodyColor: 0x6a2a3a, headColor: 0x8a3a4a, eyeColor: 0xff00ff, scale: 0.7 },  // 임프
      { bodyColor: 0x2a4a6a, headColor: 0x3a5a7a, eyeColor: 0x00ffff, scale: 1.0 },  // 레이스
    ];
    const cfg = configs[type] || configs[0];

    // Body
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.22 * cfg.scale, 0.7 * cfg.scale, 6, 8),
      new THREE.MeshStandardMaterial({ color: cfg.bodyColor, roughness: 0.8 })
    );
    body.position.y = 0.55 * cfg.scale;
    body.castShadow = true;
    group.add(body);

    // Head
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.16 * cfg.scale, 8, 6),
      new THREE.MeshStandardMaterial({ color: cfg.headColor, roughness: 0.7 })
    );
    head.position.y = 1.1 * cfg.scale;
    head.castShadow = true;
    group.add(head);

    // Glowing eyes
    const eyeMat = new THREE.MeshStandardMaterial({
      color: cfg.eyeColor,
      emissive: cfg.eyeColor,
      emissiveIntensity: 4,
    });
    const eyeGeo = new THREE.SphereGeometry(0.03 * cfg.scale, 6, 4);
    const le = new THREE.Mesh(eyeGeo, eyeMat);
    le.position.set(-0.05 * cfg.scale, 1.12 * cfg.scale, 0.12 * cfg.scale);
    group.add(le);
    const re = new THREE.Mesh(eyeGeo, eyeMat);
    re.position.set(0.05 * cfg.scale, 1.12 * cfg.scale, 0.12 * cfg.scale);
    group.add(re);

    // 타입별 장식
    if (type === 0) {
      // 스켈레톤: 뼈 느낌 팔
      const armMat = new THREE.MeshStandardMaterial({ color: 0xccbb99, roughness: 0.9 });
      const arm = new THREE.CapsuleGeometry(0.04, 0.4, 3, 4);
      const la = new THREE.Mesh(arm, armMat); la.position.set(-0.25, 0.7, 0.1); la.rotation.x = -0.7; group.add(la);
      const ra = new THREE.Mesh(arm, armMat); ra.position.set(0.25, 0.7, 0.1); ra.rotation.x = -0.5; group.add(ra);
    } else if (type === 1) {
      // 골렘: 어깨 돌덩이
      const shoulder = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.2, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x5a5a6a, roughness: 1.0 })
      );
      shoulder.position.set(-0.3, 1.0, 0); group.add(shoulder);
      const s2 = shoulder.clone(); s2.position.set(0.3, 1.0, 0); group.add(s2);
    } else if (type === 2) {
      // 임프: 날개
      const wingMat = new THREE.MeshStandardMaterial({ color: 0x4a1a2a, side: THREE.DoubleSide });
      const wing = new THREE.PlaneGeometry(0.3, 0.4);
      const lw = new THREE.Mesh(wing, wingMat); lw.position.set(-0.2, 0.8, -0.1); lw.rotation.y = 0.5; group.add(lw);
      const rw = new THREE.Mesh(wing, wingMat); rw.position.set(0.2, 0.8, -0.1); rw.rotation.y = -0.5; group.add(rw);
    } else if (type === 3) {
      // 레이스: 후광 링
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.25, 0.02, 8, 16),
        new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x0088ff, emissiveIntensity: 2, transparent: true, opacity: 0.6 })
      );
      ring.position.y = 1.3; ring.rotation.x = Math.PI / 2; group.add(ring);
    }

    return group;
  }

  updatePool(pool, data, createFn) {
    // Hide excess
    for (let i = data.length; i < pool.length; i++) {
      pool[i].visible = false;
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
}
