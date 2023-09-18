
import React from 'react';
import { Score } from './features/score/Score';
import { Board } from './features/board/Board';
const Game = () => {

  return (
    <div className="Game">
      <Score />
      <Board />
    </div>
  );
};

export default Game;
