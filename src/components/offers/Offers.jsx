import React from 'react'
import './Offer.css'
import exculucive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offer For You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
      </div>
      <div className="offers-right">
<img src={exculucive_image} alt="Loading" />
      </div>
    </div>
  )
}

export default Offers
