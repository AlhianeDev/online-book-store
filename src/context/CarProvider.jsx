import React, { useState } from 'react'

import { CartContext } from './CartContext'

const CarProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {

        const isExist = cartItems.find(b => b.id === book.id);

        if (isExist) {

            setCartItems(prevCartItems => prevCartItems.map(cartItem => {

                return cartItem.id === book.id ? book : cartItem

            }))

        } else {

            setCartItems(prevItems => [...prevItems, book])

        }

    }

    const removeFromCart = (id) => {

        const newCartItems = cartItems.filter(cartItems => cartItems.id !== id);

        setCartItems(newCartItems);

    }

    return (

        <CartContext.Provider value={{

            cartItems,

            addToCart,

            removeFromCart

        }}>

            { children }

        </CartContext.Provider>

    )

}

export default CarProvider
