interface Attack {
    calculateDamage(): number
    attackName() : string
}

class SwordAttack implements Attack {
    calculateDamage(): number {
        return Math.floor(Math.random() * (8 - 2) + 1)
    }
    attackName(): string {
        return 'sword'
    }
}

class FireSpellAttack implements Attack{
    calculateDamage(): number {
        return Math.floor(Math.random() * (12 - 2) + 1)
    }
    attackName(): string {
        return 'fire spell'
    }
}

class IceSpellAttack implements Attack{
    calculateDamage(): number {
        return Math.floor(Math.random() * (12 - 2) + 1)
    }
    attackName(): string {
        return 'ice spell'
    }
}

class AxeAttack implements Attack{
    calculateDamage(): number {
        return Math.floor(Math.random() * (10 - 2) + 1)
    }
    attackName(): string {
        return 'axe'
    }
}

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

    takeHit(attackType: string): string {
        const attack = this.attackFromType(attackType)

        if (!attack){
            return 'Not a valid attack!'
        }

        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
        
        if (attackRoll >= this._armour){
            const damage = attack.calculateDamage()
            this._health -= damage
            return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
        } else {
            return `The ${attack.attackName()} attack missed!`
        }
    }

    attackFromType(attackType: string):  Attack | null{
        switch(attackType.toLowerCase()){
            case 'sword':
                return new SwordAttack()
                break
            case 'fire spell':
                return new FireSpellAttack()
                break
            case 'ice spell':
                return new IceSpellAttack()
                break
            case 'axe':
                return new AxeAttack()
                break
            default:
                return null
        }
    }
}
