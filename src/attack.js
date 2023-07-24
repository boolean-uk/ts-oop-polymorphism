"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FistAttack = exports.AxeAttack = exports.IceSpellAttack = exports.FireSpellAttack = exports.SwordAttack = exports.Attack = void 0;
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
}
exports.Attack = Attack;
class SwordAttack extends Attack {
    constructor() {
        super(strength.weak());
    }
    getMissMessage() {
        return "The sword attack missed!";
    }
}
exports.SwordAttack = SwordAttack;
class SpellAttack extends Attack {
    constructor() {
        super(strength.strong());
    }
}
class FireSpellAttack extends SpellAttack {
    getMissMessage() {
        return "The fire spell attack missed!";
    }
}
exports.FireSpellAttack = FireSpellAttack;
class IceSpellAttack extends SpellAttack {
    getMissMessage() {
        return "The ice spell attack missed!";
    }
}
exports.IceSpellAttack = IceSpellAttack;
class AxeAttack extends Attack {
    constructor() {
        super(strength.medium());
    }
    getMissMessage() {
        return "The axe attack missed!";
    }
}
exports.AxeAttack = AxeAttack;
class FistAttack extends Attack {
    constructor() {
        super(strength.weakest());
    }
    getMissMessage() {
        return "The fist attack missed!";
    }
}
exports.FistAttack = FistAttack;
