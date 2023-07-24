import { Equipment } from "./interfaces"

export class Armor implements Equipment {
    name = 'armor'

    applyHealthBonus(baseHealth: number): number {
        return 15
    }
}