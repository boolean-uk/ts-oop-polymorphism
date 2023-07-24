import { Attack } from "./attack"

export class FireSpell implements Attack {
    attackType() { return 'fire spell' }
    countDamage() { return Math.floor(Math.random() * (12 - 2) + 1) }
}