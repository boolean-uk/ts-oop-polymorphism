"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monster = void 0;
var sword_1 = require("./sword");
var monster = /** @class */ (function () {
    function monster() {
        this.weapons = [new Axe(), new sword_1.Sword(), new FireSpell(), new IceSpell()];
        this.hp = Math.floor(Math.random() * (20 - 2) + 20);
        this.weapon = this.getRandomWeapon();
    }
    Object.defineProperty(monster.prototype, "health", {
        get: function () {
            return this.hp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(monster.prototype, "weaponGetter", {
        get: function () {
            return this.weapon;
        },
        enumerable: false,
        configurable: true
    });
    monster.prototype.getRandomWeapon = function () {
        return this.weapons[Math.floor(Math.random() * 4)];
    };
    monster.prototype.takeHit = function (attack) {
        var damage = attack.countDamage();
        {
            if (this.didAttackMiss() === false) {
                this.hp -= damage;
                return "The attack hit for ".concat(damage, " damage! The player now has ").concat(this.hp, " health.");
            }
            else
                return 'The ' + attack.attackType + ' attack missed';
        }
    };
    monster.prototype.didAttackMiss = function () {
        var attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
        if (attackRoll >= 10) {
            return false;
        }
        return true;
    };
    return monster;
}());
exports.monster = monster;
