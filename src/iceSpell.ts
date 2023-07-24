import { Attack } from "./interfaces";

export class iceSpell implements Attack {
    name = 'ice spell'

attackRoll(): number {
    return Math.floor(Math.random() * 19) + 1
}

calculateDamage(): number {
    return Math.floor(Math.random() * 11) + 1
}

getMissMessage(): string {
    return 'The ice spell attack missed!'
}

getHitMessage(damage: number, health: number): string {
    return `The attack hit for ${damage} damage! The player now has ${health} health.`
}
}
