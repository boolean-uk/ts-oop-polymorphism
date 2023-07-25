export class PhysicalAttack {
    type = 'physical'
    attackRoll(): number {
        return Math.floor(Math.random() * (15 - 2) + 1)
    }

    calculateDamage(): number {
       return Math.floor(Math.random() * (10 - 2) + 1)
    }
}