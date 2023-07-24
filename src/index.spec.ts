import { Player } from "."
import { Dwarf, Elf, Human, Orc } from "./characterRace"
import { CharacterBuilder } from "./characterbuilder"
import { Knight, Mage, Thief } from "./characterclasses/characterclass"
import { SwordAttack } from "./meleeattack"
import { FireSpell, IceSpell } from "./spell"

describe("Player tests", () => {
    let player: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player(new Knight(), new Human())
    })

    // it("should not use invalid attacks", () => {
    //     const result = player.takeHit('banana')
    //     expect(result).toEqual('Not a valid attack!')
    // })

    it("should reduce the players health on successful hits by sword", () => {
        let result

        do {
            result = player.takeHit(new SwordAttack())
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(56)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(27 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful hits by ice spell", () => {
        let result

        do {
            result = player.takeHit(new IceSpell())
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(56)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(27 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful hits by fire spell", () => {
        let result

        do {
            result = player.takeHit(new FireSpell())
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(56)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(27 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("should reduce the players health on successful hits by axe", () => {
        let result

        do {
            result = player.takeHit(new FireSpell())
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(56)
        expect(result).toContain('The attack hit')

        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(27 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        }
    })

    it("Should return new Character with knight class and human race", () => {
       const player: Player = new CharacterBuilder().createPlayer(new Knight(),new Human());
       
       expect(player.health).toEqual(29);
    })

    it("Should return new Characters with diffrents races and classes", () => {
        const player: Player = new CharacterBuilder().createPlayer(new Knight(),new Human());
        const player2: Player = new CharacterBuilder().createPlayer(new Knight(),new Orc());
        const player3: Player = new CharacterBuilder().createPlayer(new Thief(),new Dwarf());
        const player4: Player = new CharacterBuilder().createPlayer(new Mage(),new Elf());
        
        expect(player.health).toEqual(29);
        expect(player2.health).toEqual(56);
        expect(player3.health).toEqual(52);
        expect(player4.health).toEqual(27);
     })
})