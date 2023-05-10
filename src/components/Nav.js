import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav >
      
        <ul className='nav-items'>
          <div className='logo-container'>
            <img src='./logo1.png' alt='logo'></img>
          </div>
          <li><Link to='/'>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservation'>Reservations</Link></li>
          <li><Link to='/onlineorder'>Online Order</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
    </nav>
  )
}

export default Nav
