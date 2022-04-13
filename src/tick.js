export const tick = (gameState, setGameState) => {
  setGameState({ tick: (gameState.tick || 0) + 1 });
};
