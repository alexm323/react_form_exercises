import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box'
import NewBoxForm from './NewBoxForm'

const BoxList = () => {
    // we need to keep track of the state of the list so we can add boxes to it 
    const [boxes, setBoxes] = useState([])
    // we want to make a function that we can pass down to our Box component as a prop using the data that we get back from our NewBoxForm component 
    const addBox = (newBox) => {
        // update the array but we are not mutating the original , we are copying it and adding a new property/box to it
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }
    // add a method that we can use to remove a box with their specific id
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));

    }
    return (
        <div>
            <h2>Box Factory</h2>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(box => < Box handleRemove={removeBox} backgroundColor={box.backgroundColor} id={box.id} height={`${box.height}px`} width={`${box.width}px`} />
                )}
            </div>


        </div>

    )
}
export default BoxList;