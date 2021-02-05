import React, {useState} from 'react';
import Cards from './../Cards/Cards.jsx';
import AddCard from './../../Components/AddCard/AddCard.jsx';
import './list.scss';

const List = (props) => {
    const element = props.element;
    const key = props.lists.indexOf(element);

    const [cards, setCards] = useState([]);

    const addCard = (newCard) => {
        setCards([...cards,newCard]);
    };
    return (
        <div>
            <div className="list" key={key}>{element}</div>
            <Cards cardsArray={cards}/>
            <AddCard onAddCardClick = {addCard}/>
        </div>
    );
};

export default List;

