import React from "react";
// Add import statement below
import { useSelector } from "react-redux";
import {
  selectTeamOneMatchIds,
  selectTeamTwoMatchIds,
} from "../board/boardSlice";
import { selectCurrentTurn } from "../turns/turn";
import { updateTeamScore } from "../../../local/Actions";
import { useDispatch } from "react-redux";
export const Score = () => {
  // Add selected data variable below
  const teamOneCardsMatched = useSelector(selectTeamOneMatchIds);
  const teamtwoCardsMatched = useSelector(selectTeamTwoMatchIds);
  const teamID = useSelector(selectCurrentTurn);
  const team1score = useSelector((state) => state.team.team1Players.score);
  const team2score = useSelector((state) => state.team.team2Players.score);
  const dispatch = useDispatch();
  // Update team score when cardsMatched count increases
  React.useEffect(() => {
    if (teamID === 1) {
      const newScore = teamOneCardsMatched.length;
      console.log(newScore);
      dispatch(updateTeamScore(teamID, newScore));
    } else {
      const newScore = teamtwoCardsMatched.length;
      console.log(newScore);
      dispatch(updateTeamScore(teamID, newScore));
    }
  }, [
    teamOneCardsMatched.length,
    teamtwoCardsMatched.length,
    dispatch,
    teamID,
  ]);
  console.log(`team 1 ${team1score}`);
  console.log(`team 2 ${team2score}`);
  return (
    // implement selected data inside <div>
    <div className="score-container">
      <br />
      {teamID === 1 && <span>Team 1 Score: {team1score}</span>}
      {teamID === 2 && <span>Team 2 Score: {team2score}</span>}
    </div>
  );
};
