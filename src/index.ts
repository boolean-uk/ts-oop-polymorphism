export interface IAttack {
    attackType: string;
    attackRoll: number;
    attackDamage: number;
    performAttack(): number;
}

export class Sword implements IAttack {
    attackType = 'sword';
    attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
    attackDamage = Math.floor(Math.random() * (8 - 2) + 1);

    performAttack(): number {
        return this.attackDamage;
    }
}

export class FireSpell implements IAttack {
    attackType = 'fire spell';
    attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
    attackDamage = Math.floor(Math.random() * (12 - 2) + 1);

    performAttack(): number {
        return this.attackDamage;
    }
}

export class IceSpell implements IAttack {
    attackType = 'ice spell';
    attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
    attackDamage = Math.floor(Math.random() * (12 - 2) + 1);

    performAttack(): number {
        return this.attackDamage;
    }
}

export class Axe implements IAttack {
    attackType = 'axe';
    attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
    attackDamage = Math.floor(Math.random() * (10 - 2) + 1);

    performAttack(): number {
        return this.attackDamage;
    }
}

export abstract class Character {
    protected _health: number;
    protected _armour: number;

    constructor(health: number, armour: number) {
        this._health = health;
        this._armour = armour;
    }

    get health(): number {
        return this._health;
    }

    takeHit(attack: IAttack): string {
        if (attack.attackRoll >= this._armour) {
            const damage = attack.performAttack();
            this._health -= damage;
            return `The ${attack.attackType} attack hit for ${damage} damage! ${this.constructor.name} now has ${this._health} health.`;
        } else {
            return `The ${attack.attackType} attack missed!`;
        }
    }
}

export class Player extends Character {
    constructor() {
        super(52, 14);
    }
}

// Extension
export enum EnemyType {
    Beast = "beast",
    SpellCaster = "spellcaster",
    Warrior = "warrior",
}

export class Enemy extends Character {
    private _type: EnemyType;
    private _resistance: string[];  // attack types this enemy is resistant to
    private _specialAttack: IAttack;

    constructor(health: number, armour: number, type: EnemyType, resistance: string[], specialAttack: IAttack) {
        super(health, armour);
        this._type = type;
        this._resistance = resistance;
        this._specialAttack = specialAttack;
    }

    get type(): EnemyType {
        return this._type;
    }

    get resistance(): string[] {
        return this._resistance;
    }

    get specialAttack(): IAttack {
        return this._specialAttack;
    }

    get enemyType(): EnemyType {
        return this.enemyType;
    }

    // Override takeHit to include resistance
    takeHit(attack: IAttack): string {
        if (this._resistance.includes(attack.attackType)) {
            return `The ${attack.attackType} attack was ineffective! The enemy's resistance reduced the damage.`;
        } else {
            return super.takeHit(attack);
        }
    }  
}

export class RegularAttack implements IAttack {
    attackType = 'regular';
    attackRoll = Math.floor(Math.random() * (15 - 2) + 1); 
    attackDamage = Math.floor(Math.random() * (6 - 2) + 1); 
    performAttack(): number {
        return this.attackDamage;
    }
}