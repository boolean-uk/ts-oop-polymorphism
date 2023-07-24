import { Attack } from "./Attack"
import { AxeAttack } from "./AxeAttack"
import { FireSpellAttack } from "./FireSpellAttack"
import { IceSpellAttack } from "./IceSpellAttack"
import { SwordAttack } from "./SwordAttack"

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

    takeHit(attackType: string): string {
        let damage: number
        let newAttack: Attack

        switch (attackType){
            case 'sword':
                newAttack = new SwordAttack()
                break;
            case 'fire spell':
                newAttack = new FireSpellAttack()
                break;
            case 'ice spell':
                newAttack = new IceSpellAttack()
                break;
            case 'axe':
                newAttack = new AxeAttack()
                break;
            default:
                return 'Not a valid attack!'
        }
    
        if (newAttack.attackRoll() >= this._armour) {
            damage = newAttack.damage(newAttack.damageNumber)
            this._health -= damage
        } else {
            return 'The ' + attackType + ' attack missed!'
        }

        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
    }
}
