import React from 'react';
import './ButtonAddList.scss';


const ButtonAddList = (props) => {
    
    const buttonClick = () => {
        props.onButtonChange();
    }

    return(
        <button className="ButtonAddList" onClick={buttonClick}>Añada otra lista</button>
    )
}

export default ButtonAddList;