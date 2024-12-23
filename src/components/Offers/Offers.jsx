import React from 'react'
import './Offers.css'
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right hidden">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
