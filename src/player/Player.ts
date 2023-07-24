import {AttackType, getAttack} from "@attack/AttackType";
import AttackSummary from "@attack/AttackSummary";

class Player {
    constructor(
        private _health: number,
        private _armour: number
    ) {}

    get health(): number {
        return this._health
    }

    public takeHit (attackType: AttackType): AttackSummary {
        const attack = getAttack[attackType]
        const accuracyRoll = attack.rollForAccuracy()
        if (accuracyRoll >= this._armour) {
            const damage = attack.rollForDamage()
            this._health -= damage
            return {
                status: "hit",
                damage: damage,
                playerHealth: this._health
            }
        } else {
            return { status: "miss" }
        }
    }
}

export default Player
