import {Attack} from "./Attack";

export class FireSpellAttack extends Attack {

    constructor() {
        super();
        this.damage = Math.floor(Math.random() * (12 - 2) + 1)
    }
}