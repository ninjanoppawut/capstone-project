import React from 'react'
import './Testimonial.css'
import './Card.css'


const testCard = [
  {
    user:"Alxex",
    score: 10,
    review: "restaurant is good",
  },
  {
    user:"Bill",
    score: 2,
    review: "restaurant is bad"
  },
  {
    user:"Clay",
    score: 6,
    review: "restaurant is mediocre"
  },
  {
    user:"David",
    score: 7,
    review: "Perfect for me"
  },
  {
    user:"Sean",
    score: 5,
    review: "Fair enough"
  },
];

function TestimonialData({user, score, review}) {
  return (
    <div className='test-card'>
      <div className='test-container'>
        <h3>Name:{user}</h3>
        <p>Score:{score}</p>
        <p>{review}</p>
      </div>
    </div>
  )
};


function Testimonial() {
  return (
    <div className='main-container'>
      <h1>Testimonial</h1>
      <div>
        {testCard.map(({user, score, review}, index) => (
          <TestimonialData
          key={index}
          user={user}
          score={score}
          review={review}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonial
