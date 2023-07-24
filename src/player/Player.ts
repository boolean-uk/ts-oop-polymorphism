export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

}