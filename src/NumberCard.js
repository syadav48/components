import React from 'react'

function NumberCard() {
    const handleChange = () => {
        return null;
    }
    const handleClick = () => {
        return null;
    }
    const handleSubmit = () => {
        return null;
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Player1: Pick the Number</label>
                <input 
                type='number' 
                onChange={handleChange} />
                <input 
                type='button' 
                value='Pick' 
                onClick={handleClick} />
                <br />
                <p></p>
                <label>Player2: Pick the Number</label>
                <input 
                type='number' 
                onChange={handleChange} />
                <input 
                type='button' 
                value='Pick'
                onClick={handleClick} />
                <br />
                <input 
                type='button' 
                value='Submit' />
            </fieldset>
        </form>
    )
}

export default NumberCard;
