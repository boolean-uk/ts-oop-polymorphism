import { Weapon, Sword, FireSpell, IceSpell, Axe } from "./Weapon"

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player
    private weaponsAvailable: { [key: string]: Weapon } = {'sword': new Sword(), 'fire spell': new FireSpell(), 'ice spell': new IceSpell(), 'axe': new Axe()};

    get health(): number {
        return this._health
    }

    takeHit(weaponName: string): string {
        if(this.weaponsAvailable[weaponName] === undefined)
            return 'Not a valid attack!'
        const weapon: Weapon = this.weaponsAvailable[weaponName]
        
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1) // generate an int between 1 and 20

        if (attackRoll < this._armour) {   
            return weapon.message
        }

        let damage: number = weapon._damage
        this._health -= damage
        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
    }
}
