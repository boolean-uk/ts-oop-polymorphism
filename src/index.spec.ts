import { Player } from "."
import {Sword} from "./sword";
import {Axe} from "./axe";
import {Firespell} from "./firespell";
import {Icespell} from "./icespell";
import { Race, Human, Dwarf, Elf, Orc } from "./races";

describe("Human player takeHit tests", () => {
    let player: Player
    let sword = new Sword()
    let axe = new Axe()
    let firespell = new Firespell()
    let icespell = new Icespell()
    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player(new Human())
    })

    it("should reduce the players health on successful sword hits", () => {
        let result

        do {
            result = player.takeHit(sword)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful axe hits", () => {
        let result

        do {
            result = player.takeHit(axe)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful fire spell hits", () => {
        let result

        do {
            result = player.takeHit(firespell)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful ice spell hits", () => {
        let result

        do {
            result = player.takeHit(icespell)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

})

describe("Player takeHit tests", () => {
    let player: Player
    let sword = new Sword()

    it("should reduce the dwarf players health on successful sword hits", () => {
        let result
        let race = new Dwarf()
        player = new Player(race)
        do {
            result = player.takeHit(sword)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(race.getHealth())
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(race.getHealth() - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the elf players health on successful axe hits", () => {
        let result
        let race = new Elf()
        player = new Player(race)
        do {
            result = player.takeHit(sword)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(race.getHealth())
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(race.getHealth() - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

})