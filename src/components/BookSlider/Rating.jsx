import React from 'react'

const Rating = ({ rating, reviews }) => {

    const stars = [];

    for (let index = 1; index <= 5; index++) {

        if (rating >= index) {

            stars.push(<i className="bi bi-star-fill" key={ index }></i>)

        } else if (rating >= ((index - 1) + 0.5)) {

            stars.push(<i className="bi bi-star-half" key={ index }></i>);

        } else {

            stars.push(<i className="bi bi-star" key={ index }></i>);

        }
        
    }

    return (

        <div className="book-slider__slide-rating">

            <div className="book-slider__slide-rating__stars">
                
                { stars }
                
            </div>

            <div className="book-slider__slide-rating__reviews">
                
                { reviews } reviews
                
            </div>

        </div>

    )

}

export default Rating
