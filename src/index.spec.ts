import { Player, Item, Enemy, Attack, SwordAttack, AxeAttack } from './index'

describe("Enemy tests", () => {
    let enemy: Enemy
    let player: Player

    beforeEach(() => { // Before each "it" test, start with a new Enemy instance
        enemy = new Enemy('goblin', 50, 10, [new SwordAttack(), new AxeAttack()])
        player = new Player()
    })

    it("should attack the player", () => {
        let result = ''
        do {
            result = enemy.attack(player)
        } while (result.includes('missed'))
        expect(result).toContain(`The ${enemy.name} attacked with`)
    })

    it("should reduce the players health on successful hits", () => {
        let result
        do {
            result = enemy.attack(player)
        } while (result.includes('missed'))

        expect(player.health).toBeLessThan(52)
        expect(result).toContain(`The player now has ${player.health} health.`)
    })
})

describe("Player tests", () => {
    let player: Player
    let enemy: Enemy

    beforeEach(() => { // Before each "it" test, start with a new Player instance
        player = new Player()
        enemy = new Enemy('goblin', 50, 10, [new SwordAttack(), new AxeAttack()])
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

    it("should add 2 gold to player", () => {
        player.earnGold(2)
        expect(player.gold).toEqual(2)
    })

    it("should run for 5 seconds when earning 5 gold", () => {
        const start = new Date().getTime()
        player.earnGold(5)
        const end = new Date().getTime()
        expect(end - start).toBeGreaterThanOrEqual(5000)
    })

    it("should buy an item", () => {
        player.earnGold(5)
        const item = new Item('sword', 3)
        const result = player.buy(item)

        expect(result).toEqual(`The player bought a ${item.name} for ${item.price} gold.`)
        expect(player.gold).toEqual(2)
        expect(player.equipment).toContain(item)
    })

    it("should not buy an item if the player does not have enough gold", () => {
        const item = new Item('sword', 3)
        const result = player.buy(item)

        expect(result).toEqual(`The player does not have enough gold to buy a ${item.name}.`)
        expect(player.gold).toEqual(0)
        expect(player.equipment).not.toContain(item)
    })

    it("should attack an enemy", () => {
        let result = ''
        do {
            result = player.attack(enemy, new SwordAttack())
        } while (result.includes('missed'))
        expect(result).toContain(`The player attacked with`)
    })

    it("should reduce the enemies health on successful hits", () => {
        let result
        do {
            result = player.attack(enemy, new SwordAttack())
        } while (result.includes('missed'))

        expect(enemy.health).toBeLessThan(52)
        expect(result).toContain(`The enemy now has ${enemy.health} health.`)
    })

    it("should fight an enemy", () => {
        const result = player.fight(enemy, ['sword'])
        expect(result).toMatch(/The player won!|The enemy won!/)

        console.log(result)
    })
})