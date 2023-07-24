import { Player, Enemy, Sword, IAttack, EnemyType } from ".";

// Core 
class MockSword implements IAttack {
    attackType = 'sword';
    attackRoll = 15;  // over the player's and enemy's armour
    attackDamage = 5;  // arbitrary

    performAttack(): number {
        return this.attackDamage;
    }
}

// Extension 
describe("Character tests", () => {
    let player: Player;
    let mockSword: MockSword;

    beforeEach(() => {
        player = new Player();
        mockSword = new MockSword();
    });

    it("should reduce the player's health on successful hits", () => {
        const result = player.takeHit(mockSword);

        expect(player.health).toBeLessThan(52);
        expect(result).toContain('The sword attack hit');

        const extractedNumbers = result.match(/\d+/g); // extract the numbers from the result
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]));
        }
    });

    class MockFireSpell implements IAttack {
        attackType = 'fire spell';
        attackRoll = 15;  // over the player's and enemy's armour
        attackDamage = 5;  // arbitrary
    
        performAttack(): number {
            return this.attackDamage;
        }
    }

describe("Enemy tests", () => {
    let player: Player;
    let enemy: Enemy;
    let mockSword: MockSword;
    let mockFireSpell: MockFireSpell;

    beforeEach(() => {
        player = new Player();
        mockSword = new MockSword();
        mockFireSpell = new MockFireSpell;
        enemy = new Enemy(60, 10, EnemyType.Warrior, ['fire spell'], mockSword);  // A warrior type enemy resistant to fire spell and having sword as a special attack
    });

    it("should be resistant to certain attack types", () => {
        const result = enemy.takeHit(mockFireSpell);

        expect(enemy.health).toBe(60);
        expect(result).toContain('The fire spell attack was ineffective');
    });

    it("should reduce the player's health on successful hits", () => {
        const result = player.takeHit(enemy.specialAttack); // enemy hits with special attack

        expect(player.health).toBeLessThan(52);
        expect(result).toContain('The sword attack hit');

        const extractedNumbers = result.match(/\d+/g);
        if (extractedNumbers !== null) {
            expect(52 - Number(extractedNumbers[0])).toEqual(Number(extractedNumbers[1]));
        }
    });
});

});
