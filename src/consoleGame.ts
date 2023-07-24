import { Player } from "./index";
import { Enemy, Knight, Wizard, Yeti, Lumberjack } from "./enemy";
import { Attack, SwordAttack, Kick, Punch } from "./attacks";
import * as readlineSync from 'readline-sync';

const possibleEnemies: Enemy[] = [new Knight(), new Wizard(), new Yeti(), new Lumberjack()];
const player = new Player();

function getRandomEnemy(): Enemy {
    const randomIndex = Math.floor(Math.random() * possibleEnemies.length);
    return possibleEnemies[randomIndex];
  }

  function printStats() {
    console.log(`\n Player health: ${player.health}`);
    console.log(`Available attacks: ${player.possibleAttacks.map((attack: { name: any; }) => attack.name).join(", ")}`);
    console.log(`Player number of attacks: ${player.attackCount}`);

  }

  function battleEnemy(enemy: Enemy) {
    console.log(`You encounter a ${enemy.name} with ${enemy.health} health.`);
    while (player.health > 0 && enemy.health > 0 && player.attackCount > 0) {
      printStats();
  
      const attackIndex = readlineSync.keyInSelect(player.possibleAttacks.map((attack: { name: any; }) => attack.name), "Choose an attack:");
      if (attackIndex === -1) {
        console.log("Exiting game...");
        process.exit(0);
      }

      if (attackIndex >= player.possibleAttacks.length) {
        console.log("Wrong Index");
        
      }
  
      const attack = player.possibleAttacks[attackIndex];
      const playerResult = enemy.attackPlayer(player);
      const enemyResult = player.attackEnemy(enemy, attack);
  
      console.log("enemy health: " + enemy.health)
      console.log(playerResult);
      console.log(enemyResult);
    }
  
    if (player.health > 0 && player.attackCount > 0) {
      player.incrementDefeatedEnemies()
      player.increaseAttackCount()
      console.log(`You defeated the ${enemy.constructor.name}!`);
      return;
    } else {
        if (player.attackCount <= 0){
            console.log("\n You do not have any attacks left!")
        }
      console.log("Game Over! You were defeated.");
      process.exit(0);
    }
  }


console.log("Welcome to the RPG game!");
while (player.health > 0) {
  const enemy = getRandomEnemy();
  battleEnemy(enemy);
}