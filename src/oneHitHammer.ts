import { Attack } from "./attack"

export class oneHitHammer implements Attack {
    attackType() { return 'oneHitHammer'}
    countDamage() { return 52 }
}