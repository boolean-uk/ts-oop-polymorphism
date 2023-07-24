"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goblin = exports.Ogre = exports.Enemy = void 0;
const attack_1 = require("./attack");
class Enemy {
    constructor(health, armour) {
        this._health = health;
        this._armour = armour;
    }
    get health() {
        return this._health;
    }
    get armour() {
        return this._armour;
    }
    get name() {
        return this.constructor.name;
    }
    takeHit(attack) {
        if (!(attack instanceof attack_1.Attack && attack.constructor !== attack_1.Attack)) {
            return "Not a valid attack!";
        }
        if (attack.roll >= this.armour) {
            this._health -= attack.damage;
            return `The attack hit for ${attack.damage} damage! The ${this.name} now has ${this._health} health.`;
        }
        return attack.getMissMessage();
    }
}
exports.Enemy = Enemy;
class Ogre extends Enemy {
    constructor() {
        super(100, 14);
    }
    hit(player) {
        return player.takeHit(new attack_1.AxeAttack());
    }
}
exports.Ogre = Ogre;
class Goblin extends Enemy {
    constructor() {
        super(20, 10);
    }
    hit(player) {
        return player.takeHit(new attack_1.FistAttack());
    }
}
exports.Goblin = Goblin;
