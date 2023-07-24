interface IAttack {
  getMissMessage(): string;
}

export abstract class Attack implements IAttack {
  damage: number | undefined;
  roll: number;
  constructor() {
    this.damage = undefined;
    this.roll = Math.floor(Math.random() * (20 - 2) + 1);
  }

  abstract getMissMessage(): string;
}

export class SwordAttack extends Attack {
  constructor() {
    super();
    super.damage = Math.floor(Math.random() * (8 - 2) + 1);
  }

  getMissMessage() {
    return "The sword attack missed!";
  }
}

export abstract class SpellAttack extends Attack {
  constructor() {
    super();
    super.damage = Math.floor(Math.random() * (12 - 2) + 1);
  }
}

export class FireSpellAttack extends SpellAttack {
  getMissMessage() {
    return "The fire spell attack missed!";
  }
}

export class IceSpellAttack extends SpellAttack {
  getMissMessage() {
    return "The ice spell attack missed!";
  }
}

export class AxeAttack extends Attack {
  constructor() {
    super();
    super.damage = Math.floor(Math.random() * (10 - 2) + 1);
  }

  getMissMessage() {
    return "The axe attack missed!";
  }
}

export class Player {
  private _health = 52; // when this reaches 0, the player dies
  private _armour = 14; // an attack must be >= this to hit the player

  get health(): number {
    return this._health;
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
}
