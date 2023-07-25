"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPG = void 0;
var readline = require("readline");
var Player_1 = require("./Player");
var RPG = /** @class */ (function () {
    function RPG() {
    }
    RPG.prototype.askForAnswer = function (question, callback) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        // console.log("Write your player Name:")
        rl.question(question, function (answer) {
            rl.close(); // Close the readline interface
            callback(answer);
        });
        // return new Promise((resolve) => {
        //     rl.question('Enter your name: ', (name) => {
        //       rl.close(); // Close the readline interface
        //       resolve(name);
        //       console.log(`You chose player Name ${name}+!`);
        //      // you.setName(name);
        //     });
        //   });
    };
    RPG.prototype.playRPG = function () {
        var _this = this;
        var you = new Player_1.Player();
        var enemy = new Player_1.Player();
        enemy.setName("enemy1");
        you.addEnemy(enemy);
        var enemy2 = new Player_1.Player();
        enemy.setName("enemy2");
        you.addEnemy(enemy2);
        this.askForAnswer('Enter your player name: ', function (name) {
            you.setName(name);
            console.log("Hello, ".concat(name, "!"));
            _this.askForAnswer('Enter your equipment: ', function (equipment) {
                console.log("You chose  ".concat(equipment, " as your equipment ."));
                you.addAttackToEquipment(equipment);
                console.log("Character Builder:");
                console.log("Choose your character Class:");
                console.log("1 - Royalty");
                console.log("2 - Nobility");
                console.log("3 - Peasant");
                _this.askForAnswer('Enter a number (1-3): ', function (num) {
                    console.log("Your characters class, ".concat(you.character.class, " !")); //})
                    console.log("Choose your charater Race:");
                    console.log("1 - Black");
                    console.log("2 - White");
                    console.log("3 - Asian");
                    console.log("4 - Other");
                    _this.askForAnswer('Enter a number (1-4): ', function (numb) {
                        console.log("Your characters class, ".concat(numb, " !"));
                        console.log("Write your character description:");
                        _this.askForAnswer('Enter a description: ', function (descript) {
                            console.log("You chose character description ".concat(descript, " !"));
                            console.log('Character description ' + descript);
                            console.log('Character built!');
                            you.CharacterBuilder(num, numb, descript);
                            _this.askForAnswer('Enter your enemy 1-2 :', function (enemy) {
                                console.log("You chose  ".concat(enemy, " as your enemy ."));
                                var nenemy = new Player_1.Player();
                                switch (enemy) {
                                    case '1': nenemy = you.enemies[0];
                                    case '2': nenemy = you.enemies[1];
                                }
                                console.log("Your health: " + you.getHealth() + " and armour: " + you.gatArmour());
                                console.log(you.SpecificCombatEncounters(nenemy, 'sword'));
                                console.log("You fought " + nenemy.getName());
                                console.log("Your health left: " + you.getHealth() + " and armour: " + you.gatArmour());
                                console.log("Your enemies health left: " + nenemy.getHealth() + " and armour: " + nenemy.gatArmour());
                                console.log("Game finished");
                            });
                        });
                    });
                });
            });
        });
    };
    return RPG;
}());
exports.RPG = RPG;
var game = new RPG();
// Call the methods on the instance
game.playRPG();
//const result = calculator.add(5, 10);
//console.log(`Result`);
