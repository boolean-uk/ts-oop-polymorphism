import { Attack } from "./Attack"

export class RangedAttack extends Attack{
    type = 'ranged'
    
    attackRoll(): number {
        return Math.floor(Math.random() * (20 - 2) + 1)
    }

    calculateDamage(): number {
       return Math.floor(Math.random() * (10 - 2) + 1)
    }
}