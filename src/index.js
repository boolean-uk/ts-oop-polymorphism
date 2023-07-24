"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
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
    Player.prototype.takeHit = function (attack) {
        var damage;
        var attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
        if (attackRoll >= this._armour) {
            damage = attack.calculateDamage();
            this._health -= damage;
            return "The attack hit for ".concat(damage, " damage! The player now has ").concat(this._health, " health.");
        }
        else {
            return 'The' + attack.getAttackType() + 'attack missed!';
        }
    };
    return Player;
}());
exports.Player = Player;
