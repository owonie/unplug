// Sound system — mp3 file based SFX + BGM
export class SoundManager {
  constructor() {
    this.enabled = true;
    this.initialized = false;
    this._sfxPool = {}; // pre-loaded audio pools
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;
    // Preload SFX (multiple instances for overlapping playback)
    const sfxFiles = {
      slash: 'sfx/slash.mp3',
      slashHeavy: 'sfx/slash-heavy.mp3',
      shield: 'sfx/shield.mp3',
      ultimate: 'sfx/ultimate.mp3',
      explosion: 'sfx/explosion.mp3',
      groundImpact: 'sfx/ground-impact.mp3',
      ice: 'sfx/ice.mp3',
      electric: 'sfx/electric.mp3',
      thunder: 'sfx/thunder.mp3',
      electroImpact: 'sfx/electro-impact.mp3',
      iceCrack: 'sfx/ice-crack.mp3',
      levelup: 'sfx/levelup.mp3',
      whooshFire: 'sfx/whoosh-fire.mp3',
      whooshIce: 'sfx/whoosh-ice.mp3',
      whooshPoison: 'sfx/whoosh-poison.mp3',
      dash: 'sfx/dash.mp3',
    };
    for (const [key, src] of Object.entries(sfxFiles)) {
      this._sfxPool[key] = [];
      for (let i = 0; i < 3; i++) { // 3 copies for overlap
        const a = new Audio(src);
        a.preload = 'auto';
        a.volume = 0.5;
        this._sfxPool[key].push(a);
      }
    }
  }

  _play(key, volume = 0.5) {
    if (!this.enabled || !this._sfxPool[key]) return;
    const pool = this._sfxPool[key];
    // Find one that's not playing, or reset the first
    let a = pool.find(x => x.paused || x.ended) || pool[0];
    a.volume = volume;
    a.currentTime = 0;
    a.play().catch(() => {});
  }

  // === COMBAT SFX ===
  playHit() { this._play('slash', 0.3); }
  playCrit() { this._play('slashHeavy', 0.4); }
  playDeath() { this._play('groundImpact', 0.25); }
  playPlayerHit() { this._play('groundImpact', 0.4); }
  playPickup() {} // silent (too frequent)

  playLevelUp() {
    if (this._lvlCooldown && Date.now() - this._lvlCooldown < 1000) return;
    this._lvlCooldown = Date.now();
    this._play('levelup', 0.5);
  }

  // === ELEMENT DIRECTIONAL (left-click) — element sound + whoosh layer ===
  playElementFire() { this._play('whooshFire', 0.45); this._play('explosion', 0.2); }
  playElementIce() { this._play('whooshIce', 0.45); this._play('ice', 0.25); }
  playElementThunder() { this._play('electric', 0.4); }
  playElementPoison() { this._play('whooshPoison', 0.4); this._play('groundImpact', 0.2); }

  // === DASH ===
  playDash() { this._play('dash', 0.35); }

  // === ADVANCED DIRECTIONAL (right-click — heavier) ===
  playAdvancedSkill(element) {
    switch (element) {
      case 1: this._play('explosion', 0.35); break;       // Fire: explosion
      case 2: this._play('iceCrack', 0.4); break;         // Ice: crack
      case 3: this._play('electroImpact', 0.4); break;    // Thunder: electro impact
      case 4: this._play('slashHeavy', 0.4); break;       // Poison: heavy slash
      default: this._play('slashHeavy', 0.35);
    }
  }

  // === ULTIMATE ===
  playUltimate(element) {
    // Always play the riser hit
    this._play('ultimate', 0.5);
    // Plus element-specific layer
    switch (element) {
      case 1: this._play('explosion', 0.4); break;
      case 2: this._play('ice', 0.35); break;
      case 3: this._play('thunder', 0.45); break;
      case 4: this._play('groundImpact', 0.35); break;
    }
  }

  // === SHIELD ===
  playShield() { this._play('shield', 0.45); }

  // === BGM: mp3 file playback ===
  startBGM(idx = 0) {
    this.stopBGM();
    this._bgmTracks = ['bgm/track1.mp3','bgm/track2.mp3','bgm/track3.mp3','bgm/track4.mp3'];
    this.bgmSet = idx % this._bgmTracks.length;
    this._bgmAudio = new Audio(this._bgmTracks[this.bgmSet]);
    this._bgmAudio.loop = true;
    this._bgmAudio.volume = 0.35;
    this._bgmAudio.play().catch(() => {});
    this.bgmPlaying = true;
  }

  nextBGM() {
    const next = ((this.bgmSet || 0) + 1) % 4;
    this.startBGM(next);
  }

  stopBGM() {
    if (this._bgmAudio) {
      this._bgmAudio.pause();
      this._bgmAudio.src = '';
      this._bgmAudio = null;
    }
    this.bgmPlaying = false;
  }
}
