import { Attack } from "./attack";

export class SwordAttack implements Attack{



    message: string = 'The sword attack missed!';

    getdamage(): number {
       return  Math.floor(Math.random() * (8 - 2) + 1);
    }

}

export class AxeAttack implements Attack{



    message: string = 'The axe attack missed!';
    
    getdamage(): number {
       return  Math.floor(Math.random() * (10 - 2) + 1)
    }

}