import { Attack } from "./Attack"
import { SpellAttack } from "./SpellAttack"

export class FireSpellAttack extends SpellAttack implements Attack {
    type = 'fire spell'
    
}