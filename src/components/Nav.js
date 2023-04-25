import React from 'react'

function Nav() {
  return (
    <nav>
        <img src='./logo1.png' alt='logo'></img>
        <ul>
          <li><a href="home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="menu">Menu</a></li>
          <li><a href="reserve">Reservations</a></li>
          <li><a href="onlineorder">Online Order</a></li>
          <li><a href="login">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav
