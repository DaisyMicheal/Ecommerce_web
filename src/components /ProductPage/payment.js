import React, { useContext, useState } from 'react'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { Link } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
} from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { faCreditCard, faTimes } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { formatCurrency } from '../../utils/utils'

// Load Stripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const Payment = ({ cartItems }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [paymentMethod, setPaymentMethod] = useState('card') // default to card
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cardType, setCardType] = useState('visa')

  const handlePaymentSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Payment processed successfully')
      // successful payment logic here
    }
  }

  const handlePayPalClick = () => {
    window.location.href = 'https://www.paypal.com/signin'
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
      <div className='bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-3xl'>
        <h2 className='text-2xl font-bold text-center mb-6 hover:orange-600'>
          Checkout Details
        </h2>
        <div className='md:flex md:justify-between'>
          <div className='w-full md:w-2/3 pr-0 md:pr-8'>
            <div className='mb-6'>
              <label className='block mb-2 text-sm font-bold text-gray-700'>
                Payment Method
              </label>
              <div className='flex justify-around items-center mb-4'>
                <button onClick={() => setPaymentMethod('card')}>
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    size='2x'
                    className='text-gray-700'
                  />
                </button>
                <button onClick={() => setPaymentMethod('ussd')}>
                  <span className='text-xl text-gray-700'>USSD</span>
                </button>
                <button onClick={handlePayPalClick}>
                  <FontAwesomeIcon
                    icon={faCcPaypal}
                    size='2x'
                    className='text-blue-700'
                  />
                </button>
              </div>
              {paymentMethod === 'card' && (
                <form onSubmit={handlePaymentSubmit}>
                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      Card Type
                    </label>
                    <select
                      className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                      value={cardType}
                      onChange={(e) => setCardType(e.target.value)}
                    >
                      <option value='visa'>Visa</option>
                      <option value='mastercard'>MasterCard</option>
                      <option value='amex'>American Express</option>
                    </select>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      Cardholder Name
                    </label>
                    <input
                      type='text'
                      className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                      placeholder='Cardholder Name'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'>
                      Card Number
                    </label>
                    <CardElement className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500' />
                  </div>
                  <button
                    type='submit'
                    disabled={!stripe}
                    className='w-full py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-200 mt-4'
                  >
                    Pay {formatCurrency(totalAmount)}
                  </button>
                </form>
              )}
              {paymentMethod === 'ussd' && (
                <div className='mt-4'>
                  <p>Transfer the payment to the following account details:</p>
                  <p>Account Name: XYZ</p>
                  <p>Account Number: 1234567890</p>
                  <p>Bank: ABC Bank</p>
                </div>
              )}

              <Link
                to='/shopNow'
                className='text-blue-500 flex items-center py-6'
              >
                <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                Go back continue shopping
              </Link>
            </div>
          </div>
          <div className='w-full md:w-1/3 mt-6 md:mt-0'>
            <div className='bg-gray-100 p-4 rounded-lg'>
              <h3 className='text-lg font-bold text-gray-700 mb-4'>
                Order Summary
              </h3>
              <div className='flex justify-between text-gray-700 mb-2'>
                <span>Subtotal:</span>
                <span>{formatCurrency(totalAmount)}</span>
              </div>
              <div className='flex justify-between text-gray-700 mb-2'>
                <span>VAT (21%):</span>
                <span>{formatCurrency(totalAmount * 0.21)}</span>
              </div>
              <div className='flex justify-between text-gray-900 font-bold mb-4'>
                <span>Total (Incl. VAT):</span>
                <span>{formatCurrency(totalAmount * 1.21)}</span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className='w-full py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200 mb-4'
              >
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='text-xl font-bold text-gray-700'>Order Details</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <FontAwesomeIcon
                  icon={faTimes}
                  size='lg'
                  className='text-gray-700'
                />
              </button>
            </div>
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className='mb-4 flex items-start'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-20 h-20 md:w-28 md:h-28 object-cover mr-4 md:mr-6 rounded-lg'
                  />
                  <div>
                    <p className='font-bold text-gray-700'>{item.name}</p>
                    <p className='text-sm text-gray-500'>
                      {formatCurrency(item.price)} x {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const PaymentPage = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <Elements stripe={stripePromise}>
      <Payment cartItems={cartItems} />
    </Elements>
  )
}

export default PaymentPage
