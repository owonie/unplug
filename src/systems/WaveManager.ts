import Phaser from 'phaser';
import { WAVE } from '../config';

export class WaveManager {
  currentWave = 0;
  maxWaves = WAVE.maxWaves;
  isNight = false;

  private scene: Phaser.Scene;
  private timer = 0;
  private phaseDuration: number = WAVE.dayDuration;
  private started = false;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  start(): void {
    this.started = true;
    this.currentWave = 1;
    this.isNight = false;
    this.timer = 0;
    this.phaseDuration = WAVE.dayDuration;
    this.emitPhaseChange();
  }

  update(delta: number): void {
    if (!this.started) return;

    this.timer += delta;

    if (this.timer >= this.phaseDuration) {
      this.timer = 0;
      this.togglePhase();
    }
  }

  private togglePhase(): void {
    if (this.isNight) {
      // Night -> Day
      this.isNight = false;
      this.phaseDuration = WAVE.dayDuration;
      this.currentWave++;

      if (this.currentWave > this.maxWaves) {
        this.scene.events.emit('game-victory');
        this.started = false;
        return;
      }
    } else {
      // Day -> Night (spawn wave)
      this.isNight = true;
      this.phaseDuration = WAVE.nightDuration;
      this.spawnWave();
    }

    this.emitPhaseChange();
  }

  private spawnWave(): void {
    const count = Math.floor(WAVE.baseEnemyCount * Math.pow(WAVE.enemyScalePerWave, this.currentWave - 1));
    const gameScene = this.scene as any;
    gameScene.enemyManager.spawnWave(count, this.currentWave);

    const uiScene = this.scene.scene.get('UIScene') as any;
    uiScene?.addLog?.(`$ npm run deploy:wave-${this.currentWave} [${count} processes]`);
  }

  private emitPhaseChange(): void {
    const uiScene = this.scene.scene.get('UIScene') as any;
    if (this.isNight) {
      uiScene?.addLog?.('🚨 DEPLOY INITIATED — Defend localhost!');
    } else {
      uiScene?.addLog?.(`> Day ${this.currentWave} — Collect resources, build defenses`);
    }
  }
}
