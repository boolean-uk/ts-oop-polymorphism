const Attack = require('../../src/attack.ts')

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
            if (this.didAttackMiss()===false){
                this._health -= attack.damageEnemy()
            }
            else return 'The' + attack.attackType + 'attack missed!'
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

module.exports{
    Player:Player
}
