import React from 'react'
import Checkout from '../components/Cheackout'
import Navbar from '../components/Navbar'

const CheckoutPage = ({ cartItems }) => {
  return (
    <div>
      <Navbar />
      <Checkout cartItems={cartItems} />
    </div>
  )
}

export default CheckoutPage
