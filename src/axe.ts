import {Attack} from "./index";

export class Axe implements Attack {
    name: string = 'axe'
    getName(): string {
        return this.name
    }
    doDamage() {
        return Math.floor(Math.random() * (10 - 2) + 1)
    }
}