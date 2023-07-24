export class Sword implements Attack {
    attackType() { return 'sword' }
    countDamage() { return Math.floor(Math.random() * (8 - 2) + 1) }
}