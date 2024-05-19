import "./ContactUs.css"

const ContactUs = () => {

    return (

        <section className="contact-us">

            <div className="container">

                <div className="contact-us__info">

                    <div className="contact-us__info-item">

                        <i className="bi bi-house-fill contact-us__info-item__icon"></i>

                        <h4 className="contact-us__info-item__title">Address</h4>

                        <p className="contact-us__info-item__desc">
                            
                            Iraq-Baghdad-Alrashid St
                            
                        </p>

                    </div>

                    <div className="contact-us__info-item">

                        <i className="bi bi-telephone-fill contact-us__info-item__icon"></i>

                        <h4 className="contact-us__info-item__title">Phone</h4>

                        <p className="contact-us__info-item__desc">
                            
                            123-456-789
                            
                        </p>

                    </div>

                    <div className="contact-us__info-item">

                        <i className="bi bi-envelope-fill contact-us__info-item__icon"></i>

                        <h4 className="contact-us__info-item__title">Email</h4>

                        <p className="contact-us__info-item__desc">
                            
                            info@fakeemail.com
                            
                        </p>

                    </div>

                </div>

                <form className="contact-us__form">

                    <h3 className="contact-us__form-title">Contact Us</h3>

                    <div>

                        <input type="text" placeholder="Name *" />

                        <input type="text" placeholder="Subject *" />

                        <input type="text" placeholder="Email *" />

                        <textarea placeholder="Message *"></textarea>

                    </div>

                    <button type="submit">Send</button>
                
                </form>

            </div>

        </section>

    )

}

export default ContactUs
