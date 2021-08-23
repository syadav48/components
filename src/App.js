import React, { useState } from 'react'

function JackPot(props) {
  const[value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    return new Set(value.split('')).size === 1 ? alert('Congrats!! You Won the Jackpot') : alert('Better Luck Next Time');
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          Enter Your JackPot-No:
          <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
          <input type='submit' value='Submit' />
        </fieldset>
        
      </form>
    </div>
  )
}

export default JackPot;

