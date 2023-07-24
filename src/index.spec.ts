import { Player } from "."

describe("Player tests", () => {
    let player: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
    })

    it("should not use invalid attacks", () => {
        const result = player.takeHit('banana')
        expect(result).toEqual('Not a valid attack!')
    })

    it("should return correct type in missed message", () => {
        let result
        do {
            result = player.takeHit('sword')
        } while (!result.includes('missed'))
        expect(result).toEqual('The sword attack missed!')

        do {
            result = player.takeHit('ice spell')
        } while (!result.includes('missed'))
        expect(result).toEqual('The ice spell attack missed!')
    })

    it("should reduce the players health on successful hits", () => {
        let result

        do {
            result = player.takeHit('sword')
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })
})