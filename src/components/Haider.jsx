import React from 'react';
import './component.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext'; // Adjust the path as necessary

const Haider = () => {
    const { user, logout } = useAuth(); // Get user from AuthContext
    const handleLogout = () => {
        logout();
    };

    return (
        <div className='bg-black flex flex-row justify-between items-center text-xl font-normal p-4 shadow-md'>
            <div className='text-white font-bold'>Logo</div>
            <div className='flex space-x-6'>
                <NavLink
                    to={'/'}
                    className={({ isActive }) => (isActive ? 'text-green-400 font-semibold' : 'text-white hover:text-green-300')}
                    aria-label="Home"
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/dashboard'}
                    className={({ isActive }) => (isActive ? 'text-green-400 font-semibold' : 'text-white hover:text-green-300')}
                    aria-label="Dashboard"
                >
                    Dashboard
                </NavLink>
                <NavLink
                    to={'/product'}
                    className={({ isActive }) => (isActive ? 'text-green-400 font-semibold' : 'text-white hover:text-green-300')}
                    aria-label="Products"
                >
                    Product
                </NavLink>
            </div>
            <div className='flex items-center gap-4'>
                {/* Conditionally render Login and Sign Up links */}
                {!user ? (
                    <>
                        <NavLink
                            to={'/login'}
                            className={({ isActive }) => (isActive ? 'text-green-400 font-semibold' : 'text-white hover:text-green-300')}
                            aria-label="Login"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to={'/signup'}
                            className={({ isActive }) => (isActive ? 'text-green-400 font-semibold' : 'text-white hover:text-green-300')}
                            aria-label="Sign Up"
                        >
                            Sign Up
                        </NavLink>
                    </>
                ) : (
                    <div className="flex items-center gap-4">
                        <span className="text-white">Welcome, {user.email}</span>
                        <button
                            onClick={handleLogout}
                            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                            aria-label="Logout"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Haider;
