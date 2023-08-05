import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const DisplayWordsComponent = ({ remainingTime }) => {
  const board = useSelector((state) => state.board);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [gameFinished, setGameFinished] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    const team1Words = board.filter((_, index) => index % 2 === 0);
    const team2Words = board.filter((_, index) => index % 2 === 1);
    const teamsHaveWords = team1Words.length > 0 || team2Words.length > 0;

    setGameFinished(currentWordIndex === board.length - 1);

    if (teamsHaveWords) {
      if (remainingTime === 1) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % board.length);
        setCurrentTeam((prevTeam) => (prevTeam === 1 ? 2 : 1));
      }
    }
  }, [board, remainingTime]);

  useEffect(() => {
    if (gameFinished) {
      clearInterval(intervalRef.current);
    }
  }, [gameFinished]);

  if (gameFinished) {
    return (
      <div>
        <h2>Completed! Press Next.</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Displaying Words:</h2>
      <h3>Team {currentTeam} Words:</h3>
      <ul>
        {board.map((card, index) => (
          <li key={card.id} style={{ display: index === currentWordIndex ? 'list-item' : 'none' }}>
            {card.contents}
          </li>
        ))}
      </ul>
      <p>Time Remaining: {remainingTime} seconds</p>
    </div>
  );
};

export default DisplayWordsComponent;
