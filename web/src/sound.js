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

  // === BGM: Medieval fantasy — mystical and adventurous ===
  startBGM() {
    if (!this.ctx || this.bgmPlaying) return;
    this.bgmPlaying = true;
    this._bgmNodes = [];

    const ctx = this.ctx;
    const bpm = 150;
    const beatTime = 60 / bpm;

    // Dm scale melodies (medieval/fantasy feel)
    // Set A: adventurous ascending
    const melodyA = [293.66, 349.23, 392.00, 440.00, 349.23, 329.63, 293.66, 261.63]; // D4,F4,G4,A4,F4,E4,D4,C4
    // Set B: mystical descending
    const melodyB = [440.00, 392.00, 349.23, 329.63, 293.66, 261.63, 293.66, 349.23]; // A4,G4,F4,E4,D4,C4,D4,F4

    let beat = 0;
    let currentSet = 0;

    this._bgmInterval = setInterval(() => {
      if (!this.bgmPlaying) return;
      const t = ctx.currentTime;

      // Soft kick (timpani-like) on 1,3
      if (beat % 4 === 0 || beat % 4 === 2) {
        const kick = ctx.createOscillator();
        kick.type = 'sine';
        kick.frequency.setValueAtTime(100, t);
        kick.frequency.exponentialRampToValueAtTime(50, t + 0.1);
        const kg = ctx.createGain();
        kg.gain.setValueAtTime(0.08, t);
        kg.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        kick.connect(kg).connect(ctx.destination);
        kick.start(t); kick.stop(t + 0.15);
      }

      // Shaker (soft) on off-beats
      if (beat % 2 === 1) {
        const noise = ctx.createBufferSource();
        const buf = ctx.createBuffer(1, ctx.sampleRate * 0.015, ctx.sampleRate);
        const d = buf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = (Math.random() - 0.5) * 0.15;
        noise.buffer = buf;
        const sg = ctx.createGain();
        sg.gain.setValueAtTime(0.03, t);
        sg.gain.exponentialRampToValueAtTime(0.001, t + 0.04);
        const sf = ctx.createBiquadFilter();
        sf.type = 'bandpass'; sf.frequency.value = 5000; sf.Q.value = 2;
        noise.connect(sf).connect(sg).connect(ctx.destination);
        noise.start(t);
      }

      // Harp/lute bass (triangle wave — warm, medieval)
      if (beat % 4 === 0) {
        const bassNotes = [146.83, 130.81, 146.83, 174.61]; // D3,C3,D3,F3
        const note = bassNotes[Math.floor(beat / 4) % bassNotes.length];
        const bass = ctx.createOscillator();
        bass.type = 'triangle';
        bass.frequency.value = note;
        const bg = ctx.createGain();
        bg.gain.setValueAtTime(0.06, t);
        bg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 2.5);
        bass.connect(bg).connect(ctx.destination);
        bass.start(t); bass.stop(t + beatTime * 2.8);
      }

      // Fiddle/flute melody (sine + slight vibrato = ethereal)
      const melody = currentSet === 0 ? melodyA : melodyB;
      const noteIdx = beat % melody.length;
      const freq = melody[noteIdx];

      // Play melody note
      const mel = ctx.createOscillator();
      mel.type = 'sine';
      mel.frequency.value = freq;
      // Gentle vibrato
      const vib = ctx.createOscillator();
      vib.type = 'sine';
      vib.frequency.value = 4.5;
      const vibG = ctx.createGain();
      vibG.gain.value = 2;
      vib.connect(vibG).connect(mel.frequency);
      vib.start(t);
      // Envelope (soft attack, gentle decay)
      const mg = ctx.createGain();
      mg.gain.setValueAtTime(0.0, t);
      mg.gain.linearRampToValueAtTime(0.035, t + 0.04);
      mg.gain.setValueAtTime(0.035, t + beatTime * 0.5);
      mg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 0.85);
      mel.connect(mg).connect(ctx.destination);
      mel.start(t); mel.stop(t + beatTime * 0.9);
      vib.stop(t + beatTime * 0.9);

      // Pad (every 8 beats — sustained mystical chord)
      if (beat % 8 === 0) {
        const padNotes = [293.66, 349.23, 440.00]; // Dm chord: D4,F4,A4
        padNotes.forEach(pf => {
          const pad = ctx.createOscillator();
          pad.type = 'sine';
          pad.frequency.value = pf * 0.5; // octave lower
          const pg = ctx.createGain();
          pg.gain.setValueAtTime(0.0, t);
          pg.gain.linearRampToValueAtTime(0.02, t + 0.3);
          pg.gain.setValueAtTime(0.02, t + beatTime * 6);
          pg.gain.exponentialRampToValueAtTime(0.001, t + beatTime * 7.5);
          pad.connect(pg).connect(ctx.destination);
          pad.start(t); pad.stop(t + beatTime * 8);
        });
      }

      beat++;
      if (beat % 16 === 0) currentSet = (currentSet + 1) % 2;
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
