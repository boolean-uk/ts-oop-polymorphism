import { Attack } from "./attack";

export class SwordAttack implements Attack {
  name = "sword";
  attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
  damageRoll = Math.floor(Math.random() * (8 - 2) + 1);
}