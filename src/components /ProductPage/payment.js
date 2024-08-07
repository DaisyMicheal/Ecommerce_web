// src/pages/PaymentPage.js
import React, { useState } from 'react'

const PaymentPage = () => {
  const [address, setAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value)
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    // Handle payment processing logic here
    alert('Payment processed successfully')
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>Payment</h2>
        <form onSubmit={handlePaymentSubmit} className='space-y-4'>
          <input
            type='text'
            name='address'
            placeholder='Shipping Address'
            value={address}
            onChange={handleAddressChange}
            required
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          <input
            type='text'
            name='paymentMethod'
            placeholder='Payment Method'
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          <button
            type='submit'
            className='w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200'
          >
            Make Payment
          </button>
        </form>
      </div>
    </div>
  )
}

export default PaymentPage
