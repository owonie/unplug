import Phaser from 'phaser';
import { TILE_SIZE } from '../config';

/**
 * Pixel art sprite generator — isometric cyberpunk style
 * 40x40 pixel characters with glow effects
 */
export class PixelArtGenerator {
  private scene: Phaser.Scene;
  private s: number;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.s = TILE_SIZE;
  }

  generateAll(): void {
    this.genPlayer();
    this.genEnemies();
    this.genTiles();
    this.genBullet();
    this.genBuildings();
    this.genResources();
  }

  private genPlayer(): void {
    const s = this.s;
    const g = this.scene.make.graphics({ x: 0, y: 0 }, false);

    // Shadow
    g.fillStyle(0x000000, 0.3);
    g.fillEllipse(s / 2, s - 4, 18, 6);

    // Legs
    g.fillStyle(0x1a1a2e, 1);
    g.fillRect(14, 30, 5, 8);
    g.fillRect(21, 30, 5, 8);

    // Shoes (cyan glow)
    g.fillStyle(0x00838f, 1);
    g.fillRect(13, 36, 6, 3);
    g.fillRect(20, 36, 6, 3);
    g.fillStyle(0x00e5ff, 0.5);
    g.fillRect(14, 37, 4, 1);
    g.fillRect(21, 37, 4, 1);

    // Body - dark tech hoodie
    g.fillStyle(0x1a1a2e, 1);
    g.fillRect(12, 16, 16, 15);

    // Hoodie detail
    g.fillStyle(0x252547, 1);
    g.fillRect(14, 18, 12, 11);

    // Terminal screen on chest
    g.fillStyle(0x0d1117, 1);
    g.fillRect(16, 20, 8, 6);
    g.fillStyle(0x00e5ff, 0.8);
    g.fillRect(17, 21, 2, 1);
    g.fillRect(17, 23, 4, 1);
    g.fillRect(17, 25, 3, 1);

    // Arms
    g.fillStyle(0x1a1a2e, 1);
    g.fillRect(8, 18, 4, 12);
    g.fillRect(28, 18, 4, 12);

    // Hands
    g.fillStyle(0xe0c9a6, 1);
    g.fillRect(8, 29, 4, 3);
    g.fillRect(28, 29, 4, 3);

    // Head
    g.fillStyle(0xe0c9a6, 1);
    g.fillRect(14, 5, 12, 11);

    // Hair
    g.fillStyle(0x2d2d44, 1);
    g.fillRect(13, 3, 14, 5);
    g.fillRect(13, 5, 2, 4);
    g.fillRect(25, 5, 2, 4);

    // Eyes (cyan glow — sees the code)
    g.fillStyle(0x00e5ff, 1);
    g.fillRect(16, 9, 3, 3);
    g.fillRect(22, 9, 3, 3);

    // Eye glow
    g.fillStyle(0x00e5ff, 0.3);
    g.fillRect(15, 8, 5, 5);
    g.fillRect(21, 8, 5, 5);

    // Mouth
    g.fillStyle(0xb39981, 1);
    g.fillRect(18, 13, 4, 1);

    // Outline glow
    g.lineStyle(1, 0x00e5ff, 0.15);
    g.strokeRect(11, 4, 18, 35);

    g.generateTexture('player', s, s);
    g.destroy();
  }

  private genEnemies(): void {
    this.genNullPointer();
    this.genMemoryLeak();
    this.genRaceCondition();
    this.genInfiniteLoop();
  }

  private genNullPointer(): void {
    const s = this.s;
    const g = this.scene.make.graphics({ x: 0, y: 0 }, false);

    // Shadow
    g.fillStyle(0x000000, 0.3);
    g.fillEllipse(s / 2, s - 3, 16, 5);

    // Body - corrupted agent
    g.fillStyle(0x1a0000, 1);
    g.fillRect(12, 12, 16, 20);

    // Glitch distortion
    g.fillStyle(0x330000, 1);
    g.fillRect(10, 14, 20, 2);
    g.fillRect(14, 22, 16, 1);
    g.fillRect(8, 28, 18, 1);

    // Head
    g.fillStyle(0x2a0000, 1);
    g.fillRect(14, 4, 12, 9);

    // Red eyes
    g.fillStyle(0xff1744, 1);
    g.fillRect(16, 7, 3, 3);
    g.fillRect(22, 7, 3, 3);

    // Eye glow
    g.fillStyle(0xff1744, 0.4);
    g.fillRect(15, 6, 5, 5);
    g.fillRect(21, 6, 5, 5);

    // "NULL" on torso
    g.fillStyle(0xff1744, 0.7);
    // N
    g.fillRect(14, 16, 1, 4);
    g.fillRect(15, 17, 1, 1);
    g.fillRect(16, 16, 1, 4);
    // U
    g.fillRect(18, 16, 1, 4);
    g.fillRect(19, 19, 1, 1);
    g.fillRect(20, 16, 1, 4);
    // L
    g.fillRect(22, 16, 1, 4);
    g.fillRect(23, 19, 2, 1);
    // L
    g.fillRect(26, 16, 1, 4);
    g.fillRect(27, 19, 2, 1);

    // Arms (claws)
    g.fillStyle(0x330000, 1);
    g.fillRect(8, 14, 4, 10);
    g.fillRect(28, 14, 4, 10);
    // Claw tips
    g.fillStyle(0xff1744, 0.8);
    g.fillRect(7, 23, 2, 3);
    g.fillRect(30, 23, 2, 3);

    g.generateTexture('enemy-nullpointer', s, s);
    g.destroy();
  }

  private genMemoryLeak(): void {
    const s = this.s;
    const g = this.scene.make.graphics({ x: 0, y: 0 }, false);

    // Shadow puddle
    g.fillStyle(0x1b5e20, 0.4);
    g.fillEllipse(s / 2, s - 2, 24, 8);

    // Main blob body
    g.fillStyle(0x33691e, 1);
    g.fillCircle(s / 2, s / 2 + 2, 14);

    g.fillStyle(0x558b2f, 0.8);
    g.fillCircle(s / 2, s / 2, 10);

    g.fillStyle(0x76ff03, 0.4);
    g.fillCircle(s / 2 - 3, s / 2 - 3, 5);

    // Eyes
    g.fillStyle(0x000000, 1);
    g.fillRect(15, 17, 3, 3);
    g.fillRect(22, 17, 3, 3);
    g.fillStyle(0xffea00, 1);
    g.fillRect(16, 18, 1, 1);
    g.fillRect(23, 18, 1, 1);

    // Mouth (hungry)
    g.fillStyle(0x000000, 1);
    g.fillRect(17, 23, 6, 2);

    // Drip particles
    g.fillStyle(0x76ff03, 0.6);
    g.fillRect(12, 32, 3, 5);
    g.fillRect(20, 34, 2, 4);
    g.fillRect(26, 33, 3, 4);

    // "MB" indicator
    g.fillStyle(0xffea00, 0.6);
    g.fillRect(16, 12, 8, 1);

    g.generateTexture('enemy-memoryleak', s, s);
    g.destroy();
  }

  private genRaceCondition(): void {
    const s = this.s;
    const g = this.scene.make.graphics({ x: 0, y: 0 }, false);

    // Twin afterimage (offset)
    g.fillStyle(0x7c4dff, 0.3);
    g.fillRect(16, 6, 12, 28);

    // Main body
    g.fillStyle(0xaa00ff, 0.85);
    g.fillRect(12, 4, 12, 28);

    // Head
    g.fillStyle(0xd500f9, 0.9);
    g.fillRect(14, 6, 8, 8);

    // Eyes (white, piercing)
    g.fillStyle(0xffffff, 1);
    g.fillRect(16, 9, 2, 2);
    g.fillRect(20, 9, 2, 2);

    // Teleport particles
    g.fillStyle(0xea80fc, 0.7);
    g.fillRect(5, 10, 3, 3);
    g.fillRect(32, 16, 3, 3);
    g.fillRect(7, 26, 2, 2);
    g.fillRect(30, 8, 2, 2);
    g.fillRect(4, 20, 2, 2);
    g.fillRect(34, 24, 2, 2);

    // Ghost trail below
    g.fillStyle(0xaa00ff, 0.2);
    g.fillRect(12, 32, 5, 5);
    g.fillRect(18, 34, 4, 4);

    // Speed lines
    g.lineStyle(1, 0xea80fc, 0.4);
    g.lineBetween(2, 15, 10, 15);
    g.lineBetween(3, 22, 9, 22);

    g.generateTexture('enemy-racecondition', s, s);
    g.destroy();
  }

  private genInfiniteLoop(): void {
    const s = this.s;
    const g = this.scene.make.graphics({ x: 0, y: 0 }, false);

    // Outer ring
    g.lineStyle(3, 0xff6d00, 0.9);
    g.strokeCircle(s / 2, s / 2, 16);

    // Inner ring
    g.lineStyle(2, 0xffab00, 0.7);
    g.strokeCircle(s / 2, s / 2, 11);

    // Infinity symbol
    g.lineStyle(2, 0xffffff, 0.9);
    g.strokeCircle(s / 2 - 5, s / 2, 5);
    g.strokeCircle(s / 2 + 5, s / 2, 5);

    // Orbiting dots
    g.fillStyle(0xff6d00, 1);
    g.fillCircle(s / 2, 3, 2);
    g.fillCircle(s - 3, s / 2, 2);
    g.fillCircle(s / 2, s - 3, 2);
    g.fillCircle(3, s / 2, 2);

    // Center glow
    g.fillStyle(0xffab00, 0.4);
    g.fillCircle(s / 2, s / 2, 4);

    g.generateTexture('enemy-infiniteloop', s, s);
    g.destroy();
  }

  private genTiles(): void {
    const s = this.s;

    // Floor
    const gF = this.scene.make.graphics({ x: 0, y: 0 }, false);
    gF.fillStyle(0x0d1117, 1);
    gF.fillRect(0, 0, s, s);

    // Iso diamond pattern
    gF.lineStyle(1, 0x00e5ff, 0.04);
    gF.lineBetween(0, s / 2, s / 2, 0);
    gF.lineBetween(s / 2, 0, s, s / 2);
    gF.lineBetween(s, s / 2, s / 2, s);
    gF.lineBetween(s / 2, s, 0, s / 2);

    // Grid dots at corners
    gF.fillStyle(0x1a237e, 0.3);
    gF.fillCircle(0, 0, 1);
    gF.fillCircle(s, 0, 1);
    gF.fillCircle(0, s, 1);
    gF.fillCircle(s, s, 1);

    gF.generateTexture('tile-floor', s, s);
    gF.destroy();

    // Wall
    const gW = this.scene.make.graphics({ x: 0, y: 0 }, false);
    // Base
    gW.fillStyle(0x1a237e, 1);
    gW.fillRect(0, 0, s, s);

    // Top face (lighter)
    gW.fillStyle(0x283593, 1);
    gW.fillRect(2, 2, s - 4, s / 2);

    // Side face (darker)
    gW.fillStyle(0x0d1457, 1);
    gW.fillRect(2, s / 2, s - 4, s / 2 - 2);

    // Edge glow
    gW.lineStyle(1, 0x00e5ff, 0.5);
    gW.lineBetween(1, 1, s - 1, 1);
    gW.lineBetween(1, 1, 1, s - 1);
    gW.lineStyle(1, 0x00e5ff, 0.2);
    gW.lineBetween(s - 1, 1, s - 1, s - 1);
    gW.lineBetween(1, s - 1, s - 1, s - 1);

    // Circuit lines
    gW.lineStyle(1, 0x00e5ff, 0.15);
    gW.lineBetween(s / 2, 4, s / 2, s - 4);
    gW.lineBetween(4, s / 2, s - 4, s / 2);

    gW.generateTexture('tile-wall', s, s);
    gW.destroy();
  }

  private genBullet(): void {
    const g = this.scene.make.graphics({ x: 0, y: 0 }, false);

    // Outer glow
    g.fillStyle(0x00e5ff, 0.2);
    g.fillCircle(8, 8, 8);
    // Mid
    g.fillStyle(0x00e5ff, 0.6);
    g.fillCircle(8, 8, 5);
    // Core
    g.fillStyle(0xffffff, 1);
    g.fillCircle(8, 8, 2);

    g.generateTexture('bullet', 16, 16);
    g.destroy();
  }

  private genBuildings(): void {
    const s = this.s;

    // Firewall
    const gFw = this.scene.make.graphics({ x: 0, y: 0 }, false);
    gFw.fillStyle(0x01579b, 1);
    gFw.fillRect(4, 8, s - 8, s - 12);
    // Shield layers
    gFw.lineStyle(2, 0x00e5ff, 0.9);
    gFw.strokeRect(5, 9, s - 10, s - 14);
    gFw.lineStyle(1, 0x00e5ff, 0.4);
    gFw.strokeRect(8, 12, s - 16, s - 20);
    // Lock icon
    gFw.fillStyle(0x00e5ff, 0.7);
    gFw.fillCircle(s / 2, s / 2 - 2, 4);
    gFw.fillRect(s / 2 - 3, s / 2 + 1, 6, 5);

    gFw.generateTexture('building-firewall', s, s);
    gFw.destroy();

    // Turret (CI/CD)
    const gT = this.scene.make.graphics({ x: 0, y: 0 }, false);
    // Base
    gT.fillStyle(0x1b5e20, 1);
    gT.fillCircle(s / 2, s / 2, 14);
    gT.fillStyle(0x2e7d32, 1);
    gT.fillCircle(s / 2, s / 2, 10);
    // Barrel
    gT.fillStyle(0x4caf50, 1);
    gT.fillRect(s / 2 - 2, 2, 4, 14);
    // Muzzle
    gT.fillStyle(0x76ff03, 1);
    gT.fillRect(s / 2 - 3, 2, 6, 3);
    // Center
    gT.fillStyle(0x76ff03, 1);
    gT.fillCircle(s / 2, s / 2, 4);
    // Ring
    gT.lineStyle(1, 0x76ff03, 0.5);
    gT.strokeCircle(s / 2, s / 2, 15);

    gT.generateTexture('building-turret', s, s);
    gT.destroy();
  }

  private genResources(): void {
    const s = this.s;

    // Coffee
    const gC = this.scene.make.graphics({ x: 0, y: 0 }, false);
    // Cup
    gC.fillStyle(0x4e342e, 1);
    gC.fillRect(12, 14, 14, 18);
    gC.fillStyle(0x5d4037, 1);
    gC.fillRect(13, 15, 12, 16);
    // Rim
    gC.fillStyle(0x6d4c41, 1);
    gC.fillRect(11, 13, 16, 2);
    // Handle
    gC.lineStyle(2, 0x4e342e, 1);
    gC.beginPath();
    gC.arc(27, 22, 4, -1, 1);
    gC.strokePath();
    // Coffee surface
    gC.fillStyle(0x8d6e63, 1);
    gC.fillRect(14, 16, 10, 3);
    // Steam
    gC.lineStyle(1, 0xffffff, 0.3);
    gC.lineBetween(16, 12, 15, 8);
    gC.lineBetween(20, 12, 21, 7);
    gC.lineBetween(24, 12, 23, 9);

    gC.generateTexture('resource-coffee', s, s);
    gC.destroy();

    // Commit
    const gCommit = this.scene.make.graphics({ x: 0, y: 0 }, false);
    // Branch line
    gCommit.lineStyle(2, 0x76ff03, 0.5);
    gCommit.lineBetween(s / 2, 4, s / 2, s - 4);
    // Main node
    gCommit.fillStyle(0x76ff03, 1);
    gCommit.fillCircle(s / 2, s / 2, 7);
    gCommit.fillStyle(0x0d1117, 1);
    gCommit.fillCircle(s / 2, s / 2, 4);
    // Branch
    gCommit.lineStyle(1, 0x76ff03, 0.5);
    gCommit.lineBetween(s / 2, s / 2 - 6, s / 2 + 10, 6);
    gCommit.fillStyle(0x76ff03, 0.7);
    gCommit.fillCircle(s / 2 + 10, 6, 3);

    gCommit.generateTexture('resource-commit', s, s);
    gCommit.destroy();
  }
}
