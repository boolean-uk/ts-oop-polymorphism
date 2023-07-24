import { Creature } from ".";
import { AxeAttack } from "../Attack";
import { Attack } from "./Attack";

export class Goblin implements Creature {
    _health = 10
    _armour= 14
    _attackType = new AxeAttack();

    get health(): number{
        return this._health
    }
    
    attack(creature: Creature): string {
        return creature.takeHit(this._attackType)
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
    

        return `The attack hit for ${damage} damage! Goblin now has ${this._health} health.`
     }
}
