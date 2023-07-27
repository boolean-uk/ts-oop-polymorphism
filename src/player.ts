import { Attack } from "./attack";
import { SwordAttack } from "./sword";
import { FireSpellAttack } from "./fire-spell";
import { IceSpellAttack } from "./ice-spell";
import { AxeAttack } from "./axe";

export class Player {
  private _health = 52; // when this reaches 0, the player dies
  private _armour = 14; // an attack must be >= this to hit the player

  get health(): number {
    return this._health;
  }

  takeHit(attackType: Attack): string {
    if (attackType.attackRoll >= this._armour) {
      const damage = attackType.damageRoll;
      this._health -= damage;
      return `The attack hit for ${damage} damage! The player now has ${this._health} health.`;
    } else {
      return `The ${attackType.name} attack missed!`;
    }
  }
}