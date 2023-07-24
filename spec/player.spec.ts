import Player from "@player/Player";
import { AttackType, getAttack } from "@attack/AttackType";

describe("Player tests", () => {
  let player: Player;
  let _health = 25;
  let _armour = 15;

  beforeEach(() => {
    // Before each "it" test, start with a new Player instance
    player = new Player(_health, _armour);
  });

  it("should reduce the players health on successful hits", () => {
    let result;

    do {
      result = player.takeHit(AttackType.Sword);
    } while (result.status === "miss");

    expect(player.health).toBeLessThan(_health);
    expect(result.status).toEqual("hit");

    expect(_health - result.damage).toEqual(result.playerHealth);
    expect(player.health).toEqual(result.playerHealth);
  });
});
