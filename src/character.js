"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = exports.Goblin = exports.Ogre = exports.Enemy = exports.Player = void 0;
const attack_1 = require("./attack");
class Character {
    constructor(health, armour, attackType) {
        this._health = health;
        this._armour = armour;
        this._attackType = attackType;
    }
    get health() {
        return this._health;
    }
    get armour() {
        return this._armour;
    }
    get attack() {
        return new this._attackType();
    }
    get name() {
        return this.constructor.name;
    }
    takeHit(attack, opponent) {
        if (!(attack instanceof attack_1.Attack && attack.constructor !== attack_1.Attack)) {
            return "Not a valid attack!";
        }
        if (attack.roll >= this._armour) {
            this._health -= attack.damage;
            return attack.getDamageMessage(opponent.name, this.name, this._health);
        }
        return attack.getMissMessage(opponent.name);
    }
    hit(opponent) {
        return opponent.takeHit(this.attack, this);
    }
}
class Player extends Character {
    constructor(health = 52, armour = 14, attackType = attack_1.SwordAttack) {
        super(health, armour, attackType);
    }
}
exports.Player = Player;
class Enemy extends Character {
}
exports.Enemy = Enemy;
class Ogre extends Enemy {
    constructor(health = 100, armour = 14, attackType = attack_1.AxeAttack) {
        super(health, armour, attackType);
    }
}
exports.Ogre = Ogre;
class Goblin extends Enemy {
    constructor(health = 20, armour = 10, attackType = attack_1.FistAttack) {
        super(health, armour, attackType);
    }
}
exports.Goblin = Goblin;
class Mage extends Enemy {
    constructor(health = 30, armour = 10, attackType = attack_1.FireSpellAttack) {
        super(health, armour, attackType);
    }
}
exports.Mage = Mage;
