import React, { createContext, useState } from 'react';
import all_product from '../assets/all_product';
import toast from 'react-hot-toast';

export const ShopContext = createContext(null);

// Initialize the cart based on product IDs
const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(product => {
        cart[product.id] = 0; // Use the actual product ID
    });
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => setIsLoggedIn(true);
    const logout = () => {
        setIsLoggedIn(false);
        toast.success('You have been logged out successfully!');
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const newCount = (prev[itemId] || 0) + 1; // Prevent undefined access
            return { ...prev, [itemId]: newCount };
        });

        toast.success(`Product added to cart!`);
        // Log the updated cartItems after setting state
        // console.log('Updated cartItems:', { ...cartItems, [itemId]: (cartItems[itemId] || 0) + 1 });
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCount = (prev[itemId] || 0) - 1;
            return { ...prev, [itemId]: newCount < 0 ? 0 : newCount }; // Prevent negative values
        });
    }

    const getTotalItemPrice = () => {
        let total = 0; // Initialize total as a number
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) { // Check if itemInfo exists
                    total += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return total; // Return total after the loop
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }


    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalItemPrice, getTotalCartItems, isLoggedIn, login, logout };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
