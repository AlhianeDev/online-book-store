import { useEffect, useState } from "react";

import Book from "./Book"

import "./BookSlider.css"
import BookModal from "../BookModal/BookModal";

const BookSlider = ({ books }) => {

    const [slideIndex, setSlideIndex] = useState(0);

    const [slideInfo, setSlideInfo] = useState({visibleSlides: 0, slideWidth: 0 });

    const [showModal, setShowModal] = useState(false);

    const [book, setBook] = useState(null);

    const prevSlide = () => {

        setSlideIndex(prev => prev - 1);

    }

    const nextSlide = () => {

        setSlideIndex(prev => prev + 1)

    }

    const updateSlideWidth = (windowWidth) => {

        let visibleSlides;

        const scrollBarWidth = windowWidth - document.documentElement.clientWidth;

        if (windowWidth <= 768) visibleSlides = 1;

        else if (windowWidth <= 992) visibleSlides = 2;

        else if (windowWidth <= 1200) visibleSlides = 3;

        else if (windowWidth > 1200) visibleSlides = 4;

        setSlideInfo({

            slideWidth: (
                
                windowWidth - (visibleSlides === 1 ? 0 : scrollBarWidth)
            
            ) / visibleSlides,

            visibleSlides

        })

    }

    const handleBookModal = (book) => {

        setShowModal(true);

        setBook(book);

    }

    useEffect(() => {

        updateSlideWidth(window.innerWidth);

        window.addEventListener("resize", () => {

            updateSlideWidth(window.innerWidth)

        });

        return () => window.removeEventListener("resize",() => {

            updateSlideWidth(window.innerWidth)

        });

    }, [])

    return (

        <section className="book-slider">

            {
                slideIndex !== 0 && <button 
                
                    className='book-slider__left-arrow' 
                    
                    onClick={ prevSlide }
                
                ><i className="bi bi-chevron-double-left"></i></button> 
            
            }

            <div 
            
                className="book-slider__slides"

                style={{ 
                    
                    transform: `translateX(-${ slideIndex * slideInfo.slideWidth }px)` 
                
                }}
            
            >{ books.map(book => <Book
                    
                key={ book.id } 
                
                book={ book }

                slideWidth={ slideInfo.slideWidth }

                handleBookModal={ handleBookModal }
                    
            />) }</div>

            {
            
                slideIndex !== (books.length - (slideInfo.visibleSlides)) && 
                
                <button 
                
                    className='book-slider__right-arrow'
                    
                    onClick={ nextSlide }
                
                ><i className="bi bi-chevron-double-right"></i></button> 
            
            }

            { 
            
                showModal && 
                
                <BookModal book={ book } setShowModal={ setShowModal } /> 
            
            }

        </section>

    )

}

export default BookSlider
