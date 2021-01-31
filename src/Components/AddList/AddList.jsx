import React from 'react';

const AddList = (props) => {
    return(
        <button className="addListButton" onClick={props.onAddListClick}>Otra lista</button>
    )
}

export default AddList;