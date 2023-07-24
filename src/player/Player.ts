import {AxeAttack} from "../attack/AxeAttack";
import {SwordAttack} from "../attack/IceSpellAttack";
import {FireSpellAttack} from "../attack/FireSpellAttack";
import {IceSpellAttack} from "../attack/SwordAttack";
import {AttackType} from "../attack/AttackType";

export class Player {
    private _health = 100 // when this reaches 0, the player dies
    private _armour = 14 // an attack must be >= this to hit the player


    constructor(armour: number) {
        this._armour = armour;
    }

    attackPlayer(target: Player, attack: AttackType) {
        let damageDone = this.performAttack(target.armour, attack)

        target.health -= damageDone

    }

    performAttack(armour: number, attack: AttackType): number {
        switch (attack) {
            case AttackType.Axe:
                return new AxeAttack().hit(armour)
            case AttackType.Sword:
                return new SwordAttack().hit(armour)
            case AttackType.FireSpell:
                return new FireSpellAttack().hit(armour)
            case AttackType.IceSpell:
                return new IceSpellAttack().hit(armour)
            default:
                return 0
        }
    }


    get armour(): number {
        return this._armour;
    }

    set armour(value: number) {
        this._armour = value;
    }

    get health(): number {
        return this._health
    }

    set health(value: number) {
        this._health = value
    }
}