import { RangedAttack } from "./RangedAttack";

export class Poisonous extends RangedAttack {
    type = 'poisonous'
    calculateDamage(): number {
        return super.calculateDamage() * 1.5
    }
}