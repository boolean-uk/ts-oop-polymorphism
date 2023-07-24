"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const attack_1 = require("./attack");
class Player {
    constructor() {
        this._health = 52; // when this reaches 0, the player dies
        this._armour = 14; // an attack must be >= this to hit the player
    }
    get health() {
        return this._health;
    }
    get name() {
        return this.constructor.name;
    }
    takeHit(attack) {
        if (!(attack instanceof attack_1.Attack && attack.constructor !== attack_1.Attack)) {
            return "Not a valid attack!";
        }
        if (attack.roll >= this._armour) {
            this._health -= attack.damage;
            return `The attack hit for ${attack.damage} damage! The player now has ${this._health} health.`;
        }
        return attack.getMissMessage();
    }
    hit(enemy) {
        return enemy.takeHit(new attack_1.SwordAttack());
    }
}
exports.Player = Player;
