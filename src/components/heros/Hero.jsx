import React from 'react'
import './Hero.css'
import hand from "../assets/hand_icon.png"
import arrow_icon from "../assets/arrow.png"
import hero_img from "../assets/hero_image.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-icon">
                    <p>new</p>
                    <img src={hand} alt="loading"  />
                </div>
                <p> collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-letest-btn">
                <div>Letest Collection</div>
                <img src={arrow_icon} alt="loading"  />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="loading" />
        </div>
      
    </div>
  )
}

export default Hero
