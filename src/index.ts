export enum AttackType {
    Sword = 'sword',
    FireSpell = 'fire spell',
    IceSpell = 'ice spell',
    Axe = 'axe',
}

export class Player {
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

        if (damage === 0) {
            return 'The ' + attackType + " has missed"
        }

        this._health -= damage;
        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
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
}