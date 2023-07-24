import throwDice from "@dice/Dice";

describe("dice tests", () => {
  it("should return number between 1 and 4", () => {
    const diceType = 4;
    for (let i = 0; i < 10; i++) {
      const result = throwDice(diceType);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(diceType);
    }
  });
});
