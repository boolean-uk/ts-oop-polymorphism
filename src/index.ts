import { Attack } from "../src/attack"

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

    takeHit(attackType : string) {
        let damage: number
        {
            const attack = new Attack(attackType)
            const damage = attack.damageEnemy()
            console.log(damage)
            if (damage===0){
                return 'Not a valid attack!'
            }
            else if (this.didAttackMiss()===false){
                
                this._health -= damage    
                return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
            }
            else return 'The ' + attack.attackType + ' attack missed'
        }
    }

    didAttackMiss(){
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
        if (attackRoll >= this._armour) {
            return false
        }
        return true
    }
}
