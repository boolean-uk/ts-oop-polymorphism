import { Attack, AxeAttack, FistAttack } from "./attack";
import { Player } from "./player";

export abstract class Enemy {
  private _health: number;
  private _armour: number;

  constructor(health: number, armour: number) {
    this._health = health;
    this._armour = armour;
  }

  get health(): number {
    return this._health;
  }

  get armour(): number {
    return this._armour;
  }

  get name(): string {
    return this.constructor.name;
  }

  takeHit(attack: any): string {
    if (!(attack instanceof Attack && attack.constructor !== Attack)) {
      return "Not a valid attack!";
    }

    if (attack.roll >= this.armour!) {
      this._health! -= attack.damage!;
      return `The attack hit for ${attack.damage!} damage! The ${this.name} now has ${this._health} health.`;
    }
    return attack.getMissMessage();
  }

  abstract hit(player: Player): string;
}

export class Ogre extends Enemy {
  constructor() {
    super(100, 14);
  }

  hit(player: Player) {
    return player.takeHit(new AxeAttack());
  }
}

export class Goblin extends Enemy {
  constructor() {
    super(20, 10);
  }

  hit(player: Player) {
    return player.takeHit(new FistAttack());
  }
}
