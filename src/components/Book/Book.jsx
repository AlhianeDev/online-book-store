import React, { useContext, useState } from 'react'

import Rating from '../BookSlider/Rating';

import BookFooter from './BookFooter';

import { useParams } from 'react-router-dom'

import { CartContext } from '../../context/CartContext';

import "./Book.css"


const BookComponent = ({ books }) => {

    const { addToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(0);

    const { id } = useParams();

    const book = books.find(book => book.id === +id);

    const { 
        
        image, title, rating, reviews, author,
        
        printLength, language , PublicationDate
    
    } =  book;

    return (

        <section className="book">

            <div className="container">

                <div className="book__content">

                    <div className="book-image">

                        <img src={ `/books/${ image }` } alt={ title } />

                    </div>

                    <div className="book-info">

                        <h3 className="book-title">{ title }</h3>

                        <div className='book-author'>

                            By <span>{ author }</span> (Author)

                        </div>

                        <Rating rating={ rating } reviews={ reviews } />

                        <div className="book-add-to-cart">

                            <input 
                            
                                type="number"
                                
                                min={1} 
                                
                                max={100}

                                value={ quantity }

                                onChange={e => setQuantity(+e.target.value)}
                            
                            />

                            <button 
                            
                                type="submit"
                                
                                className="book-add-to-cart-btn"

                                onClick={() => addToCart({ ...book, quantity })}
                            
                            >

                                <i className='bi bi-cart-plus'></i>
                                
                                Add To Cart
                                
                            </button>

                        </div>

                    </div>

                </div>
                
                <div className="book-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sequi quis mollitia, quidem consequuntur dolor explicabo illum, tempora iusto ipsa suscipit exercitationem ex dolorum quaerat nam quam ducimus voluptates odit assumenda repellendus ratione maxime magnam atque consectetur! Cumque voluptas natus, temporibus quas sint nostrum illo autem ab, perspiciatis praesentium porro.</div>

                <BookFooter 
                
                    printLength={ printLength } 
                    
                    language={ language } 
                    
                    PublicationDate={ PublicationDate }

                />

            </div>

        </section>

    )

}

export default BookComponent
