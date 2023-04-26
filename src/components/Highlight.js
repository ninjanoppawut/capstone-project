import React from 'react'
import "./Highlight.css"
import Card from './Card'

function Highlight() {
  return (
    <div className='high-container'>
      <h2 className='high-text'>
        Specials
      </h2>
    <div className='menu-btn'>
        <button>
            Online Menu
        </button>
    </div>
    <div>
        <Card/>
    </div>
    </div>
  )
}

export default Highlight
