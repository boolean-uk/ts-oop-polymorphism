import { Character } from './Character'
import { IceSpell } from './IceSpell'
import { Equipment } from './Equipment'

export class Player extends Character{
    private _equipment: Equipment[] = []

    constructor(health = 52, armour = 14, name = 'player', attackType = new IceSpell()){
        super(health, armour, name, attackType)
    }

    get equipment(): Equipment[]{
        return this._equipment
    }

    addEquipment(equipment: Equipment){
        this._equipment.push(equipment)
        this.addArmour(equipment.aromour)
        this.addDamage(equipment.damage)
    }

}


