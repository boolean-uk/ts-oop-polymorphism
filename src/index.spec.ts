import { Player} from "."
import { Sword, Axe } from "./weapon"
import { FireSpell, IceSpell } from "./spell"

describe("Player tests", () => {
    let player: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
    })

    it("should reduce the players health on successful hits", () => {
        let result

        do {
            result = player.takeHit(new Sword())
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(player.health).toBeGreaterThanOrEqual(52-9)

        expect(result).toContain('The attack hit')
        
        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful hits", () => {
        let result

        do {
            result = player.takeHit(new FireSpell())
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })
})