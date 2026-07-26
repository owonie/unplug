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
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.2);
  }

  playElementIce() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.15);
  }

  playElementThunder() {
    if (!this.enabled || !this.ctx) return;
    // White noise burst
    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * 0.3;
    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    source.buffer = buffer;
    source.connect(gain); gain.connect(this.ctx.destination);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    source.start(this.ctx.currentTime);
  }

  playElementPoison() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(100, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(200, this.ctx.currentTime + 0.1);
    osc.frequency.linearRampToValueAtTime(80, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.2);
  }

  // === BGM: Lonely apocalypse, C418/minecraft style ===
  // 3 sets with 기승전결 (intro-build-climax-resolve)
  startBGM(setIdx = 0) {
    this.stopBGM();
    if (!this.ctx) return;
    this.bgmPlaying = true;
    this.bgmSet = setIdx % 3;
    // Master gain for BGM (allows instant mute on stop)
    if (!this._bgmGain) {
      this._bgmGain = this.ctx.createGain();
      this._bgmGain.connect(this.ctx.destination);
    }
    this._bgmGain.gain.value = 1.0;
    const dest = this._bgmGain; // route all BGM through this
    const ctx = this.ctx;
    const sets = [
      { bpm: 80, pad: [130.81,164.81,196],
        melA:[261.63,293.66,329.63,0,293.66,261.63,0,0],
        melB:[329.63,392,440,392,329.63,293.66,261.63,0],
        melC:[440,523.25,493.88,440,392,329.63,293.66,261.63],
        melD:[293.66,261.63,0,0,196,0,261.63,0] },
      { bpm: 90, pad: [110,130.81,164.81],
        melA:[220,261.63,293.66,0,261.63,220,0,0],
        melB:[293.66,329.63,392,329.63,293.66,261.63,220,0],
        melC:[392,440,523.25,440,392,329.63,293.66,261.63],
        melD:[261.63,220,196,0,0,220,0,0] },
      { bpm: 100, pad: [82.41,123.47,164.81],
        melA:[164.81,196,220,0,196,164.81,0,0],
        melB:[220,246.94,293.66,329.63,293.66,246.94,220,0],
        melC:[329.63,392,440,493.88,440,392,329.63,293.66],
        melD:[246.94,220,196,164.81,0,0,164.81,0] },
    ];
    const s = sets[this.bgmSet];
    const beatTime = 60 / s.bpm;
    let beat = 0, section = 0;
    this._bgmInterval = setInterval(() => {
      if (!this.bgmPlaying) return;
      const t = ctx.currentTime;
      const mels = [s.melA, s.melB, s.melC, s.melD];
      const freq = mels[section][beat % 8];
      // Piano note
      if (freq > 0) {
        const m = ctx.createOscillator(); m.type='sine'; m.frequency.value=freq;
        const mg = ctx.createGain();
        const vol = section===2 ? 0.045 : section===3 ? 0.025 : 0.03;
        mg.gain.setValueAtTime(vol, t);
        mg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 2.0);
        m.connect(mg).connect(dest);
        m.start(t); m.stop(t + beatTime * 2.2);
        // Octave below at climax
        if (section >= 2) {
          const m2 = ctx.createOscillator(); m2.type='sine'; m2.frequency.value=freq*0.5;
          const mg2 = ctx.createGain();
          mg2.gain.setValueAtTime(0.018, t);
          mg2.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 2.2);
          m2.connect(mg2).connect(dest);
          m2.start(t); m2.stop(t + beatTime * 2.5);
        }
      }
      // Pad chord (every 16 beats)
      if (beat % 16 === 0) {
        const pv = section===0?0.008:section===2?0.02:0.012;
        s.pad.forEach(pf => {
          const p = ctx.createOscillator(); p.type='sine'; p.frequency.value=pf;
          const pg = ctx.createGain();
          pg.gain.setValueAtTime(0,t);
          pg.gain.linearRampToValueAtTime(pv, t+1.5);
          pg.gain.setValueAtTime(pv, t+beatTime*13);
          pg.gain.exponentialRampToValueAtTime(0.001, t+beatTime*15.5);
          p.connect(pg).connect(dest);
          p.start(t); p.stop(t+beatTime*16);
        });
      }
      // Heartbeat bass (승/전 only)
      if (section >= 1 && section <= 2 && beat % 4 === 0) {
        const hb = ctx.createOscillator(); hb.type='sine';
        hb.frequency.setValueAtTime(55,t);
        hb.frequency.exponentialRampToValueAtTime(35,t+0.12);
        const hg = ctx.createGain();
        hg.gain.setValueAtTime(section===2?0.04:0.025, t);
        hg.gain.exponentialRampToValueAtTime(0.001,t+0.18);
        hb.connect(hg).connect(dest);
        hb.start(t); hb.stop(t+0.18);
      }
      beat++;
      if (beat % 16 === 0) section = (section + 1) % 4;
    }, beatTime * 1000);
  }

  nextBGM() {
    const next = ((this.bgmSet || 0) + 1) % 3;
    this.startBGM(next);
  }

  stopBGM() {
    if (this._bgmInterval) { clearInterval(this._bgmInterval); this._bgmInterval = null; }
    if (this._bgmGain) { this._bgmGain.gain.value = 0; } // instant mute
    this.bgmPlaying = false;
  }
}
