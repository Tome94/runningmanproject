import React from "react";
import { useNavigate } from 'react-router-dom';

const Instructions = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Use navigate(-1) to go back to the previous page
    navigate(-1);
  }
  return (
    <div classname="page">
      <div classname="instructions">
        <h1>How to Play</h1>
        <div className="steps">
          <ul>
            <li>
              <h2>Setup - Drawing</h2>
              <p>This is a two player game where you will draw according to the word prompt and using your own drawings you'll match them up to your opponent's drawing. But beware you only get 15 seconds for each drawing.</p>
            </li>
            <li>
              <h2>Controls</h2>
              <p>Using your mouse, memory and intuition </p>
            </li>
            <li>
              <h2>Memory Matching Game</h2>
              <p>Click two tiles and reveal the hidden pictures if they match you'll be able to pick another pair of tiles, if they don't your opponent now has the chance to win the game. You also have another choice which is to skip your turn!</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="back">
      <button onClick={handleGoBack}>Go Back</button>
    </div>
    </div>
  );
};
export default Instructions