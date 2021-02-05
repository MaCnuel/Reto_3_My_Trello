import React, { useState } from 'react';
import './FormAddList.scss';

const FormAddList = (props) => {

    const [name, setName] = useState('');
    
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onFormChange(name);
    }

    const resetForm = () => {
        setName('');
        props.onFormReset();
    }

    return(
        <form 
            onSubmit = {onFormSubmit} 
            onReset = {resetForm}>
            <input 
                type = "text"
                value = {name}
                onChange = {handleChange} 
                placeholder = "Introduzca el título de la lista..."
            />
            <input type="submit" value="Añadir Lista"/>
            <input type="reset" value="X"/>
        </form>
    );
}

export default FormAddList;