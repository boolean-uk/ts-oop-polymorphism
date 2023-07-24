import { SwordAttack } from "../Attack"
import { Attack } from "./Attack"
import { Equipment } from "./Equipment"

export interface Creature{
    _health: number
    _armour: number
    _attackType: Attack
    takeHit(attackType: Attack): string
    attack(creature: Creature): string 
}

 export class Player implements Creature {
     _health = 52
     _armour = 14
     _attackType = new SwordAttack()
 
     private _inventory:Equipment[] = []

    
    get health(): number {
        return this._health
     }
     
     get armour(): number{
         return this._armour
     }

    takeHit(attackType: Attack): string {
        let damage: number

        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1) // generate an int between 1 and 20

        if (attackRoll >= this._armour) {
            damage = Math.floor(Math.random() * (attackType.maxHit - attackType.minHit) + 1)
            this._health -= damage
        } else {
            return `The ${attackType.name} attack missed!`
        }
    

        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
     }

    addEquipment(equipment: Equipment) {
        if(!this._inventory.some((element) => element.name === equipment.name)){
            this._inventory.push(equipment)
            this._armour += equipment.armour
        }
    }

    removeEquipment(equipment: Equipment) {
        const inventoryQuantity = this._inventory.length;
        
        this._inventory = this._inventory.filter(element => element.name !== equipment.name)

        if(this._inventory.length != inventoryQuantity) this._armour -= equipment.armour
     }
     
     attack(creature: Creature): string {
       return creature.takeHit(this._attackType)
    }
     
     
}

