"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fight = void 0;
const character_1 = require("./character");
function fight(player, enemy) {
    let playerTurn = true;
    console.log((playerTurn ? "Player" : character_1.Enemy.name) + " attacks!");
    while (player.health > 0 && enemy.health > 0) {
        if (playerTurn) {
            console.log(player.hit(enemy));
        }
        else {
            console.log(enemy.hit(player));
        }
        playerTurn = !playerTurn;
    }
    return (player.health > 0 ? player.name : enemy.name) + " wins!";
}
exports.fight = fight;
