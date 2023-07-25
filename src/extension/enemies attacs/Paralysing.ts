import { RangedAttack } from "./RangedAttack";

export class Paralysing extends RangedAttack {
    type = 'paralysing'
    calculateDamage(): number {
        return super.calculateDamage() * 1.5
    }
}