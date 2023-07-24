class Weapon {
    public _damage: number = 1
    public _name: string = "Weapon"

    get damage(): number {
        return this._damage
    }

    get name(): string {
        return this._name
    }

    get message(): string {
        return "The " + this.name + " attack missed!"
    }
}

class Sword extends Weapon {
    _damage = Math.floor(Math.random() * (8 - 2) + 1)
    _name = "Sword"
}

class FireSpell extends Weapon {
    _damage = Math.floor(Math.random() * (12 - 2) + 1)
    _name = "fire spell"
}

class IceSpell extends Weapon {
    _damage = Math.floor(Math.random() * (12 - 2) + 1)
    _name = "ice spell"
}

class Axe extends Weapon {
    _damage = Math.floor(Math.random() * (10 - 2) + 1)
    _name = "axe"
}


export { Weapon, Sword, FireSpell, IceSpell, Axe }