interface Attack {
    attackRoll(): number;
    calculateDamage(): number;
    missedMessage(): string;
} 

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

class SwordAttack implements Attack {
    attackRoll(): number {
        return Math.floor(Math.random() * 19) + 2; // generate an int between 2 and 20
    }

    calculateDamage(): number {
        return Math.floor(Math.random() * 7) + 2; // generate an int between 2 and 8
    }

    missedMessage(): string {
        return 'The sword attack missed!';
    }
}

class FireSpellAttack implements Attack {
    attackRoll(): number {
        return Math.floor(Math.random() * 19) + 2; // generate an int between 2 and 20
    }

    calculateDamage(): number {
        return Math.floor(Math.random() * 11) + 2; // generate an int between 2 and 12
    }

    missedMessage(): string {
        return 'The fire spell attack missed!';
    }
}

class IceSpellAttack implements Attack {
    attackRoll(): number {
        return Math.floor(Math.random() * 19) + 2; // generate an int between 2 and 20
    }

    calculateDamage(): number {
        return Math.floor(Math.random() * 11) + 2; // generate an int between 2 and 12
    }

    missedMessage(): string {
        return 'The ice spell attack missed!';
    }
}

class AxeAttack implements Attack {
    attackRoll(): number {
        return Math.floor(Math.random() * 19) + 2; // generate an int between 2 and 20
    }

    calculateDamage(): number {
        return Math.floor(Math.random() * 9) + 2; // generate an int between 2 and 10
    }

    missedMessage(): string {
        return 'The axe attack missed!';
    }
}





