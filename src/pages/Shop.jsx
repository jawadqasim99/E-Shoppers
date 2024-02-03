import React from 'react'
import Hero from '../components/heros/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollection from '../components/NewCollections/NewCollection'



const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
   
    </div>
  )
}

export default Shop
