class Equipment {
    public bonusArmor: number = 0
    public bonusDamage: number = 0
    public name: string = "equipment"
}

class Ring extends Equipment {
    bonusDamage = 2
}

class Armor extends Equipment {
    bonusArmor = 2
}

class Talisman extends Equipment {
    bonusArmor = 1
    bonusDamage = 1
}

export { Equipment, Ring, Talisman }