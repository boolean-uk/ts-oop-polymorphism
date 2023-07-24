import { AttackType } from "./AttackType"

export class Axe implements AttackType {
    attack(armour: number): number {
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)

            if (attackRoll >= armour) {
                return Math.floor(Math.random() * (10 - 2) + 1)
            } else {
                throw new Error('The axe attack missed!')
            }
    }
}