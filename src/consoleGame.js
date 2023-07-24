"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var enemy_1 = require("./enemy");
var readlineSync = require("readline-sync");
var possibleEnemies = [new enemy_1.Knight(), new enemy_1.Wizard(), new enemy_1.Yeti(), new enemy_1.Lumberjack()];
var player = new index_1.Player();
function getRandomEnemy() {
    var randomIndex = Math.floor(Math.random() * possibleEnemies.length);
    return possibleEnemies[randomIndex];
}
function printStats() {
    console.log("\n Player health: ".concat(player.health));
    console.log("Available attacks: ".concat(player.possibleAttacks.map(function (attack) { return attack.name; }).join(", ")));
    console.log("Player number of attacks: ".concat(player.attackCount));
}
function battleEnemy(enemy) {
    console.log("You encounter a ".concat(enemy.name, " with ").concat(enemy.health, " health."));
    while (player.health > 0 && enemy.health > 0 && player.attackCount > 0) {
        printStats();
        var attackIndex = readlineSync.keyInSelect(player.possibleAttacks.map(function (attack) { return attack.name; }), "Choose an attack:");
        if (attackIndex === -1) {
            console.log("Exiting game...");
            process.exit(0);
        }
        if (attackIndex >= player.possibleAttacks.length) {
            console.log("Wrong Index");
        }
        var attack = player.possibleAttacks[attackIndex];
        var playerResult = enemy.attackPlayer(player);
        var enemyResult = player.attackEnemy(enemy, attack);
        console.log("enemy health: " + enemy.health);
        console.log(playerResult);
        console.log(enemyResult);
    }
    if (player.health > 0 && player.attackCount > 0) {
        player.incrementDefeatedEnemies();
        player.increaseAttackCount();
        console.log("You defeated the ".concat(enemy.constructor.name, "!"));
        return;
    }
    else {
        if (player.attackCount <= 0) {
            console.log("\n You do not have any attacks left!");
        }
        console.log("Game Over! You were defeated.");
        process.exit(0);
    }
}
console.log("Welcome to the RPG game!");
while (player.health > 0) {
    var enemy = getRandomEnemy();
    battleEnemy(enemy);
}
