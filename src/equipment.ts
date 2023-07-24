export abstract class Equipment {
    armour : number

    constructor( armour : number) {

        this.armour = armour
    }
    getArmour(): number {
        return this.armour
    }
}