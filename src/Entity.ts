import { Equipment } from "./Equipment";
import { Weapon, Sword, FireSpell, IceSpell, Axe } from "./Weapon"
import weaponsAvailable from "./weaponsAvailable";

export class Entity {
    public _health = 30 // when this reaches 0, the player dies
    public _armour = 12 // an attack must be >= this to hit the player
    public weaponsAvailable: { [key: string]: Weapon } = {'sword': new Sword(), 'axe': new Axe()};
    public _weapon = new Weapon()
    public equipment: Equipment = new Equipment

    get armour(): number {
        return this._armour + this.equipment.bonusArmor
    }
    
    get health(): number {
        return this._health
    }

    public Attack(player: Entity) {
        return player.takeHit(this._weapon.name, this.equipment.bonusDamage)
    }

    public swapWeapon() {
        for(const i in this.weaponsAvailable) {
            if(i === this._weapon.name) continue
            this._weapon = this.weaponsAvailable[i]
            break
        }
    }

    takeHit(weaponName: string, bonusDamage: number = 0): string {
        if(weaponsAvailable[weaponName] === undefined)
            return 'Not a valid attack!'
        const weapon: Weapon = weaponsAvailable[weaponName]
        
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1) // generate an int between 1 and 20

        if (attackRoll < this._armour + this.equipment.bonusArmor) {   
            return weapon.message
        }

        let damage: number = weapon.damage + bonusDamage
        this._health -= damage
        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
    }
}
