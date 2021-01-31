import React, { useState } from 'react';
import Lists from '../Lists/Lists.jsx';
import AddList from '../../Components/AddList/AddList.jsx';

const Main = () => {

    const [lists,setLists] = useState([]);

    const addList = () => {
        setLists([...lists,'Hi']);
        console.log({lists});
    }

    return (
        <main className="main">
            <Lists listsArray={lists}/>
            <AddList onAddListClick={addList}/>
        </main>
    );
};

export default Main;