import { Attack } from "./interfaces";

export class Sword implements Attack {
    name = 'sword'

attackRoll(): number {
    return Math.floor(Math.random() * 19) + 1
}

calculateDamage(): number {
    return Math.floor(Math.random() * 7) + 1
}

getMissMessage(): string {
    return 'The sword attack missed!'
}

getHitMessage(damage: number, health: number): string {
    return `The attack hit for ${damage} damage! The player now has ${health} health.`
}
}
