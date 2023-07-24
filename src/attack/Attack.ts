import throwDice from "@dice/Dice";

class Attack {
    constructor(
        private _name: string,
        private _accuracyRoll: 20,
        private _damageRange: [number, number]
    ) {}

    get name(): string {
        return this._name
    }

    rollForAccuracy () {
        return throwDice(this._accuracyRoll)
    }

    rollForDamage() {
        const [min, max] = this._damageRange
        return Math.round(Math.random() * (max - min) + min)
    }
}

export default Attack
