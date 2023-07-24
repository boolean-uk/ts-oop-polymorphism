"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lumberjack = exports.Yeti = exports.Wizard = exports.Knight = exports.Enemy = void 0;
var attacks_1 = require("./attacks");
var Enemy = /** @class */ (function () {
    function Enemy(health, attack) {
        this.health = health;
        this.attack = attack;
    }
    Enemy.prototype.attackPlayer = function (player) {
        return player.takeHit(this.attack);
    };
    Enemy.prototype.takeHit = function (attack) {
        var damage = attack.calculateDamage();
        this.health -= damage;
        if (this.health <= 0) {
            return "Congratulations! You won!";
        }
        return "Your attack hit for ".concat(damage, " damage! The enemy now has ").concat(this.health, " health.");
    };
    return Enemy;
}());
exports.Enemy = Enemy;
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super.call(this, 20, new attacks_1.SwordAttack()) || this;
        _this.name = "Knight";
        return _this;
    }
    return Knight;
}(Enemy));
exports.Knight = Knight;
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        var _this = _super.call(this, 30, new attacks_1.FireSpellAttack()) || this;
        _this.name = "Wizard";
        return _this;
    }
    return Wizard;
}(Enemy));
exports.Wizard = Wizard;
var Yeti = /** @class */ (function (_super) {
    __extends(Yeti, _super);
    function Yeti() {
        var _this = _super.call(this, 40, new attacks_1.IceSpellAttack()) || this;
        _this.name = "Yeti";
        return _this;
    }
    return Yeti;
}(Enemy));
exports.Yeti = Yeti;
var Lumberjack = /** @class */ (function (_super) {
    __extends(Lumberjack, _super);
    function Lumberjack() {
        var _this = _super.call(this, 50, new attacks_1.AxeAttack()) || this;
        _this.name = "Lumberjack";
        return _this;
    }
    return Lumberjack;
}(Enemy));
exports.Lumberjack = Lumberjack;
