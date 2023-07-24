import { Player} from "."
import { Sword } from "./Sword"
import { IceSpell } from "./IceSpell"
import { FireSpell } from "./FIreSpell"
import { Axe } from "./Axe"

describe("Player tests", () => {
    let player: Player
    let sword: Sword
    let iceSpell: IceSpell
    let fireSpell: FireSpell
    let axe: Axe

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
        sword = new Sword()
        iceSpell = new IceSpell()
        fireSpell = new FireSpell()
        axe = new Axe()
    })

    it("should reduce the players health on successful hits by Sword", () => {
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

    it("should reduce the players health on successful hits by IceSpell", () => {
        let result

        do {
            result = player.takeHit(iceSpell)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful hits by fireSpell", () => {
        let result

        do {
            result = player.takeHit(fireSpell)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful hits by axe", () => {
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
})