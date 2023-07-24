import { AxeAttack, SwordAttack, IceSpellAttack, FireSpellAttack} from "./Attacks"
interface EnemyAttack {
    attackRoll(): number
    getDamage(): number
    getMissMessage(): string
    getType(): string
}

export class Enemy {
    private _name: string
    private _health: number
    private _armour: number

    constructor(name: string, health: number, armour: number) {
        this._name = name
        this._health = health
        this._armour = armour
    }

    get health(): number {
        return this._health;
    }

    get name(): string {
        return this._name;
    }

    get armour(): number {
        return this._armour;
    }

    takeHit(damage: number) {
        if (damage >= this._armour) {
            this._health -= damage;
            return `The attack hit for ${damage} damage! The enemy now has ${this._health} health.`;
        } else {
            return "Attack missed";
        }
    }

    attackPlayer() {
        const attackTypes: EnemyAttack[] = [
            new SwordAttack(),
            new AxeAttack(),
            new FireSpellAttack(),
            new IceSpellAttack()
        ]

        const index = Math.floor(Math.random() * attackTypes.length)

        return attackTypes[index]
    }
}