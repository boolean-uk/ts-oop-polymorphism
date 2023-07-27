import { Attack } from "./attack";

export class AxeAttack implements Attack {
  name = "axe";
  attackRoll = Math.floor(Math.random() * (20 - 2) + 1);
  damageRoll = Math.floor(Math.random() * (10 - 2) + 1);
}