/**
 * VFX Module — Particle & Effect Methods for ThreeRenderer
 * These methods are mixed into ThreeRenderer.prototype
 */
import * as THREE from 'three';

export const vfxMethods = {

  spawnDeathParticles(x, z, element = 0) {
    // === ART: 원소별 사망 연출 (형태+움직임 차별화) ===
    // 화염: 내부 밝아진 뒤 외부로 폭발 (삼각형, 팽창)
    // 냉기: 잠시 굳은 뒤 결정 파괴 (육각형, 정지→균열)
    // 번개: 실루엣 플래시 후 여러 방향 전류 (지그재그, 점멸)
    // 독: 안쪽으로 찌그러지며 소멸 (원, 수축)
    let colors, ringColor;
    switch (element) {
      case 1: colors = [0xff4400, 0xff6600, 0xcc3300, 0xff8800, 0xffaa00]; ringColor = 0xff4400; break;
      case 2: colors = [0x44aacc, 0x66ccee, 0x2288aa, 0x88eeff, 0xaaffff]; ringColor = 0x44ccff; break;
      case 3: colors = [0xccaa00, 0xffdd44, 0xffff88, 0xaa8800, 0xffffcc]; ringColor = 0xffcc00; break;
      case 4: colors = [0x6622aa, 0x9933ff, 0x441188, 0xaa44ff, 0x33ff33]; ringColor = 0x9933ff; break;
      default: colors = [0x888888, 0xaaaaaa, 0xcccccc, 0x666666, 0xffffff]; ringColor = 0xcccccc; break;
    }

    if (element === 1) {
      // 🔥 FIRE: Triangular shards exploding outward + expanding heat ring
      const count = 8 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const geo = new THREE.ConeGeometry(0.06 + Math.random() * 0.08, 0.15, 3);
        const mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true, opacity: 0.9 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, 0.4 + Math.random() * 0.3, z);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        this.scene.add(mesh);
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 5;
        this.deathParticles.push({ mesh, vx: Math.cos(angle) * speed, vy: 3 + Math.random() * 4, vz: Math.sin(angle) * speed, life: 0.5 + Math.random() * 0.3 });
      }
      // Expanding heat ring
      const ringGeo = new THREE.RingGeometry(0.1, 0.5, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xff4400, transparent: true, opacity: 0.7, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(x, 0.1, z); ring.rotation.x = -Math.PI / 2;
      this.scene.add(ring);
      this.deathParticles.push({ mesh: ring, vx: 0, vy: 0, vz: 0, life: 0.4, isRing: true, scale: 0.3 });
    } else if (element === 2) {
      // ❄️ ICE: Hexagonal crystal shatter (brief freeze then crack apart)
      const count = 6 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        const geo = new THREE.OctahedronGeometry(0.08 + Math.random() * 0.06, 0);
        const mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true, opacity: 0.8 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, 0.4, z);
        this.scene.add(mesh);
        const angle = (i / count) * Math.PI * 2;
        // Delayed explosion (freeze first 0.1s then burst)
        this.deathParticles.push({ mesh, vx: Math.cos(angle) * 3, vy: 2 + Math.random() * 2, vz: Math.sin(angle) * 3, life: 0.6 + Math.random() * 0.2 });
      }
      // Frost ground circle
      const frostGeo = new THREE.CircleGeometry(0.6, 6);
      const frostMat = new THREE.MeshBasicMaterial({ color: 0x1a3344, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
      const frost = new THREE.Mesh(frostGeo, frostMat);
      frost.position.set(x, 0.015, z); frost.rotation.x = -Math.PI / 2;
      this.scene.add(frost);
      this.deathParticles.push({ mesh: frost, vx: 0, vy: 0, vz: 0, life: 1.5, isRing: true, scale: 1, noScale: true });
    } else if (element === 3) {
      // ⚡ THUNDER: Flash silhouette then multi-direction current lines
      // Bright flash sphere
      const flashGeo = new THREE.SphereGeometry(0.5, 8, 8);
      const flashMat = new THREE.MeshBasicMaterial({ color: 0xffffaa, transparent: true, opacity: 0.9 });
      const flash = new THREE.Mesh(flashGeo, flashMat);
      flash.position.set(x, 0.5, z);
      this.scene.add(flash);
      this.deathParticles.push({ mesh: flash, vx: 0, vy: 0, vz: 0, life: 0.08, isRing: true, scale: 1, noScale: true });
      // Lightning bolts radiating out
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2 + Math.random() * 0.5;
        const pts = [];
        for (let j = 0; j <= 4; j++) {
          const t = j * 0.3;
          const jitter = j > 0 && j < 4 ? (Math.random() - 0.5) * 0.25 : 0;
          pts.push(new THREE.Vector3(x + Math.cos(angle) * t + Math.sin(angle) * jitter, 0.3 + Math.random() * 0.1, z + Math.sin(angle) * t - Math.cos(angle) * jitter));
        }
        const curve = new THREE.CatmullRomCurve3(pts);
        const tubeGeo = new THREE.TubeGeometry(curve, 6, 0.02, 3, false);
        const tubeMat = new THREE.MeshBasicMaterial({ color: 0xffff44, transparent: true, opacity: 0.8 });
        const bolt = new THREE.Mesh(tubeGeo, tubeMat);
        this.scene.add(bolt);
        this.deathParticles.push({ mesh: bolt, vx: 0, vy: 0, vz: 0, life: 0.15, isRing: true, scale: 1, noScale: true });
      }
    } else if (element === 4) {
      // ☠️ POISON: Implode inward then dissolve (shrinking particles)
      const count = 8;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const dist = 0.8 + Math.random() * 0.4;
        const geo = new THREE.SphereGeometry(0.08, 5, 5);
        const mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true, opacity: 0.6 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x + Math.cos(angle) * dist, 0.3, z + Math.sin(angle) * dist);
        this.scene.add(mesh);
        // Move INWARD (negative speed toward center)
        this.deathParticles.push({ mesh, vx: -Math.cos(angle) * 3, vy: 0.5, vz: -Math.sin(angle) * 3, life: 0.4 });
      }
      // Corrosion pool
      const poolGeo = new THREE.CircleGeometry(0.4, 5);
      const poolMat = new THREE.MeshBasicMaterial({ color: 0x1a0022, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
      const pool = new THREE.Mesh(poolGeo, poolMat);
      pool.position.set(x, 0.012, z); pool.rotation.x = -Math.PI / 2;
      this.scene.add(pool);
      this.deathParticles.push({ mesh: pool, vx: 0, vy: 0, vz: 0, life: 2.0, isRing: true, scale: 1, noScale: true });
    } else {
      // Default: neutral gray shatter
      const count = 8;
      for (let i = 0; i < count; i++) {
        const geo = new THREE.SphereGeometry(0.05 + Math.random() * 0.08, 5, 5);
        const mat = new THREE.MeshBasicMaterial({ color: colors[i % colors.length], transparent: true, opacity: 0.7 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, 0.3 + Math.random() * 0.3, z);
        this.scene.add(mesh);
        const angle = Math.random() * Math.PI * 2;
        this.deathParticles.push({ mesh, vx: Math.cos(angle) * 4, vy: 3 + Math.random() * 3, vz: Math.sin(angle) * 4, life: 0.4 + Math.random() * 0.3 });
      }
    }
  },

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
    let color;
    if (isCrit) { color = new THREE.Color(0xff2200); }
    else if (element === 1) { color = new THREE.Color(1.0, 0.4 + power * 0.2, 0.0); }
    else if (element === 2) { color = new THREE.Color(0.2, 0.7 + power * 0.3, 1.0); }
    else if (element === 3) { color = new THREE.Color(1.0, 0.9 - power * 0.2, 0.1); }
    else if (element === 4) { color = new THREE.Color(0.2, 0.9 - power * 0.2, 0.1); }
    else { color = new THREE.Color(0.4 + power * 0.3, 0.8 - power * 0.6, 1.0); }
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: isCrit ? 1.0 : (0.8 + power * 0.2), side: THREE.DoubleSide, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(toX, 0.8, toZ);
    mesh.lookAt(this.camera.position);
    mesh.rotateZ(-angle + Math.PI + (Math.random() - 0.5) * 0.3);
    this.scene.add(mesh);
    this.slashEffects.push({ mesh, life: 0.15, maxLife: 0.15, isCrit, expand: false });
    if (isCrit) {
      const ringColor = element === 1 ? 0xff4400 : element === 2 ? 0x00ccff : element === 3 ? 0xffcc00 : element === 4 ? 0x44ff00 : 0xff4400;
      const ringGeo = new THREE.RingGeometry(0.2, 0.5 + power * 0.3, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: ringColor, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.set(toX, 0.1, toZ);
      ring.rotation.x = -Math.PI / 2;
      this.scene.add(ring);
      this.slashEffects.push({ mesh: ring, life: 0.25, maxLife: 0.25, isCrit: true, expand: true });
    }
  },

  updateSlashes(dt) {
    for (let i = this.slashEffects.length - 1; i >= 0; i--) {
      const s = this.slashEffects[i];
      s.life -= dt;
      const progress = 1 - (s.life / s.maxLife);
      if (s.expand) { const scale = 1 + progress * 3; s.mesh.scale.set(scale, scale, 1); }
      else { s.mesh.position.y += dt * 2; }
      s.mesh.material.opacity = (1 - progress * progress) * (s.isCrit ? 1.0 : 0.85);
      if (s.life <= 0) { this.scene.remove(s.mesh); this.slashEffects.splice(i, 1); }
    }
  },

};

