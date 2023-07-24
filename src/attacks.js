"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kick = exports.Punch = exports.AxeAttack = exports.IceSpellAttack = exports.FireSpellAttack = exports.SwordAttack = void 0;
var SwordAttack = /** @class */ (function () {
    function SwordAttack() {
        this.name = "sword attack";
    }
    SwordAttack.prototype.attackRoll = function () {
        return Math.floor(Math.random() * 19) + 2; // generate an int between 2 and 20
    };
    SwordAttack.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * 7) + 2; // generate an int between 2 and 8
    };
    SwordAttack.prototype.missedMessage = function () {
        return 'The sword attack missed!';
    };
    return SwordAttack;
}());
exports.SwordAttack = SwordAttack;
var FireSpellAttack = /** @class */ (function () {
    function FireSpellAttack() {
        this.name = "fire spell attack";
    }
    FireSpellAttack.prototype.attackRoll = function () {
        return Math.floor(Math.random() * 19) + 2; // generate an int between 2 and 20
    };
    FireSpellAttack.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * 11) + 2; // generate an int between 2 and 12
    };
    FireSpellAttack.prototype.missedMessage = function () {
        return 'The fire spell attack missed!';
    };
    return FireSpellAttack;
}());
exports.FireSpellAttack = FireSpellAttack;
var IceSpellAttack = /** @class */ (function () {
    function IceSpellAttack() {
        this.name = "ice spell attack";
    }
    IceSpellAttack.prototype.attackRoll = function () {
        return Math.floor(Math.random() * 19) + 2; // generate an int between 2 and 20
    };
    IceSpellAttack.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * 11) + 2; // generate an int between 2 and 12
    };
    IceSpellAttack.prototype.missedMessage = function () {
        return 'The ice spell attack missed!';
    };
    return IceSpellAttack;
}());
exports.IceSpellAttack = IceSpellAttack;
var AxeAttack = /** @class */ (function () {
    function AxeAttack() {
        this.name = "axe attack";
    }
    AxeAttack.prototype.attackRoll = function () {
        return Math.floor(Math.random() * 19) + 2; // generate an int between 2 and 20
    };
    AxeAttack.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * 9) + 2; // generate an int between 2 and 10
    };
    AxeAttack.prototype.missedMessage = function () {
        return 'The axe attack missed!';
    };
    return AxeAttack;
}());
exports.AxeAttack = AxeAttack;
var Punch = /** @class */ (function () {
    function Punch() {
        this.name = "punch";
    }
    Punch.prototype.attackRoll = function () {
        return Math.floor(Math.random() * 9) + 1; // generate an int between 1 and 10
    };
    Punch.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * 4) + 1; // generate an int between 1 and 5
    };
    Punch.prototype.missedMessage = function () {
        return 'The punch attack missed!';
    };
    return Punch;
}());
exports.Punch = Punch;
var Kick = /** @class */ (function () {
    function Kick() {
        this.name = "kick";
    }
    Kick.prototype.attackRoll = function () {
        return Math.floor(Math.random() * 10) + 2; // generate an int between 2 and 12
    };
    Kick.prototype.calculateDamage = function () {
        return Math.floor(Math.random() * 6) + 2; // generate an int between 2 and 8
    };
    Kick.prototype.missedMessage = function () {
        return 'The punch attack missed!';
    };
    return Kick;
}());
exports.Kick = Kick;
