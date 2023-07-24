export class Attack {

    private _damage: number
    private _attackRoll: number

    hit(armour: number): number {
        if (this.attackRoll >= armour) {
            return this.damage
        }
        return 0;
    }


    constructor() {
        this._damage = 0;
        this._attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
    }

    get damage(): number {
        return this._damage;
    }

    set damage(value: number) {
        this._damage = value;
    }

    get attackRoll(): number {
        return this._attackRoll;
    }

    set attackRoll(value: number) {
        this._attackRoll = value;
    }


}