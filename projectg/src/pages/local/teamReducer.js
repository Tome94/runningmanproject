import { generateId } from './utilities';

const initialState = {
  team1Players: [
    {
      id: generateId(),
      name: 'Tommy',
    },
  ],
  team2Players: [
    {
      id: generateId(),
      name: 'John',
    },
  ],
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      let { player, team} = action.payload;
      if (team === 1) {
        return {
          ...state,
          team1Players: [player, ...state.team1Players],
        };
      } else if (team === 2) {
        return {
          ...state,
          team2Players: [player, ...state.team2Players],
        };
      }
      break;
    case 'REMOVE_PLAYER':
      let { playerIdToRemove, teamNumber } = action.payload;
      if (teamNumber === 1) {
        return {
          ...state,
          team1Players: state.team1Players.filter(
            (player) => player.id !== playerIdToRemove
          ),
        };
      } else if (teamNumber === 2) {
        return {
          ...state,
          team2Players: state.team2Players.filter(
            (player) => player.id !== playerIdToRemove
          ),
        };
      }
      break;
    default:
      return state;
  }
};
