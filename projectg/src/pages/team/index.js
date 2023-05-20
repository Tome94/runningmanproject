import React, { useState } from 'react';
import { AddPlayerForm } from './AddPlayerForm';
import { Player } from './Player';
import { generateId } from './utilities';
import { Link } from "react-router-dom";


export default function Team() {
  const [players, setPlayers] = useState([
    { 
      id: generateId(),
      name: 'Tommy', 
    },
   
  ]);
const addPlayer = (player) =>{
  setPlayers(players =>[player, ...players])
}
const removePlayer = (playerIdToRemove) =>{
  setPlayers(players => players.filter(player=>player.id !== playerIdToRemove))
}
  return (
    <div className="Team">
      <header>
        <h1>team 1</h1>
      </header>
      <main>
        <AddPlayerForm addPlayer={addPlayer}/>
        <ul className="players">
          {players.map((player) => (
            <Player key={player.id} player={player}  removePlayer={removePlayer} />
          ))}
        </ul>
      </main>
      <footer>
      <Link to="/team"><h2>Next</h2></Link>
      </footer>
    </div>
  );
}
