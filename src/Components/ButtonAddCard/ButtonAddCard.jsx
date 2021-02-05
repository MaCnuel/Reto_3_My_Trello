import React from 'react';
import './ButtonAddCard.scss';


const ButtonAddCard = (props) => {
    
    const buttonClick = () => {
        props.onButtonChange();
    }

    return(
        <button className="ButtonAddCard" onClick={buttonClick}>Añada otra targeta</button>
    )
}

export default ButtonAddCard;