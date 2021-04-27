import React, { useState } from 'react';
import Lists from '../Lists/Lists.jsx';
import AddList from '../../Components/AddList/AddList.jsx';
import './Main.scss';

const Main = () => {

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