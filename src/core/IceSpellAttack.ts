import { Attack } from "./Attack"
import { SpellAttack } from "./SpellAttack"

export class IceSpellAttack extends SpellAttack implements Attack{
    type = 'ice spell'

}