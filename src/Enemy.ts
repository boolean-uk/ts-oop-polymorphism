import { Character } from './Character'
import { Axe } from './Axe'

export class Enemy extends Character{
    constructor(health = 100, armour = 5, name = 'enemy', attackType = new Axe()){
        super(health, armour, name, attackType)
    }

}