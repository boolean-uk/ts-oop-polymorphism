import { Attack } from "../enemies attacs/Attack";
import { Poisonous } from "../enemies attacs/Poisonous";
import { Enemy } from "./Enemy";

export class Ghoul extends Enemy{
    health = 30
    armour = 15
    attack: Attack = new Poisonous()
}