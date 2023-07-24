export class Equipment{
    constructor(private _armour = 0, private _damage = 0, private _name = 'equipment0'){}

    get aromour(): number{
        return this._armour
    }

    get damage(): number{
        return this._damage
    }

}