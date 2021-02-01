import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        color: '',
        height: '',
        width: ''
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
        addBox({ ...formData });
        setFormData({ height: "", width: "", backgroundColor: "" });

    }

    return (
        <form onSubmit={handleSubmit}>

            <label forHtml='color'>Color</label>
            <input id='color' aria-label="Color" name='color' type="text" value={formData.backgroundColor} onChange={handleChange} />


            <label forHtml='height'>Height</label>
            <input id='height' aria-label="Height" name='height' type='text' value={formData.height} onChange={handleChange} />



            <label forHtml='width'>Width</label>
            <input id='width' aria-label="Width" name='width' type='text' value={formData.width} onChange={handleChange} />

            <button>Add Color Box</button>
        </form >
    )
}
export default NewBoxForm;
