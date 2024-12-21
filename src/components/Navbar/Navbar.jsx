import React, { useContext, useRef } from 'react';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../../Contexts/ShopContext';
import { IoIosArrowForward } from "react-icons/io";

const Navbar = ({ authType }) => {
  const { getTotalCartItems, isLoggedIn, logout } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdownRef = useRef();

  const handleDropDown = () => {
    menuRef.current.classList.toggle('nav-menu-visible');
    dropdownRef.current.classList.toggle('open'); // Toggle the rotation class
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <button
        onClick={handleDropDown}
        className="nav-dropdown"
        ref={dropdownRef}
      >
        <IoIosArrowForward />
      </button>
      <div ref={menuRef} className='nav-menu'>
        {/* Navigation Links */}
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'non-active')}>Shop</NavLink>
        <NavLink to='/mens' className={({ isActive }) => (isActive ? 'active' : 'non-active')}>Men</NavLink>
        <NavLink to='/womens' className={({ isActive }) => (isActive ? 'active' : 'non-active')}>Women</NavLink>
        <NavLink to='/kids' className={({ isActive }) => (isActive ? 'active' : 'non-active')}>Kids</NavLink>
      </div>

      <div className='nav-login-cart'>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to={'/login'}>
            <button>{authType}</button>
          </Link>
        )}
        <Link to={'/cart'}>
          <img src={cart_icon} alt='' />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
