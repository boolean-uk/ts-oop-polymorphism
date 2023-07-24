import { AttackType } from "@attack/AttackType";
import Character from "./Character";
import Level from "@character/Level";
import AttackSummary from "@attack/AttackSummary";

class Player extends Character {
  constructor(
    _health: number,
    _armour: number,
    _attackType: AttackType,
    private _level = new Level()
  ) {
    super(_health, _armour, _attackType, 100);
  }

  get level(): number {
    return this._level.level
  }

  attackOtherCharacter(other: Character): AttackSummary {
    const atkSummary = super.attackOtherCharacter(other);
    if (atkSummary.status === "fatal") {
      this._level.addExperience(atkSummary.experience)
    }
    return atkSummary
  }
}

export default Player;
