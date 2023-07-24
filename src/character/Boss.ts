import {Character} from "./Character";


export class Boss extends Character {
    private _healingPower: number
    private _damage: number

    constructor(name: string, health: number, armour: number, healingPower: number, damage: number) {
        super(name, health, armour)
        this._healingPower = healingPower
        this._damage = damage

    }

    attack(target: Character) {
        const bossDamage = this._damage
        target.health -= Math.max(bossDamage - target.armour, 0)
        if (target.health <= 0) {
            return `${this.name} attacks ${target.name} and deals ${bossDamage} damage. ${target.name} Has been defeated`
        }
        return `${this.name} attacks ${target.name} and deals ${bossDamage} damage. ${target.name} has ${target.health} health remaining`

    }

    heal() {
        this.health += this.healingPower
    }


    get healingPower(): number {
        return this._healingPower;
    }

    set healingPower(value: number) {
        this._healingPower = value;
    }

    get damage(): number {
        return this._damage;
    }

    set damage(value: number) {
        this._damage = value;
    }
}