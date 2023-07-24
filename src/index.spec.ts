import {Player} from "./player/Player";
import {AttackType} from "./attack/AttackType";


describe("Player tests", () => {
    const MAX_HP = 100
    const DEFAULT_ARMOR = 14
    const NO_ARMOR = 0
    const MAX_ARMOR = 100
    const REGEX_SUCCESS_HIT_TO_PLAYER_2 = new RegExp('^Your attack done [0-9]+ damage to PLAYER_2$')
    const MISSED_ATTACK_MESSAGE = "You missed the attack"

    let playerOne: Player
    let playerTwo: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        playerOne = new Player('PLAYER_1', NO_ARMOR)
        playerTwo = new Player('PLAYER_2', NO_ARMOR)
    })

    it("should reduce the players health on successful hit with Sword", () => {

        const result: string = playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toBeLessThan(MAX_HP)
        expect(result).toMatch(REGEX_SUCCESS_HIT_TO_PLAYER_2)

    })

    it("should reduce the players health on successful hit with Axe", () => {

        const result: string = playerOne.attackPlayer(playerTwo, AttackType.Axe)

        expect(playerTwo.health).toBeLessThan(MAX_HP)
        expect(result).toMatch(REGEX_SUCCESS_HIT_TO_PLAYER_2)
    })

    it("should reduce the players health on successful hit Fire Spell", () => {

        const result: string = playerOne.attackPlayer(playerTwo, AttackType.FireSpell)

        expect(playerTwo.health).toBeLessThan(MAX_HP)
        expect(result).toMatch(REGEX_SUCCESS_HIT_TO_PLAYER_2)
    })

    it("should reduce the players health on successful hit Ice Spell", () => {

        const result: string = playerOne.attackPlayer(playerTwo, AttackType.IceSpell)

        expect(playerTwo.health).toBeLessThan(100)
        expect(result).toMatch(REGEX_SUCCESS_HIT_TO_PLAYER_2)
    })

    it("should miss hit with Sword when target has better armor", () => {
        playerTwo.armour = MAX_ARMOR
        const result: string = playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toEqual(MAX_HP)
        expect(result).toMatch(MISSED_ATTACK_MESSAGE)

    })

    it("should miss hit with Axe when target has better armor", () => {
        playerTwo.armour = MAX_ARMOR
        const result: string = playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toEqual(MAX_HP)
        expect(result).toMatch(MISSED_ATTACK_MESSAGE)
    })

    it("should miss hit with Fire Ball when target has better armor", () => {
        playerTwo.armour = MAX_ARMOR
        const result: string = playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toEqual(MAX_HP)
        expect(result).toMatch(MISSED_ATTACK_MESSAGE)
    })

    it("should miss hit with Ice Ball when target has better armor", () => {
        playerTwo.armour = MAX_ARMOR
        const result: string = playerOne.attackPlayer(playerTwo, AttackType.Sword)

        expect(playerTwo.health).toEqual(MAX_HP)
        expect(result).toMatch(MISSED_ATTACK_MESSAGE)
    })

    it("should deal 45 more damage with weapon", () => {
        playerOne.weapon = {name: "B.F Sword", damage: 45}

        playerOne.attackPlayer(playerTwo,AttackType.Axe)

        expect(playerTwo.health).toBeLessThan(55)

    })
    it("should defeat enemy his hp <= 0", () => {
        playerTwo.health = 1
        const result = playerOne.attackPlayer(playerTwo,AttackType.Axe)

        expect(playerTwo.health).toBeLessThanOrEqual(0)
        expect(result).toEqual(`You defeated ${playerTwo.name}`)

    })
    it("will not allow further to fight ", () => {
        playerOne.health = 0
        const result = playerOne.attackPlayer(playerTwo,AttackType.Axe)

        expect(playerOne.health).toBeLessThanOrEqual(0)
        expect(result).toEqual(`You are not able to fight`)

    })


})