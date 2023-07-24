export interface Attack{
    name: string
    attackRoll(): number
    calculateDamage(): number
    getMissMessage(): string
    getHitMessage(damage: number, health: number): string
}

export interface Equipment {
    name: string
    applyHealthBonus(baseHealth: number): number
}