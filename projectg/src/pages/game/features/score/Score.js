import React from 'react';
// Add import statement below
import {useSelector} from 'react-redux'
import {selectMatchedIDs} from '../board/boardSlice'
import {selectCurrentTurn} from '../turns/turn';
import { updateTeamScore } from '../../../local/Actions';
import { useDispatch } from 'react-redux';
export const Score = () => {
  // Add selected data variable below
  const cardsMatched = useSelector(selectMatchedIDs)
  const teamID = useSelector(selectCurrentTurn);
  const team1score = useSelector((state) => state.team.team1Players.score);
  const team2score = useSelector((state) => state.team.team2Players.score);
  const dispatch = useDispatch();
  let score = 0
  // Update team score when cardsMatched count increases
  React.useEffect(() => {
    const newScore = cardsMatched.length;
    console.log(newScore)
    dispatch(updateTeamScore(teamID, newScore));
  }, [cardsMatched.length, dispatch, teamID]);
console.log(`team 1 ${team1score}`)
console.log(`team 2 ${team2score}`)
if (teamID === 1){
  score = team1score
} else {
  score = team2score
}
  return (
    // implement selected data inside <div>
    <div className="score-container">
      Team {teamID}Matched: {score}
      <br />
      {teamID === 1 && <span>Team 1 Score: {team1score}</span>}
      {teamID === 2 && <span>Team 2 Score: {team2score}</span>}
    </div>
  );
};