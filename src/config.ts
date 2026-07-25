/**
 * UNPLUG — Game Configuration
 * All magic numbers live here.
 */

export const GAME_WIDTH = 1024;
export const GAME_HEIGHT = 768;

export const TILE_SIZE = 40;
export const MAP_WIDTH = 50; // tiles
export const MAP_HEIGHT = 50; // tiles

export const COLORS = {
  background: 0x0a0e1a,
  primary: 0x00e5ff,
  secondary: 0x1a237e,
  accent: 0x76ff03,
  danger: 0xff1744,
  warning: 0xffea00,
  text: 0xe0e0e0,
  dark: 0x0d1117,
} as const;

export const PLAYER = {
  speed: 160,
  hp: 100,
  mental: 100,
  attackRange: 48,
  attackCooldown: 300,
} as const;

export const WAVE = {
  dayDuration: 60_000,
  nightDuration: 45_000,
  baseEnemyCount: 5,
  enemyScalePerWave: 1.4,
  maxWaves: 10,
} as const;

export const ENEMY_TYPES = {
  nullPointer: {
    name: 'NullPointer',
    hp: 30,
    speed: 120,
    damage: 10,
    behavior: 'chase',
  },
  memoryLeak: {
    name: 'MemoryLeak',
    hp: 80,
    speed: 60,
    damage: 5,
    behavior: 'grow',
  },
  raceCondition: {
    name: 'RaceCondition',
    hp: 40,
    speed: 100,
    damage: 15,
    behavior: 'teleport',
  },
  infiniteLoop: {
    name: 'InfiniteLoop',
    hp: 50,
    speed: 80,
    damage: 8,
    behavior: 'trap',
  },
} as const;

export const BUILDINGS = {
  firewall: { name: 'Firewall', hp: 100, cost: 3 },
  turret: { name: 'CI/CD Pipeline', hp: 60, cost: 5, attackRate: 1000 },
  loadBalancer: { name: 'Load Balancer', hp: 80, cost: 4 },
} as const;

export const SKILLS = {
  gitRevert: { name: 'git revert', cooldown: 15_000, description: 'Rewind 3s' },
  consoleLog: { name: 'console.log()', cooldown: 10_000, description: 'Reveal enemies 3s' },
  debugMode: { name: 'Debug Mode', cooldown: 30_000, description: 'Slow-mo 5s' },
  fork: { name: 'fork()', cooldown: 20_000, description: 'Spawn decoy' },
} as const;
