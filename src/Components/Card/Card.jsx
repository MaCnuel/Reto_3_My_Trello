import React from 'react';

const card = (props) => {
    const element = props.element;
    const key = props.lists.indexOf(element);

    return (
        <div className="card" key={key}>{element}</div>
    )

}

export default card;