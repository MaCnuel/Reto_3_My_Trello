import React, {useState} from 'react';
import ButtonAddCard from './../ButtonAddCard/ButtonAddCard.jsx';
import FormAddCard from './../FormAddCard/FormAddCard.jsx';


const AddCard = (props) => {
    const [buttonPushed, setButtonPushed] = useState(false);

    function onButtonChange() {
        setButtonPushed(!buttonPushed);
    }

    const onFormChange = (newCard) => {
        props.onAddCardClick(newCard);
        setButtonPushed(!buttonPushed);
    }

    const onFormReset = () => {
        setButtonPushed(!buttonPushed);
    }

    return(
        <div>{buttonPushed ? 
            <FormAddCard 
                onFormChange ={onFormChange}
                onFormReset = {onFormReset}/>
            : <ButtonAddCard onButtonChange = {onButtonChange}/>}</div>
    )
}

export default AddCard;