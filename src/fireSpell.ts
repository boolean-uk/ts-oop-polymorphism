import { Attack } from "./interfaces";

export class fireSpell implements Attack {
    name = 'fire spell'

attackRoll(): number {
    return Math.floor(Math.random() * 19) + 1
}

calculateDamage(): number {
    return Math.floor(Math.random() * 11) + 1
}

getMissMessage(): string {
    return 'The fire spell attack missed!'
}

getHitMessage(damage: number, health: number): string {
    return `The attack hit for ${damage} damage! The player now has ${health} health.`
}
}
