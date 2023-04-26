import React from 'react'
import './Card.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const highlightCard = [
    {
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        price: "$12.99",
        ImageSrc: require('../images/greeksalad.jpg')
    },
    {
        title: "Bruchetta",
        description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: "$5.99",
        ImageSrc: require('../images/bruchetta.jpg')
    },
    {
        title: "Lemon Dessert",
        description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        price: "$5.00",
        ImageSrc: require('../images/lemondessert.jpg')
    }
]

function Card({title, description, price, ImageSrc}) {
  return (
    <div className='card'>
        <img src={ImageSrc} alt={title} ></img>
        <div className='card-container'>
        <h2 className="card-title">{title}</h2>
        <p className="card-price">{price}</p>
        <p className="card-description">{description}</p>
        <h5>Order Delivery</h5>
        </div>
    </div>
  )
}

export default Card
