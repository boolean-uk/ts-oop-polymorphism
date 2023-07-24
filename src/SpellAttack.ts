import { Attack } from "./Attack"

export class SpellAttack extends Attack {
    constructor() {
        super()
        this.attackType = '' 
        this.damageNumber = 12      
    }
}