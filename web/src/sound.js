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
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.1);
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
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.12);
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

  // === BGM: 160bpm stylish beat + violin melody ===
  startBGM() {
    if (!this.ctx || this.bgmPlaying) return;
    this.bgmPlaying = true;
    this._bgmNodes = [];

    const ctx = this.ctx;
    const bpm = 160;
    const beatTime = 60 / bpm;

    // Melody sets (Em key)
    const melodyA = [659.25, 587.33, 493.88, 587.33, 659.25, 783.99, 659.25, 587.33]; // E5,D5,B4,D5,E5,G5,E5,D5
    const melodyB = [493.88, 440.00, 392.00, 440.00, 493.88, 587.33, 493.88, 392.00]; // B4,A4,G4,A4,B4,D5,B4,G4
    let beat = 0;
    let currentSet = 0;

    this._bgmInterval = setInterval(() => {
      if (!this.bgmPlaying) return;
      const t = ctx.currentTime;

      // Kick on 1,3
      if (beat % 4 === 0 || beat % 4 === 2) {
        const kick = ctx.createOscillator();
        kick.type = 'sine';
        kick.frequency.setValueAtTime(160, t);
        kick.frequency.exponentialRampToValueAtTime(35, t + 0.07);
        const kg = ctx.createGain();
        kg.gain.setValueAtTime(0.12, t);
        kg.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
        kick.connect(kg).connect(ctx.destination);
        kick.start(t); kick.stop(t + 0.1);
      }

      // Hihat
      const noise = ctx.createBufferSource();
      const buf = ctx.createBuffer(1, ctx.sampleRate * 0.02, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.3;
      noise.buffer = buf;
      const hg = ctx.createGain();
      hg.gain.setValueAtTime(beat % 2 === 0 ? 0.04 : 0.02, t);
      hg.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
      const hf = ctx.createBiquadFilter();
      hf.type = 'highpass'; hf.frequency.value = 9000;
      noise.connect(hf).connect(hg).connect(ctx.destination);
      noise.start(t);

      // Bass (every 2 beats)
      if (beat % 2 === 0) {
        const bassNotes = [82.41, 98.0, 110.0, 123.47, 146.83];
        const note = bassNotes[Math.floor(beat / 2) % bassNotes.length];
        const bass = ctx.createOscillator();
        bass.type = 'square';
        bass.frequency.value = note;
        const bg = ctx.createGain();
        bg.gain.setValueAtTime(0.05, t);
        bg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 0.7);
        const bf = ctx.createBiquadFilter();
        bf.type = 'lowpass'; bf.frequency.value = 350;
        bass.connect(bf).connect(bg).connect(ctx.destination);
        bass.start(t); bass.stop(t + beatTime * 0.8);
      }

      // Violin melody (sawtooth + vibrato, every beat)
      const melody = currentSet === 0 ? melodyA : melodyB;
      const noteIdx = beat % melody.length;
      if (beat % 1 === 0) { // every beat
        const vio = ctx.createOscillator();
        vio.type = 'sawtooth';
        vio.frequency.value = melody[noteIdx];
        // Vibrato
        const vibrato = ctx.createOscillator();
        vibrato.type = 'sine';
        vibrato.frequency.value = 5.5; // vibrato speed
        const vibGain = ctx.createGain();
        vibGain.gain.value = 3; // vibrato depth in Hz
        vibrato.connect(vibGain).connect(vio.frequency);
        vibrato.start(t);
        // Tone shaping (violin-like)
        const vg = ctx.createGain();
        vg.gain.setValueAtTime(0.0, t);
        vg.gain.linearRampToValueAtTime(0.04, t + 0.03); // attack
        vg.gain.setValueAtTime(0.04, t + beatTime * 0.6);
        vg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 0.9);
        const vf = ctx.createBiquadFilter();
        vf.type = 'lowpass'; vf.frequency.value = 3000;
        vio.connect(vf).connect(vg).connect(ctx.destination);
        vio.start(t); vio.stop(t + beatTime * 0.95);
        vibrato.stop(t + beatTime * 0.95);
      }

      beat++;
      // Switch melody set every 8 beats
      if (beat % 8 === 0) currentSet = (currentSet + 1) % 2;
    }, beatTime * 1000);
  }

  stopBGM() {
    if (this._bgmInterval) { clearInterval(this._bgmInterval); this._bgmInterval = null; }
    if (this._bgmNodes) {
      this._bgmNodes.forEach(n => { try { n.stop(); } catch(e) {} });
      this._bgmNodes = null;
    }
    this.bgmPlaying = false;
  }
}
