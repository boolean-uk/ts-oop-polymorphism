import { Attack } from "../enemies attacs/Attack";
import { RangedAttack } from "../enemies attacs/RangedAttack";
import { Enemy } from "./Enemy";

export class Centaur extends Enemy{
     health = 15
     armour = 8
     attack: Attack = new RangedAttack()
}