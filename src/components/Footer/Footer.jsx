import FooterSocialMedia from "./FooterSocialMedia";

import FootLinks from "./FootLinks";

import FootContact from "./FootContact";

import FootAboutUs from "./FootAboutUs";

import "./Footer.css";

const Footer = () => {

    return (

        <footer className="footer">

            <div className="container">

                <FooterSocialMedia />

                <div className="footer__foots">

                    <FootLinks />

                    <FootContact />

                    <FootAboutUs />

                </div>

            </div>

        </footer>

    )

}

export default Footer
