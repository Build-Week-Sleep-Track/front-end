import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <h1 className='sleep-tracker'>Sleep Tracker</h1>
            <div className='a'>
            <Link to='/home-page' className='home'>Home</Link>
            <Link to='/'className='logout'>Logout</Link>
            </div>
        </nav>
    );
};

export default NavBar;