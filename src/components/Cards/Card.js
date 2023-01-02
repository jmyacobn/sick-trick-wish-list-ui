import React from "react";
import './Card.css';

const Card = ( { id, stance, name, obstacle, tutorial } ) => {
  return (
    <div className='trick-card' key={id}>
      <p>{cap(stance)} {cap(name)}</p>
      <p>Obstacle: {cap(obstacle)}</p>
      <p>Link to Tutuorial: </p>
      <p>{tutorial}</p>
    </div>
  )
}

const cap = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default Card