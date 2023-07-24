import { Race } from "./races";
import { Class } from "./classes";

export interface Attack {
    doDamage(): number;
    getName(): string;
}


export class Player {
    private _health // when this reaches 0, the player dies
    private _armour // an attack must be >= this to hit the player
    private _race
    private _class
    constructor(race: Race, playerClass: Class) {
        this._race = race;
        this._class = playerClass
        this._health = race.getHealth() * playerClass.getHealthMultiplier()
        this._armour = race.getArmour() * playerClass.getArmourMultiplier()
    }

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
