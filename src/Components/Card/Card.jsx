import React, { useState } from 'react';
import { FormEditCard } from '../FormEditCard/FormEditCard.jsx';
import './Card.scss';
import editButton from '../../img/edit_button.svg'
import editedButton from '../../img/edited.svg'



const Card = (props) => {
    //const element = props.element;
    const [name, setName] = useState(props.element)
    const [description, setDescription] = useState('')
    const keym = props.lists.indexOf(name);
    const [buttonPushed, setButtonPushed] = useState(false);

    function onButtonChange() {
        setButtonPushed(!buttonPushed);
    }

    const onFormChange = (name, description) => {
        setName(name)
        setDescription(description)
        setButtonPushed(!buttonPushed);
    }

    const onFormReset = () => {
        setButtonPushed(!buttonPushed);
    }

    return (
        <div className="card" key={keym}>
            <div className="cardpart">
                <div>
                    <p>{name}</p>
                    {description && 
                        <img src={editedButton} alt="Edited"/>
                    }
                </div>
                <div>
                    <button onClick={onButtonChange}>
                        <img src={editButton} alt="Edit"/>
                    </button>
                </div>
            </div>
            
            <div className="editform">
                {buttonPushed ?
                    <FormEditCard
                        name = {name}
                        description = {description}
                        onFormChange={onFormChange}
                        onFormReset={onFormReset}>

                    </FormEditCard>
                    :<></>
                }
            </div>
        </div>
        
    )

}

export default Card;