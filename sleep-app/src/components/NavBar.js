import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1>Sleep Tracker</h1>
            <Link to='/home-page'>Home</Link>
            <Link to='/'>Logout</Link>
           
        </nav>
    );
};

export default NavBar;