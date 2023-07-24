import {Attack} from "./Attack";
import {Weapon} from "../weapon/Weapon";

export class SwordAttack extends Attack {

    constructor(weapon: Weapon) {
        super();
        this.damage = Math.floor(Math.random() * (12 - 2) + 1) + weapon.damage
    }
}