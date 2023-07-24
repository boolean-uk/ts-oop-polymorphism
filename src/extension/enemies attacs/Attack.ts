interface IAttack {
    type: string;
    calculateDamage(): number;
    attackRoll(): number;
}
export class Attack implements IAttack {
    type = 'attack';

    attackRoll(): number {
        return Math.floor(Math.random() * (20 - 2) + 1)
    }

    calculateDamage(): number {
       return Math.floor(Math.random() * (10 - 2) + 1)
    }
}