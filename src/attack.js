"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeathSpellAttack = exports.IceSpellAttack = exports.FireSpellAttack = exports.SpellAttack = exports.AxeAttack = exports.BludgeonAttack = exports.SwordAttack = exports.FistAttack = exports.MeleeAttack = exports.Attack = void 0;
const util_1 = require("./util");
const strength = {
    weakest: () => Math.floor(Math.random() * (6 - 2) + 1),
    weak: () => Math.floor(Math.random() * (8 - 2) + 1),
    medium: () => Math.floor(Math.random() * (10 - 2) + 1),
    strong: () => Math.floor(Math.random() * (12 - 2) + 1),
    strongest: () => Math.floor(Math.random() * (14 - 2) + 1),
};
class Attack {
    constructor(damage) {
        this._damage = damage;
        this._roll = Math.floor(Math.random() * (20 - 2) + 1);
    }
    get damage() {
        return this._damage;
    }
    get roll() {
        return this._roll;
    }
    get name() {
        return this.constructor.name;
    }
    getDamageMessage(attacker, defender, health) {
        const damage = `The ${attacker}'s ${(0, util_1.camelCaseToWords)(this.name)} hit for ${this.damage} damage!`;
        const result = health > 0 ? `${defender} now has ${health} health.` : `${defender} died.`;
        return `${damage} ${result}`;
    }
    getMissMessage(opponent) {
        return `The ${opponent}'s ${(0, util_1.camelCaseToWords)(this.name)} missed!`;
    }
}
exports.Attack = Attack;
class MeleeAttack extends Attack {
    constructor(damage) {
        super(damage ? damage : strength.weak());
    }
}
exports.MeleeAttack = MeleeAttack;
class FistAttack extends MeleeAttack {
    constructor() {
        super(strength.weakest());
    }
}
exports.FistAttack = FistAttack;
class SwordAttack extends MeleeAttack {
}
exports.SwordAttack = SwordAttack;
class BludgeonAttack extends MeleeAttack {
}
exports.BludgeonAttack = BludgeonAttack;
class AxeAttack extends MeleeAttack {
    constructor() {
        super(strength.medium());
    }
}
exports.AxeAttack = AxeAttack;
class SpellAttack extends Attack {
    constructor(damage) {
        super(damage ? damage : strength.strong());
    }
}
exports.SpellAttack = SpellAttack;
class FireSpellAttack extends SpellAttack {
}
exports.FireSpellAttack = FireSpellAttack;
class IceSpellAttack extends SpellAttack {
}
exports.IceSpellAttack = IceSpellAttack;
class DeathSpellAttack extends SpellAttack {
    constructor() {
        super(strength.strongest());
    }
}
exports.DeathSpellAttack = DeathSpellAttack;
