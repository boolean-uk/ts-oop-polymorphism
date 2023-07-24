"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var attacks_1 = require("./attacks");
var Player = /** @class */ (function () {
    function Player() {
        this._health = 52; // when this reaches 0, the player dies
        this._armour = 14; // an attack must be >= this to hit the player
        this._possible_attacks = [new attacks_1.Kick(), new attacks_1.Punch()];
        this._attack_count = 10;
        this._defeated_enemies = 0;
    }
    Object.defineProperty(Player.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "armour", {
        get: function () {
            return this._armour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "attackCount", {
        get: function () {
            return this._attack_count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "defeatedEnemies", {
        get: function () {
            return this._defeated_enemies;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.incrementDefeatedEnemies = function () {
        this._defeated_enemies += 1;
    };
    Player.prototype.increaseAttackCount = function () {
        this._attack_count += Math.floor(Math.random() * 8) + 5;
    };
    Player.prototype.pushPossibleAttacks = function (a) {
        this._possible_attacks.push(a);
    };
    Player.prototype.takeHit = function (attack) {
        if (attack.attackRoll() >= this._armour) {
            var damage = attack.calculateDamage();
            this._health = Math.max(this._health - damage, 0);
            if (this._health === 0) {
                return "You are dead!";
            }
            return "The attack hit for ".concat(damage, " damage! The player now has ").concat(this._health, " health.");
        }
        else {
            return attack.missedMessage();
        }
    };
    Player.prototype.attackEnemy = function (enemy, attack) {
        this._attack_count -= 1;
        return enemy.takeHit(attack);
    };
    Object.defineProperty(Player.prototype, "possibleAttacks", {
        get: function () {
            return this._possible_attacks;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
exports.Player = Player;
