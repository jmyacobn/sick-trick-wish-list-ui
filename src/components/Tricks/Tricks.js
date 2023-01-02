import React from 'react';
import Card from '../Cards/Card'
import './Tricks.css';

const Tricks = ( {tricks} ) => {
  return (
    <div className='tricks-container'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Tricks;