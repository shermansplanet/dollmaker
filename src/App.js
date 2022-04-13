import React, { useState } from 'react';
import './style.css';
import Intro from './intro';
import { tick } from './tick';

const defaultState = { stage: 0, tick: 0 };
const intervalDurationSeconds = 1;
let currentTickFunction = null;

setInterval(() => {
  if (currentTickFunction != null) {
    currentTickFunction();
  }
}, intervalDurationSeconds * 1000);

export default function App() {
  const [gameState, setGameStateRaw] = useState(
    JSON.parse(localStorage.getItem('gameState')) || defaultState
  );

  const setGameState = (s) => {
    const newState = { ...gameState, ...s };
    localStorage.setItem('gameState', JSON.stringify(newState));
    setGameStateRaw(newState);
  };

  currentTickFunction = () => tick(gameState, setGameState);

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
