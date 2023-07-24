"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fight = void 0;
function fight(player, enemy) {
    let playerTurn = true;
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
