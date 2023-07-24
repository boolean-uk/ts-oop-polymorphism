import {Player} from "./player/Player";
import {AttackType} from "./attack/AttackType";


describe("Player tests", () => {
    let playerOne: Player
    let playerTwo: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        playerOne = new Player(0)
        playerTwo = new Player(0)
    })

    it("should reduce the players health on successful hit with Sword", () => {

        playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toBeLessThan(100)
    })

    it("should reduce the players health on successful hit with Axe", () => {

        playerOne.attackPlayer(playerTwo, AttackType.Axe)

        expect(playerTwo.health).toBeLessThan(100)
    })

    it("should reduce the players health on successful hit Fire Spell", () => {

        playerOne.attackPlayer(playerTwo, AttackType.FireSpell)

        expect(playerTwo.health).toBeLessThan(100)
    })

    it("should reduce the players health on successful hit Ice Spell", () => {

        playerOne.attackPlayer(playerTwo, AttackType.IceSpell)

        expect(playerTwo.health).toBeLessThan(100)
    })
})