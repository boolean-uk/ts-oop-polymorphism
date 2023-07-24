import { Player, Sword, Knife, IceSpell } from "."

describe("Player tests", () => {
    let player: Player
    let sword: Sword;
    let knife: Knife;
    let iceSpell: IceSpell;

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
        sword = new Sword();
        knife = new Knife();
        iceSpell = new IceSpell();
    })

    it("should not use invalid attacks", () => {
        const result = player.takeHit(knife)
        expect(result).toEqual('Not a valid attack!')
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

    it("should reduce the players health on successful hits", () => {
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
})