import React from 'react'
import './Info.css'

function Info() {
  return (
    <div className='info-container'>
         <div className='info-text'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
                Amet minim mollit non ullamco est sit aliqua dolor do amet sint. <br/>
                Velit officia consequat duis enim velit mollit. <br/>
                Exercitation veniam consequat sunt nostrud amet.<br/>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.<br/>
                Velit officia consequat duis enim velit mollit.
            </p>
      </div>
        <div className='info-image'>
            <img className='owner-img' src='./owner.jpg' alt='owner'/>
            <img className='rest-img' src='./restaurant.jpg' alt='restuarant'/>
        </div>
    </div>
  )
}

export default Info
