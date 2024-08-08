import React from 'react'
import { Link } from 'react-router-dom'

import product from '../../assets/watch2.jpg'

const Header = () => {
  return (
    <div className='flex items-center justify-center py-20 bg-white'>
      <div className='flex flex-col md:flex-row items-center md:items-start max-w-7xl w-full px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col items-center md:items-start py-16 md:mr-8 lg:mr-16 text-center md:text-left'>
          <h1
            className='text-3xl font-bold text-teal-600'
            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Rich watch
          </h1>
          <p className='mt-2 text-5xl font-bold text-black'>SALE 35% OFF</p>
          <p className='mt-2 text-lg text-black font-sans font-bold'>
            Make a Rich Life
          </p>
          <div className='mt-6'>
            <Link to='/shopNow'>
              <button className='bg-black text-white font-bold py-2 px-6 rounded shadow-lg hover:bg-teal-800'>
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
        <div className='flex-shrink-0 mt-8 md:mt-0'>
          <img
            src={product}
            alt='Product'
            className='w-full max-w-xs h-auto object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
