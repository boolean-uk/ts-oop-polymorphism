"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axe = exports.Sword = void 0;
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * (8 - 2) + 1);
    };
    Sword.prototype.getAttackType = function () {
        return 'sword';
    };
    return Sword;
}());
exports.Sword = Sword;
var Axe = /** @class */ (function () {
    function Axe() {
    }
    Axe.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * (10 - 2) + 1);
    };
    Axe.prototype.getAttackType = function () {
        return 'axe';
    };
    return Axe;
}());
exports.Axe = Axe;
