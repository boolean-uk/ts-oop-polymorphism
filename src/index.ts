import { Character } from './Character'
import { IceSpell } from './IceSpell'

export class Player extends Character{
    constructor(health = 52, armour = 14, name = 'player', attackType = new IceSpell()){
        super(health, armour, name, attackType)
    }
}


