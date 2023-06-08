import React, { useState } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { Player } from './Player';
import { generateId } from './utilities';
import { Link } from "react-router-dom";

export default function Team() {
  const [team1Players, setTeam1Players] = useState([
    { 
      id: generateId(),
      name: 'Tommy', 
    },
  ]);

  const [team2Players, setTeam2Players] = useState([
    { 
      id: generateId(),
      name: 'John', 
    },
  ]);

  const addPlayer = (player, team) => {
    if (team === 1) {
      setTeam1Players(players => [player, ...players]);
    } else if (team === 2) {
      setTeam2Players(players => [player, ...players]);
    }
  };

  const removePlayer = (playerIdToRemove, team) => {
    if (team === 1) {
      setTeam1Players(players => players.filter(player => player.id !== playerIdToRemove));
    } else if (team === 2) {
      setTeam2Players(players => players.filter(player => player.id !== playerIdToRemove));
    }
  };

  return (
    <div className="Team">
      <header>
        <h1>Team 1</h1>
      </header>
      <main>
        <AddPlayerForm addPlayer={player => addPlayer(player, 1)} />
        <ul className="players">
          {team1Players.map((player) => (
            <Player key={player.id} player={player} removePlayer={playerId => removePlayer(playerId, 1)} />
          ))}
        </ul>
      </main>

      <header>
        <h1>Team 2</h1>
      </header>
      <main>
        <AddPlayerForm addPlayer={player => addPlayer(player, 2)} />
        <ul className="players">
          {team2Players.map((player) => (
            <Player key={player.id} player={player} removePlayer={playerId => removePlayer(playerId, 2)} />
          ))}
        </ul>
      </main>

      <footer>
        <Link to="/game"><h2>Play</h2></Link>
      </footer>
    </div>
  );
}
