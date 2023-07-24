import readline from 'readline';
import { Player } from './Player';
class RPG{
    playRPG():void{
        let you=new Player()
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
        console.log("Write your player Name:")
        rl.question('Enter your name: ', (name) => {
            console.log(`You chose player Name ${name}+!`);
           you.setName(name);
            }
           // rl.close();
          );
        you.CharacterBuilder()
        let enemy=new Player()
        enemy.setName("enemy1")
        you.addEnemy(enemy)

        let enemy2=new Player()
        enemy.setName("enemy2")
        you.addEnemy(enemy2)

        let thing="water"
        console.log("Write your equipment thing:")
        rl.question('Enter your thing: ', (thing) => {
            console.log(`You chose equipment ${thing}+!`);
           you.addAttackToEquipment(thing)
            }
           // rl.close();
          );
          console.log("Choose your Enamy:")
          console.log("1 ")
          console.log("2 ")
            let nenemy=you.enemies[0]
          rl.question('Enter a number (1-2): ', (num) => {
              console.log(`You chose character class ${num}+!`);
              switch(num){
                  case '1': nenemy=you.enemies[0]
                  case '2': nenemy=you.enemies[1]
                 
              }
             // rl.close();
            });
        you.SpecificCombatEncounters(nenemy,'sword')

    }
}