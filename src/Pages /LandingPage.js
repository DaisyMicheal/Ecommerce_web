import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Deals from '../components/Deals'
import Recommended from '../components/Recommended'
import MagicDeals from '../components/MagicDeals'
import Footer from '../components/Footer'

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
