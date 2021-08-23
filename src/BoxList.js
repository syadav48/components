import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import NewBoxForm from './NewBoxForm'

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const createBox = (attrs) => {
        const newBox = {...attrs, id: uuid()}
        setBoxes({
            boxes : [...{boxes}, newBox]
        })
    }
     function renderBoxes() {
        return boxes.map((box) => {
            return <Box key={box.id} attrs={box}/>
        })

     }



    return (
        <div>
            <h1>Make New Color Boxes</h1>
            <NewBoxForm create={createBox} />
            {renderBoxes()}
        </div>
    )
} 

function Box (props){
    const {height, width, bgc} = props.attrs;
    const style = {width: `${width}em`, height: `${height}em`, backgroundColor: bgc}
    return (
        <div>style={style}</div>
    )
}

export default BoxList
