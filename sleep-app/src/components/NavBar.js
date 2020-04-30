import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to='/home-page'>Home</Link>
            <Link to='/login'>Logout</Link>
           
        </div>
    );
};

export default NavBar;