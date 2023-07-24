import { Weapon, Sword, FireSpell, IceSpell, Axe } from "./Weapon"
import { Entity } from "./Entity";
const prompt = require('prompt-sync')()

export class Player extends Entity {
    _health = 52 // when this reaches 0, the player dies
    _armour = 14 // an attack must be >= this to hit the player
    weaponsAvailable: { [key: string]: Weapon } = {'sword': new Sword(), 'axe': new Axe()};
    _weapon = new Axe()
}