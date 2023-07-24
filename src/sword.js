"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sword = void 0;
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.attackType = function () { return 'sword'; };
    Sword.prototype.countDamage = function () { return Math.floor(Math.random() * (8 - 2) + 1); };
    return Sword;
}());
exports.Sword = Sword;
