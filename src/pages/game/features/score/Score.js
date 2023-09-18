import React from "react";
// Add import statement below
import { useSelector } from "react-redux";
import {
  selectTeamOneMatchIds,
  selectTeamTwoMatchIds,
  selectMatchedIDs,
} from "../board/boardSlice";
import { selectCurrentTurn,matchOver } from "../turns/turn";
import { updateTeamScore } from "../../../local/Actions";
import { useDispatch } from "react-redux";

export const Score = () => {
  // Add selected data variable below
  const teamOneCardsMatched = useSelector(selectTeamOneMatchIds);
  const teamtwoCardsMatched = useSelector(selectTeamTwoMatchIds);
  const teamID = useSelector(selectCurrentTurn);
  const team1score = useSelector((state) => state.team.team1Players.score);
  const team2score = useSelector((state) => state.team.team2Players.score);
  const isMatchOver = useSelector((state) => state.turn.isMatchOver);
  const winner = useSelector((state) => state.turn.winner)
  const dispatch = useDispatch();

  // Update team score when cardsMatched count increases
  React.useEffect(() => {
    if (teamID === 1) {
      const newScore = teamOneCardsMatched.length;
      dispatch(updateTeamScore(teamID, newScore));
    } else {
      const newScore = teamtwoCardsMatched.length;
      dispatch(updateTeamScore(teamID, newScore));
    }
  }, [teamOneCardsMatched.length, teamtwoCardsMatched.length, dispatch, teamID]);
//found out when match is over
  const team1name = useSelector((state) => state.team.team1Players[0].name);
  const team2name = useSelector((state) => state.team.team2Players[0].name);
  const turn = useSelector(selectCurrentTurn)
  const matchedIDs = useSelector(selectMatchedIDs);
  React.useEffect(() => {
    const matchIsOverHandler = () => {
      dispatch(matchOver(team1name, team1score, team2name, team2score));
    };
  
    if (matchedIDs.length === 12 && turn > 0) {
      const timer = setTimeout(() => {
        matchIsOverHandler();
        //console.log(team1name, team1score, team2name, team2score);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  }, [matchedIDs, dispatch, turn, team1name, team1score, team2name, team2score]);
  

  const [currentTeamID, setCurrentTeamID] = React.useState(teamID);
  // Delay the update of currentTeamID by 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTeamID(teamID);
    }, 2000);

    return () => clearTimeout(timer);
  }, [teamID]);

  return (
    <div className="score-container">
      {isMatchOver ? (
        <div className="result">
          <h2>Match Result: {winner}</h2>
        </div>
      ) : (
        <div className="score">
          <br />
          {currentTeamID === 1 && (
            <h2>Turn: Team 1 || Score: {team1score}</h2>
          )}
          {currentTeamID === 2 && (
            <h2>Turn: Team 2 || Score: {team2score}</h2>
          )}
        </div>
      )}
    </div>
  );
};
