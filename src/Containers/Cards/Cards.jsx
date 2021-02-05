import React from 'react';
import Card from './../../Components/Card/Card.jsx';

const Cards = (props) => {
    return(
        <div className="cards">
            {props.cardsArray.map(ca => 
                <Card lists={props.cardsArray} element = {ca} />)}
        </div>
        
    )
}

export default Cards;