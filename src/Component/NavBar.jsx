import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="left-container">
            <h3>Shopping cart</h3>
        </div>
        <div className="right-container">
            <Link to={'/'}><h3>Home Page</h3></Link>
            <Link to={'/cart'}><h3>Cart Page</h3></Link>
        </div>
    </div>
  )
}

export default NavBar