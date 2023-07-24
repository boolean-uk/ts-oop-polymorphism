import { Player } from './index'
import { FireSpell } from './fireSpell' 
import { SwordAttack } from './swordAttack'
import { IceSpell } from './iceSpell'
import { AxeAttack } from './axeAttack'

describe("Player tests", () => {
    let player: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
    })

    it("should reduce the players healt on successful axe attack hits", () => {
        let result

        do {
            result = player.takeHit(new AxeAttack())    
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players healt on successful fire spell hits", () => { 
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

    it("should reduce the players healt on successful ice spell hits", () => {
        let result

        do {
            result = player.takeHit(new IceSpell())    
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players healt on successful sword attack hits", () => {
        let result

        do {
            result = player.takeHit(new SwordAttack())    
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

})