import Attack from "@attack/Attack";

export enum AttackType {
    Sword,
    Axe,
    FireSpell,
    IceSpell
}

export const getAttack: { [key in AttackType]: Attack } = {
    [AttackType.Sword]: new Attack('Sword', 20, [1, 8]),
    [AttackType.Axe]: new Attack('Axe', 20, [1, 10]),
    [AttackType.FireSpell]: new Attack('Fire spell', 20, [1, 12]),
    [AttackType.IceSpell]: new Attack('Ice spell', 20, [1, 12])
}
