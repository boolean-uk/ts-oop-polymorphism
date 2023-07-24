import { Attack } from "./attack"
import { CharacterRace } from "./characterRace";
import { CharacterClass } from "./characterclasses/characterclass"

export class Player {
    private _health = 27 // when this reaches 0, the player dies
    private _armour = 7 // an attack must be >= this to hit the player

    constructor(private characterclass: CharacterClass, private characterrace: CharacterRace){};

    get health(): number {
        return (this._health * this.characterrace.healthMultiplier)  + this.characterclass.healthBonus;
    }

    get armor(): number{
        return (this._armour * this.characterrace.armorMultiplier )+ this.characterclass.armorBonus;
    }

    takeHit(attackType: Attack): string {
        let damage: number
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1) 
        // generate an int between 1 and 20
        if (attackRoll >= this.armor) {
            damage =attackType.getdamage()
            this._health -= damage / this.characterrace.healthMultiplier;
        } else {
            return attackType.message
        }
        

        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
    }
}
