interface Race {
    healthMultiplayer: number
    armourMultiplayer: number
}

const humanRace: Race = {
    healthMultiplayer: 1,
    armourMultiplayer: 1
}

const elfRace: Race = {
    healthMultiplayer: 0.8,
    armourMultiplayer: 1.2
}

const orcRace: Race = {
    healthMultiplayer: 1.2,
    armourMultiplayer: 0.8
}

export {
    Race,
    humanRace,
    elfRace,
    orcRace
}