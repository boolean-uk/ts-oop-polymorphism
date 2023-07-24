import { Attack } from "./interfaces";
import { Sword } from "./sword";
import { fireSpell } from "./fireSpell";
import { iceSpell } from "./iceSpell";
import { Axe } from "./axe";

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

    takeHit(attackType: string): string {
        let damage: number
        let attack: Attack

       switch (attackType) {
        case 'sword':
            attack = new Sword()
            break
        case 'fire spell':
            attack = new fireSpell()
            break
        case 'ice spell':
            attack = new iceSpell()
            break
        case 'axe':
            attack = new Axe()
            break
        default:
            return 'Not a valid attack!'
       }

       const attackRoll = attack.attackRoll()

       if (attackRoll >= this._armour) {
        const damage = attack.calculateDamage()
        this._health -= damage
        return attack.getHitMessage(damage, this._health) } 
        else {
            return attack.getMissMessage()
             }
    }
}