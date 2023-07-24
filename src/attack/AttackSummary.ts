type AttackSummary = {
    status: "hit",
    damage: number,
    playerHealth: number
} | {
    status: "miss"
}

export default AttackSummary
