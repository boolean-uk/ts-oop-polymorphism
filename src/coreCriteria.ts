
import { Attack, AxeAttack, FireSpellAttack, IceSpellAttack, SwordAttack,  } from "./attacks";
export class Player {
    private _health = 52 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player
    private attackList: { [key: string]: Attack }  ={'sword': new SwordAttack(), 'fire spell': new FireSpellAttack(), 'ice spell': new IceSpellAttack(), 'axe': new AxeAttack()};

    get health(): number {
        return this._health
    }

    takeHit(attackType: string): string {
        if (this.isValidAttackType(attackType)){
            const attack = this.attackList[attackType];

            if (attack.attackRoll() >= this._armour) {
                const damage = attack.calculateDamage();
                this._health -= damage;
                return `The attack hit for ${damage} damage! The player now has ${this._health} health.`;
            } else {
                return attack.missedMessage();
            }
    }
    return 'Not a valid attack!'
    }


    private isValidAttackType(attackType: string): boolean {
        return attackType in this.attackList;
      }
}