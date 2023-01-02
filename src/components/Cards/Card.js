import React from "react";
import './Card.css';

const Card = ( { id, stance, name, obstacle, tutorial } ) => {
  return (
    <div className='trick-card' key={id}>
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutuorial: </p>
      <p>{tutorial}</p>
    </div>
  )
}

export default Card