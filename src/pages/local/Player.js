import React from 'react';

export function Player(props) {
  const { player, removePlayer } = props;

  const handleRemoveClick = () => {
    removePlayer(player.id);
  };

  return (
    <li className="Player">
      <button
        aria-label="Remove player"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{player.name}</div>
    </li>
  );
}
