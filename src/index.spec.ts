import {Player} from "./player/Player";


describe("Player tests", () => {
    let playerOne: Player
    let playerTwo: Player

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        playerOne = new Player()
        playerTwo = new Player()
    })

    // it("should not use invalid attacks", () => {
    //     const result = playerOne.performAttack(playerTwo,'banana')
    //     expect(result).toEqual('Not a valid attack!')
    // })

    it("should reduce the players health on successful hits", () => {
        let result


        playerOne.attackPlayer(playerTwo,AttackType.Sword)


        expect(playerTwo.health).toBeLessThan(52)
        // expect(result).toContain('The attack hit')

        // const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g) // extract the numbers from the result
        // if (extractedNumbers !== null) {
        //     expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]))
        // }
    })
})