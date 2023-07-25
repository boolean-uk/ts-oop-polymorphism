import { Attack } from "./Attack"

export class AxeAttack implements Attack {
    type = 'axe'
    attackRoll(): number {
        return Math.floor(Math.random() * (20 - 2) + 1)
    }

    calculateDamage(): number {
       return Math.floor(Math.random() * (10 - 2) + 1)
    }
}
