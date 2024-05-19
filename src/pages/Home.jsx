import BookSlider from "../components/BookSlider/BookSlider"

import HeadingTitle from "../components/HeadingTitle/HeadingTitle"

import Hero from "../components/Hero/Hero"

import Services from "../components/Services/Services"

const Home = ({ books }) => {

    return <>
    
        <Hero />

        <Services />

        <HeadingTitle title={ "Most Gifted" } />

        <BookSlider books={ books } />

        <HeadingTitle title={ "Best Seller" } />

        <BookSlider books={ books } />

        <HeadingTitle title={ "Most Wished For" } />

        <BookSlider books={ books } />
    
    </>
  
}
  
export default Home
