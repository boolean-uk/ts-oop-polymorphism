import { Player } from "."
import { Mage } from "./Enemy"
import { Talisman } from "./Equipment"

describe("Player tests", () => {
    let player: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
    })

    it("should not use invalid attacks", () => {
        const result = player.takeHit('banana')
        expect(result).toEqual('Not a valid attack!')
    })

    it("should reduce the players health on successful hits", () => {
        let result

        do {
            result = player.takeHit('sword')
        } while (result.includes('missed'))

        expect(player._health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("mage should hit player", () => {
        let result
        const mage: Mage = new Mage()

        do {
            result = mage.Attack(player)
        } while (result.includes('missed'))
        
        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')
        mage.swapWeapon()
    })

    it("mage should swap weapons", () => {
        let result
        const mage: Mage = new Mage()

        expect(mage._weapon._name).toBe("fire spell")
        mage.swapWeapon()
        expect(mage._weapon._name).toBe("ice spell")
    })

    it("should get more armor", () => {
        let result
        player.equipment = new Talisman()

        expect(player.armour).toBe(15)
    })
})