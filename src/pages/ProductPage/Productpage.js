import React from 'react'
import Navbar from '../../components /ProductPage/Navbar'
import Header from '../../components /ProductPage/Header'
import Items from '../../components /ProductPage/Items'
import ProductSlider from '../../components /ProductPage/Product'

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
