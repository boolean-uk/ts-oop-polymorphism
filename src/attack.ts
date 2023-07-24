import { camelCaseToWords } from "./util";

interface Missable {
  getMissMessage(opponent: string): string;
}

interface Damaging {
  getDamageMessage(attacker: string, defender: string, health: number): string;
}

const strength = {
  weakest: () => Math.floor(Math.random() * (6 - 2) + 1),
  weak: () => Math.floor(Math.random() * (8 - 2) + 1),
  medium: () => Math.floor(Math.random() * (10 - 2) + 1),
  strong: () => Math.floor(Math.random() * (12 - 2) + 1),
  strongest: () => Math.floor(Math.random() * (14 - 2) + 1),
};

export abstract class Attack implements Damaging, Missable {
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

  get name(): string {
    return this.constructor.name;
  }

  getDamageMessage(attacker: string, defender: string, health: number): string {
    const damage = `The ${attacker}'s ${camelCaseToWords(this.name)} hit for ${this.damage!} damage!`;
    const result = health > 0 ? `${defender} now has ${health} health.` : `${defender} died.`;
    return `${damage} ${result}`;
  }

  getMissMessage(opponent: string): string {
    return `The ${opponent}'s ${camelCaseToWords(this.name)} missed!`;
  }
}

export abstract class MeleeAttack extends Attack {
  constructor(damage: number | undefined) {
    super(damage ? damage : strength.weak());
  }
}

export class FistAttack extends MeleeAttack {
  constructor() {
    super(strength.weakest());
  }
}

export class SwordAttack extends MeleeAttack {}

export class BludgeonAttack extends MeleeAttack {}

export class AxeAttack extends MeleeAttack {
  constructor() {
    super(strength.medium());
  }
}

export abstract class SpellAttack extends Attack {
  constructor(damage: number | undefined) {
    super(damage ? damage : strength.strong());
  }
}

export class FireSpellAttack extends SpellAttack {}

export class IceSpellAttack extends SpellAttack {}

export class DeathSpellAttack extends SpellAttack {
  constructor() {
    super(strength.strongest());
  }
}
