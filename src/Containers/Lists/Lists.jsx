import React from 'react';


const Lists = (props) =>{
    return(
        <div className="lists">
            <div>
                {props.listsArray.map(li => <div key={props.listsArray.indexOf(li)}>{li}</div>)} {/*Necesito meter la key diferente para cada elemento de la lista. Si no, react no los puede reconocer*/}
            </div>
            {/*<button onClick={addList}>Añadir Lista</button>*/}
        </div>
        
    )
}

export default Lists;