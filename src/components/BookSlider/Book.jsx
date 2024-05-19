import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import Rating from "./Rating";

const Book = ({ book, slideWidth, handleBookModal }) => {

    const { addToCart } = useContext(CartContext);

    const { image, title, price, rating, reviews } = book;

    return (

        <div 
        
            className="book-slider__slide"

            style={{ width: `${ slideWidth }px` }}
        
        >

            <img
            
                src={ `/books/${ image }` }
                
                alt={ title }
                
                className="book-slider__slide-img"
            
            />

            <h3 className="book-slider__slide-title">{ title }</h3>

            <Rating rating={ rating } reviews={ reviews } />

            <h4 className="book-slider__slide-price">${ price }</h4>

            <div className="book-slider__slide-actions">

                <button 
                
                    className="book-slider__slide-action"

                    onClick={() => { handleBookModal(book) }}
                
                >

                    <i className="bi bi-eye-fill"></i>

                </button>

                <button 
                
                    className="book-slider__slide-action"

                    onClick={() => addToCart({ ...book, quantity: 1 })}
                
                >

                    <i className="bi bi-cart-plus"></i>

                </button>

            </div>

        </div>

    )

}

export default Book
