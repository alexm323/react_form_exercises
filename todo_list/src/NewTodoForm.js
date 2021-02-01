import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        task: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ ...formData });
        setFormData({ todo: "" });

    }
    return (
        <form onSubmit={handleSubmit}>
            <label forHtml='todo'>todo</label>
            <input id='todo' aria-label="todo" name='todo' type="text" value={formData.todo} onChange={handleChange} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;