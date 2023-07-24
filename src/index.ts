import { AxeAttack, SwordAttack, IceSpellAttack, FireSpellAttack} from "./Attacks"
export class Player {
  private _health = 52; // when this reaches 0, the player dies
  private _armour = 14; // an attack must be >= this to hit the player

  get health(): number {
    return this._health;
  }

  takeHit(attackType: string): string {
    const attack = this.getAttack(attackType);

    if (!attack) {
      return "Not a valid attack!";
    }

    const attackRoll = attack.attackRoll();

    if (attackRoll >= this._armour) {
      const damage = attack.getDamage();
      this._health -= damage;
      return `The attack hit for ${damage} damage! The player now has ${this._health} health.`;
    } else {
      return attack.getMissMessage();
    }
  }

  private getAttack(attackType: string) {
    switch (attackType) {
      case "sword":
        return new SwordAttack();
      case "fire spell":
        return new FireSpellAttack();
      case "ice spell":
        return new IceSpellAttack();
      case "axe":
        return new AxeAttack();
      default:
        return null;
    }
  }
}
