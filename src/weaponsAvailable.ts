import { Weapon, Sword, FireSpell, IceSpell, Axe } from "./Weapon"

const weaponsAvailable: { [key: string]: Weapon } = {'sword': new Sword(), 
'fire spell': new FireSpell(), 'ice spell': new IceSpell(), 'axe': new Axe()};

export default weaponsAvailable