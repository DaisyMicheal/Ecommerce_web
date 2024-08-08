import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCreditCard,
  faMoneyCheckAlt,
  faWallet,
} from '@fortawesome/free-solid-svg-icons'

import creditCard from '../../assets/visa.svg'
import moneyCheck from '../../assets/mastercard.svg'
import wallet from '../../assets/paypal.svg'

const Footer = () => {
  return (
    <footer className='bg-gray-200 py-12 border-t'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center justify-start w-1/4'>
              <a
                href='/'
                className='text-xl font-bold text-orange-600'
                style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Shop
              </a>
            </div>
            <p className='text-gray-600 py-6'>
              Specialize in providing high quality products
            </p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-gray-800'>Product</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-600 hover:text-gray-800'>
                  All collection
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-gray-800'>
                  Discount
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-bold text-gray-800'>Support</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-gray-600 hover:text-gray-800'>
                  FAQs
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-600 hover:text-gray-800'>
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-bold text-gray-800'>Payments</h3>
            <div className='flex space-x-5'>
              <img src={creditCard} alt='Credit Card' className='h-8 w-8' />
              <img src={moneyCheck} alt='Money Check' className='h-8 w-8' />
              <img src={wallet} alt='Wallet' className='h-8 w-8' />
            </div>
          </div>
        </div>
        <div className='mt-16 text-center text-gray-600'>
          <p>Copyright © 2024 Shopping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
