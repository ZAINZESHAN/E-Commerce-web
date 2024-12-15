import React from 'react'
import logo from '../../assets/logo.png'
// import cart_icon from '../../assets/cart_icon.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <div className='nav-menu'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : 'non-active')}
        >
          Shop
        </NavLink>
        <NavLink
          to='/mens'
          className={({ isActive }) => (isActive ? 'active' : 'non-active')}
        >
          Men
        </NavLink>
        <NavLink
          to='/womens'
          className={({ isActive }) => (isActive ? 'active' : 'non-active')}
        >
          Women
        </NavLink>
        <NavLink
          to='/kids'
          className={({ isActive }) => (isActive ? 'active' : 'non-active')}
        >
          Kids
        </NavLink>
      </div>

      <div className='nav-login-cart'>
        <Link to={'/login'}>
          <button>Login</button>
        </Link>
        <Link to={'/cart'}>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
