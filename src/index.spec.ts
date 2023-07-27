import { Player } from "./player";
import { SwordAttack } from "./sword";
import { FireSpellAttack } from "./fire-spell";
import { IceSpellAttack } from "./ice-spell";
import { AxeAttack } from "./axe";

describe("Player tests", () => {
  let player: Player;

  beforeEach(() => {
    player = new Player();
  });

  it("should not use invalid attacks", () => {
    const result = player.takeHit({ name: "banana", attackRoll: 0, damageRoll: 0 });
    expect(result).toEqual('Not a valid attack!');
  });

  it("should reduce the players health on successful hits", () => {
    const attacks = [new SwordAttack(), new FireSpellAttack(), new IceSpellAttack(), new AxeAttack()];
    let result;

    for (const attack of attacks) {
      do {
        result = player.takeHit(attack);
      } while (result.includes('missed'));

      expect(player.health).toBeLessThan(52);
      expect(result).toContain('The attack hit');
      const extractedNumbers = result.match(/^\d+|\d+\b|\d+(?=\w)/g);
      if (extractedNumbers !== null) {
        expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]));
      }
    }
  });
});