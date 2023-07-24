import { Player } from "../../src"
import { Kick, SwordAttack } from "../../src/attacks"
import {Enemy, Knight} from "../../src/enemy"

describe("Player tests", () => {
    let player: Player
    let enemy: Enemy

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
        enemy = new Knight();
    })


    it("should damage Knight", () => {
        let result
        result = enemy.takeHit(player.possibleAttacks[0])

        expect(enemy.health).toBeLessThan(20)
        expect(result).toContain('The attack hit')


    })

    it("should kill Knight", () => {
        let result
        result = enemy.takeHit(player.possibleAttacks[0])

        do {
            result = enemy.takeHit(player.possibleAttacks[1])
        } while (result.includes('hit'))

        expect(enemy.health).toBeLessThan(20)
        expect(result).toContain('You won')

    })

    it("Knight should damage player", () => {
        let result

        do {
            result = enemy.attackPlayer(player)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
        
    })

    it("Knight should kill player", () => {
        let result

        do {
            result = enemy.attackPlayer(player)
        } while (player.health > 0)

        expect(player.health === 0)
        expect(result).toContain('You are dead')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
        
    })
})
