export interface Attack {
    attackRoll(): number;
    calculateDamage(): number;
    missedMessage(): string;
} 

export class SwordAttack implements Attack {
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

export class FireSpellAttack implements Attack {
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

export class IceSpellAttack implements Attack {
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

export class AxeAttack implements Attack {
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

export class Punch implements Attack{
    attackRoll(): number {
        return Math.floor(Math.random() * 9) + 1; // generate an int between 1 and 10
    }

    calculateDamage(): number {
        return Math.floor(Math.random() * 4) + 1; // generate an int between 1 and 5
    }

    missedMessage(): string {
        return 'The punch attack missed!';
    }
}

export class Kick implements Attack{
    attackRoll(): number {
        return Math.floor(Math.random() * 10) + 2; // generate an int between 2 and 12
    }

    calculateDamage(): number {
        return Math.floor(Math.random() * 6) + 2; // generate an int between 2 and 8
    }

    missedMessage(): string {
        return 'The punch attack missed!';
    }
}