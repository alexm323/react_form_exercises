import React from 'react';

const Box = ({ backgroundColor, width, height, id, handleRemove }) => {
    const boxStyle = {
        backgroundColor,
        height,
        width
    }
    const remove = () => handleRemove(id)
    return (
        <div>
            <div
                className='color-box'
                style={boxStyle}
            >
                {backgroundColor}

            </div>
            <button onClick={remove}>Remove Box</button>
        </div >
    )
}

export default Box;