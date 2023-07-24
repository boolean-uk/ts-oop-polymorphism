export class Character {
    private _name: string
    private _health: number = 100
    private _armour: number = 14

    constructor(name: string, health: number, armour: number) {
        this._name = name
        this._health = health
        this._armour = armour

    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get armour(): number {
        return this._armour;
    }

    set armour(value: number) {
        this._armour = value;
    }

    get health(): number {
        return this._health
    }

    set health(value: number) {
        this._health = value
    }

}