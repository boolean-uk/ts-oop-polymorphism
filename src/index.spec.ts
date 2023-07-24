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
    
    it('should show a message when the sword attack misses', () => {
        player['_armour'] = 20;
        const result = player.takeHit('sword')
        expect(result).toEqual('The sword attack missed!')
        expect(player.health).toEqual(52)
    })

    it('should reduce the player\'s health on successful fire spell hit', () => {
        let result

        do {
            result = player.takeHit('fire spell')
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it('should show a message when the fire spell attack misses', () => {
        player['_armour'] = 20;
        const result = player.takeHit('fire spell')
        expect(result).toEqual('The fire spell attack missed!')
        expect(player.health).toEqual(52)
    })

    it('should reduce the player\'s health on successful ice spell hit', () => {
        let result

        do {
            result = player.takeHit('ice spell')
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it('should show a message when the ice spell attack misses', () => {
        player['_armour'] = 20;
        const result = player.takeHit('ice spell')
        expect(result).toEqual('The ice spell attack missed!')
        expect(player.health).toEqual(52)
    })

    it('should reduce the player\'s health on successful axe hit', () => {
        let result

        do {
            result = player.takeHit('axe')
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it('should show a message when the axe attack misses', () => {
        player['_armour'] = 20;
        const result = player.takeHit('axe')
        expect(result).toEqual('The axe attack missed!')
        expect(player.health).toEqual(52)
    })
})