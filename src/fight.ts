import { Enemy, Player } from "./character";

export function fight(player: Player, enemy: Enemy): string {
  let playerTurn = true;
  console.log((playerTurn ? "Player" : Enemy.name) + " attacks!");
  while (player.health > 0 && enemy.health > 0) {
    if (playerTurn) {
      console.log(player.hit(enemy));
    } else {
      console.log(enemy.hit(player));
    }
    playerTurn = !playerTurn;
  }
  return (player.health > 0 ? player.name : enemy.name) + " wins!";
}
