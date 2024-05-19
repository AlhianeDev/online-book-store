import Rating from '../BookSlider/Rating';

import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import "./BookModal.css"

const BookModal = ({ book, setShowModal }) => {

    const { addToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);

    const { id, image, title, inStock, rating, reviews, author, price } = book;

    return <div className="book-modal-container">

        <div className="book-modal-content">

            <span 
            
                className='book-modal-close-btn'

                onClick={() => setShowModal(false)}
            
            >

                <i className="bi bi-x"></i>

            </span>

            <div className="book-modal__img">

                <img src={ `/books/${ image }` } alt={ title } />

            </div>

            <div className="book-modal__info">

                <h3 className="book-modal__book-title">{ title }</h3>

                <h3 className="book-modal__book-status">{ 

                    inStock ? "in stock" : "not in stock"
                
                }</h3>

                <Rating rating={ rating } reviews={ reviews } />

                <div className='book-modal__book-author'>

                    <b>Author: </b> { author }

                </div>

                <div className="book-modal__book-price">

                    <b>Price: </b> ${ price }

                </div>

                <div className="book-modal__book-add-to-cart">

                    <input 
                    
                        type="number"
                        
                        min={1} 
                        
                        max={100}

                        value={ quantity }

                        onChange={e => setQuantity(+e.target.value)}
                    
                    />

                    <button 
                    
                        type="submit" 
                        
                        className="book-modal__book-add-to-cart-btn"

                        onClick={() => addToCart({ ...book, quantity })}
                    
                    >

                        <i className='bi bi-cart-plus'></i>
                        
                        Add To Cart
                        
                    </button>

                </div>

                <Link
                
                    to={ `/book/${ id }` } 
                    
                    className='book-modal__book-see-more-details-link'
                
                >
                    
                    See More Details
                    
                </Link>

            </div>

        </div>

    </div>

}

export default BookModal
