import { useState } from "react";

import { Link } from "react-router-dom";

const TopHeader = () => {

    const [showSearchForm, setShowSearchForm] = useState(false);

    return (

        <div className="header-top">

            <div className="container">

                <p className="header-top__phone">

                    <i className="bi bi-telephone-fill"></i>

                    +212 696-514234
                    
                </p>

                <Link to="/login" className="header-top__link">
                    
                    <i className="bi bi-person-fill"></i> 
                    
                    Login
                    
                </Link>

                <button 
                
                    className="header-top__open-search-form"

                    style={{
                        
                        color: showSearchForm ?
                        
                        "var(--black-color)" :
                        
                        "var(--white-color)"
                    
                    }}

                    onClick={ () => setShowSearchForm(prev => !prev) }
                
                >{

                    showSearchForm ? 
                    
                    <i className="bi bi-x-lg"></i> :
                    
                    <i className="bi bi-search"></i>

                }</button>

                <form className={`header-top__search-form ${showSearchForm && "active"}`}>
                    
                    <input type="text" placeholder="Search In Book Store..." />
                
                </form>

            </div>

        </div>

  )

}

export default TopHeader
