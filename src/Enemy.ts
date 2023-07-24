import { Player } from ".";
import { Weapon, Sword, FireSpell, IceSpell, Axe } from "./Weapon"
import weaponsAvailable from "./weaponsAvailable";
import { Entity } from "./Entity";

class Enemy extends Entity {
    _health: number = 0
    _armour = 12
    _name: string = ""
    _weapon: Weapon = new Weapon()
    weaponsAvailable: { [key: string]: Weapon } = {};
}

class Mage extends Enemy {
    _health: number = 60
    _name: string = "Mage"
    _weapon: Weapon = new FireSpell()
    weaponsAvailable: { [key: string]: Weapon } = { 'fire spell': new FireSpell(), 'ice spell': new IceSpell() };
} 

class SwordsMan extends Enemy {
    _health: number = 100
    _name: string = "Swords Man"
    _weapon: Weapon = new Sword()
    weaponsAvailable: { [key: string]: Weapon } = { 'sword': new Sword(), 'axe': new Axe()};
} 

export { Enemy, Mage, SwordsMan}