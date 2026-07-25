import Phaser from 'phaser';
import { TILE_SIZE, BUILDINGS } from '../config';
import { Player } from '../entities/Player';
import { EnemyManager } from './EnemyManager';

interface Building {
  sprite: Phaser.Physics.Arcade.Sprite;
  type: 'firewall' | 'turret';
  hp: number;
  maxHp: number;
  lastAttack: number;
  active: boolean;
  version: [number, number, number]; // semver
  label?: Phaser.GameObjects.Text;
  statusLabel?: Phaser.GameObjects.Text;
}

export class BuildingManager {
  private scene: Phaser.Scene;
  private buildings: Building[] = [];
  private buildSuccessRate = 0.8;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  placeBuildingAtPlayer(player: Player, type: 'firewall' | 'turret'): void {
    const gameScene = this.scene as any;
    const resourceManager = gameScene.resourceManager;
    const config = type === 'firewall' ? BUILDINGS.firewall : BUILDINGS.turret;

    if (!resourceManager || resourceManager.commits < config.cost) {
      this.log('> Error: insufficient commits for deploy');
      return;
    }

    resourceManager.spendCommits(config.cost);

    const x = Math.round(player.sprite.x / TILE_SIZE) * TILE_SIZE + TILE_SIZE / 2;
    const y = Math.round(player.sprite.y / TILE_SIZE) * TILE_SIZE + TILE_SIZE / 2 + TILE_SIZE;

    const texture = type === 'firewall' ? 'building-firewall' : 'building-turret';
    const sprite = this.scene.physics.add.staticSprite(x, y, texture);
    sprite.setDepth(3);
    sprite.setAlpha(0.4); // dimmed until build passes

    const building: Building = {
      sprite,
      type,
      hp: config.hp,
      maxHp: config.hp,
      lastAttack: 0,
      active: false,
      version: [1, 0, 0],
    };

    // Version label
    building.label = this.scene.add.text(x, y - TILE_SIZE / 2 - 4, 'v1.0.0', {
      fontFamily: 'monospace',
      fontSize: '8px',
      color: '#546e7a',
    }).setOrigin(0.5).setDepth(15);

    // Status label
    building.statusLabel = this.scene.add.text(x, y + TILE_SIZE / 2 + 2, '', {
      fontFamily: 'monospace',
      fontSize: '8px',
      color: '#ffea00',
    }).setOrigin(0.5).setDepth(15);

    this.buildings.push(building);

    // Run CI/CD pipeline
    this.runPipeline(building, config.name);
  }

  private runPipeline(building: Building, name: string): void {
    building.statusLabel?.setText('⏳ Building...');
    this.log(`$ git push origin feature/${name.toLowerCase().replace(/\s/g, '-')}`);

    // Build phase (1.5s)
    this.scene.time.delayedCall(1500, () => {
      building.statusLabel?.setText('🔄 Running CI...');
      this.log(`> CI: npm run build`);

      // CI check (1.5s)
      this.scene.time.delayedCall(1500, () => {
        const success = Math.random() < this.buildSuccessRate;

        if (success) {
          this.onBuildSuccess(building, name);
        } else {
          this.onBuildFail(building, name);
        }
      });
    });
  }

  private onBuildSuccess(building: Building, name: string): void {
    building.active = true;
    building.sprite.setAlpha(1);
    building.statusLabel?.setText('✅ Deployed');
    building.label?.setColor('#76ff03');

    this.log(`✅ ${name} v${building.version.join('.')} deployed successfully`);

    // Flash green
    this.scene.tweens.add({
      targets: building.sprite,
      alpha: { from: 1, to: 0.6 },
      duration: 200,
      yoyo: true,
      repeat: 2,
    });

    // Collider for firewall
    if (building.type === 'firewall') {
      const gameScene = this.scene as any;
      const enemyManager = gameScene.enemyManager as EnemyManager;
      this.scene.physics.add.collider(building.sprite, enemyManager.group);
    }

    // Clear status after 2s
    this.scene.time.delayedCall(2000, () => {
      building.statusLabel?.setText('');
    });
  }

