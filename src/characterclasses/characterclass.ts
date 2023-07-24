export interface CharacterClass{

    charclass: string;
    damageBonus : number
    healthBonus : number
    armorBonus : number 
    

}


export class Knight implements CharacterClass{
    charclass: string = "Knight";

    damageBonus: number = 5
    healthBonus: number = 2
    armorBonus: number = 5

}

export class Thief implements CharacterClass{
    charclass: string = 'Thief';

    damageBonus: number = 8
    healthBonus: number = -2
    armorBonus: number = -4

}

export class Mage implements CharacterClass{
    charclass: string = 'Mage';

    damageBonus: number = 6
    healthBonus: number = 0;
    armorBonus: number = 5

}




