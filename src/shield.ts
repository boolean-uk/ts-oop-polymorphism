import { Equipment } from "./interfaces"

export class Shield implements Equipment {
    name = 'shield'

    applyHealthBonus(baseHealth: number): number {
        return 5
    }
}