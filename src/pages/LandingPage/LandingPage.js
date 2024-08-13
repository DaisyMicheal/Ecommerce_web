import React from 'react'
import Navbar from '../../components /LandingPage/Navbar'
import Hero from '../../components /LandingPage/Hero'
import Deals from '../../components /LandingPage/Deals'
import Recommended from '../../components /LandingPage/Recommended'
import MagicDeals from '../../components /LandingPage/MagicDeals'
import Footer from '../../components /LandingPage/Footer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Deals />
      <Recommended />
      <MagicDeals />
      <Footer />
    </div>
  )
}

export default LandingPage
