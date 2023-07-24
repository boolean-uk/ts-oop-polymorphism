import { AttackType, getAttack } from "@attack/AttackType";
import AttackSummary from "@attack/AttackSummary";
import Attack from "@attack/Attack";

class Character {
  private _isAlive

  constructor(
    protected _health: number,
    protected _armour: number,
    protected _attackType: AttackType,
    protected _experienceReward: number
  ) {
    this._isAlive = true
  }

  get isAlive(): boolean {
    return this._isAlive
  }

  get health(): number {
    return this._health;
  }

  get attack(): Attack {
    return getAttack[this._attackType];
  }

  die() {
    this._isAlive = false
  }

  attackOtherCharacter(other: Character): AttackSummary {
    if (!other._isAlive) {
      return { status: "miss" }
    }
    return other.takeHit(this.attack)
  }

  takeHit = (attack: Attack): AttackSummary => {
    const accuracyRoll = attack.rollForAccuracy();
    if (accuracyRoll >= this._armour) {
      const damage = attack.rollForDamage();
      this._health -= damage;
      if (this._health <= 0) {
        this.die()
      }
      return this._isAlive ? {
        status: "hit",
        damage: damage,
        playerHealth: this._health
      } : {
        status: "fatal",
        experience: this._experienceReward
      }
    } else {
      return { status: "miss" };
    }
  };
}

export default Character;
