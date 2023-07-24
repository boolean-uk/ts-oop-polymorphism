import {Enemy} from "./enemy"
import { Attack, AxeAttack, FireSpellAttack, IceSpellAttack, Kick, Punch, SwordAttack,  } from "./attacks";
export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player
    private _possible_attacks = [new Kick(), new Punch()]
    get health(): number {
        return this._health
    }

    takeHit(attack: Attack): string {
        if (attack.attackRoll() >= this._armour) {
            const damage = attack.calculateDamage();
            this._health = Math.max(this._health -damage, 0);
            if (this._health === 0){
                return "You are dead!"
            }
            return `The attack hit for ${damage} damage! The player now has ${this._health} health.`;
        } else {
            return attack.missedMessage();
        }
    }

    attackEnemy(enemy: Enemy, attack: Attack){
        enemy.takeHit(attack);
    }

    getPossibleAttacks(){
        return this._possible_attacks
    }

}








