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
        let attack: Attack

        switch (attackType){
            case 'sword':
                attack = new SwordAttack()
                break;
            case 'fire spell':
                attack = new FireSpellAttack()
                break;
            case 'ice spell':
                attack = new IceSpellAttack()
                break;
            case 'axe':
                attack = new AxeAttack()
                break;
            default:
                return 'Not a valid attack!'

        }

        const attackRoll = attack.attackRoll()

            if (attackRoll >= this._armour) {
                damage = attack.calculateDamage()
                this._health -= damage
                return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
            } else {
                return `The ${attack.type} attack missed!`
            }
    }
}
