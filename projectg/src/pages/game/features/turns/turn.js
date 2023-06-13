const initialState = {
  currentTurn: 0,
};
//turn reducer
export const turnReducer = (state = initialState, action) => {
  switch (action.type) {
    case "END_TURN":
      console.log("endturn")
      return {
        ...state,
        currentTurn: state.currentTurn === 1 ? 2 : state.currentTurn === 2 ? 1 : state.currentTurn,
      };
      

    default:
      return state;
  }

  //action creator
};
export const endTurn = () => ({
  type: 'END_TURN'
});

export const selectCurrentTurn = (state) => state.turn.currentTurn