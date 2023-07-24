import { AttackType } from "./attackType";

export class AxeAttack implements AttackType {
    damage: number;
    name: string;
    
    constructor() {
        this.damage = Math.floor(Math.random() * (10 - 2) + 1)
        this.name = "axe";
    }
}