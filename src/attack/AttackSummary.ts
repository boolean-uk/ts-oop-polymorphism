type AttackSummary = {
    status: "hit",
    damage: number,
    playerHealth: number
} | {
    status: "miss"
} | {
    status: "fatal",
    experience: number
}

export default AttackSummary
