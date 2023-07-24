export interface AttackInterface {
    attackType: string
    damageNumber: number
    attackRoll(): number
    damage(damageNumber: number): number
}