// export class Player {
//     private _health = 52 // when this reaches 0, the player dies
//     private _armour = 14 // an attack must be >= this to hit the player
//
//     get health(): number {
//         return this._health
//     }
//
//     takeHit(attackType: string): string {
//         let damage: number
//
//         if (attackType === 'sword') {
//             const attackRoll = Math.floor(Math.random() * (20 - 2) + 1) // generate an int between 1 and 20
//
//             if (attackRoll >= this._armour) {
//                 damage = Math.floor(Math.random() * (8 - 2) + 1)
//                 this._health -= damage
//             } else {
//                 return 'The sword attack missed!'
//             }
//         } else if (attackType === 'fire spell') {
//             const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
//
//             if (attackRoll >= this._armour) {
//                 damage = Math.floor(Math.random() * (12 - 2) + 1)
//                 this._health -= damage
//             } else {
//                 return 'The fire spell attack missed!'
//             }
//         } else if (attackType === 'ice spell') {
//             const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
//
//             if (attackRoll >= this._armour) {
//                 damage = Math.floor(Math.random() * (12 - 2) + 1)
//                 this._health -= damage
//             } else {
//                 return 'The ice spell attack missed!'
//             }
//         } else if (attackType === 'axe') {
//             const attackRoll = Math.floor(Math.random() * (20 - 2) + 1)
//
//             if (attackRoll >= this._armour) {
//                 damage = Math.floor(Math.random() * (10 - 2) + 1)
//                 this._health -= damage
//             } else {
//                 return 'The axe attack missed!'
//             }
//         } else {
//             return 'Not a valid attack!'
//         }
//
//         return `The attack hit for ${damage} damage! The player now has ${this._health} health.`
//     }
// }
