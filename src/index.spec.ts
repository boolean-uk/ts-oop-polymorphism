import { Player } from "."
import { Enemy } from "./Enemy"

describe("Player tests", () => {
    let player: Player
    let enemy: Enemy

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
        enemy = new Enemy("Orc", 100, 20)
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

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the enemy health on successful hits", () => {
        let result

        do {
            result = enemy.takeHit(30)
        } while (result.includes('missed'))

        expect(enemy.health).toBeLessThan(100)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(100 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("enemy should attack the player", () => {
        let result
        let hitResult

        do{
            result = enemy.attackPlayer()
            hitResult = player.takeHit(result.getType())
        } while(hitResult.includes('missed'))


        expect(player.health).toBeLessThan(52)
        expect(hitResult).toContain('The attack hit')

        const extractedNumbers = hitResult.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })
})