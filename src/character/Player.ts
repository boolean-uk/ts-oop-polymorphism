import {AxeAttack} from "../attack/AxeAttack";
import {SwordAttack} from "../attack/SwordAttack";
import {FireSpellAttack} from "../attack/FireSpellAttack";
import {IceSpellAttack} from "../attack/IceSpellAttack";
import {AttackType} from "../attack/AttackType";
import {Weapon} from "../weapon/Weapon";
import {Character} from "./Character";

export class Player extends Character {

    private _weapon: Weapon

    constructor(name: string, health: number, armour: number) {
        super(name, health, armour)
        this._weapon = {name: 'no-weapon', damage: 0}
    }

    attack(target: Character, attack: AttackType): string {
        if (this.health <= 0) {
            return `You are not able to fight`
        }
        let damageDone: number = this.performAttack(target.armour, attack)

        if (damageDone === 0) {
            return 'You missed the attack'
        }

        target.health -= damageDone

        if (target.health <= 0) {
            return `You defeated ${target.name}`

        }
        return `Your attack done ${damageDone} damage to ${target.name}`
    }

    performAttack(armour: number, attack: AttackType): number {

        switch (attack) {
            case AttackType.Axe:
                return new AxeAttack(this.weapon).hit(armour)
            case AttackType.Sword:
                return new SwordAttack(this.weapon).hit(armour)
            case AttackType.FireSpell:
                return new FireSpellAttack().hit(armour)
            case AttackType.IceSpell:
                return new IceSpellAttack().hit(armour)
            default:
                return 0
        }
    }


    get weapon(): Weapon {
        return this._weapon;
    }

    set weapon(value: Weapon) {
        this._weapon = value;
    }
}