  private onBuildFail(building: Building, name: string): void {
    building.statusLabel?.setText('❌ Build Failed!');
    building.label?.setColor('#ff1744');

    const errors = [
      'TypeError: Cannot read property of undefined',
      'FATAL: tests failed (3 assertions)',
      'ERROR: OOMKilled - container exceeded memory',
      'npm ERR! peer dep conflict',
      'Error: ENOSPC: no space left on device',
    ];
    const error = Phaser.Utils.Array.GetRandom(errors);
    this.log(`❌ ${name} deploy failed: ${error}`);

    // Flash red then fade out
    this.scene.tweens.add({
      targets: building.sprite,
      alpha: 0,
      tint: 0xff1744,
      duration: 1500,
      onComplete: () => {
        building.sprite.destroy();
        building.label?.destroy();
        building.statusLabel?.destroy();
        this.buildings = this.buildings.filter(b => b !== building);
      },
    });

    // Refund half
    const gameScene = this.scene as any;
    const config = building.type === 'firewall' ? BUILDINGS.firewall : BUILDINGS.turret;
    const refund = Math.floor(config.cost / 2);
    gameScene.resourceManager?.addCommits(refund);
    this.log(`> Rollback: ${refund} commits refunded`);
  }

  upgradeNearest(player: Player): void {
    let closest: Building | null = null;
    let closestDist = 80;

    this.buildings.forEach(b => {
      if (!b.active) return;
      const dist = Phaser.Math.Distance.Between(
        player.sprite.x, player.sprite.y,
        b.sprite.x, b.sprite.y,
      );
      if (dist < closestDist) {
        closestDist = dist;
        closest = b;
      }
    });

    if (!closest) {
      this.log('> No active deployments in range');
      return;
    }

    const gameScene = this.scene as any;
    const cost = 3;
    if (!gameScene.resourceManager || gameScene.resourceManager.commits < cost) {
      this.log('> Error: insufficient commits for upgrade');
      return;
    }
    gameScene.resourceManager.spendCommits(cost);

    const building = closest as Building;
    building.statusLabel?.setText('⬆️ Upgrading...');
    this.log(`$ npm version patch`);

    this.scene.time.delayedCall(2000, () => {
      const success = Math.random() < 0.85;

      if (success) {
        // Bump version
        building.version[2]++;
        if (building.version[2] >= 10) {
          building.version[1]++;
          building.version[2] = 0;
        }
        if (building.version[1] >= 10) {
          building.version[0]++;
          building.version[1] = 0;
        }

        building.hp = Math.min(building.maxHp * 1.5, building.hp + 30);
        building.maxHp = Math.round(building.maxHp * 1.2);
        building.statusLabel?.setText('✅ Upgraded');
        building.label?.setText(`v${building.version.join('.')}`);
        this.log(`✅ Upgraded to v${building.version.join('.')}`);
      } else {
        // Downgrade risk
        if (building.version[2] > 0) building.version[2]--;
        building.hp = Math.max(10, building.hp - 20);
        building.statusLabel?.setText('⚠️ Regression!');
        building.label?.setText(`v${building.version.join('.')}`);
        building.label?.setColor('#ffea00');
        this.log(`⚠️ Upgrade failed — regression to v${building.version.join('.')}`);
      }

      this.scene.time.delayedCall(2000, () => {
        building.statusLabel?.setText('');
      });
    });
  }

  update(_delta: number, enemyManager: EnemyManager): void {
    const now = this.scene.time.now;

    this.buildings.forEach((building) => {
      if (!building.active) return;

      if (building.type === 'turret') {
        const rate = BUILDINGS.turret.attackRate;
        if (now - building.lastAttack >= rate) {
          this.turretAttack(building, enemyManager);
          building.lastAttack = now;
        }
      }
    });
  }

  private turretAttack(building: Building, enemyManager: EnemyManager): void {
    const range = 150 + (building.version[0] - 1) * 30; // range scales with major version
    let closest: Phaser.Physics.Arcade.Sprite | null = null;
    let closestDist = range;

    enemyManager.group.getChildren().forEach((child) => {
      const enemy = child as Phaser.Physics.Arcade.Sprite;
      if (!enemy.active) return;
      const dist = Phaser.Math.Distance.Between(
        building.sprite.x, building.sprite.y, enemy.x, enemy.y,
      );
      if (dist < closestDist) {
        closestDist = dist;
        closest = enemy;
      }
    });

    if (closest) {
      const damage = 15 + building.version[1] * 3; // damage scales with minor version
      enemyManager.damageEnemy(closest, damage);
    }
  }

  private log(msg: string): void {
    const uiScene = this.scene.scene.get('UIScene') as any;
    uiScene?.addLog?.(msg);
  }
}
