"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = exports.Dwarf = exports.Elf = exports.Orc = void 0;
var Orc = /** @class */ (function () {
    function Orc() {
        this.racename = 'Orc';
        this.damageMultiplier = 2;
        this.healthMultiplier = 2;
        this.armorMultiplier = 1;
    }
    return Orc;
}());
exports.Orc = Orc;
var Elf = /** @class */ (function () {
    function Elf() {
        this.racename = 'Elf';
        this.damageMultiplier = 2;
        this.healthMultiplier = 1;
        this.armorMultiplier = 2;
    }
    return Elf;
}());
exports.Elf = Elf;
var Dwarf = /** @class */ (function () {
    function Dwarf() {
        this.racename = 'Dwarf';
        this.damageMultiplier = 1;
        this.healthMultiplier = 2;
        this.armorMultiplier = 2;
    }
    return Dwarf;
}());
exports.Dwarf = Dwarf;
var Human = /** @class */ (function () {
    function Human() {
        this.racename = 'Human';
        this.damageMultiplier = 1;
        this.healthMultiplier = 1;
        this.armorMultiplier = 1;
    }
    return Human;
}());
exports.Human = Human;
