import { Attack } from "./attack"
import { boots } from "./boots"
import { chest } from "./chest"
import { helmet } from "./helmet"
import { Sword } from "./sword"

export class Player {

    private _health = 52 // when this reaches 0, the player dies
    private playerWeapon 
    private items = [new helmet(),new boots(),new chest()]
    //private _armour = 14 // an attack must be >= this to hit the player

    constructor() {
        this.playerWeapon = new Sword()
    }

    get health(): number {
        return this._health
    }

    get weapon() {
        return this.playerWeapon
    }

    takeHit(attack : Attack) {
        let damage = attack.countDamage()
        {
            if (this.didAttackMiss()===false){
                this._health -= damage
                if (this.isDead()){
                    return 'you Died'
                }  
                return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
            }
            else return 'The ' + attack.attackType + ' attack missed'
        }
    }

    didAttackMiss(){
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
        if (attackRoll >= this.countArmor()) {
            return false
        }
        return true
    }

    countArmor(){
        let countArmour : number = 0
        for(let i=0;i < this.items.length ; i++){
            const itemArmor = this.items[i].armor()
            countArmour += itemArmor
        }
        return countArmour
    }

    isDead(){
       return this._health <= 0 
    }

    setWeapon(newWeapon : Attack){
        this.playerWeapon = newWeapon
    }
}
