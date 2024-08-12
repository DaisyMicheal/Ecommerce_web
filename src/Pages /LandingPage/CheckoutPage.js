import React from 'react'
import Checkout from '../../components/LandingPage/Cheackout'
import Navbar from '../../components/LandingPage/Navbar'
const CheckoutPage = ({ cartItems }) => {
  return (
    <div>
      <Navbar />
      <Checkout cartItems={cartItems} />
    </div>
  )
}

export default CheckoutPage
