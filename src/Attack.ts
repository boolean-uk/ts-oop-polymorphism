import { AttackInterface } from "./AttackInterface"

export class Attack implements AttackInterface {
    attackType: string
    damageNumber: number
    constructor() {
        this.attackType = ""
        this.damageNumber = 0      
    }
    damage(damageNumber: number): number {
        return Math.floor(Math.random() * (damageNumber - 2) + 1)
    }
    attackRoll(): number {
        return Math.floor(Math.random() * (20 - 2) + 1) // generate an int between 1 and 20
    }
}