import { Attack } from "./Attack"

export class SpellAttack implements Attack {
    type = 'spell'
    attackRoll(): number {
        return Math.floor(Math.random() * (20 - 2) + 1)
    }

    calculateDamage(): number {
       return Math.floor(Math.random() * (12 - 2) + 1)
    }
}