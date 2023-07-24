export interface Attack {
    type: string;
    attackRoll(): number
    calculateDamage(): number
}