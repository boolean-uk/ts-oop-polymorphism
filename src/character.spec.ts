import { Sword } from "./Sword"
import { FireSpell } from "./FIreSpell"
import { Character } from "./Character"

describe("Character tests", () => {
    let sword: Sword
    let fireSpell: FireSpell
    let character1: Character
    let character2: Character

    beforeEach(() => {
        sword = new Sword()
        fireSpell = new FireSpell()
        character1 = new Character(100, 10, 'character1', fireSpell)
        character2 = new Character(100, 10, 'character2', sword)
    })

    it("character1 should damage character2", () => {
        character1.hit(character2)
        expect(character2.health).toBeLessThan(100)
    })

})