import React, { useState } from 'react'

function RockPaperScissor() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const obj = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper'
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value1 === value2) {return alert('Match Draw')}
        return obj[value1] === value2 ? alert('Winner is Player 1') : alert('Winner is Player2');
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Enter the Value:</legend>
                <label for='player1'>Enter the Value of Player1</label>
                <input type='text' id='player1' value={value1} onChange={(e) => setValue1(e.target.value)} />
                <br />
                <label for='player2'>Enter the Value of Player2</label>
                <input type='text' id='player2' value={value2} onChange={(e) => setValue2(e.target.value)} />
                <br />
                <input type='submit' value='submit' />
            </fieldset>
        </form>
    )
}

export default RockPaperScissor;
