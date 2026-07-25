import Phaser from 'phaser';
import { TILE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../config';

export class ResourceManager {
  coffee = 0;
  commits = 5;
  points = 0;

  group: Phaser.Physics.Arcade.Group;
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.group = scene.physics.add.group();

    // Initial resource scatter
    this.scatterResources(15);

    // Listen for enemy kills
    scene.events.on('enemy-killed', (x: number, y: number) => {
      this.dropResource(x, y);
    });
  }

  scatterResources(count: number): void {
    for (let i = 0; i < count; i++) {
      const x = Phaser.Math.Between(3, MAP_WIDTH - 3) * TILE_SIZE;
      const y = Phaser.Math.Between(3, MAP_HEIGHT - 3) * TILE_SIZE;
      const type = Math.random() > 0.5 ? 'coffee' : 'commit';
      const texture = type === 'coffee' ? 'resource-coffee' : 'resource-commit';

      const res = this.group.create(x, y, texture) as Phaser.Physics.Arcade.Sprite;
      res.setData('type', type);
      res.setDepth(2);
      (res.body as Phaser.Physics.Arcade.Body).setImmovable(true);
      (res.body as Phaser.Physics.Arcade.Body).moves = false;
    }
  }

  dropResource(x: number, y: number): void {
    const type = Math.random() > 0.4 ? 'commit' : 'coffee';
    const texture = type === 'coffee' ? 'resource-coffee' : 'resource-commit';

    const res = this.group.create(x, y, texture) as Phaser.Physics.Arcade.Sprite;
    res.setData('type', type);
    res.setDepth(2);
    (res.body as Phaser.Physics.Arcade.Body).setImmovable(true);
    (res.body as Phaser.Physics.Arcade.Body).moves = false;
  }

  collect(resource: Phaser.Physics.Arcade.Sprite): void {
    const type = resource.getData('type');
    if (type === 'coffee') {
      this.coffee++;
      const gameScene = this.scene as any;
      gameScene.player?.heal(15);
    } else if (type === 'commit') {
      this.commits++;
    }
    this.points++;
    resource.destroy();
  }

  spendCommits(amount: number): boolean {
    if (this.commits >= amount) {
      this.commits -= amount;
      return true;
    }
    return false;
  }
}
