import { Equipment } from "./equipment";

export class Armor extends Equipment{
    constructor(name: string,armour: number) {
        super("Armor", armour)
    }
}