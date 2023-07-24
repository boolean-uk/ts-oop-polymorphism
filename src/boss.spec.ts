import {Player} from "./character/Player";
import {Boss} from "./character/Boss";
import {Character} from "./character/Character";

describe("boss tests", () => {

    let boss: Boss
    let target: Character

    it("should attack the target and reduce its health", () => {
        boss = new Boss("Boss", 100, 10, 15, 20)
        target = new Player("Player 1", 50, 5)
        boss.attack(target)

        expect(target.health).toBeLessThan(50)

    })
    it("should heal itself and increase health", () => {
        boss = new Boss("Boss", 50, 10, 15, 20)
        boss.heal()
        expect(boss.health).toBeGreaterThan(50)

    })
    it("should announce defeated target when health = 0 ", () => {
        target = new Player("Player 1", 20, 5)
        const result = boss.attack(target)
        expect(result).toContain("Boss attacks Player 1 and deals 20 damage. Player 1 has 5 health remaining")

    })
})