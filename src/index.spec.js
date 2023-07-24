"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var weapon_1 = require("./weapon");
var spell_1 = require("./spell");
describe("Player tests", function () {
    var player;
    beforeEach(function () {
        player = new _1.Player();
    });
    it("should reduce the players health on successful hits", function () {
        var result;
        do {
            result = player.takeHit(new weapon_1.Sword());
        } while (result.includes('missed'));
        expect(player.health).toBeLessThan(52);
        expect(player.health).toBeGreaterThanOrEqual(52 - 9);
        expect(result).toContain('The attack hit');
        var extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g); // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]));
        }
    });
    it("should reduce the players health on successful hits", function () {
        var result;
        do {
            result = player.takeHit(new spell_1.FireSpell());
        } while (result.includes('missed'));
        expect(player.health).toBeLessThan(52);
        expect(result).toContain('The attack hit');
        var extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g); // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]));
        }
    });
});
