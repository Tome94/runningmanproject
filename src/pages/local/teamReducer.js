import { generateId } from './utilities';
const initialState = {
  team1Players: [
{      id: generateId(),
  name: "tommy",
  score: 0}
  ],
  team2Players: [
{      id: generateId(),
  name: "saba",
  score: 0}
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
      case 'UPDATE_TEAM_SCORE':
        const { teamID, newScore } = action.payload;
        //console.log(teamID, newScore)
        return {
          ...state,
          [`team${teamID}Players`]: {
            ...state[`team${teamID}Players`],
            score: newScore,
          },
        };
    default:
      return state;
  }
};
export const selectTeam1PlayerNames = (state) =>
state.team.team1Players.map((player) => player.name);

export const selectTeam2PlayerNames = (state) =>
state.team.team2Players.map((player) => player.name);
