import { AttackType } from "./attackType";

export class IceSpell implements AttackType {
    damage: number;
    name: string;
    
    constructor() {
        this.damage = Math.floor(Math.random() * (12 - 2) + 1)
        this.name = "ice spell";
    }
}