import { Attack } from "./attack";

export class FireSpellAttack implements Attack {
  name = "fire spell";
  attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
  damageRoll = Math.floor(Math.random() * (12 - 2) + 1);
}