import AttackSummary from "@attack/AttackSummary";
import {AttackType, getAttack} from "@attack/AttackType";
import Character from "@character/Character";
import Player from "@character/Player";
import Enemy from "@character/Enemy";

describe("Character tests", () => {
  let character: Character;
  let _health = 25;
  let _armour = 15;
  let attackType = AttackType.Axe;

  beforeEach(() => {
    character = new Character(_health, _armour, attackType, 100);
  });

  it("should reduce the Character health on successful hits", () => {
    let result: AttackSummary;

    do {
      result = character.takeHit(getAttack[AttackType.Sword]);
    } while (result.status !== "hit");

    expect(character.health).toBeLessThan(_health);
    expect(result.status).toEqual("hit");

    expect(_health - result.damage).toEqual(result.playerHealth);
    expect(character.health).toEqual(result.playerHealth);
  });
});

describe("player vs enemy fight tests", () => {
  let _health = 11
  let player: Player
  let enemy: Enemy

  beforeEach(() => {
    player = new Player(_health, 0, AttackType.Axe)
    enemy = new Enemy(_health, 0, AttackType.Sword, 10)
  })

  it('Characters should damage each other', () => {
    player.attackOtherCharacter(enemy)
    enemy.attackOtherCharacter(player)
    expect(enemy.health).toBeLessThan(_health)
    expect(player.health).toBeLessThan(_health)
  })

  it('Characters should kill each other', () => {
    for (let i = 0; i < _health; i++) {
      player.attackOtherCharacter(enemy)
      enemy.attackOtherCharacter(player)
    }
    expect(player.health).toBeLessThanOrEqual(0)
    expect(enemy.health).toBeLessThanOrEqual(0)
    expect(player.level).toEqual(2)
  })
});
