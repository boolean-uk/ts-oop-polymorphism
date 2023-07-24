import { AttackType } from "./attackType";

export class SwordAttack implements AttackType {
  damage: number;
  name: string;

  constructor() {
    this.damage = Math.floor(Math.random() * (8 - 2) + 1);
    this.name = "sword";
  }
}