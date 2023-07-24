import { Equipment } from "./interfaces"

export class Helmet implements Equipment {
    name = 'helmet'

    applyHealthBonus(baseHealth: number): number {
        return 10
    }
}