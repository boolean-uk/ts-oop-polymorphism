import {Attack} from "./Attack";
import {Weapon} from "../weapon/Weapon";

export class AxeAttack extends Attack {

    constructor(weapon: Weapon) {
        super();
        this.damage += Math.floor(Math.random() * (10 - 2) + 1) + weapon.damage
    }
}