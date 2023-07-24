interface Missable {
  getMissMessage(): string;
}

abstract class Attack implements Missable {
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
    super(Math.floor(Math.random() * (8 - 2) + 1));
  }

  getMissMessage() {
    return "The sword attack missed!";
  }
}

abstract class SpellAttack extends Attack {
  constructor() {
    super(Math.floor(Math.random() * (12 - 2) + 1));
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
    super(Math.floor(Math.random() * (10 - 2) + 1));
  }

  getMissMessage() {
    return "The axe attack missed!";
  }
}

export class Player {
  private _health = 52; // when this reaches 0, the player dies
  private _armour = 14; // an attack must be >= this to hit the player
  private _attack = new SwordAttack();

  get health(): number {
    return this._health;
  }

  get attack(): Attack {
    return this._attack;
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

  hit(enemy: Enemy) {
    enemy.takeHit(this._attack);
  }
}

abstract class Enemy {
  private _health: number;
  private _armour: number;
  private _attack: Attack;

  constructor(health: number, armour: number, attack: Attack) {
    this._health = health;
    this._armour = armour;
    this._attack = attack;
  }

  get health(): number {
    return this._health;
  }

  get armour(): number {
    return this._armour;
  }

  get attack(): Attack {
    return this._attack;
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

  hit(player: Player) {
    player.takeHit(this.attack);
  }
}

export class Ogre extends Enemy {
  constructor() {
    super(100, 100, new AxeAttack());
  }
}

export class Goblin extends Enemy {
  constructor() {
    super(20, 10, new SwordAttack());
  }
}
