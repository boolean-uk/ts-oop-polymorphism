class Axe implements Attack {
    attackType() { return 'axe' }
    countDamage() { return Math.floor(Math.random() * (10 - 2) + 1) }
}