import { SwordAttack } from "../Attack"
import { Attack } from "./Attack"
import { Equipment } from "./Equipment"
import { Race } from "./Race"

export interface Creature{
    _alive: boolean
    _health: number
    _armour: number
    _attackType: Attack
    takeHit(attackType: Attack): string
    attack(creature: Creature): string
    isAlive(): boolean
}

 export class Player implements Creature {
    _alive = true;
     _health = 52 * this.race.healthMultiplayer
     _armour = 14 * this.race.armourMultiplayer
     _attackType = new SwordAttack()
 
     private _inventory:Equipment[] = []

     constructor(private race: Race){

     }
    
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
            if(this._health <= 0) {
                this._alive = false;
                return 'Player died!'
            }
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

    isAlive(): boolean {
        return this._alive;
     }
     
     
}

