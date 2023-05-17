import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
       <nav className="doormat-nav">
       <h5>Doormat Navigation</h5>
        <ul>
        <li><Link to='/'>Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservation'>Reservations</Link></li>
          <li><Link to='/onlineorder'>Online Order</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
      <nav className="contact-footer">
       <h5>Contact</h5>
        <ul>
          <li><a href="#">Address</a></li>
          <li><a href="#">Phone number</a></li>
          <li><a href="#">email</a></li>
        </ul>
      </nav>
      <nav className="social">
       <h5>Social Media Link</h5>
        <ul>
          <li><a href="http://www.facebook.com">Facebook</a></li>
          <li><a href="http://www.instagram.com">Instagram</a></li>
          <li><a href="http://www.twitter.com">Twitter</a></li>
          <li><a href="http://www.tiktok.com">Tik Tok</a></li>
        </ul>
      </nav>
      <div className="footer-content">
      <p>&copy; Little Lemon 2023</p>
      </div>
    </footer>
  )
}

export default Footer
