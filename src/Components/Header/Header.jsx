import React from 'react';
import './header.scss';
import myPhoto from './../../img/unnamed.png'

const Header = () => {
    return(
        <header>
            <div className="header-left-part"><span>Manuel</span></div>
            <div className="header-center-part">
                <p>My Trello</p>
            </div>
            <div className="header-right-part">
                <img src={myPhoto} alt="personal"/>
            </div>
        </header>
    );
}

export default Header;