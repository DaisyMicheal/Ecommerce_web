import React from 'react'
import Header from '../../components /ProductPage/Header'
import Items from '../../components /ProductPage/Items'
import ProductSlider from '../../components /ProductPage/Product'
import Navbar from '../../components /LandingPage/Navbar'

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Items />
      <ProductSlider />
    </div>
  )
}

export default ProductPage
