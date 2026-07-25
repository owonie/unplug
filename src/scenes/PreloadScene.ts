import Phaser from 'phaser';
import { COLORS, TILE_SIZE } from '../config';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  create(): void {
    this.generatePlayerTexture();
    this.generateEnemyTextures();
    this.generateTileTextures();
    this.generateBulletTexture();
    this.generateBuildingTextures();
    this.generateResourceTextures();
    this.scene.start('GameScene');
  }

  private generatePlayerTexture(): void {
    const g = this.add.graphics();
    g.fillStyle(COLORS.primary, 1);
    g.fillRect(4, 4, TILE_SIZE - 8, TILE_SIZE - 8);
    g.lineStyle(2, 0xffffff, 1);
    g.strokeRect(4, 4, TILE_SIZE - 8, TILE_SIZE - 8);
    g.generateTexture('player', TILE_SIZE, TILE_SIZE);
    g.destroy();
  }

  private generateEnemyTextures(): void {
    const g1 = this.add.graphics();
    g1.fillStyle(COLORS.danger, 1);
    g1.fillTriangle(16, 4, 4, 28, 28, 28);
    g1.generateTexture('enemy-nullpointer', TILE_SIZE, TILE_SIZE);
    g1.destroy();

    const g2 = this.add.graphics();
    g2.fillStyle(COLORS.warning, 0.8);
    g2.fillCircle(16, 16, 12);
    g2.generateTexture('enemy-memoryleak', TILE_SIZE, TILE_SIZE);
    g2.destroy();

    const g3 = this.add.graphics();
    g3.fillStyle(0xaa00ff, 1);
    g3.fillPoints([
      new Phaser.Geom.Point(16, 2),
      new Phaser.Geom.Point(30, 16),
      new Phaser.Geom.Point(16, 30),
      new Phaser.Geom.Point(2, 16),
    ], true);
    g3.generateTexture('enemy-racecondition', TILE_SIZE, TILE_SIZE);
    g3.destroy();

    const g4 = this.add.graphics();
    g4.lineStyle(3, 0xff6d00, 1);
    g4.strokeCircle(16, 16, 11);
    g4.generateTexture('enemy-infiniteloop', TILE_SIZE, TILE_SIZE);
    g4.destroy();
  }

  private generateTileTextures(): void {
    const gFloor = this.add.graphics();
    gFloor.fillStyle(0x121828, 1);
    gFloor.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
    gFloor.lineStyle(1, 0x1a237e, 0.3);
    gFloor.strokeRect(0, 0, TILE_SIZE, TILE_SIZE);
    gFloor.generateTexture('tile-floor', TILE_SIZE, TILE_SIZE);
    gFloor.destroy();

    const gWall = this.add.graphics();
    gWall.fillStyle(0x263238, 1);
    gWall.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
    gWall.lineStyle(1, COLORS.primary, 0.4);
    gWall.strokeRect(1, 1, TILE_SIZE - 2, TILE_SIZE - 2);
    gWall.generateTexture('tile-wall', TILE_SIZE, TILE_SIZE);
    gWall.destroy();
  }

  private generateBulletTexture(): void {
    const g = this.add.graphics();
    g.fillStyle(COLORS.primary, 1);
    g.fillCircle(4, 4, 4);
    g.generateTexture('bullet', 8, 8);
    g.destroy();
  }

  private generateBuildingTextures(): void {
    const gFw = this.add.graphics();
    gFw.fillStyle(0x0277bd, 1);
    gFw.fillRect(2, 2, TILE_SIZE - 4, TILE_SIZE - 4);
    gFw.lineStyle(2, COLORS.primary, 1);
    gFw.strokeRect(2, 2, TILE_SIZE - 4, TILE_SIZE - 4);
    gFw.generateTexture('building-firewall', TILE_SIZE, TILE_SIZE);
    gFw.destroy();

    const gTurret = this.add.graphics();
    gTurret.fillStyle(0x1b5e20, 1);
    gTurret.fillCircle(16, 16, 12);
    gTurret.fillStyle(COLORS.accent, 1);
    gTurret.fillCircle(16, 16, 4);
    gTurret.generateTexture('building-turret', TILE_SIZE, TILE_SIZE);
    gTurret.destroy();
  }

  private generateResourceTextures(): void {
    const gCoffee = this.add.graphics();
    gCoffee.fillStyle(0x795548, 1);
    gCoffee.fillRect(10, 8, 12, 16);
    gCoffee.fillStyle(0xffffff, 1);
    gCoffee.fillRect(22, 12, 4, 8);
    gCoffee.generateTexture('resource-coffee', TILE_SIZE, TILE_SIZE);
    gCoffee.destroy();

    const gCommit = this.add.graphics();
    gCommit.fillStyle(COLORS.accent, 1);
    gCommit.fillCircle(16, 16, 8);
    gCommit.fillStyle(COLORS.dark, 1);
    gCommit.fillCircle(16, 16, 4);
    gCommit.generateTexture('resource-commit', TILE_SIZE, TILE_SIZE);
    gCommit.destroy();
  }
}
