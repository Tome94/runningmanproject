/*import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const DisplayWordsComponent = () => {
  const board = useSelector((state) => state.board); // Assuming the board is stored in the 'board' slice of the state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [gameFinished, setGameFinished] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    const team1Words = board.filter((_, index) => index % 2 === 0);
    const team2Words = board.filter((_, index) => index % 2 === 1);
    const teamsHaveWords = team1Words.length > 0 || team2Words.length > 0;

    setGameFinished(currentWordIndex === board.length-1);

    if (teamsHaveWords) {
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % board.length);
        setCurrentTeam((prevTeam) => (prevTeam === 1 ? 2 : 1));
      }, 5000);
      console.log(currentWordIndex)
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [board, currentWordIndex]);

  if (gameFinished) {
    return (
      <div>
        <h2>Completed! Press Next.</h2>
   
      </div>
    );
  } else {

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
    </div>
  );
        }
};

export default DisplayWordsComponent;
*/
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const DisplayWordsComponent = () => {
  const board = useSelector((state) => state.board); // Assuming the board is stored in the 'board' slice of the state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [gameFinished, setGameFinished] = useState(false);
  const [remainingTime, setRemainingTime] = useState(1); // Set initial time here (in seconds)

  const intervalRef = useRef(null);

  useEffect(() => {
    const team1Words = board.filter((_, index) => index % 2 === 0);
    const team2Words = board.filter((_, index) => index % 2 === 1);
    const teamsHaveWords = team1Words.length > 0 || team2Words.length > 0;

    setGameFinished(currentWordIndex === board.length-1);

    if (teamsHaveWords) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime === 1) {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % board.length);
            setCurrentTeam((prevTeam) => (prevTeam === 1 ? 2 : 1));
          }
          return prevTime === 1 ? 15 : prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [board,currentWordIndex]);

  useEffect(() => {
    if (gameFinished) {
      clearInterval(intervalRef.current);
    }
  }, [gameFinished]);

  if (gameFinished) {
    return (
      <div>
        <h2>Completed! Press Next.</h2>
        {/* You can add a button or some other component to handle the "Next" functionality */}
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
