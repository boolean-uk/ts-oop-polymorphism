import { SpellAttack } from "./SpellAttack";

export class Fireball extends SpellAttack {
    type= 'spell'
    constructor(){
        super();
    }
    calculateDamage(): number {
        return super.calculateDamage() * 1.3
    }
}