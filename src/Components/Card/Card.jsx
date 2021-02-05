import React from 'react';
import './Card.scss';

const Card = (props) => {
    const element = props.element;
    const key = props.lists.indexOf(element);

    return (
        <div className="card" key={key}><p>{element}</p></div>
    )

}

export default Card;