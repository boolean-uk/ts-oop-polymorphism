import { Player } from '.'
import { Enemy } from './Enemy'
import { AttackType } from './AttackType'

export class Game{
    private _enemies: Enemy[] = []

    constructor(private player: Player){
    }

    get enemies(): Enemy[] {
        return this._enemies
    }

    addEnemy(enemy: Enemy){
        this._enemies.push(enemy)
    }

    fight(): string{
        const enemy = this._enemies[Math.floor(Math.random()*this._enemies.length)]
        
        do {
            this.player.hit( enemy)
            enemy.hit( this.player)

        } while (enemy.health > 0 && this.player.health > 0)

        if(enemy.health > 0 && this.player.health <= 0) return "Player lost"
        else {
            this._enemies.splice(this._enemies.indexOf(enemy), 1);
            return "Player won"
        }
    }

}
