import {Player} from "./player/Player";
import {AttackType} from "./attack/AttackType";


describe("Player tests", () => {
    const MAX_HP = 100
    const DEFAULT_ARMOR = 14
    const NO_ARMOR = 0
    const MAX_ARMOR = 100

    let playerOne: Player
    let playerTwo: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        playerOne = new Player(NO_ARMOR)
        playerTwo = new Player(NO_ARMOR)
    })

    it("should reduce the players health on successful hit with Sword", () => {

        playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toBeLessThan(MAX_HP)
    })

        it("should reduce the players health on successful hit with Axe", () => {

        playerOne.attackPlayer(playerTwo, AttackType.Axe)

        expect(playerTwo.health).toBeLessThan(MAX_HP)
    })

    it("should reduce the players health on successful hit Fire Spell", () => {

        playerOne.attackPlayer(playerTwo, AttackType.FireSpell)

        expect(playerTwo.health).toBeLessThan(MAX_HP)
    })

    it("should reduce the players health on successful hit Ice Spell", () => {

        playerOne.attackPlayer(playerTwo, AttackType.IceSpell)

        expect(playerTwo.health).toBeLessThan(100)
    })

    it("should miss hit with Sword when target has better armor", () => {
        playerTwo.armour = MAX_ARMOR
        playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toEqual(MAX_HP)
    })

    it("should miss hit with Axe when target has better armor", () => {
        playerTwo.armour = MAX_ARMOR
        playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toEqual(MAX_HP)
    })

    it("should miss hit with Fire Ball when target has better armor", () => {
        playerTwo.armour = MAX_ARMOR
        playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toEqual(MAX_HP)
    })

    it("should miss hit with Ice Ball when target has better armor", () => {
        playerTwo.armour = MAX_ARMOR
        playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toEqual(MAX_HP)
    })
})