import React, { useState } from 'react';
import './style.css';
import Intro from './intro';
import Game from './game';
import { tick } from './tick';

const defaultState = {
  stage: 1,
  tick: 0,
  player: {
    name: 'You',
    size: 61000,
    health: 100,
    veg: 100,
    meat: 100,
  },
};
const intervalDurationSeconds = 1;
let currentTickFunction = null;

setInterval(() => {
  if (currentTickFunction != null) {
    currentTickFunction();
  }
}, intervalDurationSeconds * 1000);

export default function App() {
  const [gameState, setGameStateRaw] = useState(
    JSON.parse(
      localStorage.getItem('gameState') || JSON.stringify(defaultState)
    )
  );

  const setGameState = (s) => {
    const newState = { ...gameState, ...s };
    localStorage.setItem('gameState', JSON.stringify(newState));
    setGameStateRaw(newState);
  };

  currentTickFunction = () => tick(gameState, setGameState);

  const content =
    gameState.stage == 0 ? (
      <Intro finishIntro={() => setGameState({ stage: 1 })} />
    ) : (
      <Game gameState={gameState} setGameState={setGameState} />
    );
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setGameState(JSON.parse(JSON.stringify(defaultState)));
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
