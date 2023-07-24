import { AttackType } from "./AttackType"

export class Character {
     constructor(private _health: number, private _armour: number, private _name: string, private _attackType: AttackType){}
    
    get health(): number {
        return this._health
    }
    get attackType(): AttackType {
        return this._attackType
    }

    takeHit(attackType: AttackType): string {
        let damage: number

        try {
            damage = attackType.attack(this._armour)
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