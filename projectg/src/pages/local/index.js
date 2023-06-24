import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer, removePlayer } from './Actions';
import { AddPlayerForm } from './AddPlayerForm';
import { Player } from './Player';
import { Link } from 'react-router-dom';

export default function Team() {
  const team1Players = useSelector((state) => state.team.team1Players);
  const team2Players = useSelector((state) => state.team.team2Players);
  const dispatch = useDispatch();

  const handleAddPlayer = (player, team) => {
    if (team === 1) {
      dispatch(addPlayer(player, team));
    } else if (team === 2) {
      dispatch(addPlayer(player, team));
    }
  };

  const handleRemovePlayer = (playerIdToRemove, teamNumber) => {
    if (teamNumber === 1) {
      dispatch(removePlayer(playerIdToRemove, teamNumber));
    } else if (teamNumber === 2) {
      dispatch(removePlayer(playerIdToRemove, teamNumber));
    }
  };

  return (
    <div className="Team">
      <header>
        <h1>Team 1</h1>
      </header>
      <main>
        <AddPlayerForm
          addPlayer={(player) => handleAddPlayer(player, 1)}
        />
        <ul className="players">
          {team1Players.map((player) => (
            <Player
              key={player.id}
              player={player}
              removePlayer={(playerId) => handleRemovePlayer(playerId, 1)}
            />
          ))}
        </ul>
      </main>

      <header>
        <h1>Team 2</h1>
      </header>
      <main>
        <AddPlayerForm
          addPlayer={(player) => handleAddPlayer(player, 2)}
        />
        <ul className="players">
          {team2Players.map((player) => (
            <Player
              key={player.id}
              player={player}
              removePlayer={(playerId) => handleRemovePlayer(playerId, 2)}
            />
          ))}
        </ul>
      </main>

      <footer>
        <Link to="/game" className='button-link'>
          <h2>Play</h2>
        </Link>
      </footer>
    </div>
  );
}
