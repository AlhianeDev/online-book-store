import React from 'react'

const FooterSocialMedia = () => {

    return (

        <div className="footer__social-media">

            <h3 className="footer__social-media__title">
                
                Follow us on social media
                
            </h3>

            <div className="footer__social-media_icons">

                <a href="/"><i 
                    
                    className="bi bi-instagram" 
                    
                    style={{ color: "#c32aa3" }}
                    
                ></i></a>

                <a href="/"><i 
                    
                    className="bi bi-telegram" 
                    
                    style={{ color: "#0088cc" }}
                    
                ></i></a>

                <a href="/"><i 
                    
                    className="bi bi-facebook" 
                    
                    style={{ color: "#1877f2" }}
                    
                ></i></a>

                <a href="/"><i 
                    
                    className="bi bi-youtube" 
                    
                    style={{ color: "#ff0000" }}
                    
                ></i></a>

                <a href="/"><i 
                    
                    className="bi bi-twitter" 
                    
                    style={{ color: "#1da1f2" }}
                    
                ></i></a>

            </div>

        </div>

    )

}

export default FooterSocialMedia
