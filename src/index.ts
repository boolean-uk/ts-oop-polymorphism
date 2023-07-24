import {Enemy} from "./enemy"
import { Attack, AxeAttack, FireSpellAttack, IceSpellAttack, Kick, Punch, SwordAttack,  } from "./attacks";
export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player
    private _possible_attacks: Attack[]=[new Kick(), new Punch()]
    private _attack_count = 10;
    private _defeated_enemies = 0;
    get health(): number {
        return this._health
    }

    get armour(): number {
        return this._armour
    }

    get attackCount(): number {
        return this._attack_count
    }

    get defeatedEnemies(): number {
        return this._defeated_enemies;
    }

    incrementDefeatedEnemies(){
        this._defeated_enemies += 1;
    }

    increaseAttackCount(){
        this._attack_count += Math.floor(Math.random() * 8) + 5;
    }

    pushPossibleAttacks(a:Attack){
        this._possible_attacks.push(a);
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

    attackEnemy(enemy: Enemy, attack: Attack): string{
        this._attack_count -=1;
        return enemy.takeHit(attack);
    }

    get possibleAttacks(){
        return this._possible_attacks
    }

}








