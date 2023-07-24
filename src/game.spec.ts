import { Player} from "."
import { Game } from "./Game"
import { Enemy } from "./Enemy"
import { Sword } from "./Sword"
import { FireSpell } from "./FIreSpell"
import { Axe } from "./Axe"

describe("Game tests", () => {
    let player: Player
    let game: Game
    let enemy: Enemy
    let sword: Sword
     let fireSpell: FireSpell
     let axe: Axe

    beforeEach(() => {
        player = new Player()
        game = new Game(player)
        sword = new Sword()
         fireSpell = new FireSpell()
         axe = new Axe()
    })

    it("should add enemy to the game", () => {
        enemy = new Enemy(30, 5, 'enemy', axe)
        game.addEnemy(enemy)

        expect(game.enemies.length).toEqual(1)
    })

    it("should add enemies to the game", () => {
        enemy = new Enemy(30, 5, 'enemy', axe)
        game.addEnemy(enemy)
        enemy = new Enemy(30, 10, 'enemy', axe)
        game.addEnemy(enemy)

        expect(game.enemies.length).toEqual(2)
    })
    
    it("should return Player won for player with 14 armour and IceSpell vs enemy with 5 armour and axe", () => {
        enemy = new Enemy(30, 5, 'enemy', axe)
        game.addEnemy(enemy)
        let result = game.fight()

        expect(enemy.health).toBeLessThan(30)
        expect(result).toContain('Player won')
        expect(game.enemies.length).toEqual(0)
    })
    
    it("should return Player won for player with 14 armour and IceSpell vs enemy with 10 armour and sword", () => {
        enemy = new Enemy(30, 10, 'enemy', sword)
        game.addEnemy(enemy)
        let result = game.fight()

        expect(enemy.health).toBeLessThan(30)
        expect(result).toContain('Player won')
        expect(game.enemies.length).toEqual(0)
    })
    
    it("should return Player lost for player with 14 armour and IceSpell vs enemy with 50 armour and fireSpell", () => {
        enemy = new Enemy(100, 50, 'enemy', fireSpell)
        game.addEnemy(enemy)
        let result = game.fight()

        expect(game.enemies.length).toEqual(1)
        expect(player.health).toBeLessThan(52)
        expect(result).toContain('Player lost')
    })
    
    it("should return Player lost for player with 14 armour and IceSpell vs enemy with 30 armour and Axe", () => {
        enemy = new Enemy(100, 30, 'enemy', axe)
        game.addEnemy(enemy)
        let result = game.fight()

        expect(game.enemies.length).toEqual(1)
        expect(player.health).toBeLessThan(52)
        expect(result).toContain('Player lost')
    })
})