export interface Attack {
    doDamage(): number;
    getName(): string;
}


export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

    takeHit(attackType: Attack): string {
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
        const damage = attackType.doDamage()
        if (attackRoll >= this._armour) {
            this._health -= damage
        } else {
            return 'The '+ attackType.getName() + ' attack missed!'
        }

        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
    }
}
