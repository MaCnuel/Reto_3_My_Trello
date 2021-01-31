import React from 'react';
import './header.scss';

const Header = () => {
    return(
        <header>
            <div className="header-left-part"><span>Left</span></div>
            <div className="header-center-part"><img src="./../../img/09-12.jpg" alt="My-Trello" /></div>
            <div className="header-right-part"><span>Right</span></div>
        </header>
    );
}

export default Header;