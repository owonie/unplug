import Phaser from 'phaser';
import { MAP_WIDTH, MAP_HEIGHT, TILE_SIZE } from '../config';

export class MapGenerator {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  generate(): { walls: Phaser.Physics.Arcade.StaticGroup } {
    const walls = this.scene.physics.add.staticGroup();

    // Floor tiles
    for (let y = 0; y < MAP_HEIGHT; y++) {
      for (let x = 0; x < MAP_WIDTH; x++) {
        this.scene.add.image(
          x * TILE_SIZE + TILE_SIZE / 2,
          y * TILE_SIZE + TILE_SIZE / 2,
          'tile-floor',
        ).setDepth(0);
      }
    }

    // Border walls
    for (let x = 0; x < MAP_WIDTH; x++) {
      walls.create(x * TILE_SIZE + TILE_SIZE / 2, TILE_SIZE / 2, 'tile-wall');
      walls.create(x * TILE_SIZE + TILE_SIZE / 2, (MAP_HEIGHT - 1) * TILE_SIZE + TILE_SIZE / 2, 'tile-wall');
    }
    for (let y = 0; y < MAP_HEIGHT; y++) {
      walls.create(TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, 'tile-wall');
      walls.create((MAP_WIDTH - 1) * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, 'tile-wall');
    }

    // Random interior walls (procedural)
    this.generateRooms(walls);

    // World bounds
    this.scene.physics.world.setBounds(0, 0, MAP_WIDTH * TILE_SIZE, MAP_HEIGHT * TILE_SIZE);

    return { walls };
  }

  private generateRooms(walls: Phaser.Physics.Arcade.StaticGroup): void {
    const rng = new Phaser.Math.RandomDataGenerator();
    const roomCount = 8 + rng.between(0, 4);

    for (let i = 0; i < roomCount; i++) {
      const rx = rng.between(5, MAP_WIDTH - 15);
      const ry = rng.between(5, MAP_HEIGHT - 15);
      const rw = rng.between(4, 10);
      const rh = rng.between(4, 8);

      // Draw room walls with a gap (door)
      const doorPos = rng.between(1, rw - 2);

      for (let x = rx; x < rx + rw; x++) {
        if (x !== rx + doorPos) {
          walls.create(x * TILE_SIZE + TILE_SIZE / 2, ry * TILE_SIZE + TILE_SIZE / 2, 'tile-wall');
        }
        walls.create(x * TILE_SIZE + TILE_SIZE / 2, (ry + rh) * TILE_SIZE + TILE_SIZE / 2, 'tile-wall');
      }
      for (let y = ry; y <= ry + rh; y++) {
        walls.create(rx * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, 'tile-wall');
        if (y !== ry + Math.floor(rh / 2)) {
          walls.create((rx + rw) * TILE_SIZE + TILE_SIZE / 2, y * TILE_SIZE + TILE_SIZE / 2, 'tile-wall');
        }
      }
    }
  }
}
