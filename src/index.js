"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attack_1 = require("./attack");
const character_1 = require("./character");
// const result = fight(new Player(), new Goblin());
// console.log(result);
const player = new character_1.Player();
const enemy = new character_1.Ogre();
let result;
do {
    result = player.takeHit(new attack_1.AxeAttack(), enemy);
    console.log(result);
} while (!result.includes("Player now has"));
