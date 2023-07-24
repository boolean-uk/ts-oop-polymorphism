import {Attack} from "./index";

export class Sword implements Attack {
    name: string = 'sword'
    constructor() {
    }
    getName(): string {
        return this.name
    }
    doDamage() {
        return Math.floor(Math.random() * (8 - 2) + 1)
    }
}