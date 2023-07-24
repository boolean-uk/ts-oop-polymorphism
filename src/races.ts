export interface Race {
    getArmour(): number;
    getHealth(): number;
}

export class Human implements Race {
    getArmour() {
        return 14
    }
    getHealth() {
        return 52
    }
}

export class Dwarf implements Race {
    getArmour() {
        return 18
    }
    getHealth() {
        return 56
    }
}

export class Elf implements Race {
    getArmour() {
        return 10
    }
    getHealth() {
        return 52
    }
}

export class Orc implements Race {
    getArmour() {
        return 16
    }
    getHealth() {
        return 60
    }
}
