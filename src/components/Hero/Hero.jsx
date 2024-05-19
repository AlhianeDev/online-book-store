import React, { useEffect, useRef, useState } from 'react'

import firstBook from "../../images/book1.png";

import secondBook from "../../images/book2.png";

import thirdBook from "../../images/book3.png";

import HeroSlide from './HeroSlide';

import "./Hero.css";

const Hero = () => {

    const slideInterval = useRef(null);
 
    const [slideIndex, setSlideIndex] = useState(0);

    const prevSlide = () => {

        if (slideInterval.current) clearInterval(slideInterval.current);

        setSlideIndex(prev => (prev - 1 + 3) % 3);

    }

    const nextSlide = () => {

        if (slideInterval.current) clearInterval(slideInterval.current);

        setSlideIndex(prev => (prev + 1) % 3)

    }

    useEffect(() => {

        slideInterval.current = setInterval(nextSlide, 5000);

        return () => clearInterval(slideInterval.current);

    }, [slideIndex])

    return (

        <section className="hero">

            <button className='hero__left-arrow' onClick={ prevSlide }>

                <i className="bi bi-chevron-double-left"></i>

            </button>

            <div 
            
                className="hero__slides"

                style={{ transform: `translateX(${ slideIndex * -100 }vw)` }}
            
            >

                <HeroSlide 
                
                    additionalClassName={ "first" }

                    image={ firstBook }

                    title={ "Book Store" }

                    desc={ "It's not just reading. it's living the adventure" }

                />

                <HeroSlide 
                    
                    additionalClassName={ "second" }

                    image={ secondBook }

                    title={ "The Books For Everyone" }

                    desc={ "You can read at the bookstore or at home" }

                />

                <HeroSlide 
                    
                    additionalClassName={ "third" }

                    image={ thirdBook }

                    title={ "Check Out The New Titles" }

                    desc={ "We send you the book you want at home" }

                />

            </div>

            <button className='hero__right-arrow' onClick={ nextSlide }>

                <i className="bi bi-chevron-double-right"></i>

            </button>

        </section>

    )

}

export default Hero
