interface Spell extends Attack{
     
}

export class FireSpell implements Spell{
  calculateDamage(): number{
      return Math.floor(Math.random() * (12 - 2) + 1)
  }
  getAttackType(): string {
      return 'fire spell'
  }
}

export class IceSpell implements Spell{
    calculateDamage(): number{
        return Math.floor(Math.random() * (12 - 2) + 1)
    }
    getAttackType(): string {
        return 'ice spell'
    }
  }