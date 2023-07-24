"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceSpell = exports.FireSpell = void 0;
var FireSpell = /** @class */ (function () {
    function FireSpell() {
    }
    FireSpell.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * (12 - 2) + 1);
    };
    FireSpell.prototype.getAttackType = function () {
        return 'fire spell';
    };
    return FireSpell;
}());
exports.FireSpell = FireSpell;
var IceSpell = /** @class */ (function () {
    function IceSpell() {
    }
    IceSpell.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * (12 - 2) + 1);
    };
    IceSpell.prototype.getAttackType = function () {
        return 'ice spell';
    };
    return IceSpell;
}());
exports.IceSpell = IceSpell;
