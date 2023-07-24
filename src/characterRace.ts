export interface CharacterRace{

    racename: string;

    damageMultiplier : number
    healthMultiplier : number
    armorMultiplier : number 
    

}

export class Orc implements CharacterRace{
    racename: string ='Orc';


    damageMultiplier : number = 2;
    healthMultiplier : number = 2;
    armorMultiplier : number  = 1;
    

}

export class Elf implements CharacterRace{
    racename: string = 'Elf';


    damageMultiplier : number = 2;
    healthMultiplier : number = 1;
    armorMultiplier : number  = 2;
    

}
export class Dwarf implements CharacterRace{
    racename: string = 'Dwarf';


    damageMultiplier : number = 1;
    healthMultiplier : number = 2;
    armorMultiplier : number  = 2;
    

}

export class Human implements CharacterRace{
    racename: string = 'Human';
    

    damageMultiplier : number = 1;
    healthMultiplier : number = 1;
    armorMultiplier : number  = 1;
    

}