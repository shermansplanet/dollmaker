import React, { useState } from 'react';
import './style.css';
import Intro from './intro';
import { tick } from './tick';

const defaultState = { stage: 0, tick: 0 };
const intervalDurationSeconds = 1;
let currentIntervalId = null;

export default function App() {
  const [gameState, setGameStateRaw] = useState(
    localStorage.getItem('gameState') || defaultState
  );

  const setGameState = (s) => {
    s = { ...gameState, ...s };
    localStorage.setItem('gameState', s);
    setGameStateRaw(s);
  };

  if (currentIntervalId != null) {
    clearInterval(currentIntervalId);
  }

  currentIntervalId = setInterval(
    () => tick(gameState, setGameState),
    intervalDurationSeconds * 1000
  );

  const content =
    gameState.stage == 0 ? (
      <Intro cb={() => setGameState({ stage: 1 })} />
    ) : (
      <div style={{ display: 'flex' }}>{gameState.tick}</div>
    );
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setGameState(defaultState);
            localStorage.clear();
          }}
        >
          Restart
        </button>
      </div>
      {content}
    </div>
  );
}
