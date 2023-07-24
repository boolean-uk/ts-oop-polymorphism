interface AttackType {
  type: string;
  message: string;
  attackRoll(): number;
  damage(): number;
}

export class AttackRoll {
  attackRoll(): number {
    return Math.floor(Math.random() * (20 - 2) + 1);
  }

  damage(): number {
    return Math.floor(Math.random() * (12 - 2) + 1);
  }
}

export class Sword extends AttackRoll implements AttackType {
  type: string = "sword";
  message: string = "The sword attack missed!";

  override damage(): number {
    return Math.floor(Math.random() * (8 - 2) + 1);
  }
}

class FireSpell extends AttackRoll implements AttackType {
  type: string = "fire spell";
  message: string = "The fire spell attack missed!";
}

export class IceSpell extends AttackRoll implements AttackType {
  type: string = "ice spell";
  message: string = "The ice spell attack missed!";
}

class Axe extends AttackRoll implements AttackType {
  type: string = "axe";
  message: string = "The axe attack missed!";

  override damage(): number {
    return Math.floor(Math.random() * (10 - 2) + 1);
  }
}

export class Knife extends AttackRoll implements AttackType {
  type: string = "knife";
  message: string = "The axe attack missed!";
}

export class Player {
  private _health = 52; // when this reaches 0, the player dies
  private _armour = 14; // an attack must be >= this to hit the player
  private arr: string[] = ["sword", "fire spell", "ice spell", "axe"];
  get health(): number {
    return this._health;
  }

  takeHit(attackType: AttackType): string {
    if (!this.arr.includes(attackType.type)) {
      return "Not a valid attack!";
    }
    let damage: number;
    if (attackType.attackRoll() >= this._armour) {
      damage = attackType.damage();
      this._health -= damage;
    } else {
      return attackType.message;
    }
    return `The attack hit for ${damage} damage! The player now has ${this._health} health.`;
  }
}
