import { Player } from "."
import { Sword } from "./Sword"

describe("Player tests", () => {
    let player: Player
    let sword: Sword

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
        sword = new Sword()
    })

    it("should reduce the players health on successful hits", () => {
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
})