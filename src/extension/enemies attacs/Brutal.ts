import { PhysicalAttack } from "./PhysicalAttack";

export class Brutal extends PhysicalAttack {
    type = 'physical'
    calculateDamage(): number {
        return super.calculateDamage() * 2;
    }
}