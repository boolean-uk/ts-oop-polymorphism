import { Attack } from "./attack"

export class IceSpell implements Attack {
    attackType() { return 'ice spell' }
    countDamage() { return Math.floor(Math.random() * (12 - 2) + 1) }
}