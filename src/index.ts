export enum WeaponType {
    sword = 8,
    axe = 10,
    firespell = 12,
    icespell = 12,
}

export enum ArmourType {
    leather = 12,
    steel = 14,
}

interface Attack {
    calculateMiss(damage: number, weaponType: WeaponType): string

    calculateDamage(damage: number): number

    takeHit(weaponType: any): string
}

export class Player implements Attack {
    private _health = 52
    private _armour = ArmourType.steel

    get health(): number {
        return this._health
    }

    takeHit(weaponType: any): string {
        if (Object.values(WeaponType).includes(weaponType as WeaponType)) {
            const enumValue = WeaponType[weaponType as keyof typeof WeaponType]
            const damage = this.calculateDamage(enumValue)
            this._health -= damage
            return this.calculateMiss(damage, enumValue)
        } else {
            return 'Not a valid attack!'
        }
    }

    calculateDamage(weaponDamage: number): number {
        let damage: number = 0;

        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)

        if (attackRoll >= this._armour) {
            damage = Math.floor(Math.random() * (weaponDamage - 2) + 1)
        }
        return damage;
    }

    calculateMiss(damage: number, weaponType: WeaponType): string {
        if (damage === 0) {
            return 'The ' + weaponType + ' attack missed!'
        }
        return 'The attack hit for ${damage} damage! The player now has ${this._health} health.'
    }
}