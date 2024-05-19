import React from 'react'

const CartItem = ({ cartItem, addToCart, removeFromCart }) => {

    return <div className="cart-item">

        <img
        
            className='cart-item__img'
            
            src={ `/books/${ cartItem.image }` }
            
            alt={ cartItem.title }
        
        />

        <div className="cart-item__content">

            <div className="cart-item__info">

                <div><b>Title: </b> { cartItem.title }</div>

                <div><b>Author: </b> { cartItem.author }</div>

            </div>

            <div className="cart-item__pricing">

                <div className='cart-item__quantity'>

                    <button 
                    
                        onClick={() => 
                        
                            addToCart({ ...cartItem, quantity: cartItem.quantity - 1 })
                            
                        }

                        disabled={ cartItem.quantity <= 1 }
                    
                    >-</button>

                    <b>{ cartItem.quantity }</b>

                    <button 
                    
                        onClick={() => 
                        
                            addToCart({ ...cartItem, quantity: cartItem.quantity + 1 })
                        
                        }

                        disabled={ cartItem.quantity >= 100 }
                    
                    >+</button>

                </div>

                <div className='cart-item__price'>
                    
                    ${ (cartItem.price * cartItem.quantity).toFixed(2) }
                    
                </div>

            </div>

            <button 
            
                className='cart-item__delete-btn'

                onClick={() => removeFromCart(cartItem.id)}
            
            >

                <i className='bi bi-trash-fill'></i>

            </button>

        </div>

    </div>

}

export default CartItem
