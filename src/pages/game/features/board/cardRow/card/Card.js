import React from 'react';
// Add import statements below
import {useSelector, useDispatch} from 'react-redux'
import { selectCurrentTurn } from '../../../turns/turn';
import {selectVisibleIDs, flipCard, selectMatchedIDs, resetCards} from '../../boardSlice'
import cardLogo from './runningmanlogo.png'
import { endTurn } from '../../../turns/turn';

export const Card = ({ id, contents, image }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs)
  const matchedIDs = useSelector(selectMatchedIDs)
  const teamID = useSelector(selectCurrentTurn)
  const dispatch = useDispatch()
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id, teamID))
  };
  const ResetCardHandler = () => {
    // Add action dispatch below
    
    setTimeout(()=>{
      dispatch(resetCards())
    },2000)
  };
  const EndTurn = () => {
    dispatch(endTurn())
  }
  let cardStyle = 'resting'
  let click = () => flipHandler(id, teamID);
  
  // this is the the card back with the running man logo
  let cardText = <img src={cardLogo} className="logo-placeholder" alt="Card option" />;
  const card = useSelector(state => state.board.find(card => card.id === id));
  let imageClass = 'card-image';
  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    if (card.image) {
      cardText = <img src={card.image} className={imageClass} alt={`Card`} />;
    } else {
      cardText = contents;
    }
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }
  //turn the not match red
  if (visibleIDs.length >= 2 && !matchedIDs.includes(id)){
    cardStyle = 'no-match'
    ResetCardHandler()
    click = EndTurn();
  }
  return (
    
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
