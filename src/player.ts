import { Attack, SwordAttack } from "./attack";
import { Enemy } from "./enemy";

export class Player {
  private _health = 52; // when this reaches 0, the player dies
  private _armour = 14; // an attack must be >= this to hit the player

  get health(): number {
    return this._health;
  }

  get name(): string {
    return this.constructor.name;
  }

  takeHit(attack: any): string {
    if (!(attack instanceof Attack && attack.constructor !== Attack)) {
      return "Not a valid attack!";
    }

    if (attack.roll >= this._armour) {
      this._health -= attack.damage!;
      return `The attack hit for ${attack.damage!} damage! The player now has ${this._health} health.`;
    }
    return attack.getMissMessage();
  }

  hit(enemy: Enemy): string {
    return enemy.takeHit(new SwordAttack());
  }
}
