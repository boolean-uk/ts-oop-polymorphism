export interface Class {
    getArmourMultiplier(): number;
    getHealthMultiplier(): number;
}

export class DefaultClass implements Class { // for testing purposes only
    getArmourMultiplier() {
        return 1
    }
    getHealthMultiplier() {
        return 1
    }
}

export class Knight implements Class {
    getArmourMultiplier() {
        return 1.2
    }
    getHealthMultiplier() {
        return 1.2
    }
}

export class Wizard implements Class {
    getArmourMultiplier() {
        return 0.8
    }
    getHealthMultiplier() {
        return 0.8
    }
}

export class Ranger implements Class {
    getArmourMultiplier() {
        return 0.8
    }
    getHealthMultiplier() {
        return 1
    }
}