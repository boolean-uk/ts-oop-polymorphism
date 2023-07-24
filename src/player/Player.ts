import {AxeAttack} from "../attack/AxeAttack";
import {SwordAttack} from "../attack/SwordAttack";
import {FireSpellAttack} from "../attack/FireSpellAttack";
import {IceSpellAttack} from "../attack/IceSpellAttack";
import {AttackType} from "../attack/AttackType";
import {Weapon} from "../weapon/Weapon";

export class Player {

    private _name: string
    private _health: number = 100 // when this reaches 0, the player dies
    private _armour: number = 14 // an attack must be >= this to hit the player
    private _weapon: Weapon

    constructor(name: string, armour: number) {
        this._name = name
        this._armour = armour;
        this._weapon = {name: 'no-weapon', damage: 0}
    }

    attackPlayer(target: Player, attack: AttackType): string {
        let damageDone: number = this.performAttack(target.armour, attack)

        if (damageDone === 0) {
            return 'You missed the attack'
        }

        target.health -= damageDone
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

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
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

    get weapon(): Weapon {
        return this._weapon;
    }

    set weapon(value: Weapon) {
        this._weapon = value;
    }
}