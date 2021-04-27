import React, { useEffect, useRef, useState } from 'react';
import './FormEditCard.scss';

export const FormEditCard = props => {

    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.description)

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onFormChange(name, description);
    }

    const onFormReset = () => {
        props.onFormReset();
    }

    return (
        <form 
            onSubmit={onFormSubmit}
            onReset={onFormReset}>
                <input 
                    type = "text"
                    value = {name}
                    onChange = {handleChangeName} 
                    ref = {inputRef}
                    placeholder = {name}
                />
                <input 
                    type = "text"
                    value = {description}
                    onChange = {handleChangeDescription} 
                    placeholder = {description 
                        ? description
                        : "Introduzca una descripción"}
                />
                <input type="submit" value="Editar Targeta"/>
            <input type="reset" value="X"/>
            </form>
    )
}
