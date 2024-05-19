import React from 'react'

const BookFooter = ({ printLength, language, PublicationDate }) => {

    return (

        <div className="book-footer-info">

            <div className="book-foot-info">

                <small>Print Length</small>

                <i className='bi bi-file-earmark-break'></i>

                <b>{ printLength } Pages</b>

            </div>

            <div className="book-foot-info">

                <small>Language</small>

                <i className='bi bi-globe'></i>

                <b>{ language }</b>

            </div>

            <div className="book-foot-info">

                <small>Publication date</small>

                <i className='bi bi-calendar3'></i>

                <b>{ PublicationDate }</b>

            </div>

        </div>

    )

}

export default BookFooter
