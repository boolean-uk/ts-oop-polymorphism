import { SpellAttack } from "./SpellAttack"

export class IceSpellAttack extends SpellAttack {
    constructor() {
        super()
        this.attackType = 'ice spell'      
    }
}