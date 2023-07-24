import {Attack} from "./index";

export class Icespell implements Attack {
    name: string = 'ice spell'
    getName(): string {
        return this.name
    }
    doDamage() {
        return Math.floor(Math.random() * (12 - 2) + 1)
    }
}
