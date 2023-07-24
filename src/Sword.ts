import { AttackType } from "./AttackType"

export class Sword implements AttackType {
    attack(armour : number): number {
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1) // generate an int between 1 and 20

            if (attackRoll >= armour) {
                return Math.floor(Math.random() * (8 - 2) + 1)
                } else {
                throw new Error('The sword attack missed!')
            }
    }
}