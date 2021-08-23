import React, { useState } from 'react'

const initialValues ={
    R1: '',
    X1: '',
    Y1: '',
    R2: '',
    X2: '',
    Y2: ''
};

function CircleCollison() {
    const[values, setValues] = useState(initialValues);
    
    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log( e.target, value, name)
        setValues(prev =>{ 
            return {
                ...prev,
                [name]: value,
            }
        });
        // console.log(Object.values(values));
        
    };   
    
    const handleSubmit = (e) => {
        console.log('values');
        console.log(values);    
        e.preventDefault();
      //const dist = Math.sqrt(Math.pow((X2 - X1),2) + Math.pow((Y2 - Y1),2));
      //const raddist = R2 + R1;
      //return raddist > dist ? alert('Circle Intersecting each other') : alert('Circle not Intersecting')
    }
    console.log('values >>>', values);
    return (
        <form>
            <fieldset>
                <legend>Circle-Collision:</legend>
                <label>Enter The R1 Value</label>
                <input type='number' value={values.R1} name={'R1'} onChange={handleInputChange} /><br />
                <label>Enter The X1 Value</label>
                <input type='number' value={values.X1} name={'X1'} onChange={handleInputChange} /><br />
                <label>Enter The Y1 Value</label> 
                <input type='number' value={values.Y1} name={'Y1'} onChange={handleInputChange} /><br />
                <p></p>
                <label>Enter The R2 Value</label>
                <input type='number' value={values.R2} name={'R2'} onChange={handleInputChange} /><br />
                <label>Enter The X2 Value</label>
                <input type='number' value={values.X2} name={'X2'} onChange={handleInputChange} /><br />
                <label>Enter The Y2 Value</label> 
                <input type='number' value={values.Y2} name={'Y2'} onChange={handleInputChange}/><br />
                
            </fieldset>
                <button onClick={handleSubmit}> submit </button>
        </form>
    )
}

export default CircleCollison;
