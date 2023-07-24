"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = exports.Thief = exports.Knight = void 0;
var Knight = /** @class */ (function () {
    function Knight() {
        this.charclass = "Knight";
        this.damageBonus = 5;
        this.healthBonus = 2;
        this.armorBonus = 5;
    }
    return Knight;
}());
exports.Knight = Knight;
var Thief = /** @class */ (function () {
    function Thief() {
        this.charclass = 'Thief';
        this.damageBonus = 8;
        this.healthBonus = -2;
        this.armorBonus = -4;
    }
    return Thief;
}());
exports.Thief = Thief;
var Mage = /** @class */ (function () {
    function Mage() {
        this.charclass = 'Mage';
        this.damageBonus = 6;
        this.healthBonus = 0;
        this.armorBonus = 5;
    }
    return Mage;
}());
exports.Mage = Mage;
