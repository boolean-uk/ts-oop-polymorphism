import * as readline from 'readline';
import { Player } from './Player';
export class RPG{
    askForAnswer(question: string, callback: (answer: string) => void){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
       // console.log("Write your player Name:")
        rl.question(question, (answer) => {
            rl.close(); // Close the readline interface
            callback(answer);
          });
        // return new Promise((resolve) => {
        //     rl.question('Enter your name: ', (name) => {
        //       rl.close(); // Close the readline interface
        //       resolve(name);
        //       console.log(`You chose player Name ${name}+!`);
        //      // you.setName(name);
        //     });
        //   });
    }
    
     playRPG():void{//Promise<string>{
        let you=new Player()
            let enemy=new Player()
            enemy.setName("enemy1")
            you.addEnemy(enemy)

            let enemy2=new Player()
            enemy.setName("enemy2")
            you.addEnemy(enemy2)
       
        this.askForAnswer('Enter your player name: ', (name) => {
            you.setName(name)
            console.log(`Hello, ${name}!`);

            this.askForAnswer('Enter your equipment: ', (equipment) => {
                console.log(`You chose  ${equipment} as your equipment .`);
                you.addAttackToEquipment(equipment)

                console.log("Character Builder:")
                console.log("Choose your character Class:")
                console.log("1 - Royalty")
                console.log("2 - Nobility")
                console.log("3 - Peasant")

                this.askForAnswer('Enter a number (1-3): ', (num) => {
                console.log(`Your characters class, ${you.character.class} !`);//})
               
                  console.log("Choose your charater Race:")
                  console.log("1 - Black")
                  console.log("2 - White")
                  console.log("3 - Asian")
                  console.log("4 - Other")
                  this.askForAnswer('Enter a number (1-4): ', (numb) => {
                    console.log(`Your characters class, ${numb} !`);
                    console.log("Write your character description:")

                    this.askForAnswer('Enter a description: ', (descript) => {
                        console.log(`You chose character description ${descript} !`);
                        console.log('Character description '+descript)
                        console.log('Character built!')

                        you.CharacterBuilder(num,numb,descript)
        
                this.askForAnswer('Enter your enemy 1-2 :', (enemy) => {
                    console.log(`You chose  ${enemy} as your enemy .`);
                    let nenemy=new Player();
                    switch(enemy){
                            case '1': nenemy=you.enemies[0]
                            case '2': nenemy=you.enemies[1]
                                             
                    }

                    console.log("Your health: "+you.getHealth()+" and armour: "+you.gatArmour())
                    console.log(you.SpecificCombatEncounters(nenemy,'sword'))
                    console.log("You fought "+nenemy.getName())
                    console.log("Your health left: "+you.getHealth()+" and armour: "+you.gatArmour())
                    console.log("Your enemies health left: "+nenemy.getHealth()+" and armour: "+nenemy.gatArmour())
                   console.log("Game finished")
                })})})
                })
            })
        })
       

    }
}
const game = new RPG();

// Call the methods on the instance
game.playRPG();
//const result = calculator.add(5, 10);
//console.log(`Result`);