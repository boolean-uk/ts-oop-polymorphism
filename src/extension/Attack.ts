interface Attack {
    name: string
    maxHit: number
    minHit: number
}

class SwordAttack implements Attack {
    name = 'sword'
    maxHit = 8
    minHit = 2
}

class AxeAttack implements Attack {
    name= 'axe'
    maxHit = 10
    minHit = 2
}

class FireSpellAttack implements Attack {
    name = 'fire spell'
    maxHit = 12
    minHit = 2
}

class IceSpellAttack implements Attack {
    name = 'ice spell'
    maxHit = 12
    minHit = 2
}

export {
    SwordAttack,
    AxeAttack,
    Attack,
    IceSpellAttack,
    FireSpellAttack
}