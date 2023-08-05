const initialState = {
  currentTurn: 0,
  lastActionTimestamp: 0,
  isMatchOver: false,
  winner: undefined
};

export const turnReducer = (state = initialState, action) => {
  switch (action.type) {
    case "END_TURN":
      const currentTimestamp = Date.now();
      if (currentTimestamp - state.lastActionTimestamp < 1000) {
        // If less than a second has passed since the last action, return the current state
        return state;
      }
      return {
        ...state,
        currentTurn: state.currentTurn === 1 ? 2 : 1,
        lastActionTimestamp: currentTimestamp,
      };
    case "SHOW_WINNER":
      const { team1Name, team1Score, team2Name, team2Score } = action.payload;
      let winner;

      if (team1Score > team2Score) {
        winner = team1Name;
        //console.log(`team 2${team1Score} team 2${team2Score}`)
      } else if (team2Score > team1Score) {
        winner = team2Name; 
        console.log(`team 2${team1Score} team 2${team2Score}`)
      } else {
        winner = "Tie";
      }

      return {
        ...state,
        isMatchOver: true,
        currentTurn: 0,
        winner: winner
      }
    case "START_MATCH": 
      return {
        ...state,
        currentTurn : 1,
        isMatchOver: false
      }
    default:
      return state;
  }
};

export const endTurn = () => ({
  type: "END_TURN",
});

export const matchOver = (team1Name, team1Score, team2Name, team2Score) => ({
  type: "SHOW_WINNER",
  payload: { team1Name, team1Score, team2Name, team2Score },
});

export const startMatch = () => ({
  type: "START_MATCH",
});

export const selectCurrentTurn = (state) => state.turn.currentTurn;
