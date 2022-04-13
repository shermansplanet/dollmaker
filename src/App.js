import React, { useState } from 'react';
import './style.css';
import Intro from './intro';

const defaultState = { stage: 0 };

export default function App() {
  const [gameState, setGameStateRaw] = useState(
    localStorage.getItem('gameState') || defaultState
  );
  const setGameState = (s) => {
    s = { ...gameState, ...s };
    localStorage.setItem('gameState', s);
    setGameStateRaw(s);
  };
  const content =
    gameState.stage == 0 ? (
      <Intro cb={() => setGameState({ stage: 1 })} />
    ) : (
      <div style={{ display: 'flex' }}>Welcome.</div>
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
