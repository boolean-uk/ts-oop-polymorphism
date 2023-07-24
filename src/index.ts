import { AxeAttack } from "./attack";
import { Ogre, Player } from "./character";

// const result = fight(new Player(), new Goblin());
// console.log(result);

const player = new Player();
const enemy = new Ogre();

let result;

do {
  result = player.takeHit(new AxeAttack(), enemy);
  console.log(result);
} while (!result.includes("Player now has"));
