import { Player } from ".";
import { monster } from "../src/monster";


    const player = new Player()

    const prompt = require('prompt-sync')();

    const rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });


        let doYouWantToFight ='y'
        while(doYouWantToFight === 'y'){
        
        console.log('Wild monster appeared... ')
        console.log('Your current weapon: ' + player.weapon.attackType())
        const monsterAttack = new monster()
    
        do{
            player.takeHit(monsterAttack.weaponGetter)
            monsterAttack.takeHit(player.weapon)
        } while(player.isDead() || monsterAttack.health <= 0)
            
            if(player.isDead()) console.log("You died")
            else {
                console.log('Monster defeated with weapon: ' + monsterAttack.weaponGetter.attackType())
                const answer = prompt('Do you want to take monster weapon? [y/n] ');
                    if (answer.toLocaleLowerCase()==='y'){
                        player.setWeapon(monsterAttack.weaponGetter)
                    }                       
            }
            doYouWantToFight = prompt('Do you want to continue? [y/n] ')
        }
