import Phaser from 'phaser';
import { TILE_SIZE, BUILDINGS } from '../config';
import { Player } from '../entities/Player';
import { EnemyManager } from './EnemyManager';

interface Building {
  sprite: Phaser.Physics.Arcade.Sprite;
  type: 'firewall' | 'turret';
  hp: number;
  lastAttack: number;
}

export class BuildingManager {
  private scene: Phaser.Scene;
  private buildings: Building[] = [];

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  placeBuildingAtPlayer(player: Player, type: 'firewall' | 'turret'): void {
    const gameScene = this.scene as any;
    const resourceManager = gameScene.resourceManager;
    const config = type === 'firewall' ? BUILDINGS.firewall : BUILDINGS.turret;

    if (!resourceManager || resourceManager.commits < config.cost) {
      const uiScene = this.scene.scene.get('UIScene') as any;
      uiScene?.addLog?.('> Error: insufficient commits');
      return;
    }

    resourceManager.spendCommits(config.cost);

    const x = Math.round(player.sprite.x / TILE_SIZE) * TILE_SIZE + TILE_SIZE / 2;
    const y = Math.round(player.sprite.y / TILE_SIZE) * TILE_SIZE + TILE_SIZE / 2 + TILE_SIZE;

    const texture = type === 'firewall' ? 'building-firewall' : 'building-turret';
    const sprite = this.scene.physics.add.staticSprite(x, y, texture);
    sprite.setDepth(3);

    this.buildings.push({ sprite, type, hp: config.hp, lastAttack: 0 });

    // Firewall blocks enemies
    if (type === 'firewall') {
      const enemyManager = gameScene.enemyManager as EnemyManager;
      this.scene.physics.add.collider(sprite, enemyManager.group);
    }

    const uiScene = this.scene.scene.get('UIScene') as any;
    uiScene?.addLog?.(`> Deployed ${config.name}`);
  }

  update(delta: number, enemyManager: EnemyManager): void {
    const now = this.scene.time.now;

    this.buildings.forEach((building) => {
      if (building.type === 'turret' && building.sprite.active) {
        const turretConfig = BUILDINGS.turret;
        if (now - building.lastAttack >= turretConfig.attackRate) {
          this.turretAttack(building, enemyManager);
          building.lastAttack = now;
        }
      }
    });
  }

  private turretAttack(building: Building, enemyManager: EnemyManager): void {
    const range = 150;
    let closest: Phaser.Physics.Arcade.Sprite | null = null;
    let closestDist = range;

    enemyManager.group.getChildren().forEach((child) => {
      const enemy = child as Phaser.Physics.Arcade.Sprite;
      if (!enemy.active) return;
      const dist = Phaser.Math.Distance.Between(building.sprite.x, building.sprite.y, enemy.x, enemy.y);
      if (dist < closestDist) {
        closestDist = dist;
        closest = enemy;
      }
    });

    if (closest) {
      enemyManager.damageEnemy(closest, 15);
    }
  }
}
