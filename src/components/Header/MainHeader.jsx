import { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import Navbar from "./Navbar";

const MainHeader = () => {

    const { cartItems } = useContext(CartContext);

    const [toggle, setToggle] = useState(false);

    return (

        <div className="main-header">

            <div className="container">

                <a href="/" className="main-header__logo">

                    <b>Book</b>
                    
                    <i className="bi bi-book"></i>
                    
                    <b>Store</b>

                </a>

                <Navbar toggle={ toggle } setToggle={ setToggle } />

                <Link to="/cart" className="main-header__cart-wrapper">

                    { cartItems.length > 0 && <span>{ cartItems.length }</span> }
                    
                    <i className="bi bi-cart2"></i>
                    
                </Link>

                <button 
                
                    className="main-header__navbar-toggle"

                    onClick={ () => setToggle(prev => !prev) }
                
                >{

                    toggle ? 
                    
                    <i className="bi bi-x"></i> :
                    
                    <i className="bi bi-list"></i>

                }</button>

            </div>

        </div>

    )

}

export default MainHeader
