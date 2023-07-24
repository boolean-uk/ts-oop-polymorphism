import { get } from 'http';
import { AttackType } from './attackType'
import { FireSpell } from './fireSpell'
import { SwordAttack } from './swordAttack'
import { IceSpell } from './iceSpell'
import { AxeAttack } from './axeAttack'

export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player

    get health(): number {
        return this._health
    }

    takeHit(attack: AttackType ){
        let damage = attack.damage;
        const attackRoll = this.getAttackRoll();

        if (attackRoll >= this._armour) {
            this._health -= damage
        }
        else {
            return 'The '+ attack.name +' attack missed!'
        }

        return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
    }

    getAttackRoll() : number {
        return Math.floor(Math.random() * (20 - 2) + 1);
    }
}