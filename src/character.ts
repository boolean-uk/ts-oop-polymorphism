import {
  Attack,
  AxeAttack,
  FireSpellAttack,
  FistAttack,
  MeleeAttack,
  SpellAttack,
  SwordAttack,
} from "./attack";

abstract class Character {
  constructor(
    private _health: number,
    private _armour: number,
    private _attackType: new (damage?: number) => Attack
  ) {}

  get health(): number {
    return this._health;
  }

  get armour(): number {
    return this._armour;
  }

  get attack(): Attack {
    return new this._attackType();
  }

  get name(): string {
    return this.constructor.name;
  }

  takeHit(attack: any, opponent: Character): string {
    if (!(attack instanceof Attack && attack.constructor !== Attack)) {
      return "Not a valid attack!";
    }

    if (attack.roll >= this._armour) {
      this._health -= attack.damage!;
      return attack.getDamageMessage(opponent.name, this.name, this._health);
    }
    return attack.getMissMessage(opponent.name);
  }

  hit(opponent: Character): string {
    return opponent.takeHit(this.attack, this);
  }
}

export class Player extends Character {
  constructor(
    health: number = 52,
    armour: number = 14,
    attackType: new (damage?: number) => Attack = SwordAttack
  ) {
    super(health, armour, attackType);
  }
}

export abstract class Enemy extends Character {}

export class Ogre extends Enemy {
  constructor(
    health: number = 100,
    armour: number = 14,
    attackType: new (damage?: number) => MeleeAttack = AxeAttack
  ) {
    super(health, armour, attackType);
  }
}

export class Goblin extends Enemy {
  constructor(
    health: number = 20,
    armour: number = 10,
    attackType: new (damage?: number) => MeleeAttack = FistAttack
  ) {
    super(health, armour, attackType);
  }
}

export class Mage extends Enemy {
  constructor(
    health: number = 30,
    armour: number = 10,
    attackType: new (damage?: number) => SpellAttack = FireSpellAttack
  ) {
    super(health, armour, attackType);
  }
}
