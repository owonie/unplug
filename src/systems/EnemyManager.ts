import Phaser from 'phaser';
import { ENEMY_TYPES, MAP_WIDTH, MAP_HEIGHT, TILE_SIZE } from '../config';
import { Player } from '../entities/Player';

type EnemyType = keyof typeof ENEMY_TYPES;

export class EnemyManager {
  group: Phaser.Physics.Arcade.Group;
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.group = scene.physics.add.group({ runChildUpdate: true });
  }

  spawnWave(count: number, wave: number): void {
    const types: EnemyType[] = ['nullPointer', 'memoryLeak', 'raceCondition', 'infiniteLoop'];
    const available = types.slice(0, Math.min(wave + 1, types.length));

    for (let i = 0; i < count; i++) {
      const type = Phaser.Utils.Array.GetRandom(available);
      this.spawnEnemy(type);
    }
  }

  private spawnEnemy(type: EnemyType): void {
    const config = ENEMY_TYPES[type];
    const edge = Phaser.Math.Between(0, 3);
    let x: number, y: number;

    switch (edge) {
      case 0: x = Phaser.Math.Between(2, MAP_WIDTH - 2) * TILE_SIZE; y = 2 * TILE_SIZE; break;
      case 1: x = Phaser.Math.Between(2, MAP_WIDTH - 2) * TILE_SIZE; y = (MAP_HEIGHT - 2) * TILE_SIZE; break;
      case 2: x = 2 * TILE_SIZE; y = Phaser.Math.Between(2, MAP_HEIGHT - 2) * TILE_SIZE; break;
      default: x = (MAP_WIDTH - 2) * TILE_SIZE; y = Phaser.Math.Between(2, MAP_HEIGHT - 2) * TILE_SIZE; break;
    }

    const textureMap: Record<EnemyType, string> = {
      nullPointer: 'enemy-nullpointer',
      memoryLeak: 'enemy-memoryleak',
      raceCondition: 'enemy-racecondition',
      infiniteLoop: 'enemy-infiniteloop',
    };

    const enemy = this.group.create(x, y, textureMap[type]) as Phaser.Physics.Arcade.Sprite;
    enemy.setData('config', { ...config });
    enemy.setData('hp', config.hp);
    enemy.setData('type', type);
    enemy.setDepth(5);
  }

  update(_delta: number, player: Player): void {
    this.group.getChildren().forEach((child) => {
      const enemy = child as Phaser.Physics.Arcade.Sprite;
      if (!enemy.active) return;

      const config = enemy.getData('config');
      const type = enemy.getData('type') as EnemyType;

      // Basic chase AI
      const angle = Phaser.Math.Angle.Between(
        enemy.x, enemy.y,
        player.sprite.x, player.sprite.y,
      );

      let speed = config.speed;

      if (type === 'raceCondition' && Phaser.Math.Between(1, 100) <= 2) {
        // Teleport closer
        const dist = Phaser.Math.Distance.Between(enemy.x, enemy.y, player.sprite.x, player.sprite.y);
        if (dist > 100) {
          enemy.setPosition(
            enemy.x + Math.cos(angle) * 80,
            enemy.y + Math.sin(angle) * 80,
          );
        }
      }

      enemy.setVelocity(
        Math.cos(angle) * speed,
        Math.sin(angle) * speed,
      );
    });
  }

  damageEnemy(enemy: Phaser.Physics.Arcade.Sprite, amount: number): void {
    const hp = enemy.getData('hp') - amount;
    enemy.setData('hp', hp);

    if (hp <= 0) {
      this.killEnemy(enemy);
    } else {
      enemy.setAlpha(0.6);
      this.scene.time.delayedCall(100, () => enemy.setAlpha(1));
    }
  }

  private killEnemy(enemy: Phaser.Physics.Arcade.Sprite): void {
    // Death effect — flash and destroy
    this.scene.tweens.add({
      targets: enemy,
      alpha: 0,
      scaleX: 1.5,
      scaleY: 1.5,
      duration: 200,
      onComplete: () => {
        enemy.destroy();
      },
    });

    // Drop resources
    this.scene.events.emit('enemy-killed', enemy.x, enemy.y);
  }

  getAliveCount(): number {
    return this.group.getChildren().filter(c => c.active).length;
  }
}
