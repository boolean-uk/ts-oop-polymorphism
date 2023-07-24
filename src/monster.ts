import { Sword } from "./sword"

export class monster {

    private hp : number
    private weapons: Attack[] = [new Axe(), new Sword(), new FireSpell(), new IceSpell()]
    private weapon : Attack

    constructor() {
        this.hp = Math.floor(Math.random() * (20 - 2) + 20)
        this.weapon = this.getRandomWeapon()
    }
    
    get health(): number {
        return this.hp
    }

    get weaponGetter(): Attack {
        return this.weapon
    }

    getRandomWeapon() {
        return this.weapons[Math.floor(Math.random() * 4)];
    }

    takeHit(attack : Attack) : string {
        let damage = attack.countDamage()
        {
            if (this.didAttackMiss()===false){
                this.hp -= damage
                return `The attack hit for ${damage} damage! The player now has ${this.hp} health.`
            }
            else return 'The ' + attack.attackType + ' attack missed'
        }
    }

    didAttackMiss(){
        const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
        if (attackRoll >= 10) {
            return false
        }
        return true
    }
}