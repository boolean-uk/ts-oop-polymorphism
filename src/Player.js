"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Attack_1 = require("./Attack");
var AxeAttack_1 = require("./AxeAttack");
var FireSpellAttack_1 = require("./FireSpellAttack");
var IceSpellAttack_1 = require("./IceSpellAttack");
var SwordAttack_1 = require("./SwordAttack");
var Player = /** @class */ (function () {
    function Player() {
        this.name = 'player';
        this._health = 52; // when this reaches 0, the player dies
        this._armour = 14; // an attack must be >= this to hit the player
        this.character = {
            class: Class.Peasant,
            race: Race.Other,
            description: ""
        };
        this.enemies = [];
        this.equipment = new Map();
    }
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.SpecificCombatEncounters = function (player, attackType) {
        if (this.enemies.includes(player)) {
            return 'You: ' + this.getName() + " " + this.takeHit(this.createNewAttack(attackType))
                + ' Enemy: ' + player.takeHit(this.createNewAttack(attackType));
        }
        else {
            return "Hello " + player.name;
        }
    };
    Player.prototype.addAttackToEquipment = function (thing) {
        if (this.equipment.has(thing)) {
            var currentValue = this.equipment.get(thing) || 0;
            this.equipment.set(thing, currentValue + 1);
        }
        else {
            this.equipment.set(thing, 1);
        }
    };
    Player.prototype.addEnemy = function (newPlayer) {
        this.enemies.push(newPlayer);
    };
    Player.prototype.removeEnemy = function (newPlayer) {
        this.enemies.splice(this.enemies.indexOf(newPlayer), 1);
    };
    Player.prototype.getPlayerList = function () {
        return this.enemies;
    };
    Player.prototype.getHealth = function () {
        return this._health;
    };
    Player.prototype.gatArmour = function () {
        return this._armour;
    };
    Player.prototype.takeHit = function (newAttack) {
        var damage;
        if (newAttack.attackRoll() >= this._armour) {
            damage = newAttack.damage(newAttack.damageNumber);
            this._health -= damage;
        }
        else if (newAttack.attackType.length === 0) {
            return 'Not a valid attack!';
        }
        else {
            return 'The ' + newAttack.attackType + ' attack missed!';
        }
        return "The attack hit for ".concat(damage, " damage! The player now has ").concat(this._health, " health.");
    };
    Player.prototype.createNewAttack = function (attackType) {
        switch (attackType) {
            case 'sword':
                return new SwordAttack_1.SwordAttack();
                break;
            case 'fire spell':
                return new FireSpellAttack_1.FireSpellAttack();
                break;
            case 'ice spell':
                return new IceSpellAttack_1.IceSpellAttack();
                break;
            case 'axe':
                return new AxeAttack_1.AxeAttack();
                break;
            default:
                return new Attack_1.Attack();
        }
    };
    Player.prototype.CharacterBuilder = function (num, numb, descript) {
        switch (num) {
            case '1': this.character.class = Class.Royalty;
            case '2': this.character.class = Class.Nobility;
            case '3': this.character.class = Class.Peasant;
        }
        switch (numb) {
            case '1': this.character.race = Race.Black;
            case '2': this.character.race = Race.White;
            case '3': this.character.race = Race.Asian;
            case '4': this.character.race = Race.Other;
        }
        this.character.description = descript;
    };
    return Player;
}());
exports.Player = Player;
var Class;
(function (Class) {
    Class[Class["Royalty"] = 0] = "Royalty";
    Class[Class["Nobility"] = 1] = "Nobility";
    Class[Class["Peasant"] = 2] = "Peasant";
})(Class || (Class = {}));
var Race;
(function (Race) {
    Race[Race["Black"] = 0] = "Black";
    Race[Race["White"] = 1] = "White";
    Race[Race["Asian"] = 2] = "Asian";
    Race[Race["Other"] = 3] = "Other";
})(Race || (Race = {}));
