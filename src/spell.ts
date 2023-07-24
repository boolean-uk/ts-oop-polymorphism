import { Attack } from "./attack";

class Spell implements Attack{

    message: string;
    

    constructor( message: string){
        this.message = message;
    }

    
    getdamage(): number {
        return Math.floor(Math.random() * (12 - 2) + 1);
    }


}


export class FireSpell extends Spell{

    constructor(){
        super('The fire spell attack missed!');
    }

}

export class IceSpell extends Spell{

    constructor(){
        super('The ice spell attack missed!');
    }
    
}

