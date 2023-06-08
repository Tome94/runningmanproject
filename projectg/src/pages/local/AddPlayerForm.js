import React, { useState } from 'react';
import { generateId } from './utilities';

export function AddPlayerForm(props) {
  const [name, setName] = useState("")

  const handleTextChange = ({target}) =>{
    const {value} = target
    setName(value)
  }
  const handleSubmit = (event) =>{
  
    event.preventDefault()
    if(name.length){
    const player = {
      id: generateId(),
      name: name
    }
    props.addPlayer(player)
    setName("")
  }
  }
  return (
    <form className="AddPlayerForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="Add player name"
        placeholder="Add player name"
        value={name}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