export const vfxShieldMethods = {

  spawnShieldEffect(x, z, element = 0) {
    const colors = { 1: 0xff6633, 2: 0x6699bb, 3: 0xddcc44, 4: 0x7744aa, 0: 0x88ccff };
    const color = colors[element] || 0x88ccff;
    const ringGeo = new THREE.TorusGeometry(1.0, 0.05, 8, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.45 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(x, 0.5, z); ring.rotation.x = Math.PI / 2;
    this.scene.add(ring);
    this._shieldRing = { mesh: ring, life: 5.0, color };
    const outerGeo = new THREE.TorusGeometry(1.2, 0.03, 6, 20);
    const outerMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.2 });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    outer.position.set(x, 0.5, z); outer.rotation.x = Math.PI / 2;
    this.scene.add(outer);
    this._shieldOuter = { mesh: outer };
  },

  updateShield(playerX, playerZ, dt) {
    if (this._shieldRing) {
      this._shieldRing.life -= dt;
      this._shieldRing.mesh.position.set(playerX, 0.5, playerZ);
      this._shieldRing.mesh.rotation.z += dt * 2;
      const t = this._shieldRing.life;
      this._shieldRing.mesh.material.opacity = t > 1 ? 0.45 : 0.2 + Math.sin(t * 15) * 0.2;
      if (this._shieldOuter) {
        this._shieldOuter.mesh.position.set(playerX, 0.5, playerZ);
        this._shieldOuter.mesh.rotation.z -= dt * 1.5;
        this._shieldOuter.mesh.material.opacity = t > 1 ? 0.2 : 0.1;
      }
      if (t <= 0) {
        this.scene.remove(this._shieldRing.mesh);
        if (this._shieldOuter) this.scene.remove(this._shieldOuter.mesh);
        const burstGeo = new THREE.RingGeometry(0.5, 2.5, 20);
        const burstMat = new THREE.MeshBasicMaterial({ color: this._shieldRing.color, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
        const burst = new THREE.Mesh(burstGeo, burstMat);
        burst.position.set(playerX, 0.2, playerZ); burst.rotation.x = -Math.PI / 2;
        this.scene.add(burst);
        this.deathParticles.push({ mesh: burst, vx: 0, vy: 0, vz: 0, life: 0.4, isRing: true, scale: 1 });
        this._shieldRing = null; this._shieldOuter = null;
      }
    }
  },

  spawnUltimateEffect(x, z, element, range) {
    const colors = { 1: 0xff4400, 2: 0x44ccff, 3: 0xffcc00, 4: 0x9933ff, 0: 0xffffff };
    const color = colors[element] || 0xffffff;
    const circGeo = new THREE.RingGeometry(range * 0.2, range * 0.85, 48);
    const circMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
    const circ = new THREE.Mesh(circGeo, circMat);
    circ.position.set(x, 0.08, z); circ.rotation.x = -Math.PI / 2;
    this.scene.add(circ);
    this.deathParticles.push({ mesh: circ, vx: 0, vy: 0, vz: 0, life: 1.5, isRing: true, scale: 0.3 });
    switch (element) {
      case 1:
        for (let i = 0; i < 12; i++) { const angle = (i/12)*Math.PI*2+Math.random()*0.3; const r = range*(0.2+Math.random()*0.6); const size = 0.2+Math.random()*0.2; const geo = new THREE.SphereGeometry(size,6,6); const mat = new THREE.MeshBasicMaterial({color:[0xff4400,0xff6600,0xff2200,0xffaa00][i%4],transparent:true,opacity:0.5}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x+Math.cos(angle)*r,0.1,z+Math.sin(angle)*r); this.scene.add(mesh); this.deathParticles.push({mesh,vx:0,vy:6+Math.random()*4,vz:0,life:0.6+Math.random()*0.3}); }
        for (let i = 0; i < 16; i++) { const angle = (i/16)*Math.PI*2; const geo = new THREE.SphereGeometry(0.15,5,5); const mat = new THREE.MeshBasicMaterial({color:0xff6600,transparent:true,opacity:0.4}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x,0.3,z); this.scene.add(mesh); this.deathParticles.push({mesh,vx:Math.cos(angle)*8,vy:1,vz:Math.sin(angle)*8,life:0.7,isRing:true,scale:0.8}); }
        break;
      case 2:
        for (let i = 0; i < 10; i++) { const angle = (i/10)*Math.PI*2; const r = range*(0.3+Math.random()*0.5); const geo = new THREE.OctahedronGeometry(0.15+Math.random()*0.1); const mat = new THREE.MeshBasicMaterial({color:[0x88ddff,0xaaeeff,0x66ccff,0xffffff][i%4],transparent:true,opacity:0.6}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x+Math.cos(angle)*r,0.5+Math.random()*1.5,z+Math.sin(angle)*r); this.scene.add(mesh); this.deathParticles.push({mesh,vx:(Math.random()-0.5)*2,vy:-3,vz:(Math.random()-0.5)*2,life:1.0}); }
        for (let i = 0; i < 20; i++) { const angle = (i/20)*Math.PI*2; const geo = new THREE.SphereGeometry(0.12,4,4); const mat = new THREE.MeshBasicMaterial({color:0x99eeff,transparent:true,opacity:0.3}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x,0.05,z); this.scene.add(mesh); this.deathParticles.push({mesh,vx:Math.cos(angle)*6,vy:0,vz:Math.sin(angle)*6,life:0.9,isRing:true,scale:0.5}); }
        break;
      case 3:
        for (let i = 0; i < 6; i++) { const angle = (i/6)*Math.PI*2+Math.random()*0.5; const r = range*(0.15+Math.random()*0.5); const bx = x+Math.cos(angle)*r; const bz = z+Math.sin(angle)*r; const pts = []; for (let j=0;j<=6;j++){const y=5-(j/6)*5;const jitter=j>0&&j<6?(Math.random()-0.5)*0.4:0;pts.push(new THREE.Vector3(bx+jitter,y,bz+jitter));} const curve = new THREE.CatmullRomCurve3(pts); const tubeGeo = new THREE.TubeGeometry(curve,8,0.04,4,false); const tubeMat = new THREE.MeshBasicMaterial({color:0xffff88,transparent:true,opacity:0.9}); const bolt = new THREE.Mesh(tubeGeo,tubeMat); this.scene.add(bolt); this.deathParticles.push({mesh:bolt,vx:0,vy:0,vz:0,life:0.15+Math.random()*0.1,isRing:true,scale:1,noScale:true}); const sparkGeo = new THREE.SphereGeometry(0.25,6,6); const sparkMat = new THREE.MeshBasicMaterial({color:0xffffcc,transparent:true,opacity:0.8}); const spark = new THREE.Mesh(sparkGeo,sparkMat); spark.position.set(bx,0.1,bz); this.scene.add(spark); this.deathParticles.push({mesh:spark,vx:0,vy:0,vz:0,life:0.2,isRing:true,scale:0.5}); }
        break;
      case 4:
        for (let i = 0; i < 14; i++) { const angle = (i/14)*Math.PI*2+Math.random()*0.4; const r = range*(0.1+Math.random()*0.7); const geo = new THREE.SphereGeometry(0.2+Math.random()*0.15,5,5); const mat = new THREE.MeshBasicMaterial({color:[0x6622aa,0x9933ff,0x441188,0xaa44ff][i%4],transparent:true,opacity:0.35}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x+Math.cos(angle)*r,0.1,z+Math.sin(angle)*r); this.scene.add(mesh); this.deathParticles.push({mesh,vx:(Math.random()-0.5)*1.5,vy:2+Math.random()*2,vz:(Math.random()-0.5)*1.5,life:1.2,isRing:true,scale:0.6}); }
        for (let i = 0; i < 10; i++) { const angle = (i/10)*Math.PI*2; const r = range*0.6; const geo = new THREE.SphereGeometry(0.08,4,4); const mat = new THREE.MeshBasicMaterial({color:0x33ff33,transparent:true,opacity:0.5}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x+Math.cos(angle)*r,0.05,z+Math.sin(angle)*r); this.scene.add(mesh); this.deathParticles.push({mesh,vx:0,vy:3+Math.random()*2,vz:0,life:0.5+Math.random()*0.3}); }
        break;
      default:
        for (let i = 0; i < 8; i++) { const angle = (i/8)*Math.PI*2; const r = range*0.5; const geo = new THREE.SphereGeometry(0.1,4,4); const mat = new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0.6}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x+Math.cos(angle)*r,0.2,z+Math.sin(angle)*r); this.scene.add(mesh); this.deathParticles.push({mesh,vx:0,vy:4+Math.random()*2,vz:0,life:0.8}); }
    }
    this.hitStop(0.1);
  },

  spawnAdvancedUltimateEffect(x, z, element, range) {
    const colors = { 1: 0xff4400, 2: 0x44ccff, 3: 0xffcc00, 4: 0x9933ff };
    const color = colors[element] || 0xffffff;
    const ringGeo = new THREE.RingGeometry(range*0.1, range*0.9, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(x, 0.1, z); ring.rotation.x = -Math.PI / 2;
    this.scene.add(ring);
    this.deathParticles.push({ mesh: ring, vx: 0, vy: 0, vz: 0, life: 1.8, isRing: true, scale: 0.2 });
    const innerGeo = new THREE.TorusGeometry(range*0.3, 0.15, 8, 32);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    inner.position.set(x, 0.5, z); inner.rotation.x = -Math.PI / 2;
    this.scene.add(inner);
    this.deathParticles.push({ mesh: inner, vx: 0, vy: 0, vz: 0, life: 1.5, isRing: true, scale: 0.5 });
    for (let i = 0; i < 24; i++) { const angle = (i/24)*Math.PI*2; const speed = 8+Math.random()*6; const size = 0.15+Math.random()*0.15; const geo = new THREE.SphereGeometry(size,5,5); const mat = new THREE.MeshBasicMaterial({color,transparent:true,opacity:0.5}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x,0.3,z); this.scene.add(mesh); this.deathParticles.push({mesh,vx:Math.cos(angle)*speed,vy:1+Math.random()*2,vz:Math.sin(angle)*speed,life:0.6,isRing:true,scale:0.8}); }
    for (let i = 0; i < 8; i++) { const angle = (i/8)*Math.PI*2; const r = range*0.5; const geo = new THREE.CylinderGeometry(0.08,0.15,2.5,6); const mat = new THREE.MeshBasicMaterial({color,transparent:true,opacity:0.6}); const mesh = new THREE.Mesh(geo,mat); mesh.position.set(x+Math.cos(angle)*r,1.0,z+Math.sin(angle)*r); this.scene.add(mesh); this.deathParticles.push({mesh,vx:0,vy:5+Math.random()*3,vz:0,life:0.7}); }
    for (let w = 0; w < 3; w++) { const wGeo = new THREE.RingGeometry(0.1,0.3,32); const wMat = new THREE.MeshBasicMaterial({color,transparent:true,opacity:0.3,side:THREE.DoubleSide}); const wave = new THREE.Mesh(wGeo,wMat); wave.position.set(x,0.05+w*0.02,z); wave.rotation.x=-Math.PI/2; this.scene.add(wave); this.deathParticles.push({mesh:wave,vx:0,vy:0,vz:0,life:1.0+w*0.3,isRing:true,scale:0.1+w*0.2}); }
    this.hitStop(0.18);
  },

};

