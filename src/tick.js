export const tick = (gameState, setGameState) => {
  let player = gameState.player;
  player.meat = Math.max(0, Math.min(player.meat - 1, 100));
  player.veg = Math.max(0, Math.min(player.veg - 1, 100));
  player.health += (player.meat + player.veg - 100) / 50;
  player.health = Math.max(0, Math.min(player.health, 100));
  setGameState({ tick: (gameState.tick || 0) + 1, player });
};
