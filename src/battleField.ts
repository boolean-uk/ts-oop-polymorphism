import { Player } from ".";
import { monster } from "../src/monster";
// import { inventory } from "../src/inventory";
import * as readline from 'readline';
import { Sword } from "./sword";

class battleField {
    player = new Player()

    private rl = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    constructor() {
        this.battle()
    }

    battle() {

        let answer = 'y'

        this.rl.question('Do you want to fight? [y/n] ', (answer: string) => {
            switch(answer.toLowerCase()) {
            case 'y':
                answer = 'y'
                break;
            case 'n':
                answer = 'n'
                break;
            default:
                console.log('Invalid answer!');
            }
            this.rl.close();
        });

        while(answer === 'y'){

            console.log('Wild monster appeared... ')
            const monsterAttack = new monster()
    
            do{
                this.player.takeHit(monsterAttack.weaponGetter)
                monsterAttack.takeHit(this.player.weapon)
            } while(this.player.isDead() || monsterAttack.health <= 0)
    
            if(this.player.isDead()) console.log("You died")
            else {
                console.log('Monster defeated with weapon: ' + monsterAttack.weaponGetter)
                this.rl.question('Do you want to take monster weapon? [y/n] ', (answer: string) => {
                    switch(answer.toLowerCase()) {
                    case 'y':
                        this.player.setWeapon(monsterAttack.weaponGetter)
                        break;
                    case 'n':
                        break;
                    default:
                        console.log('Invalid answer!');
                    }
                    this.rl.close();
                })            

            }
        }
    }
}