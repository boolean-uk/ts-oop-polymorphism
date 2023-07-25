import { Paralysing } from "../enemies attacs/Paralysing";
import { Enemy } from "./Enemy";

export class Manticore extends Enemy{
    health = 32
    armour = 12
    attack = new Paralysing()
}