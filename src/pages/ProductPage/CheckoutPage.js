import React from 'react'
import Checkout from '../../components /ProductPage/Cheackout'
import Navbar from '../../components /ProductPage/Navbar'
const CheckoutPage = ({ cartItems }) => {
  return (
    <div>
      <Navbar />
      <Checkout cartItems={cartItems} />
    </div>
  )
}

export default CheckoutPage
