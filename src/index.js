"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
// import { Attack } from "./attack"
var boots_1 = require("./boots");
var chest_1 = require("./chest");
var helmet_1 = require("./helmet");
var sword_1 = require("./sword");
var Player = /** @class */ (function () {
    //private _armour = 14 // an attack must be >= this to hit the player
    function Player() {
        this._health = 52; // when this reaches 0, the player dies
        this.items = [new helmet_1.helmet(), new boots_1.boots(), new chest_1.chest()];
        this.playerWeapon = new sword_1.Sword();
    }
    Object.defineProperty(Player.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "weapon", {
        get: function () {
            return this.playerWeapon;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.takeHit = function (attack) {
        var damage = attack.countDamage();
        {
            if (this.didAttackMiss() === false) {
                this._health -= damage;
                if (this.isDead()) {
                    return 'you Died';
                }
                return "The attack hit for ".concat(damage, " damage! The player now has ").concat(this._health, " health.");
            }
            else
                return 'The ' + attack.attackType + ' attack missed';
        }
    };
    Player.prototype.didAttackMiss = function () {
        var attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
        if (attackRoll >= this.countArmor()) {
            return false;
        }
        return true;
    };
    Player.prototype.countArmor = function () {
        var countArmour = 0;
        for (var i = 0; i < this.items.length; i++) {
            var itemArmor = this.items[i].armor();
            countArmour += itemArmor;
        }
        return countArmour;
    };
    Player.prototype.isDead = function () {
        return this._health <= 0;
    };
    Player.prototype.setWeapon = function (newWeapon) {
        this.playerWeapon = newWeapon;
    };
    return Player;
}());
exports.Player = Player;
