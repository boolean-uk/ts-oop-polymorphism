"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var monster_1 = require("../src/monster");
var battleField = /** @class */ (function () {
    function battleField() {
        this.player = new _1.Player();
        this.rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.battle();
    }
    battleField.prototype.battle = function () {
        var _this = this;
        var answer = 'y';
        this.rl.question('Do you want to fight? [y/n] ', function (answer) {
            switch (answer.toLowerCase()) {
                case 'y':
                    answer = 'y';
                    break;
                case 'n':
                    answer = 'n';
                    break;
                default:
                    console.log('Invalid answer!');
            }
            _this.rl.close();
        });
        var _loop_1 = function () {
            console.log('Wild monster appeared... ');
            var monsterAttack = new monster_1.monster();
            do {
                this_1.player.takeHit(monsterAttack.weaponGetter);
                monsterAttack.takeHit(this_1.player.weapon);
            } while (this_1.player.isDead() || monsterAttack.health <= 0);
            if (this_1.player.isDead())
                console.log("You died");
            else {
                console.log('Monster defeated with weapon: ' + monsterAttack.weaponGetter);
                this_1.rl.question('Do you want to take monster weapon? [y/n] ', function (answer) {
                    switch (answer.toLowerCase()) {
                        case 'y':
                            _this.player.setWeapon(monsterAttack.weaponGetter);
                            break;
                        case 'n':
                            break;
                        default:
                            console.log('Invalid answer!');
                    }
                    _this.rl.close();
                });
            }
        };
        var this_1 = this;
        while (answer === 'y') {
            _loop_1();
        }
    };
    return battleField;
}());
