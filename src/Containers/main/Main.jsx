import React, { useState } from 'react';
import Lists from '../Lists/Lists.jsx';
import AddList from '../../Components/AddList/AddList.jsx';
import './Main.scss';

const Main = () => {
    //as Main has both lists and AddList components, 
    //it needs to have the state, so that it can be 
    //passed to both children and be used and modified in
    //here so that it is reflected in both children

    const [lists,setLists] = useState([]);

    const addList = (newList) => {
        setLists([...lists,newList]);
    }

    return (
        <main className="main">
            <Lists listsArray={lists}/>
            <AddList onAddListClick={addList}/>
        </main>
    );
};

export default Main;