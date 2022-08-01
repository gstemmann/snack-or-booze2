import React, { useState } from "react";
import { useEffect } from "react";

const AddForm = ({ addSnack, addDrink}) => {
    const initalState = {
        name: "",
        description: "",
        recipe: "",
        serve: ""
    }
    const [formData, setFormData] = useState(initalState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addSnack(formData);
        addDrink(formData);
        setFormData(initalState);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
                <label>Recipe:</label>
                <input type="text" name="recipe" value={formData.recipe} onChange={handleChange} />
                <label>Serve:</label>
                <input type="text" name="serve" value={formData.serve} onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


 


export default AddForm;
