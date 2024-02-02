import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="Loading" />
            <p>SHOPPER</p>
        </div>

        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:'none',color:'#626262'}} to='/' > Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color:'#626262'}} to='/kids'>Kid</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link style={{textDecoration:'none',color:'#626262'}} to='/login'> <button>Login</button></Link>
           <Link style={{textDecoration:'none',color:'#626262'}} to='/cart'><img src={cart_icon} alt="loading"  /></Link> 
            <div className="nav-cart-count">0</div>
        </div>
   
    </div>
       
  )
}

export default Navbar
