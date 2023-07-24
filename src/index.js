"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(characterclass, characterrace) {
        this.characterclass = characterclass;
        this.characterrace = characterrace;
        this._health = 27; // when this reaches 0, the player dies
        this._armour = 7; // an attack must be >= this to hit the player
    }
    ;
    Object.defineProperty(Player.prototype, "health", {
        get: function () {
            return (this._health * this.characterrace.healthMultiplier) + this.characterclass.healthBonus;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "armor", {
        get: function () {
            return (this._armour * this.characterrace.armorMultiplier) + this.characterclass.armorBonus;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.takeHit = function (attackType) {
        var damage;
        var attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
        // generate an int between 1 and 20
        if (attackRoll >= this.armor) {
            damage = attackType.getdamage();
            this._health -= damage / this.characterrace.healthMultiplier;
        }
        else {
            return attackType.message;
        }
        return "The attack hit for ".concat(damage, " damage! The player now has ").concat(this._health, " health.");
    };
    return Player;
}());
exports.Player = Player;
