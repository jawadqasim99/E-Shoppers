import React from 'react'
import "./Footer.css"
import footer_logo from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from "../assets/pintester_icon.png"
import whatsapp_icon from "../assets/whatsapp_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Loading"/>
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Compny</li>
        <li>Products</li>
       
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footrt-social-icons">
        <div className="footer-icons-containers">
            <img src={instagram_icon} alt="loading" />
            </div>
            <div className="footer-icons-containers">
            <img src={pintester_icon} alt="loading" />
            </div>
            <div className="footer-icons-containers">
             <img src={whatsapp_icon} alt="loading" />
            </div>
           
           
     
      </div>
      <hr />
      <div className="footer-copyright">
        
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
