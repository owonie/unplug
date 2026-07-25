import Phaser from 'phaser';

export class UIScene extends Phaser.Scene {
  private hpText!: Phaser.GameObjects.Text;
  private waveText!: Phaser.GameObjects.Text;
  private phaseText!: Phaser.GameObjects.Text;
  private resourceText!: Phaser.GameObjects.Text;
  private logLines: string[] = [];
  private logText!: Phaser.GameObjects.Text;
  private controlsText!: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'UIScene' });
  }

  create(): void {
    const style = { fontFamily: 'monospace', fontSize: '14px', color: '#00e5ff' };

    this.hpText = this.add.text(16, 16, '', style).setScrollFactor(0);
    this.waveText = this.add.text(512, 16, '', { ...style, fontSize: '16px' })
      .setOrigin(0.5, 0).setScrollFactor(0);
    this.phaseText = this.add.text(1008, 16, '', { ...style, color: '#76ff03' })
      .setOrigin(1, 0).setScrollFactor(0);
    this.resourceText = this.add.text(16, 740, '', { ...style, fontSize: '12px' })
      .setOrigin(0, 1).setScrollFactor(0);
    this.logText = this.add.text(1008, 740, '', { ...style, fontSize: '11px', color: '#76ff03', align: 'right' })
      .setOrigin(1, 1).setScrollFactor(0);
    this.controlsText = this.add.text(16, 700, '[WASD] Move  [Click] Shoot  [B] Firewall  [T] Turret', {
      ...style, fontSize: '10px', color: '#546e7a',
    }).setScrollFactor(0);
  }

  update(): void {
    const gameScene = this.scene.get('GameScene') as any;
    if (!gameScene?.player) return;

    const { player, waveManager, resourceManager } = gameScene;

    this.hpText.setText(
      `[HP] ${this.bar(player.hp, player.maxHp)} ${Math.round(player.hp)}/${player.maxHp}`,
    );

    if (waveManager) {
      this.waveText.setText(`< Sprint ${waveManager.currentWave} / ${waveManager.maxWaves} >`);
      this.phaseText.setText(waveManager.isNight ? '[ DEPLOY NIGHT ]' : '[ CODING DAY ]');
      this.phaseText.setColor(waveManager.isNight ? '#ff1744' : '#76ff03');
    }

    if (resourceManager) {
      this.resourceText.setText(
        `\u2615 ${resourceManager.coffee}  \uD83D\uDCBE ${resourceManager.commits}  \u2B50 ${resourceManager.points}`,
      );
    }
  }

  addLog(message: string): void {
    this.logLines.push(message);
    if (this.logLines.length > 6) this.logLines.shift();
    this.logText.setText(this.logLines.join('\n'));
  }

  private bar(current: number, max: number): string {
    const pct = Math.max(0, current / max);
    const filled = Math.round(pct * 15);
    return `[${'█'.repeat(filled)}${'░'.repeat(15 - filled)}]`;
  }
}
