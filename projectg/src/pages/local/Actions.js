// actions.js

export const addPlayer = (player, team) => {
  return {
    type: 'ADD_PLAYER',
    payload: {
      player,
      team,
    },
  };
};

export const removePlayer = (playerIdToRemove, teamNumber) => {
  return {
    type: 'REMOVE_PLAYER',
    payload: {
      playerIdToRemove,
      teamNumber,
    },
  };
};
export const updateTeamScore = (teamID, newScore) => {
  return {
    type: 'UPDATE_TEAM_SCORE',
    payload: {
      teamID,
      newScore,
    },
  };
};

