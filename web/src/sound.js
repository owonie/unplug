// Simple sound system using Web Audio API (no external files needed)
export class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.initialized = true;
    } catch(e) {
      console.warn('Web Audio not available');
      this.enabled = false;
    }
  }

  // Hit sound (short click)
  playHit() {
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = 800;
    osc.connect(filter).connect(gain).connect(this.ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(100, t + 0.08);
    gain.gain.setValueAtTime(0.1, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
    osc.start(t); osc.stop(t + 0.08);
  }

  // Critical hit (higher pitch)
  playCrit() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.15);
  }

  // Enemy death (soft pop)
  playDeath() {
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = 600;
    osc.connect(filter).connect(gain).connect(this.ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, t);
    osc.frequency.exponentialRampToValueAtTime(60, t + 0.15);
    gain.gain.setValueAtTime(0.06, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    osc.start(t); osc.stop(t + 0.15);
  }

  // Level up (short chime, once only)
  playLevelUp() {
    if (!this.enabled || !this.ctx) return;
    if (this._lvlCooldown && Date.now() - this._lvlCooldown < 1000) return; // 1초 내 중복 방지
    this._lvlCooldown = Date.now();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(500, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(800, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.2);
  }

  // Player damage (low thud)
  playPlayerHit() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(80, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.15);
  }

  // XP pickup / skill select (뾰로롱)
  playPickup() {
    if (!this.enabled || !this.ctx) return;
    const notes = [600, 900, 1200];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain); gain.connect(this.ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.05);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.05 + 0.1);
      osc.start(this.ctx.currentTime + i * 0.05);
      osc.stop(this.ctx.currentTime + i * 0.05 + 0.1);
    });
  }

  // Gacha roll
  playGacha() {
    if (!this.enabled || !this.ctx) return;
    for (let i = 0; i < 8; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.frequency.setValueAtTime(300 + i * 80, this.ctx.currentTime + i * 0.06);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.06 + 0.08);
      osc.start(this.ctx.currentTime + i * 0.06);
      osc.stop(this.ctx.currentTime + i * 0.06 + 0.08);
    }
  }

  // Element sounds
  playElementFire() {
    // 🔥 Soft crackle/woosh (filtered noise + low sweep)
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const noise = this.ctx.createBufferSource();
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.12, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.4;
    noise.buffer = buf;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass'; filter.frequency.value = 600; filter.Q.value = 1;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.06, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    noise.connect(filter).connect(g).connect(this.ctx.destination);
    noise.start(t);
  }

  playElementIce() {
    // ❄️ Crystalline shimmer (high sine, short, gentle)
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(2000, t);
    osc.frequency.exponentialRampToValueAtTime(1200, t + 0.08);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.04, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    osc.connect(g).connect(this.ctx.destination);
    osc.start(t); osc.stop(t + 0.1);
  }

  playElementThunder() {
    // ⚡ Soft electric crackle (filtered noise, very short)
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const noise = this.ctx.createBufferSource();
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.05, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.3;
    noise.buffer = buf;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass'; filter.frequency.value = 3000;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.05, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
    noise.connect(filter).connect(g).connect(this.ctx.destination);
    noise.start(t);
  }

  playElementPoison() {
    // ☠️ Bubble/gurgle (low sine wobble)
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(80, t);
    osc.frequency.linearRampToValueAtTime(120, t + 0.04);
    osc.frequency.linearRampToValueAtTime(70, t + 0.1);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.04, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass'; filter.frequency.value = 300;
    osc.connect(filter).connect(g).connect(this.ctx.destination);
    osc.start(t); osc.stop(t + 0.12);
  }

  playUltimate(element) {
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const ctx = this.ctx;

    switch (element) {
      case 1: // 🔥 Fire: deep eruption boom + rising roar
        {
          const boom = ctx.createOscillator(); boom.type = 'sine';
          boom.frequency.setValueAtTime(60, t);
          boom.frequency.exponentialRampToValueAtTime(25, t + 0.4);
          const bg = ctx.createGain();
          bg.gain.setValueAtTime(0.1, t);
          bg.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
          boom.connect(bg).connect(ctx.destination);
          boom.start(t); boom.stop(t + 0.5);
          // Crackle layer
          const n = ctx.createBufferSource();
          const buf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
          const d = buf.getChannelData(0);
          for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.3;
          n.buffer = buf;
          const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 200; nf.Q.value = 2;
          const ng = ctx.createGain(); ng.gain.setValueAtTime(0.04, t); ng.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
          n.connect(nf).connect(ng).connect(ctx.destination);
          n.start(t); n.stop(t + 0.3);
        }
        break;

      case 2: // ❄️ Ice: crystal shatter + shimmer
        {
          const osc = ctx.createOscillator(); osc.type = 'sine';
          osc.frequency.setValueAtTime(1200, t);
          osc.frequency.exponentialRampToValueAtTime(600, t + 0.3);
          const g = ctx.createGain();
          g.gain.setValueAtTime(0.05, t);
          g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
          osc.connect(g).connect(ctx.destination);
          osc.start(t); osc.stop(t + 0.4);
          // Low thud
          const thud = ctx.createOscillator(); thud.type = 'sine';
          thud.frequency.setValueAtTime(80, t + 0.05);
          thud.frequency.exponentialRampToValueAtTime(40, t + 0.3);
          const tg = ctx.createGain(); tg.gain.setValueAtTime(0.06, t + 0.05); tg.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
          thud.connect(tg).connect(ctx.destination);
          thud.start(t + 0.05); thud.stop(t + 0.35);
        }
        break;

      case 3: // ⚡ Thunder: sharp crack + rumble
        {
          // Sharp attack
          const crack = ctx.createOscillator(); crack.type = 'sawtooth';
          crack.frequency.setValueAtTime(2000, t);
          crack.frequency.exponentialRampToValueAtTime(100, t + 0.08);
          const cg = ctx.createGain(); cg.gain.setValueAtTime(0.07, t); cg.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
          const cf = ctx.createBiquadFilter(); cf.type = 'highpass'; cf.frequency.value = 400;
          crack.connect(cf).connect(cg).connect(ctx.destination);
          crack.start(t); crack.stop(t + 0.1);
          // Rolling rumble
          const rum = ctx.createOscillator(); rum.type = 'sine';
          rum.frequency.setValueAtTime(50, t + 0.08);
          rum.frequency.exponentialRampToValueAtTime(30, t + 0.5);
          const rg = ctx.createGain(); rg.gain.setValueAtTime(0.08, t + 0.08); rg.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
          rum.connect(rg).connect(ctx.destination);
          rum.start(t + 0.08); rum.stop(t + 0.5);
        }
        break;

      case 4: // ☠️ Poison: bubbling rise + low drone
        {
          const osc = ctx.createOscillator(); osc.type = 'sine';
          osc.frequency.setValueAtTime(90, t);
          osc.frequency.linearRampToValueAtTime(150, t + 0.2);
          osc.frequency.linearRampToValueAtTime(80, t + 0.5);
          const g = ctx.createGain(); g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
          const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 250;
          osc.connect(f).connect(g).connect(ctx.destination);
          osc.start(t); osc.stop(t + 0.55);
          // Bubble pops
          for (let i = 0; i < 3; i++) {
            const b = ctx.createOscillator(); b.type = 'sine';
            const bt = t + 0.1 + i * 0.12;
            b.frequency.setValueAtTime(200 + i * 50, bt);
            b.frequency.exponentialRampToValueAtTime(100, bt + 0.06);
            const bg = ctx.createGain(); bg.gain.setValueAtTime(0.03, bt); bg.gain.exponentialRampToValueAtTime(0.001, bt + 0.08);
            b.connect(bg).connect(ctx.destination);
            b.start(bt); b.stop(bt + 0.08);
          }
        }
        break;

      default: // Generic sweep + boom
        {
          const osc = ctx.createOscillator(); osc.type = 'sine';
          osc.frequency.setValueAtTime(200, t);
          osc.frequency.exponentialRampToValueAtTime(800, t + 0.3);
          const g = ctx.createGain(); g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
          osc.connect(g).connect(ctx.destination);
          osc.start(t); osc.stop(t + 0.5);
          const boom = ctx.createOscillator(); boom.type = 'sine';
          boom.frequency.setValueAtTime(80, t + 0.3);
          boom.frequency.exponentialRampToValueAtTime(30, t + 0.6);
          const bg = ctx.createGain(); bg.gain.setValueAtTime(0.08, t + 0.3); bg.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
          boom.connect(bg).connect(ctx.destination);
          boom.start(t + 0.3); boom.stop(t + 0.6);
        }
    }
  }

  playShield() {
    // 🛡️ Gentle chime (protective feel)
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, t);
    osc.frequency.setValueAtTime(800, t + 0.05);
    osc.frequency.setValueAtTime(600, t + 0.1);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.04, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
    osc.connect(g).connect(this.ctx.destination);
    osc.start(t); osc.stop(t + 0.15);
  }

  playAdvancedSkill(element) {
    // 2nd class right-click: heavier, more impactful than basic directional
    if (!this.enabled || !this.ctx) return;
    const t = this.ctx.currentTime;
    const ctx = this.ctx;

    switch (element) {
      case 1: // 🔥 Fire: deep ground eruption thump + sizzle
        {
          const thump = ctx.createOscillator(); thump.type = 'sine';
          thump.frequency.setValueAtTime(100, t);
          thump.frequency.exponentialRampToValueAtTime(40, t + 0.2);
          const tg = ctx.createGain(); tg.gain.setValueAtTime(0.1, t); tg.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
          thump.connect(tg).connect(ctx.destination);
          thump.start(t); thump.stop(t + 0.3);
          // Sizzle
          const n = ctx.createBufferSource();
          const buf = ctx.createBuffer(1, ctx.sampleRate * 0.25, ctx.sampleRate);
          const d = buf.getChannelData(0);
          for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.2;
          n.buffer = buf;
          const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 3000; nf.Q.value = 3;
          const ng = ctx.createGain(); ng.gain.setValueAtTime(0.03, t + 0.05); ng.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          n.connect(nf).connect(ng).connect(ctx.destination);
          n.start(t + 0.05); n.stop(t + 0.25);
        }
        break;

      case 2: // ❄️ Ice: sharp crystalline impact + glass shatter
        {
          const osc = ctx.createOscillator(); osc.type = 'triangle';
          osc.frequency.setValueAtTime(2500, t);
          osc.frequency.exponentialRampToValueAtTime(800, t + 0.08);
          const g = ctx.createGain(); g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
          osc.connect(g).connect(ctx.destination);
          osc.start(t); osc.stop(t + 0.12);
          // Impact body
          const body = ctx.createOscillator(); body.type = 'sine';
          body.frequency.setValueAtTime(150, t + 0.02);
          body.frequency.exponentialRampToValueAtTime(60, t + 0.2);
          const bg = ctx.createGain(); bg.gain.setValueAtTime(0.07, t + 0.02); bg.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          body.connect(bg).connect(ctx.destination);
          body.start(t + 0.02); body.stop(t + 0.25);
        }
        break;

      case 3: // ⚡ Thunder: electric zap + bass punch
        {
          // Zap (fast descending sawtooth)
          const zap = ctx.createOscillator(); zap.type = 'sawtooth';
          zap.frequency.setValueAtTime(3000, t);
          zap.frequency.exponentialRampToValueAtTime(200, t + 0.06);
          const zf = ctx.createBiquadFilter(); zf.type = 'highpass'; zf.frequency.value = 500;
          const zg = ctx.createGain(); zg.gain.setValueAtTime(0.05, t); zg.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
          zap.connect(zf).connect(zg).connect(ctx.destination);
          zap.start(t); zap.stop(t + 0.08);
          // Bass punch
          const bass = ctx.createOscillator(); bass.type = 'sine';
          bass.frequency.setValueAtTime(120, t + 0.03);
          bass.frequency.exponentialRampToValueAtTime(40, t + 0.25);
          const bg = ctx.createGain(); bg.gain.setValueAtTime(0.09, t + 0.03); bg.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
          bass.connect(bg).connect(ctx.destination);
          bass.start(t + 0.03); bass.stop(t + 0.3);
          // Crackle tail
          const n = ctx.createBufferSource();
          const buf = ctx.createBuffer(1, ctx.sampleRate * 0.15, ctx.sampleRate);
          const d = buf.getChannelData(0);
          for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.15;
          n.buffer = buf;
          const nf = ctx.createBiquadFilter(); nf.type = 'highpass'; nf.frequency.value = 2000;
          const ng = ctx.createGain(); ng.gain.setValueAtTime(0.025, t + 0.06); ng.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
          n.connect(nf).connect(ng).connect(ctx.destination);
          n.start(t + 0.06); n.stop(t + 0.2);
        }
        break;

      case 4: // ☠️ Poison: toxic wave whoosh + chemical bubble
        {
          // Whoosh
          const n = ctx.createBufferSource();
          const buf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
          const d = buf.getChannelData(0);
          for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.2;
          n.buffer = buf;
          const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 400; nf.Q.value = 1.5;
          const ng = ctx.createGain(); ng.gain.setValueAtTime(0.05, t); ng.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
          n.connect(nf).connect(ng).connect(ctx.destination);
          n.start(t); n.stop(t + 0.3);
          // Low wobble
          const osc = ctx.createOscillator(); osc.type = 'sine';
          osc.frequency.setValueAtTime(70, t);
          osc.frequency.linearRampToValueAtTime(110, t + 0.15);
          osc.frequency.linearRampToValueAtTime(60, t + 0.35);
          const g = ctx.createGain(); g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
          osc.connect(g).connect(ctx.destination);
          osc.start(t); osc.stop(t + 0.4);
        }
        break;
    }
  }

  // === BGM: Lonely apocalypse, C418/minecraft style ===
  // 3 sets with 기승전결 (intro-build-climax-resolve)
  startBGM(setIdx = 0) {
    this.stopBGM();
    if (!this.ctx) { this.init(); }
    if (!this.ctx) return;
    this.bgmPlaying = true;
    this.bgmSet = setIdx % 3;
    // Create fresh gain node each time
    this._bgmGain = this.ctx.createGain();
    this._bgmGain.connect(this.ctx.destination);
    this._bgmGain.gain.value = 1.0;
    const dest = this._bgmGain;
    const ctx = this.ctx;

    // 3 distinct fast-paced sets for stylish hack-and-slash
    const sets = [
      { // Set 1: Synthwave Drive (140bpm) — energetic, pulsing
        bpm: 140,
        bass: [55, 55, 73.42, 65.41, 55, 55, 82.41, 73.42], // A bass pattern
        melA: [440, 0, 523.25, 0, 587.33, 0, 523.25, 440, 0, 587.33, 0, 0, 440, 523.25, 0, 0],
        melB: [659.25, 0, 587.33, 523.25, 0, 587.33, 659.25, 0, 783.99, 0, 659.25, 587.33, 0, 523.25, 0, 0],
        melC: [880, 783.99, 0, 659.25, 783.99, 0, 880, 0, 987.77, 880, 783.99, 0, 659.25, 0, 587.33, 0],
        melD: [523.25, 0, 440, 0, 0, 392, 0, 440, 0, 0, 349.23, 0, 0, 0, 440, 0],
        padFreqs: [110, 164.81, 220],
        wave: 'square'
      },
      { // Set 2: Dark DnB (160bpm) — aggressive, relentless
        bpm: 160,
        bass: [41.2, 0, 41.2, 0, 55, 0, 41.2, 0, 48.99, 0, 41.2, 55, 0, 41.2, 0, 0],
        melA: [329.63, 0, 349.23, 0, 392, 0, 0, 329.63, 0, 392, 349.23, 0, 0, 329.63, 0, 0],
        melB: [440, 0, 0, 392, 440, 523.25, 0, 0, 440, 0, 392, 0, 349.23, 0, 392, 0],
        melC: [523.25, 587.33, 0, 523.25, 0, 659.25, 0, 587.33, 523.25, 0, 0, 659.25, 587.33, 0, 523.25, 0],
        melD: [392, 0, 0, 349.23, 0, 0, 329.63, 0, 0, 0, 349.23, 0, 0, 329.63, 0, 0],
        padFreqs: [82.41, 123.47, 155.56],
        wave: 'sawtooth'
      },
      { // Set 3: Epic Tension (150bpm) — dramatic, building
        bpm: 150,
        bass: [65.41, 65.41, 0, 87.31, 0, 65.41, 0, 73.42, 65.41, 0, 87.31, 0, 0, 65.41, 73.42, 0],
        melA: [523.25, 0, 659.25, 0, 587.33, 0, 523.25, 0, 493.88, 0, 523.25, 0, 587.33, 0, 0, 0],
        melB: [659.25, 783.99, 0, 659.25, 0, 587.33, 659.25, 0, 783.99, 0, 880, 0, 783.99, 659.25, 0, 0],
        melC: [880, 0, 987.77, 880, 0, 783.99, 880, 987.77, 0, 1046.5, 0, 987.77, 880, 0, 783.99, 0],
        melD: [659.25, 0, 587.33, 0, 523.25, 0, 0, 493.88, 0, 523.25, 0, 0, 0, 440, 0, 0],
        padFreqs: [130.81, 196, 261.63],
        wave: 'triangle'
      }
    ];

    const s = sets[this.bgmSet];
    const beatTime = 60 / s.bpm;
    let beat = 0, section = 0;

    this._bgmInterval = setInterval(() => {
      if (!this.bgmPlaying) return;
      const t = ctx.currentTime;
      const mels = [s.melA, s.melB, s.melC, s.melD];
      const freq = mels[section][beat % 16];

      // Melody
      if (freq > 0) {
        const m = ctx.createOscillator(); m.type = s.wave; m.frequency.value = freq;
        const mg = ctx.createGain();
        const vol = section === 2 ? 0.04 : section === 3 ? 0.02 : 0.03;
        mg.gain.setValueAtTime(vol, t);
        mg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 1.5);
        const mf = ctx.createBiquadFilter(); mf.type = 'lowpass'; mf.frequency.value = 2000;
        m.connect(mf).connect(mg).connect(dest);
        m.start(t); m.stop(t + beatTime * 1.8);
      }

      // Bass (every beat)
      const bassFreq = s.bass[beat % s.bass.length];
      if (bassFreq > 0) {
        const b = ctx.createOscillator(); b.type = 'sine'; b.frequency.value = bassFreq;
        const bg = ctx.createGain();
        bg.gain.setValueAtTime(section >= 1 ? 0.05 : 0.035, t);
        bg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 0.8);
        b.connect(bg).connect(dest);
        b.start(t); b.stop(t + beatTime * 0.9);
      }

      // Kick (every 4 beats)
      if (beat % 4 === 0) {
        const kick = ctx.createOscillator(); kick.type = 'sine';
        kick.frequency.setValueAtTime(150, t);
        kick.frequency.exponentialRampToValueAtTime(40, t + 0.06);
        const kg = ctx.createGain();
        kg.gain.setValueAtTime(0.08, t);
        kg.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        kick.connect(kg).connect(dest);
        kick.start(t); kick.stop(t + 0.1);
      }

      // Hihat (every 2 beats, more in climax)
      if (beat % 2 === 0 || (section >= 2 && beat % 1 === 0)) {
        const n = ctx.createBufferSource();
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.03), ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.5;
        n.buffer = buf;
        const hf = ctx.createBiquadFilter(); hf.type = 'highpass'; hf.frequency.value = 7000;
        const hg = ctx.createGain();
        hg.gain.setValueAtTime(section >= 2 ? 0.025 : 0.015, t);
        hg.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
        n.connect(hf).connect(hg).connect(dest);
        n.start(t); n.stop(t + 0.03);
      }

      // Snare (beat 4 and 12 of 16)
      if (beat % 16 === 4 || beat % 16 === 12) {
        const n = ctx.createBufferSource();
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.08), ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.4;
        n.buffer = buf;
        const sf = ctx.createBiquadFilter(); sf.type = 'bandpass'; sf.frequency.value = 3000; sf.Q.value = 1;
        const sg = ctx.createGain();
        sg.gain.setValueAtTime(0.04, t);
        sg.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        n.connect(sf).connect(sg).connect(dest);
        n.start(t); n.stop(t + 0.08);
      }

      // Pad (every 32 beats)
      if (beat % 32 === 0) {
        const pv = section === 2 ? 0.02 : 0.012;
        s.padFreqs.forEach(pf => {
          const p = ctx.createOscillator(); p.type = 'sine'; p.frequency.value = pf;
          const pg = ctx.createGain();
          pg.gain.setValueAtTime(0, t);
          pg.gain.linearRampToValueAtTime(pv, t + 1.0);
          pg.gain.setValueAtTime(pv, t + beatTime * 28);
          pg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 31);
          p.connect(pg).connect(dest);
          p.start(t); p.stop(t + beatTime * 32);
        });
      }

      beat++;
      if (beat % 32 === 0) section = (section + 1) % 4;
    }, beatTime * 1000);
  }

  nextBGM() {
    const next = ((this.bgmSet || 0) + 1) % 3;
    this.startBGM(next);
  }

  stopBGM() {
    if (this._bgmInterval) { clearInterval(this._bgmInterval); this._bgmInterval = null; }
    if (this._bgmGain) { this._bgmGain.disconnect(); this._bgmGain = null; } // disconnect kills all routed audio
    this.bgmPlaying = false;
  }
}
