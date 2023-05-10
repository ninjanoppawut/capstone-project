import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
       <nav className="doormat-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </nav>
      <div className="footer-content">
      <p>&copy; Little Lemon 2023</p>
      </div>
    </footer>
  )
}

export default Footer
