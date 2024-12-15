import React from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <div className="nav-menu">
                <NavLink
                    to="/shop"
                    className={({ isActive }) => (isActive ? 'active' : 'non-active')}
                >Shop
                </NavLink>
                <NavLink
                    to="/men"
                    className={({ isActive }) => (isActive ? 'active' : 'non-active')}
                >Men
                </NavLink>
                <NavLink
                    to="/women"
                    className={({ isActive }) => (isActive ? 'active' : 'non-active')}
                >Women
                </NavLink>
                <NavLink
                    to="/kids"
                    className={({ isActive }) => (isActive ? 'active' : 'non-active')}
                >Kids
                </NavLink>
            </div>

            <div className='nav-login-cart'>
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar
