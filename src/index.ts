import { Goblin } from "./enemy";
import { fight } from "./fight";
import { Player } from "./player";

const result = fight(new Player(), new Goblin());
console.log(result);
