import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import AboutDetails from './AboutDetails'

const MainContent = () => {
    return (
        <>
            <Home />
            <AboutUs />
            <AboutDetails />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default MainContent