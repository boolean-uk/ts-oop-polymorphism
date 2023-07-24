import os from 'os'

export interface Attack {
    calculateDamage(): number
    attackName() : string
}

export class SwordAttack implements Attack {
    calculateDamage(): number {
        return Math.floor(Math.random() * (8 - 2) + 1)
    }
    attackName(): string {
        return 'sword'
    }
}

export class FireSpellAttack implements Attack{
    calculateDamage(): number {
        return Math.floor(Math.random() * (12 - 2) + 1)
    }
    attackName(): string {
        return 'fire spell'
    }
}

export class IceSpellAttack implements Attack{
    calculateDamage(): number {
        return Math.floor(Math.random() * (12 - 2) + 1)
    }
    attackName(): string {
        return 'ice spell'
    }
}

export class AxeAttack implements Attack{
    calculateDamage(): number {
        return Math.floor(Math.random() * (10 - 2) + 1)
    }
    attackName(): string {
        return 'axe'
    }
}

export class Item {
    private _price: number
    private _name: string

    get price(): number {
        return this._price
    }
    
    get name(): string {
        return this._name
    }
    constructor(name: string, price: number) {
        this._name = name
        this._price = price
    }
}

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player
    private _equipment: Item[] = []
    private _gold = 0

    get health(): number {
        return this._health
    }

    get armour(): number {
        return this._armour
    }

    set health(value: number) {
        this._health = value
    }

    get gold(): number {
        return this._gold
    }

    get equipment(): Item[] {
        return this._equipment
    }

    takeHit(attackType: string): string {
        const attack = attackFromType(attackType)

        if (!attack) {
            return 'Not a valid attack!'
        }

        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
        
        if (attackRoll >= this._armour) {
            const damage = attack.calculateDamage()
            this._health -= damage
            return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
        } else {
            return `The ${attack.attackName()} attack missed!`
        }
    }

    earnGold(amount: number): void {
        for (let i = 0; i < amount; i++) {
            // sleep for 1 second
            const start = new Date().getTime()
            while (new Date().getTime() < start + 1000) {
                // do nothing
            }
            this._gold++
        }
    }

    buy(item: Item): string {
        const price = item.price
        if (this._gold >= price) {
            this._gold -= price
            this._equipment.push(item)
            return `The player bought a ${item.name} for ${price} gold.`
        }
        return `The player does not have enough gold to buy a ${item.name}.`
    }

    attack(enemy: Enemy, attack: Attack | null): string {
        if (!attack) {
            return 'Not a valid attack!'
        }
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
        if (attackRoll >= enemy.armour) {
            const damage = attack.calculateDamage()
            enemy.health -= damage
            return `The player attacked with ${attack.attackName()} for ${damage} damage! The enemy now has ${Math.max(0, enemy.health)} health.`
        }

        return `The player attack missed!`
    }

    fight(enemy: Enemy, attackTypes: string[]): string {
        let result = ''
        while (this._health > 0 && enemy.health > 0) {
            result += enemy.attack(this) + os.EOL
            if (this._health > 0) {
                const attack = attackFromType(attackTypes[Math.floor(Math.random() * attackTypes.length)])
                result += this.attack(enemy, attack) + os.EOL
            }
        }
        
        const winner = this._health > 0 ? 'player' : 'enemy'

        return result + `The ${winner} won!` + os.EOL
    }
}

export class Enemy {
    private _name: string
    private _health: number
    private _armour: number
    private _attacks: Attack[]
    
    get name(): string {
        return this._name
    }

    get health(): number {
        return this._health
    }

    set health(value: number) {
        this._health = value
    }

    get armour(): number {
        return this._armour
    }

    get attacks(): Attack[] {
        return this._attacks
    }

    constructor(name: string, health: number, armour: number, attacks: Attack[]) {
        this._name = name
        this._health = health
        this._armour = armour
        this._attacks = attacks
    }

    attack(player: Player): string {
        const attack = this._attacks[Math.floor(Math.random() * this._attacks.length)]
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)

        if (attackRoll >= player.armour) {
            const damage = attack.calculateDamage()
            player.health -= damage
            return `The ${this._name} attacked with ${attack.attackName()} for ${damage} damage! The player now has ${Math.max(0, player.health)} health.`
        }

        return `The ${this._name} attack missed!`
    }
}

function attackFromType(attackType: string):  Attack | null{
    switch(attackType.toLowerCase()) {
        case 'sword':
            return new SwordAttack()
        case 'fire spell':
            return new FireSpellAttack()
        case 'ice spell':
            return new IceSpellAttack()
        case 'axe':
            return new AxeAttack()
        default:
            return null
    }
}
