import {Character} from "./Character";



 export class Boss extends Character {
    private _healingPower: number
    private _damage: number

    constructor(name: string, health: number, armour : number, healingPower: number, damage: number ){
        super(name, health, armour)
        this._healingPower = healingPower
        this._damage= damage

    }

    attack(target: Character) {
        const bossDamage = this._damage
        target.health -= Math.max(bossDamage-target.armour,0)
        if (target.health<=0) {
            return `${this.name} attacks ${target.name} and deals ${bossDamage} damage. ${target.name} has been defeated`
        }
        return `${this.name} attacks ${target.name} and deals ${bossDamage} damage. ${target.name} has ${target.health} health remaining`

    }
    heal() {
        this.health += this._healingPower
    }

}