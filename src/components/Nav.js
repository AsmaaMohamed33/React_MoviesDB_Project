import React from 'react';
import Home from './Home'
import { Link } from 'react-router-dom';




const Nav = () => {
    return (
        <nav className='Nav'>
            <div className="nav-wrapper-container">
                <Link className="home" to="/Home">Home</Link> 
                <Link className="home" to="/Search">Search</Link> 
                <Link  className="home" to="/about" >About us</Link>
                <Link className="home"  to="/contact">Contact us</Link>             
            </div>
                
                
        </nav>
    )
}

export default Nav;
