import React, { useContext } from 'react'

import { CartContext } from '../../context/CartContext'

import CartItem from './CartItem'

import OrderSummary from './OrderSummary'

import "./Cart.css"

const CartComponent = () => {

    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (

        <section className="cart">

            <div className="container">

                <h2 className='cart-title'>Your Shopping Cart</h2>

                <div className="cart-wrapper">

                    <div className="cart-items">{

                        cartItems.map(cartItem => <CartItem
                            
                            key={ cartItem.id } 
                            
                            cartItem={ cartItem } 

                            addToCart={ addToCart }
                            
                            removeFromCart={ removeFromCart }
                            
                        />)

                    }</div>

                    <OrderSummary cartItems={ cartItems } />

                </div>

            </div>

        </section>

    )

}

export default CartComponent
