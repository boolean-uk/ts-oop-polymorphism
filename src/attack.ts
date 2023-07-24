interface Missable {
  getMissMessage(): string;
}

const strength = {
  weakest: () => Math.floor(Math.random() * (6 - 2) + 1),
  weak: () => Math.floor(Math.random() * (8 - 2) + 1),
  medium: () => Math.floor(Math.random() * (10 - 2) + 1),
  strong: () => Math.floor(Math.random() * (12 - 2) + 1),
  strongest: () => Math.floor(Math.random() * (14 - 2) + 1),
};

export abstract class Attack implements Missable {
  private _damage: number;
  private _roll: number;
  constructor(damage: number) {
    this._damage = damage;
    this._roll = Math.floor(Math.random() * (20 - 2) + 1);
  }

  get damage(): number {
    return this._damage;
  }

  get roll(): number {
    return this._roll;
  }

  abstract getMissMessage(): string;
}

export class SwordAttack extends Attack {
  constructor() {
    super(strength.weak());
  }

  getMissMessage() {
    return "The sword attack missed!";
  }
}

abstract class SpellAttack extends Attack {
  constructor() {
    super(strength.strong());
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
    super(strength.medium());
  }

  getMissMessage() {
    return "The axe attack missed!";
  }
}

export class FistAttack extends Attack {
  constructor() {
    super(strength.weakest());
  }

  getMissMessage() {
    return "The fist attack missed!";
  }
}
