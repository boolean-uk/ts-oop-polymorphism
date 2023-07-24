import { Player } from ".";
import { Attack, AxeAttack, FireSpellAttack, IceSpellAttack, SwordAttack,  } from "./attacks";

export abstract class Enemy {
    name!: string;
    constructor(public health: number, private attack: Attack){}
    attackPlayer(player: Player): string{
        return player.takeHit(this.attack);
    }
    takeHit(attack: Attack): string{
        const damage = attack.calculateDamage();
        this.health -= damage;
        if (this.health <= 0){
            return "Congratulations! You won!"
        }
        return `Your attack hit for ${damage} damage! The enemy now has ${this.health} health.`;
    }
}

export class Knight extends Enemy{
    name = "Knight";
    constructor(){
        super(20, new SwordAttack());
    }
}

export class Wizard extends Enemy{
    name = "Wizard";

    constructor(){
        super(30, new FireSpellAttack());
    }
}

export class Yeti extends Enemy{
    name = "Yeti";

    constructor(){
        super(40, new IceSpellAttack());
    }
}

export class Lumberjack extends Enemy{
    name = "Lumberjack";

    constructor(){
        super(50, new AxeAttack());
    }
}
