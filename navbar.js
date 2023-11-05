import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{
    return (    
        <div className='navBar'>
            <div className='stocks'>
                <Link to="/">Our Weather</Link>
            </div>
            <div className='favourites'>
                <Link to="/favourites">Solutions</Link>
        </div>
            <div className='cart'>
                <Link to="/cart">Support</Link>
            </div>

            <div className='camp'>
                <Link to="/camp">Company</Link>
            </div>

           

        </div>
    )

}

export default Navbar;