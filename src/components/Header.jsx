import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-logo'>
                        React-app
                    </div>
                    <div className='header-nav'>
                        <Link to='/' className='nav'>Home</Link>
                        <Link to='/posts' className='nav'>Posts</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;