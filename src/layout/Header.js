import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [shownav, setShownav] = useState(false);
    return (
        <div className={shownav ? "navbar responsive" : "navbar"}>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/">Blog</NavLink>
            <a href="#" className='icon' onClick={() => setShownav(!shownav)}>&#9776;</a>
        </div>
    )
}

export default Header