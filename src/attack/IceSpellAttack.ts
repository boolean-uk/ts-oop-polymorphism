import {Attack} from "./Attack";

export class SwordAttack extends Attack {

    constructor() {
        super();
        this.damage = Math.floor(Math.random() * (12 - 2) + 1)
    }
}