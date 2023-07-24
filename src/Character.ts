import { AttackType } from "./AttackType"

export class Character {

    private _addedDamage = 0
    
     constructor(private _health: number, private _armour: number, private _name: string, private _attackType: AttackType){}
    
    get health(): number {
        return this._health
    }

    get attackType(): AttackType {
        return this._attackType
    }

    get armour(): number{
       return this._armour
    }

    addArmour(armour: number) {
        this._armour += armour
    }

    addDamage(damage: number) {
        this._addedDamage += damage
    }

    get addedDamage(): number{
        return this._addedDamage
    }

    takeHit(attackType: AttackType): string {
        let damage: number

        try {
            damage = attackType.attack(this._armour) + this._addedDamage
            this._health -= damage
            return `The attack hit for ${damage} damage! The ${this._name} now has ${this._health} health.`
        } catch (e : any) {
            return e.message
        }
    }

    hit( character: Character){
        character.takeHit( this._attackType)
    }
}