import { Attack } from "./interfaces";
import { Sword } from "./sword";
import { fireSpell } from "./fireSpell";
import { iceSpell } from "./iceSpell";
import { Axe } from "./axe";
import { Shield } from "./shield";
import { Helmet } from "./helmet";
import { Armor } from "./armor";
import { Equipment } from "./equipment";

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player
    private _equipment : Array<Equipment> = [new Shield(1), new Helmet(2), new Armor(3)]

constructor() {
        if (this._equipment && this._equipment.length > 0) {
          let totalArmour = this._armour
          for (const equipment of this._equipment) {
            totalArmour += equipment.armour;
          }
          this._armour = totalArmour
        }
}
 
    set armour(value: number) {
        if (value >= 0) {
          this._armour = value;
        } else {
          console.error('Armour value cannot be negative.');
        }
      }
    get health(): number {
        return this._health
    }

    get equipment() : Array<Equipment> {
        return this._equipment
    }

    takeHit(attackType: string): string {
        let damage: number
        let attack: Attack

       switch (attackType) {
        case 'sword':
            attack = new Sword()
            break
        case 'fire spell':
            attack = new fireSpell()
            break
        case 'ice spell':
            attack = new iceSpell()
            break
        case 'axe':
            attack = new Axe()
            break
        default:
            return 'Not a valid attack!'
       }

       const attackRoll = attack.attackRoll()

       if (attackRoll >= this._armour) {
        const damage = attack.calculateDamage()
        this._health -= damage
        return attack.getHitMessage(damage, this._health) } 
        else {
            return attack.getMissMessage()
             }
    }

  
}