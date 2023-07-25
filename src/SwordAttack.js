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
exports.SwordAttack = void 0;
var Attack_1 = require("./Attack");
var SwordAttack = /** @class */ (function (_super) {
    __extends(SwordAttack, _super);
    function SwordAttack() {
        var _this = _super.call(this) || this;
        _this.attackType = 'sword';
        _this.damageNumber = 8;
        return _this;
    }
    return SwordAttack;
}(Attack_1.Attack));
exports.SwordAttack = SwordAttack;
