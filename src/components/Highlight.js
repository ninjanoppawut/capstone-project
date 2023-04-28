import React from 'react'
import "./Highlight.css"
import Card from './Card'
import { highlightCard } from './Card'



function Highlight() {
  return (
    <div className='high-container'>
        <div className='high-header'>
            <h2>Specials </h2>
        <button className='online-menu-btn'>
            Online Menu
        </button>
        </div>
      <div className='high-card'>
        {highlightCard.map((card, index) => (
            <Card
                key={index}
                title={card.title}
                description={card.description}
                price={card.price}
                ImageSrc={card.ImageSrc}
            />
        ))}
        </div>
    </div>
  )
}

export default Highlight
