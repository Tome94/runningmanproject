
import React from 'react';
import { Score } from './features/score/Score';
import { Board } from './features/board/Board';
// Add import statements below
import {useDispatch} from 'react-redux'
import {setBoard, resetCards} from './features/board/boardSlice'


const Game = () => {
  // Add dispatch variable below
  const dispatch = useDispatch();

  const startGameHandler = () => {
    // Add action dispatch below
    dispatch(setBoard())
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    dispatch(resetCards())
  };

  return (
    <div className="Game">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Try New Pair
        </button>
      </footer>
    </div>
  );
};

export default Game;
