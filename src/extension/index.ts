import { Attack } from "./enemies attacs/Attack"
import { Character } from "./enemies/Character"


export class Player extends Character {
    public _health = 52 // when this reaches 0, the player dies
    public _armour = 14 // an attack must be >= this to hit the player
    public attack = new Attack()
}
