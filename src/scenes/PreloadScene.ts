import Phaser from 'phaser';
import { PixelArtGenerator } from '../graphics/PixelArtGenerator';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  create(): void {
    // Show loading text
    const cx = this.cameras.main.centerX;
    const cy = this.cameras.main.centerY;
    const text = this.add.text(cx, cy, '> Generating Runtime...', {
      fontFamily: 'monospace',
      fontSize: '16px',
      color: '#00e5ff',
    }).setOrigin(0.5);

    // Generate all pixel art assets
    const generator = new PixelArtGenerator(this);
    generator.generateAll();

    text.destroy();
    this.scene.start('GameScene');
  }
}
