import { Attack } from "./Attack"

export class SwordAttack extends Attack {
    constructor() {
        super()
        this.attackType = 'sword' 
        this.damageNumber = 8      
    }
}
