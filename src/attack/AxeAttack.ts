import {Attack} from "./Attack";

export class AxeAttack extends Attack {

    constructor() {
        super();
        this.damage = Math.floor(Math.random() * (10 - 2) + 1)
    }
}