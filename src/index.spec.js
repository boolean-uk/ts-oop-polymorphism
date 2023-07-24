"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attack_1 = require("./attack");
const character_1 = require("./character");
const fight_1 = require("./fight");
describe("Player tests", () => {
    let player;
    let enemy;
    beforeEach(() => {
        // Before each "it" test, start with a new Player instance
        player = new character_1.Player();
        enemy = new character_1.Ogre();
    });
    it("should not use invalid attacks", () => {
        const result = player.takeHit("banana", enemy);
        console.log(result);
        expect(result).toEqual("Not a valid attack!");
    });
    it("should reduce the players health on successful hits", () => {
        let result;
        do {
            result = player.takeHit(new attack_1.AxeAttack(), enemy);
        } while (!result.includes("Player now has"));
        expect(player.health).toBeLessThan(52);
        expect(result).toContain("attack hit");
        const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g); // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]));
        }
    });
    it("should return fight result: Player wins!", () => {
        expect((0, fight_1.fight)(new character_1.Player(), new character_1.Goblin())).toEqual("Player wins!");
    });
    it("should return fight result: Ogre wins!", () => {
        expect((0, fight_1.fight)(new character_1.Player(), new character_1.Ogre())).toEqual("Ogre wins!");
    });
    it("should create custom enemy", () => {
        const deathMage = new character_1.Mage(30, 10, attack_1.DeathSpellAttack);
        let result;
        do {
            result = player.takeHit(deathMage.attack, deathMage);
        } while (!result.includes("spell"));
        expect(result).toContain("death spell");
    });
});
