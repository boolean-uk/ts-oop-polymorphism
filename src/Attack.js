"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attack = void 0;
var Attack = /** @class */ (function () {
    function Attack() {
        this.attackType = "";
        this.damageNumber = 0;
    }
    Attack.prototype.damage = function (damageNumber) {
        return Math.floor(Math.random() * (damageNumber - 2) + 1);
    };
    Attack.prototype.attackRoll = function () {
        return Math.floor(Math.random() * (20 - 2) + 1); // generate an int between 1 and 20
    };
    return Attack;
}());
exports.Attack = Attack;
