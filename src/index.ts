export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

    
    takeHit(attack: Attack): string {
        let damage: number

        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)

        if (attackRoll >= this._armour) {
            damage = attack.calculateDamage()
            this._health -= damage
            return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
        } else {
            return 'The' + attack.getAttackType() +'attack missed!'
        }
    }
}
