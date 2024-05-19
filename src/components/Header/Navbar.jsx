import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = ({ toggle, setToggle }) => {

    return (

        <nav className={ `main-header__navbar ${ toggle && "active" }` }>

            <Link to="/" onClick={ () => setToggle(false) }>Home</Link>

            <Link to="/authors" onClick={ () => setToggle(false) }>Authors</Link>

            <Link to="/about" onClick={ () => setToggle(false) }>About Us</Link>
            
            <Link to="/contact" onClick={ () => setToggle(false) }>Contact Us</Link>

            <Link to="/register" onClick={ () => setToggle(false) }>Register</Link>

        </nav>

    )

}

export default Navbar
