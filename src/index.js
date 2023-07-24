"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Attack = require('../../src/attack.ts');
var Player = /** @class */ (function () {
    function Player() {
        this._health = 52; // when this reaches 0, the player dies
        this._armour = 14; // an attack must be >= this to hit the player
    }
    Object.defineProperty(Player.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.takeHit = function (attackType) {
        var damage;
        {
            var attack = new Attack(attackType);
            if (this.didAttackMiss() === false) {
                this._health -= attack.damageEnemy();
            }
            else
                return 'The' + attack.attackType + 'attack missed!';
        }
    };
    Player.prototype.didAttackMiss = function () {
        var attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
        if (attackRoll >= this._armour) {
            return false;
        }
        return true;
    };
    return Player;
}());
exports.Player = Player;
