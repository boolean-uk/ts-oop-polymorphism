import { Player } from "."
import { Sword } from "../src/sword"

describe("Player tests", () => {
    let player: Player
    let sword: Sword

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
        sword = new Sword()

    })

    // it("should not use invalid attacks", () => {
    //     const result = player.takeHit('banana')
    //     expect(result).toEqual('Not a valid attack!')
    // })

    it("should reduce the players health on successful hits", () => {
        let result

        do {
            result = player.takeHit(sword)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        console.log(extractedNumbers)
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })
})