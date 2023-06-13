import React from 'react';
// Add import statement below
import {useSelector} from 'react-redux'
import {selectMatchedIDs} from '../board/boardSlice'
import {selectCurrentTurn} from '../turns/turn';

export const Score = () => {
  // Add selected data variable below
  const cardsMatched = useSelector(selectMatchedIDs)
  const teamNumber = useSelector(selectCurrentTurn);


  return (
    // implement selected data inside <div>
    <div className="score-container">Team {teamNumber}Matched: {cardsMatched.length}</div>
  );
};