import React from 'react'

const Author = ({ author }) => {

  return (

    <div className="author">

        <img 
        
            src={ `${ author.image }` }
            
            alt={ author.name }

            className='author-image'
        
        />

        <h3 className="author-name">{ author.name }</h3>

    </div>

  )

}

export default Author
