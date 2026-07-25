import Phaser from 'phaser';
import { TILE_SIZE, MAP_WIDTH, MAP_HEIGHT, PLAYER } from '../config';
import { Player } from '../entities/Player';
import { EnemyManager } from '../systems/EnemyManager';
import { WaveManager } from '../systems/WaveManager';
import { MapGenerator } from '../systems/MapGenerator';
import { BuildingManager } from '../systems/BuildingManager';
import { ResourceManager } from '../systems/ResourceManager';

export class GameScene extends Phaser.Scene {
  player!: Player;
  enemyManager!: EnemyManager;
  waveManager!: WaveManager;
  mapGenerator!: MapGenerator;
  buildingManager!: BuildingManager;
  resourceManager!: ResourceManager;

  walls!: Phaser.Physics.Arcade.StaticGroup;
  bullets!: Phaser.Physics.Arcade.Group;

  private wasd!: Record<string, Phaser.Input.Keyboard.Key>;

  constructor() {
    super({ key: 'GameScene' });
  }

  create(): void {
    this.mapGenerator = new MapGenerator(this);
    const { walls } = this.mapGenerator.generate();
    this.walls = walls;

    const spawnX = (MAP_WIDTH / 2) * TILE_SIZE;
    const spawnY = (MAP_HEIGHT / 2) * TILE_SIZE;
    this.player = new Player(this, spawnX, spawnY);

    this.bullets = this.physics.add.group({
      defaultKey: 'bullet',
      maxSize: 50,
    });

    this.enemyManager = new EnemyManager(this);
    this.buildingManager = new BuildingManager(this);
    this.resourceManager = new ResourceManager(this);
    this.waveManager = new WaveManager(this);

    // Collisions
    this.physics.add.collider(this.player.sprite, this.walls);
    this.physics.add.collider(this.enemyManager.group, this.walls);
    this.physics.add.overlap(
      this.bullets, this.enemyManager.group,
      this.onBulletHitEnemy as any, undefined, this,
    );
    this.physics.add.overlap(
      this.player.sprite, this.enemyManager.group,
      this.onPlayerHitEnemy as any, undefined, this,
    );
    this.physics.add.overlap(
      this.player.sprite, this.resourceManager.group,
      this.onPlayerCollectResource as any, undefined, this,
    );

    // Camera
    this.cameras.main.startFollow(this.player.sprite, true, 0.08, 0.08);
    this.cameras.main.setZoom(1.2);
    this.cameras.main.setBounds(0, 0, MAP_WIDTH * TILE_SIZE, MAP_HEIGHT * TILE_SIZE);

    // Input
    this.wasd = {
      W: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W),
      A: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A),
      S: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S),
      D: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    };

    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      if (pointer.leftButtonDown()) this.playerShoot(pointer);
    });

    this.input.keyboard!.on('keydown-B', () => {
      this.buildingManager.placeBuildingAtPlayer(this.player, 'firewall');
    });
    this.input.keyboard!.on('keydown-T', () => {
      this.buildingManager.placeBuildingAtPlayer(this.player, 'turret');
    });

    this.waveManager.start();
    this.scene.launch('UIScene');

    // Game over handler
    this.events.on('player-death', () => {
      this.scene.pause();
      const uiScene = this.scene.get('UIScene') as any;
      uiScene?.addLog?.('Segmentation fault (core dumped)');
    });
  }

  update(_time: number, delta: number): void {
    if (!this.player.sprite.active) return;

    const speed = PLAYER.speed;
    let vx = 0;
    let vy = 0;

    if (this.wasd.A.isDown) vx = -speed;
    if (this.wasd.D.isDown) vx = speed;
    if (this.wasd.W.isDown) vy = -speed;
    if (this.wasd.S.isDown) vy = speed;

    if (vx !== 0 && vy !== 0) { vx *= 0.707; vy *= 0.707; }

    this.player.sprite.setVelocity(vx, vy);
    this.player.update(delta);
    this.enemyManager.update(delta, this.player);
    this.waveManager.update(delta);
    this.buildingManager.update(delta, this.enemyManager);
  }

  private playerShoot(pointer: Phaser.Input.Pointer): void {
    if (!this.player.canAttack()) return;

    const bullet = this.bullets.get(
      this.player.sprite.x, this.player.sprite.y, 'bullet',
    ) as Phaser.Physics.Arcade.Sprite;
    if (!bullet) return;

    bullet.setActive(true).setVisible(true);
    const worldPoint = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
    const angle = Phaser.Math.Angle.Between(
      this.player.sprite.x, this.player.sprite.y,
      worldPoint.x, worldPoint.y,
    );
    bullet.setVelocity(Math.cos(angle) * 400, Math.sin(angle) * 400);

    this.time.delayedCall(1000, () => {
      if (bullet.active) { bullet.setActive(false).setVisible(false); bullet.body?.stop(); }
    });
    this.player.onAttack();
  }

  private onBulletHitEnemy(bullet: any, enemy: any): void {
    bullet.setActive(false).setVisible(false);
    bullet.body?.stop();
    this.enemyManager.damageEnemy(enemy, 20);
  }

  private onPlayerHitEnemy(_player: any, enemy: any): void {
    const config = enemy.getData('config');
    if (config) this.player.takeDamage(config.damage || 10);
  }

  private onPlayerCollectResource(_player: any, resource: any): void {
    this.resourceManager.collect(resource);
  }
}
