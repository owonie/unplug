import Phaser from 'phaser';
import { PLAYER } from '../config';

export class Player {
  sprite: Phaser.Physics.Arcade.Sprite;
  hp: number;
  maxHp: number;
  mental: number;
  maxMental: number;

  private lastAttackTime = 0;
  private invulnerable = false;
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;
    this.sprite = scene.physics.add.sprite(x, y, 'player');
    this.sprite.setCollideWorldBounds(true);
    this.sprite.setDepth(10);

    this.hp = PLAYER.hp;
    this.maxHp = PLAYER.hp;
    this.mental = PLAYER.mental;
    this.maxMental = PLAYER.mental;
  }

  update(_delta: number): void {
    // placeholder for future effects
  }

  canAttack(): boolean {
    return this.scene.time.now - this.lastAttackTime >= PLAYER.attackCooldown;
  }

  onAttack(): void {
    this.lastAttackTime = this.scene.time.now;
  }

  takeDamage(amount: number): void {
    if (this.invulnerable) return;
    this.hp -= amount;
    this.invulnerable = true;

    this.scene.tweens.add({
      targets: this.sprite,
      alpha: 0.3,
      duration: 100,
      yoyo: true,
      repeat: 3,
      onComplete: () => {
        this.sprite.setAlpha(1);
        this.invulnerable = false;
      },
    });

    if (this.hp <= 0) {
      this.die();
    }
  }

  heal(amount: number): void {
    this.hp = Math.min(this.maxHp, this.hp + amount);
  }

  private die(): void {
    this.hp = 0;
    this.sprite.setActive(false).setVisible(false);
    this.scene.events.emit('player-death');
  }
}
