import { AxeAttack, DeathSpellAttack } from "./attack";
import { Enemy, Goblin, Mage, Ogre, Player } from "./character";
import { fight } from "./fight";

describe("Player tests", () => {
  let player: Player;
  let enemy: Enemy;

  beforeEach(() => {
    // Before each "it" test, start with a new Player instance
    player = new Player();
    enemy = new Ogre();
  });

  it("should not use invalid attacks", () => {
    const result = player.takeHit("banana", enemy);
    console.log(result);
    expect(result).toEqual("Not a valid attack!");
  });

  it("should reduce the players health on successful hits", () => {
    let result;

    do {
      result = player.takeHit(new AxeAttack(), enemy);
    } while (!result.includes("Player now has"));

    expect(player.health).toBeLessThan(52);
    expect(result).toContain("attack hit");

    const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g); // extract the numbers from the result
    if (extractedNumbers !== null) {
      expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]));
    }
  });

  it("should return fight result: Player wins!", () => {
    expect(fight(new Player(), new Goblin())).toEqual("Player wins!");
  });

  it("should return fight result: Ogre wins!", () => {
    expect(fight(new Player(), new Ogre())).toEqual("Ogre wins!");
  });

  it("should create custom enemy", () => {
    const deathMage = new Mage(30, 10, DeathSpellAttack);
    let result;

    do {
      result = player.takeHit(deathMage.attack, deathMage);
    } while (!result.includes("spell"));

    expect(result).toContain("death spell");
  });
});
