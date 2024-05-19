import React from 'react'

const HeroSlide = ({ additionalClassName, image, title, desc }) => {

    return (

        <div className={ `hero__slide ${ additionalClassName }` }>

            <div className="container">

                <div className="hero__slide-img">

                    <img src={ image } alt="slide book" />

                </div>

                <div className="hero__slide-text">

                    <h1 className='hero__slide-text__title'>{ title }</h1>

                    <p className='hero__slide-text__desc'>{ desc }</p>

                </div>

            </div>

        </div>

    )

}

export default HeroSlide
