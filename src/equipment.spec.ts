import { Player} from "."
import { Sword } from "./Sword"
import { IceSpell } from "./IceSpell"
import { FireSpell } from "./FIreSpell"
import { Axe } from "./Axe"
import { Equipment } from "./Equipment"

describe("Equipment tests", () => {
    let player: Player
    let sword: Sword
    let iceSpell: IceSpell
    let fireSpell: FireSpell
    let axe: Axe
    let equipment: Equipment

    beforeEach(() => {
        player = new Player()
        sword = new Sword()
        iceSpell = new IceSpell()
        fireSpell = new FireSpell()
        axe = new Axe()
    })

    it("should increase player's armour with equipment", () => {
        let result
        equipment = new Equipment(5, 0, 'socks')

        expect(player.equipment.length).toEqual(0)
        expect(player.armour).toEqual(14)
        
        player.addEquipment(equipment)

        expect(player.equipment.length).toEqual(1)
        expect(player.armour).toEqual(19)
    })

    it("should increase player's damage with equipment", () => {
        equipment = new Equipment(0, 5, 'gloves')

        expect(player.equipment.length).toEqual(0)
        expect(player.armour).toEqual(14)
        
        player.addEquipment(equipment)

        expect(player.equipment.length).toEqual(1)
        expect(player.addedDamage).toEqual(5)
    })
})