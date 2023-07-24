import { Player } from "."
import { Ghoul } from "./enemies/Ghoul"
import { Manticore } from "./enemies/Manticore"
import { Centaur } from "./enemies/Orc"

describe("Player tests", () => {
    let player: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
    })


    it("should reduce the players health on successful poisonous attack", () => {
        let result
        const ghoul = new Ghoul()
        do {
            result = player.takeHit(ghoul.getAttack())
        } while (result.includes('missed'))

        expect(player.getHealth()).toBeLessThan(52)
        expect(result).toContain('The attack hit')
    })

    it("should reduce the players health on ranged attack", () => {
        let result
        const centaur = new Centaur()

        do {
            result = player.takeHit(centaur.getAttack())
        } while (result.includes('missed'))

        expect(player.getHealth()).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful paralysing attack", () => {
        let result
        const manticore = new Manticore()
        do {
            result = player.takeHit(manticore.getAttack())
        } while (result.includes('missed'))

        expect(player.getHealth()).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    
    it("manticore should hit player", () => {
        let result
        const manticore = new Manticore()

        do {
            result = manticore.hit(player)
        } while (result.includes('missed'))
 
        expect(player.getHealth()).toBeLessThan(52)
        expect(result).toContain('The attack hit')
   
        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g)!// extract the numbers from the result
    
        if (extractedNumbers !== null) {
            expect(Number(52) - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

})