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
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
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

  // === BGM: Dark fantasy ambient loop ===
  startBGM() {
    if (!this.ctx || this.bgmPlaying) return;
    this.bgmPlaying = true;

    // Low drone
    const drone = this.ctx.createOscillator();
    drone.type = 'sawtooth';
    drone.frequency.value = 55; // low A
    const droneGain = this.ctx.createGain();
    droneGain.gain.value = 0.04;
    const droneFilter = this.ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.value = 200;
    drone.connect(droneFilter).connect(droneGain).connect(this.ctx.destination);
    drone.start();
    this._bgmNodes = [drone];

    // Pad chord (minor)
    const padNotes = [110, 130.81, 164.81]; // A2, C3, E3 (Am)
    padNotes.forEach(freq => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const g = this.ctx.createGain();
      g.gain.value = 0.02;
      // Slow LFO for movement
      const lfo = this.ctx.createOscillator();
      lfo.type = 'sine';
      lfo.frequency.value = 0.1 + Math.random() * 0.1;
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.value = 0.01;
      lfo.connect(lfoGain).connect(g.gain);
      lfo.start();
      osc.connect(g).connect(this.ctx.destination);
      osc.start();
      this._bgmNodes.push(osc, lfo);
    });

    // Subtle high shimmer
    const shimmer = this.ctx.createOscillator();
    shimmer.type = 'sine';
    shimmer.frequency.value = 880;
    const shimGain = this.ctx.createGain();
    shimGain.gain.value = 0.008;
    const shimLfo = this.ctx.createOscillator();
    shimLfo.type = 'sine';
    shimLfo.frequency.value = 0.3;
    const shimLfoGain = this.ctx.createGain();
    shimLfoGain.gain.value = 0.006;
    shimLfo.connect(shimLfoGain).connect(shimGain.gain);
    shimLfo.start();
    shimmer.connect(shimGain).connect(this.ctx.destination);
    shimmer.start();
    this._bgmNodes.push(shimmer, shimLfo);
  }

  stopBGM() {
    if (this._bgmNodes) {
      this._bgmNodes.forEach(n => { try { n.stop(); } catch(e) {} });
      this._bgmNodes = null;
    }
    this.bgmPlaying = false;
  }
}
