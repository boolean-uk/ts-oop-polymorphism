import { SpellAttack } from "./SpellAttack"

export class ManaBolt extends SpellAttack {
    type = 'mana bolt'
    attackRoll(): number {
        return Math.floor(Math.random() * (35 - 2) + 1)
    }
    calculateDamage(): number {
        return super.calculateDamage() * 2
    }
}