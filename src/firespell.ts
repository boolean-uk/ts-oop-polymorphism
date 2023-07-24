import {Attack} from "./index";

export class Firespell implements Attack {
    name: string = 'fire spell'
    getName(): string {
        return this.name
    }
    doDamage() {
        return Math.floor(Math.random() * (12 - 2) + 1)
    }
}