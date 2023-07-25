import { Attack } from "../enemies attacs/Attack"

export class Character {
    public _health = 30
    public _armour = 10
    public attack: Attack = new Attack()

    // constructor(health: number, armour: number, attack: Attack) {
    //     this._health = health
    //     this._armour = armour
    //     this.attack = new Attack()
    // }

    public getHealth(): number {
        return this._health
    }
    public getArmour(): number {
        return this._armour
   }

   public setAttack(attack: Attack): void {
    this.attack = attack
   }

   public getAttack(): Attack {
    return this.attack
   }

   public hit(creature: Character) {
    return creature.takeHit(this.attack);
   }
 
   takeHit(attack: Attack): string {
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1) // generate an int between 1 and 20
        if (attackRoll >= this._armour) {
             const damage = attack.calculateDamage()
             this._health = Number(this._health) - Number(damage)
             return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
         } else {
             return `The ${attack.type} attack missed!`
         }
    }
   

}