import { Player } from ".";
import { CharacterRace, Dwarf, Elf, Human, Orc } from "./characterRace";
import { CharacterClass, Knight, Mage, Thief } from "./characterclasses/characterclass";
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export class CharacterBuilder{

    

    async createCharacter() : Promise<Player>{
        const rl = readline.createInterface({ input, output });
        let characterclass: CharacterClass; 
        let characterrace: CharacterRace;
    
        
        const answer = await rl.question('Choose your class (1 - Knight, 2 - Mage 3 - Thief)');

        switch(answer) {
            case '1':
                characterclass = new Knight();
                break;
            case '2':
                characterclass = new Mage();
                break;
            case '3':
                characterclass = new Thief();
                break;
            default:
                characterclass = new Knight();
                console.log("There is no such a class. We assume you are knight :)")
        }
        
        const answer1 = await rl.question('Choose your class (1 - Human, 2 - Orc 3 - Elf, 4 - Dwarf)');
        
        switch(answer1) {
            case '1':
                characterrace = new Human();
                break;
            case '2':
                characterrace = new Orc();
                break;
            case '3':
                characterrace = new Elf();
                break;
            case '4':
                characterrace = new Dwarf();  
                break;
            default:
                characterrace = new Human();
                console.log("There is no such a race. We assume you are human :)")
        }

        console.log("Race :" + characterrace.racename + " class: " +  characterclass.charclass)
        
        rl.close();
        return this.createPlayer(characterclass,characterrace);
    }
    



    createPlayer( characterclass: CharacterClass, characterrace: CharacterRace) : Player{
        return new Player(characterclass,characterrace)
    }

    

}
