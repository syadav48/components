import React, { useState } from 'react'

function NewBoxForm(props) {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [bgc, setBgc] = useState('');
    const handleChange = (e) => {
        setHeight({
            [e.target.name] : e.target.value
        })
        setWidth({
            [e.target.name] : e.target.value
        })
        setBgc({
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.create(height);
        props.create(width);
        props.create(bgc);
        setHeight(0);
        setWidth(0);
        setBgc('');
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='height'>Height</label>
            <input 
            name='height'
            placeholder='Height'
            value={height}
            onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='width'>Width</label>
            <input 
            name='width'
            placeholder='Width'
            value={width}
            onChange={handleChange} />
        </div>
        <div>
            <label htmlFor='bgc'>BackGroundColor</label>
            <input 
            name='bgc'
            placeholder='BackGroundColor'
            value={bgc}
            onChange={handleChange} />
        </div>
        <div>
            <button>Add a new Box!</button>
        </div>
        </form>
    )
}

export default NewBoxForm;
