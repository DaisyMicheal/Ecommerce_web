import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Items from '../components/Items'
import ProductSlider from '../components/Product'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Items />
      <ProductSlider />
    </div>
  )
}

export default LandingPage
