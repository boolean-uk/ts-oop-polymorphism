import { Attack } from "./Attack"

export class AxeAttack extends Attack {
    constructor() {
        super()
        this.attackType = 'axe' 
        this.damageNumber = 10      
    }
}