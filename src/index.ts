import { AttackType } from "./AttackType"
import { Sword } from "./Sword"

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

    takeHit(attackType: AttackType): string {
        let damage: number

        try {
            damage = attackType.attack(this._armour)
            this._health -= damage
            return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
        } catch (e : any) {
            return e.message
        }
    }
}
