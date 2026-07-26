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
  startBGM(setIdx = 0) {
    this.stopBGM();
    if (!this.ctx) { this.init(); }
    if (!this.ctx) return;
    this.bgmPlaying = true;
    this.bgmSet = setIdx % 3;
    this._bgmGain = this.ctx.createGain();
    this._bgmGain.connect(this.ctx.destination);
    this._bgmGain.gain.value = 1.0;
    const dest = this._bgmGain;
    const ctx = this.ctx;

    // Distortion curve (guitar amp sim)
    const makeDistortion = (amount) => {
      const curve = new Float32Array(256);
      for (let i = 0; i < 256; i++) {
        const x = (i / 128) - 1;
        curve[i] = (Math.PI + amount) * x / (Math.PI + amount * Math.abs(x));
      }
      return curve;
    };

    // 3 DMC-style sets - chugging riffs, shred leads, aggressive drums
    const sets = [
      { bpm: 170, // Combo Rush - E minor chugging
        riff: [82.41,82.41,0,82.41,82.41,0,110,0, 82.41,82.41,0,98,0,82.41,110,82.41],
        lead: [330,0,392,330,0,294,330,0, 392,440,0,392,330,0,294,0],
        leadB: [440,0,523,440,0,392,440,523, 0,587,523,0,440,0,392,0],
        leadC: [587,659,0,587,523,0,587,659, 784,0,659,587,0,523,587,0],
        leadD: [440,0,0,392,330,0,0,294, 330,0,0,0,294,0,330,0],
      },
      { bpm: 175, // Style Switch - A minor aggression
        riff: [55,55,0,55,73.42,0,55,0, 55,55,0,73.42,0,55,82.41,55],
        lead: [220,0,262,220,0,196,220,262, 0,294,262,0,220,0,196,0],
        leadB: [294,0,330,294,0,262,294,330, 0,392,330,0,294,262,0,0],
        leadC: [392,440,0,392,330,0,392,440, 523,0,440,392,0,330,392,0],
        leadD: [294,0,0,262,220,0,0,196, 220,0,0,0,196,0,220,0],
      },
      { bpm: 180, // SSStylish - D minor shredding
        riff: [73.42,73.42,0,73.42,73.42,0,98,0, 73.42,73.42,0,87.31,0,73.42,98,73.42],
        lead: [294,0,349,294,0,262,294,349, 0,392,349,0,294,0,262,0],
        leadB: [392,0,440,392,0,349,392,440, 0,523,440,0,392,349,0,0],
        leadC: [523,587,0,523,440,0,523,587, 659,0,587,523,0,440,523,0],
        leadD: [392,0,0,349,294,0,0,262, 294,0,0,0,262,0,294,0],
      }
    ];

    const s = sets[this.bgmSet];
    const beatTime = 60 / s.bpm;
    let beat = 0, section = 0;

    this._bgmInterval = setInterval(() => {
      if (!this.bgmPlaying) return;
      const t = ctx.currentTime;

      // === RHYTHM GUITAR (palm mute chug - the DMC sound) ===
      const riffFreq = s.riff[beat % 16];
      if (riffFreq > 0) {
        const g1 = ctx.createOscillator(); g1.type = 'sawtooth'; g1.frequency.value = riffFreq;
        const g2 = ctx.createOscillator(); g2.type = 'sawtooth'; g2.frequency.value = riffFreq * 1.5;
        const g3 = ctx.createOscillator(); g3.type = 'square'; g3.frequency.value = riffFreq * 2;
        const dist = ctx.createWaveShaper(); dist.curve = makeDistortion(50);
        const eq = ctx.createBiquadFilter(); eq.type = 'peaking'; eq.frequency.value = 800; eq.gain.value = 6; eq.Q.value = 2;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1200;
        const gg = ctx.createGain();
        const gvol = section >= 2 ? 0.05 : 0.04;
        gg.gain.setValueAtTime(gvol, t);
        gg.gain.setValueAtTime(gvol, t + beatTime * 0.15);
        gg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 0.35); // palm mute = short
        g1.connect(dist); g2.connect(dist); g3.connect(dist);
        dist.connect(eq).connect(lp).connect(gg).connect(dest);
        g1.start(t); g1.stop(t + beatTime * 0.4);
        g2.start(t); g2.stop(t + beatTime * 0.4);
        g3.start(t); g3.stop(t + beatTime * 0.4);
      }

      // === LEAD GUITAR (section 1+ only - shredding over chugs) ===
      if (section >= 1) {
        const leads = [s.lead, s.leadB, s.leadC, s.leadD];
        const leadFreq = leads[section][beat % 16];
        if (leadFreq > 0) {
          const l = ctx.createOscillator(); l.type = 'sawtooth'; l.frequency.value = leadFreq;
          const ld = ctx.createWaveShaper(); ld.curve = makeDistortion(30);
          const lf = ctx.createBiquadFilter(); lf.type = 'bandpass'; lf.frequency.value = 1500; lf.Q.value = 1.5;
          const lg = ctx.createGain();
          const lvol = section === 2 ? 0.03 : 0.022;
          lg.gain.setValueAtTime(lvol, t);
          lg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 0.9);
          l.connect(ld).connect(lf).connect(lg).connect(dest);
          l.start(t); l.stop(t + beatTime * 1.0);
        }
      }

      // === KICK (punchy, fast attack) ===
      if (beat % 2 === 0 || section >= 2) {
        const kick = ctx.createOscillator(); kick.type = 'sine';
        kick.frequency.setValueAtTime(200, t);
        kick.frequency.exponentialRampToValueAtTime(30, t + 0.035);
        const kg = ctx.createGain();
        kg.gain.setValueAtTime(0.12, t);
        kg.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
        kick.connect(kg).connect(dest);
        kick.start(t); kick.stop(t + 0.05);
      }

      // === SNARE (cracking, with body) ===
      if (beat % 8 === 4 || (section >= 2 && beat % 8 === 6)) {
        const n = ctx.createBufferSource();
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.04), ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.8;
        n.buffer = buf;
        const body = ctx.createOscillator(); body.type = 'triangle';
        body.frequency.setValueAtTime(180, t); body.frequency.exponentialRampToValueAtTime(80, t + 0.02);
        const sf = ctx.createBiquadFilter(); sf.type = 'peaking'; sf.frequency.value = 4000; sf.gain.value = 8; sf.Q.value = 1;
        const sg = ctx.createGain(); sg.gain.setValueAtTime(0.06, t); sg.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        const bg = ctx.createGain(); bg.gain.setValueAtTime(0.04, t); bg.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
        n.connect(sf).connect(sg).connect(dest);
        body.connect(bg).connect(dest);
        n.start(t); n.stop(t + 0.04);
        body.start(t); body.stop(t + 0.03);
      }

      // === HIHAT (tight, mechanical 16ths) ===
      {
        const n = ctx.createBufferSource();
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.012), ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.3;
        n.buffer = buf;
        const hf = ctx.createBiquadFilter(); hf.type = 'highpass'; hf.frequency.value = 9000;
        const hg = ctx.createGain();
        hg.gain.setValueAtTime(0.02, t);
        hg.gain.exponentialRampToValueAtTime(0.001, t + 0.012);
        n.connect(hf).connect(hg).connect(dest);
        n.start(t); n.stop(t + 0.012);
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
