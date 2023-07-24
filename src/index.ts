export enum AttackType {
    Sword = 'sword',
    FireSpell = 'fire spell',
    IceSpell = 'ice spell',
    Axe = 'axe',
}

interface Attack {
    calculateMiss(damage: number, attackType: string): string

    calculateDamage(attackType: string): number

    takeHit(attackType: string): string
}

export class Player implements Attack {
    private _health = 52
    private _armour = 14

    get health(): number {
        return this._health
    }

    takeHit(attackType: string): string {
        if (!Object.values(AttackType).includes(attackType as AttackType)) {
            return 'Not a valid attack!'
        }
        const damage = this.calculateDamage(attackType)
        this._health -= damage
        return this.calculateMiss(damage, attackType)
    }

    calculateDamage(attackType: string): number {
        let damage: number = 0;

        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)

        if (attackRoll >= this._armour) {
            switch (attackType) {
                case 'sword':
                    return damage = Math.floor(Math.random() * (8 - 2) + 1)
                case 'axe':
                    return damage = Math.floor(Math.random() * (10 - 2) + 1)
                case 'ice spell':
                case 'fire spell':
                    return damage = Math.floor(Math.random() * (12 - 2) + 1)
            }
        }
        return damage;
    }

    calculateMiss(damage: number, attackType: string): string {
        if (damage === 0) {
            return 'The ${attackType} attack missed!'
        }
        return 'The attack hit for ${damage} damage! The player now has ${this._health} health.'
    }
}