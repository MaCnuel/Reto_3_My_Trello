import React from 'react';
import List from './../List/List.jsx'
import './Lists.scss';


const Lists = (props) =>{
    return(
        <div className="lists">
            {props.listsArray.map(li => <List lists={props.listsArray} element = {li} />)}
        </div>
        
    )
}

export default Lists;