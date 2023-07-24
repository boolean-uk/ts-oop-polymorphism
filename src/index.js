"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enemy_1 = require("./enemy");
const fight_1 = require("./fight");
const player_1 = require("./player");
const result = (0, fight_1.fight)(new player_1.Player(), new enemy_1.Goblin());
console.log(result);
