import { Attack } from "./Attack"

export class SwordAttack implements Attack {
    type = 'sword'
    attackRoll(): number {
        return Math.floor(Math.random() * (20 - 2) + 1)
    }

    calculateDamage(): number {
       return Math.floor(Math.random() * (8 - 2) + 1)
    }
}