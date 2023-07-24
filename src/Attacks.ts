export interface AttackI {
    getDamage(): number;
    getMissMessage(): string;
    getType(): string;
}

export interface AttackRoll {
    attackRoll(): number;
}

export class Attack implements AttackRoll {
    attackRoll(): number {
        return Math.floor(Math.random() * (20 - 2) + 1);
    }
}

export class SwordAttack extends Attack implements AttackI {
    getDamage(): number {
        return Math.floor(Math.random() * (8 - 2) + 1);
    }

    getMissMessage(): string {
        return "The sword attack missed!";
    }

    getType(): string {
        return "sword";
    }
}

export class FireSpellAttack extends Attack implements AttackI {
    getDamage(): number {
        return Math.floor(Math.random() * (12 - 2) + 1);
    }

    getMissMessage(): string {
        return "The fire spell attack missed!";
    }

    getType(): string {
        return "fire spell";
    }
}

export class IceSpellAttack extends Attack implements AttackI {
    getDamage(): number {
        return Math.floor(Math.random() * (12 - 2) + 1);
    }

    getMissMessage(): string {
        return "The ice spell attack missed!";
    }

    getType(): string {
        return "ice spell";
    }
}

export class AxeAttack extends Attack implements AttackI {
    getDamage(): number {
        return Math.floor(Math.random() * (10 - 2) + 1);
    }

    getMissMessage(): string {
        return "The axe attack missed!";
    }

    getType(): string {
        return "axe";
    }
}