export const vfxDirectionalMethods = {

  spawnSkillEffect(x, z, element, range) {
    switch (element) {
      case 1: this._spawnFireBurst(x, z, range); break;
      case 2: this._spawnIceShatter(x, z, range); break;
      case 3: this._spawnLightningChain(x, z, range); break;
      case 4: this._spawnPoisonCloud(x, z, range); break;
      default: this._spawnFireBurst(x, z, range); break;
    }
  },

  spawnDirectionalEffect(fromX, fromZ, angle, element, range) {
    const dirX = Math.cos(angle);
    const dirZ = -Math.sin(angle);
    switch (element) {
      case 1: this._spawnFireBreath(fromX, fromZ, dirX, dirZ, range); break;
      case 3: this._spawnLightningBolt(fromX, fromZ, dirX, dirZ, range); break;
      case 2: this._spawnIceWave(fromX, fromZ, dirX, dirZ, range); break;
      case 4: this._spawnPoisonMist(fromX, fromZ, dirX, dirZ, range); break;
      default: this._spawnFireBreath(fromX, fromZ, dirX, dirZ, range); break;
    }
  },

  spawnAdvancedDirectionalEffect(fromX, fromZ, angle, element, range) {
    const dirX = Math.cos(angle);
    const dirZ = -Math.sin(angle);
    switch (element) {
      case 1: this._advFire(fromX, fromZ, dirX, dirZ, range); break;
      case 2: this._advIce(fromX, fromZ, dirX, dirZ, range); break;
      case 3: this._advThunder(fromX, fromZ, dirX, dirZ, range); break;
      case 4: this._advPoison(fromX, fromZ, dirX, dirZ, range); break;
      default: this._advFire(fromX, fromZ, dirX, dirZ, range); break;
    }
  },

  _advFire(x, z, dirX, dirZ, range) {
    for (let i = 0; i < 6; i++) { const t=((i+1)/6)*range; const px=x+dirX*t; const pz=z+dirZ*t; const geo=new THREE.CylinderGeometry(0.12,0.2,1.5+Math.random(),6); const mat=new THREE.MeshBasicMaterial({color:[0xff3300,0xff6600,0xff4400][i%3],transparent:true,opacity:0.6}); const mesh=new THREE.Mesh(geo,mat); mesh.position.set(px,0.75,pz); this.scene.add(mesh); this.deathParticles.push({mesh,vx:0,vy:3,vz:0,life:0.4+i*0.05}); const sGeo=new THREE.RingGeometry(0.05,0.25,8); const sMat=new THREE.MeshBasicMaterial({color:0x441100,transparent:true,opacity:0.4,side:THREE.DoubleSide}); const scorch=new THREE.Mesh(sGeo,sMat); scorch.position.set(px,0.02,pz); scorch.rotation.x=-Math.PI/2; this.scene.add(scorch); this.deathParticles.push({mesh:scorch,vx:0,vy:0,vz:0,life:0.8,isRing:true,scale:0.8,noScale:true}); }
    for (let i = 0; i < 10; i++) { const t=Math.random()*range; const spread=(Math.random()-0.5)*1.0; const perpX=-dirZ,perpZ=dirX; const geo=new THREE.SphereGeometry(0.04,3,3); const mat=new THREE.MeshBasicMaterial({color:0xffaa00,transparent:true,opacity:0.7}); const mesh=new THREE.Mesh(geo,mat); mesh.position.set(x+dirX*t+perpX*spread,0.3,z+dirZ*t+perpZ*spread); this.scene.add(mesh); this.deathParticles.push({mesh,vx:(Math.random()-0.5)*2,vy:3+Math.random()*3,vz:(Math.random()-0.5)*2,life:0.5}); }
  },

  _advIce(x, z, dirX, dirZ, range) {
    for (let i = 0; i < 3; i++) { const offset=(i-1)*0.4; const perpX=-dirZ,perpZ=dirX; const sx=x+perpX*offset; const sz=z+perpZ*offset; const geo=new THREE.BoxGeometry(0.08,0.08,range*0.7); const mat=new THREE.MeshBasicMaterial({color:[0x88eeff,0xaaffff,0x66ddff][i],transparent:true,opacity:0.7}); const mesh=new THREE.Mesh(geo,mat); const midT=range*0.35; mesh.position.set(sx+dirX*midT,0.4,sz+dirZ*midT); mesh.rotation.y=-Math.atan2(dirZ,dirX); this.scene.add(mesh); this.deathParticles.push({mesh,vx:dirX*18,vy:0,vz:dirZ*18,life:0.35,isRing:true,scale:1,noScale:true}); }
    for (let i = 0; i < 12; i++) { const t=Math.random()*range*0.8; const spread=(Math.random()-0.5)*1.2; const perpX=-dirZ,perpZ=dirX; const geo=new THREE.OctahedronGeometry(0.06); const mat=new THREE.MeshBasicMaterial({color:0xccffff,transparent:true,opacity:0.5}); const mesh=new THREE.Mesh(geo,mat); mesh.position.set(x+dirX*t+perpX*spread,0.2+Math.random()*0.3,z+dirZ*t+perpZ*spread); this.scene.add(mesh); this.deathParticles.push({mesh,vx:dirX*2,vy:-1,vz:dirZ*2,life:0.6}); }
  },

  _advThunder(x, z, dirX, dirZ, range) {
    const pts=[]; for(let i=0;i<=10;i++){const t=(i/10)*range;const jitter=i>0&&i<10?(Math.random()-0.5)*0.15:0;const perpX=-dirZ,perpZ=dirX;pts.push(new THREE.Vector3(x+dirX*t+perpX*jitter,0.4,z+dirZ*t+perpZ*jitter));} const curve=new THREE.CatmullRomCurve3(pts); const tubeGeo=new THREE.TubeGeometry(curve,12,0.12,6,false); const tubeMat=new THREE.MeshBasicMaterial({color:0xffff00,transparent:true,opacity:0.9}); const beam=new THREE.Mesh(tubeGeo,tubeMat); this.scene.add(beam); this.deathParticles.push({mesh:beam,vx:0,vy:0,vz:0,life:0.25,isRing:true,scale:1,noScale:true});
    const coreGeo=new THREE.TubeGeometry(curve,12,0.04,4,false); const coreMat=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:1.0}); const core=new THREE.Mesh(coreGeo,coreMat); this.scene.add(core); this.deathParticles.push({mesh:core,vx:0,vy:0,vz:0,life:0.2,isRing:true,scale:1,noScale:true});
    for(let s=-1;s<=1;s+=2){const arcPts=[];const perpX=-dirZ*s,perpZ=dirX*s;for(let i=0;i<=5;i++){const t=(i/5)*range*0.8;const drift=Math.sin(i*1.5)*0.4;arcPts.push(new THREE.Vector3(x+dirX*t+perpX*(0.3+drift),0.35+Math.random()*0.1,z+dirZ*t+perpZ*(0.3+drift)));} const arcCurve=new THREE.CatmullRomCurve3(arcPts); const arcTube=new THREE.Mesh(new THREE.TubeGeometry(arcCurve,6,0.025,3,false),new THREE.MeshBasicMaterial({color:0xaaccff,transparent:true,opacity:0.6})); this.scene.add(arcTube); this.deathParticles.push({mesh:arcTube,vx:0,vy:0,vz:0,life:0.15,isRing:true,scale:1,noScale:true});}
    const endX=x+dirX*range;const endZ=z+dirZ*range;const impactGeo=new THREE.SphereGeometry(0.4,8,8);const impactMat=new THREE.MeshBasicMaterial({color:0xffffaa,transparent:true,opacity:0.8});const impact=new THREE.Mesh(impactGeo,impactMat);impact.position.set(endX,0.4,endZ);this.scene.add(impact);this.deathParticles.push({mesh:impact,vx:0,vy:0,vz:0,life:0.2,isRing:true,scale:0.5});
  },

  _advPoison(x, z, dirX, dirZ, range) {
    for(let i=0;i<14;i++){const spreadAngle=((i/13)-0.5)*2.2;const sdx=dirX*Math.cos(spreadAngle)-dirZ*Math.sin(spreadAngle);const sdz=dirX*Math.sin(spreadAngle)+dirZ*Math.cos(spreadAngle);const dist=range*(0.3+Math.random()*0.7);const size=0.15+Math.random()*0.2;const geo=new THREE.SphereGeometry(size,5,5);const colors=[0x6622aa,0x9933ff,0x441188,0x7733cc,0x22aa44];const mat=new THREE.MeshBasicMaterial({color:colors[i%5],transparent:true,opacity:0.4});const mesh=new THREE.Mesh(geo,mat);mesh.position.set(x+sdx*0.5,0.15,z+sdz*0.5);this.scene.add(mesh);this.deathParticles.push({mesh,vx:sdx*7,vy:0.5,vz:sdz*7,life:0.7,isRing:true,scale:0.7});}
    for(let i=0;i<5;i++){const t=(i+1)/5*range*0.6;const geo=new THREE.RingGeometry(0.1,0.3+Math.random()*0.2,8);const mat=new THREE.MeshBasicMaterial({color:0x33cc33,transparent:true,opacity:0.3,side:THREE.DoubleSide});const pool=new THREE.Mesh(geo,mat);pool.position.set(x+dirX*t+(Math.random()-0.5)*0.5,0.02,z+dirZ*t+(Math.random()-0.5)*0.5);pool.rotation.x=-Math.PI/2;this.scene.add(pool);this.deathParticles.push({mesh:pool,vx:0,vy:0,vz:0,life:1.2,isRing:true,scale:0.5});}
  },

  _spawnFireBreath(x, z, dirX, dirZ, range) {
    for(let i=0;i<8;i++){const spreadAngle=((i/7)-0.5)*1.6;const sdx=dirX*Math.cos(spreadAngle)-dirZ*Math.sin(spreadAngle);const sdz=dirX*Math.sin(spreadAngle)+dirZ*Math.cos(spreadAngle);const size=0.15+Math.random()*0.15;const geo=new THREE.SphereGeometry(size,6,6);const colors=[0xff6600,0xff4400,0xcc2200,0xff8800];const mat=new THREE.MeshBasicMaterial({color:colors[i%4],transparent:true,opacity:0.35});const mesh=new THREE.Mesh(geo,mat);mesh.position.set(x+sdx*0.8,0.3,z+sdz*0.8);this.scene.add(mesh);this.deathParticles.push({mesh,vx:sdx*5,vy:0.1,vz:sdz*5,life:0.5,isRing:true,scale:1});}
  },

  _spawnLightningBolt(x, z, dirX, dirZ, range) {
    const points=[];for(let i=0;i<=8;i++){const t=(i/8)*range;const jitter=i>0&&i<8?(Math.random()-0.5)*0.5:0;const perpX=-dirZ,perpZ=dirX;points.push(new THREE.Vector3(x+dirX*t+perpX*jitter,0.4,z+dirZ*t+perpZ*jitter));} const curve=new THREE.CatmullRomCurve3(points);const tubeGeo=new THREE.TubeGeometry(curve,10,0.05,4,false);const tubeMat=new THREE.MeshBasicMaterial({color:0xffff66,transparent:true,opacity:0.8});const tube=new THREE.Mesh(tubeGeo,tubeMat);this.scene.add(tube);this.deathParticles.push({mesh:tube,vx:0,vy:0,vz:0,life:0.18,isRing:true,scale:1,noScale:true});
    const points2=[];for(let i=0;i<=6;i++){const t=(i/6)*range*0.85;const jitter=(Math.random()-0.5)*0.7;const perpX=-dirZ,perpZ=dirX;points2.push(new THREE.Vector3(x+dirX*t+perpX*jitter,0.5,z+dirZ*t+perpZ*jitter));} const curve2=new THREE.CatmullRomCurve3(points2);const tube2=new THREE.Mesh(new THREE.TubeGeometry(curve2,8,0.025,3,false),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:0.6}));this.scene.add(tube2);this.deathParticles.push({mesh:tube2,vx:0,vy:0,vz:0,life:0.12,isRing:true,scale:1,noScale:true});
    const endX=x+dirX*range;const endZ=z+dirZ*range;const spark=new THREE.Mesh(new THREE.SphereGeometry(0.2,6,6),new THREE.MeshBasicMaterial({color:0xffffaa,transparent:true,opacity:0.7}));spark.position.set(endX,0.4,endZ);this.scene.add(spark);this.deathParticles.push({mesh:spark,vx:0,vy:0,vz:0,life:0.12,isRing:true,scale:1,noScale:true});
  },

  _spawnIceWave(x, z, dirX, dirZ, range) {
    for(let i=0;i<7;i++){const spreadAngle=((i/6)-0.5)*1.4;const sdx=dirX*Math.cos(spreadAngle)-dirZ*Math.sin(spreadAngle);const sdz=dirX*Math.sin(spreadAngle)+dirZ*Math.cos(spreadAngle);const size=0.12+Math.random()*0.1;const geo=new THREE.SphereGeometry(size,6,6);const mat=new THREE.MeshBasicMaterial({color:0x5588aa,transparent:true,opacity:0.3});const mesh=new THREE.Mesh(geo,mat);mesh.position.set(x+sdx*0.6,0.2,z+sdz*0.6);this.scene.add(mesh);this.deathParticles.push({mesh,vx:sdx*5,vy:0.1,vz:sdz*5,life:0.45,isRing:true,scale:1});}
  },

  _spawnPoisonMist(x, z, dirX, dirZ, range) {
    for(let i=0;i<6;i++){const spreadAngle=((i/5)-0.5)*1.2;const sdx=dirX*Math.cos(spreadAngle)-dirZ*Math.sin(spreadAngle);const sdz=dirX*Math.sin(spreadAngle)+dirZ*Math.cos(spreadAngle);const size=0.12+Math.random()*0.12;const geo=new THREE.SphereGeometry(size,5,5);const mat=new THREE.MeshBasicMaterial({color:0x220033,transparent:true,opacity:0.2});const mesh=new THREE.Mesh(geo,mat);mesh.position.set(x+sdx*0.5,0.15,z+sdz*0.5);this.scene.add(mesh);this.deathParticles.push({mesh,vx:sdx*3,vy:0.05,vz:sdz*3,life:0.7,isRing:true,scale:1});}
  },

  _spawnFireBurst(x, z, range) {
    const ringGeo=new THREE.RingGeometry(0.3,range*0.8,24);const ringMat=new THREE.MeshBasicMaterial({color:0xff4400,transparent:true,opacity:0.7,side:THREE.DoubleSide});const ring=new THREE.Mesh(ringGeo,ringMat);ring.position.set(x,0.15,z);ring.rotation.x=-Math.PI/2;this.scene.add(ring);this.deathParticles.push({mesh:ring,vx:0,vy:0,vz:0,life:0.4,isRing:true,scale:0.3});
    for(let i=0;i<10;i++){const angle=Math.random()*Math.PI*2;const geo=new THREE.SphereGeometry(0.08+Math.random()*0.06,4,4);const mat=new THREE.MeshBasicMaterial({color:Math.random()>0.5?0xff6600:0xffcc00,transparent:true,opacity:0.9});const mesh=new THREE.Mesh(geo,mat);mesh.position.set(x,0.5,z);this.scene.add(mesh);this.deathParticles.push({mesh,vx:Math.cos(angle)*5,vy:2+Math.random()*3,vz:Math.sin(angle)*5,life:0.5});}
  },

  _spawnIceShatter(x, z, range) {
    for(let i=0;i<5;i++){const angle=(i/5)*Math.PI*2;const geo=new THREE.ConeGeometry(0.04,0.2,4);const mat=new THREE.MeshBasicMaterial({color:0x6699aa,transparent:true,opacity:0.4});const mesh=new THREE.Mesh(geo,mat);mesh.position.set(x,0.3,z);mesh.rotation.z=angle;this.scene.add(mesh);this.deathParticles.push({mesh,vx:Math.cos(angle)*2.5,vy:0.8,vz:Math.sin(angle)*2.5,life:0.4});}
    const circGeo=new THREE.CircleGeometry(range*0.4,16);const circMat=new THREE.MeshBasicMaterial({color:0x335566,transparent:true,opacity:0.15,side:THREE.DoubleSide});const circ=new THREE.Mesh(circGeo,circMat);circ.position.set(x,0.05,z);circ.rotation.x=-Math.PI/2;this.scene.add(circ);this.deathParticles.push({mesh:circ,vx:0,vy:0,vz:0,life:0.8,isRing:true,scale:1});
  },

  _spawnLightningChain(x, z, range) {
    for(let i=0;i<5;i++){const angle=Math.random()*Math.PI*2;const dist=range*0.5+Math.random()*range*0.5;const points=[];const segments=4+Math.floor(Math.random()*3);for(let j=0;j<=segments;j++){const t=j/segments;const jitter=j>0&&j<segments?(Math.random()-0.5)*0.8:0;points.push(new THREE.Vector3(x+Math.cos(angle)*dist*t+jitter,0.5+Math.random()*0.5,z+Math.sin(angle)*dist*t+jitter));} const curve=new THREE.CatmullRomCurve3(points);const tubeGeo=new THREE.TubeGeometry(curve,8,0.03,4,false);const tubeMat=new THREE.MeshBasicMaterial({color:0xffff44,transparent:true,opacity:0.9});const tube=new THREE.Mesh(tubeGeo,tubeMat);this.scene.add(tube);this.deathParticles.push({mesh:tube,vx:0,vy:0,vz:0,life:0.2+Math.random()*0.15,isRing:true,scale:1});}
    const flashGeo=new THREE.SphereGeometry(0.3,8,8);const flashMat=new THREE.MeshBasicMaterial({color:0xffffaa,transparent:true,opacity:0.8});const flash=new THREE.Mesh(flashGeo,flashMat);flash.position.set(x,0.6,z);this.scene.add(flash);this.deathParticles.push({mesh:flash,vx:0,vy:0,vz:0,life:0.15,isRing:true,scale:1});
  },

  _spawnPoisonCloud(x, z, range) {
    for(let i=0;i<3;i++){const ox=(Math.random()-0.5)*1.0;const oz=(Math.random()-0.5)*1.0;const size=0.08+Math.random()*0.1;const geo=new THREE.SphereGeometry(size,4,4);const colors=[0x330044,0x1a0033,0x440066,0x220022];const mat=new THREE.MeshBasicMaterial({color:colors[i%4],transparent:true,opacity:0.2+Math.random()*0.1});const mesh=new THREE.Mesh(geo,mat);mesh.position.set(x+ox,0.2+Math.random()*0.3,z+oz);this.scene.add(mesh);this.deathParticles.push({mesh,vx:(Math.random()-0.5)*0.3,vy:0.3,vz:(Math.random()-0.5)*0.3,life:0.8+Math.random()*0.4,isRing:true,scale:1});}
  },

  // === GROUND DECALS: 지면 반응 레이어 (1-3초 생존) ===
  spawnGroundDecal(x, z, element = 0) {
    const decalConfigs = {
      1: { color: 0x331100, shape: 'scorch' },   // 화염 그을음
      2: { color: 0x1a3344, shape: 'frost' },    // 서리
      3: { color: 0x332200, shape: 'crack' },    // 번개 균열
      4: { color: 0x1a0022, shape: 'corrosion' }, // 독 부식
    };
    const cfg = decalConfigs[element] || { color: 0x1a1a1a, shape: 'scorch' };
    let mesh;

    if (cfg.shape === 'frost') {
      // 육각형 결정 패턴
      const geo = new THREE.CircleGeometry(0.5 + Math.random() * 0.3, 6);
      const mat = new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
      mesh = new THREE.Mesh(geo, mat);
    } else if (cfg.shape === 'crack') {
      // 지그재그 선 (번개 균열)
      const points = [];
      const len = 0.6 + Math.random() * 0.4;
      const angle = Math.random() * Math.PI * 2;
      for (let i = 0; i <= 4; i++) {
        const t = (i / 4) * len;
        const jitter = i > 0 && i < 4 ? (Math.random() - 0.5) * 0.2 : 0;
        points.push(new THREE.Vector3(
          Math.cos(angle) * t + Math.sin(angle) * jitter,
          0,
          Math.sin(angle) * t - Math.cos(angle) * jitter
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 6, 0.02, 3, false);
      const mat = new THREE.MeshBasicMaterial({ color: 0x554400, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
      mesh = new THREE.Mesh(tubeGeo, mat);
    } else if (cfg.shape === 'corrosion') {
      // 불규칙한 원
      const geo = new THREE.CircleGeometry(0.3 + Math.random() * 0.2, 5 + Math.floor(Math.random() * 3));
      const mat = new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
      mesh = new THREE.Mesh(geo, mat);
    } else {
      // 그을음 (불규칙 원)
      const geo = new THREE.CircleGeometry(0.35 + Math.random() * 0.25, 8);
      const mat = new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
      mesh = new THREE.Mesh(geo, mat);
    }

    mesh.position.set(x, 0.015, z);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = Math.random() * Math.PI * 2;
    this.scene.add(mesh);
    // Longer life than particles (2-3 seconds)
    this.deathParticles.push({ mesh, vx: 0, vy: 0, vz: 0, life: 2.0 + Math.random() * 1.0, isRing: true, scale: 1, noScale: true });
  },

  // Dash trail decal
  spawnDashDecal(x, z, element = 0) {
    const colors = { 1: 0x221100, 2: 0x112233, 3: 0x222200, 4: 0x110022 };
    const color = colors[element] || 0x111111;
    const geo = new THREE.PlaneGeometry(0.2, 0.2);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.2, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 0.012, z);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = Math.random() * Math.PI;
    this.scene.add(mesh);
    this.deathParticles.push({ mesh, vx: 0, vy: 0, vz: 0, life: 1.0, isRing: true, scale: 1, noScale: true });
  },

};
