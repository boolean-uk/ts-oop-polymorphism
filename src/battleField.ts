import { Player } from ".";
import { monster } from "../src/monster";
// import { inventory } from "../src/inventory";
import * as readline from 'readline';
import { Sword } from "./sword";

    const player = new Player()

    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });


        let doYouWantToFight ='y'
        while(doYouWantToFight === 'y'){
        
        console.log('Wild monster appeared... ')
        const monsterAttack = new monster()
    
        do{
            player.takeHit(monsterAttack.weaponGetter)
            monsterAttack.takeHit(player.weapon)
        } while(player.isDead() || monsterAttack.health <= 0)
            
            if(player.isDead()) console.log("You died")
            else {
                console.log('Monster defeated with weapon: ' + monsterAttack.weaponGetter)
                rl.question('Do you want to take monster weapon? [y/n] ', (answer: string) => {
                    
                switch(answer.toLowerCase()) {
                case 'y':
                    player.setWeapon(monsterAttack.weaponGetter)
                    break;
                case 'n':
                    break;
                default:
                    console.log('Invalid answer!');
                }
                rl.close();
                })            

            }
            rl.question('Do you want to fight? [y/n] ', (answer: string) => {
                switch(answer.toLowerCase()) {
                case 'y':
                    doYouWantToFight = 'y'
                    break;
                case 'n':
                    doYouWantToFight = 'n'
                    break;
                default:
                    console.log('Invalid answer!');
                }
                    rl.close();
                });
        }
