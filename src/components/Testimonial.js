import React from 'react'
import { useState } from 'react'
import './Testimonial.css'
import './Card.css'
import { Input } from '@chakra-ui/react';




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
  {
    user:"Tim",
    score: 5,
    review: "Fair enough"
  },
  {
    user:"Scott",
    score: 5,
    review: "Fair enough"
  },
];

function Slider({onChange}) {
  const [value, setValue] = useState(0);

  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <>
    <input
    className='slider'
    type='range'
    min={0}
    max={10}
    value={value}
    onChange={handleSliderChange}/>
    <span>{value}</span>
    </>
  )
}


function TestimonialData({ user, score, review }) {
  const [rating, setRating] = useState('');

  const handleScoreChange = (newScore) => {
    if (newScore > 7) {
      setRating('Good');
    } else if (newScore >= 4 && newScore <= 6) {
      setRating('Okay');
    } else {
      setRating('Bad');
    }
  };

  return (
    <div className="test-card">
      <div className="test-container">
        <h3>Name: {user}</h3>
        <p>
          Score: <Slider onChange={handleScoreChange} />
        </p>
        <p>Restaurant is {rating}</p>
      </div>
    </div>
  );
}



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
