import React from 'react';

const Todo = ({ task, handleRemove, id }) => {
    const remove = () => handleRemove(id)
    return (
        <div>
            <h3>{task}</h3>
            <button onClick={remove}>Remove Task</button>
        </div>
    )
}

export default Todo;