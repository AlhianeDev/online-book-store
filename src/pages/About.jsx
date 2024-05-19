
const About = () => {

  const AboutUs = {

    padding: "70px 0",

    borderTop: "var(--border)"

  }

  const AboutUsTitle = {

    padding: "0 3px 3px",

    width: "fit-content",

    borderBottom: "2px solid var(--secondary-color)",

    fontSize: "27px",

    color: "var(--text-color)"

  }

  const AboutUsDesc = {

    margin: "17px 0 12px",

    fontWeight: 500,

    color: "var(--text-color)",

  }

  const AboutUsVersion = {

    color: "var(--text-color)"

  }

  return <section style={ AboutUs }>

    <div className="container">

      <h2 style={ AboutUsTitle }>About Us</h2>

      <h4 style={ AboutUsDesc }>We are an online book store</h4>

      <h6 style={ AboutUsVersion }>Version: 1.0.0</h6>

    </div>

  </section>

}

export default About
