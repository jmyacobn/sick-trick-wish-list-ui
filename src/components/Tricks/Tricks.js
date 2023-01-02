import React from 'react';
import Card from '../Cards/Card'
import './Tricks.css';

const Tricks = ( {tricks} ) => {
  const eachTrick = tricks.map(trick => {
    return (
      <Card
        id={trick.id}
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
      />
    )
  })

  return (
    <div className='tricks-container'>
      {eachTrick}
    </div>
  )
}

export default Tricks;