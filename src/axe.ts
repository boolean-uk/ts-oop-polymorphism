import { Attack } from "./interfaces";

export class Axe implements Attack {
    name = 'axe'

attackRoll(): number {
    return Math.floor(Math.random() * 19) + 1
}

calculateDamage(): number {
    return Math.floor(Math.random() * 9) + 1
}

getMissMessage(): string {
    return 'The axe attack missed!'
}

getHitMessage(damage: number, health: number): string {
    return `The attack hit for ${damage} damage! The player now has ${health} health.`
}
}
