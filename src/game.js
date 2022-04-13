import React from 'react';
import Entity from './entity';

export default ({ gameState, setGameState }) => {
  return (
    <div style={{ display: 'flex' }}>
      {<Entity entity={gameState.player} />}
    </div>
  );
};
