import React, { useState } from 'react'

function DiceGame() {
    const [number, setNumber] = useState(0);
    const [input, setInput] = useState([])
    const handleClick = () => {
        setNumber(Math.floor(Math.random() * 6 + 1));
        setInput([...input, number]);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.filter((e) => e === 6).length > 1){
            return alert('Your Point is: 0')
        }
        else{
            alert(` Your Point is: ${input.reduce((a, c) => a + c, 0)}`)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <label> Life is a Ludo:</label>
            <input type='text' value={number} />
            <input type='button' value='Roll' onClick={handleClick} />
            <br />
            <input type='submit' value='Submit' />
            </fieldset> 
        </form>
    )
}

export default DiceGame;
