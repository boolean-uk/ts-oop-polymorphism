import {Attack} from "./Attack";

export class IceSpellAttack extends Attack {

    constructor() {
        super();
        this.damage = Math.floor(Math.random() * (8 - 2) + 1)
    }
}