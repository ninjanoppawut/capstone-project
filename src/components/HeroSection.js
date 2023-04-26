import React from 'react'
import "./HeroSection.css"

function HeroSection({buttonLabel}) {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
            Sed et arcu sit amet enim scelerisque.</p>
            <button className='reserve-btn'>{buttonLabel}</button>
        </div>
        <div className='food-container'>
            <img src='./restauranfood.jpg' alt='restaurant_food'/>
        </div>
    </div>
  )
}

export default HeroSection
