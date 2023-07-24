import { Attack } from "./Attack"



 export class Player {


     private _health = 52 // when this reaches 0, the player dies
     private _armour = 14 // an attack must be >= this to hit the player
     
    

    get health(): number {
        return this._health
    }

    takeHit(attackType: Attack): string {
        let damage: number

        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1) // generate an int between 1 and 20

        if (attackRoll >= this._armour) {
            damage = Math.floor(Math.random() * (attackType.maxHit - attackType.minHit) + 1)
            this._health -= damage
        } else {
            return `The ${attackType.name} attack missed!`
        }
    

        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
     }
     
     
}

