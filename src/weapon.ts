interface Weapon extends Attack{
     
  }

export class Sword implements Weapon{
    

    calculateDamage(): number{
        return Math.floor(Math.random() * (8 - 2) + 1)
    }
    getAttackType(): string {
        return 'sword'
    }
}

export class Axe implements Weapon{
    calculateDamage(): number{
        return Math.floor(Math.random() * (10 - 2) + 1)
    }
    getAttackType(): string {
        return 'axe'
    }
}

