import React, { useRef } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Import images
import deal1 from '../../assets/deal1.jpg'
import deal2 from '../../assets/deal2.jpg'
import deal3 from '../../assets/deal3.jpg'
import deal4 from '../../assets/deal4.jpg'
import deal5 from '../../assets/deal5.jpg'
import deal6 from '../../assets/deal6.jpg'

const Recommended = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <></>, // Disable default arrows
    prevArrow: <></>, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const products = [
    {
      id: 1,
      name: 'Headset',
      price: '₦45,000',
      oldPrice: '₦70,000',
      image: deal1,
    },
    {
      id: 2,
      name: 'Toaster',
      price: '₦30,000',
      oldPrice: '₦50,000',
      image: deal4,
    },
    {
      id: 3,
      name: 'Cat Headphone',
      price: '₦20,000',
      oldPrice: '₦35,000',
      image: deal2,
    },
    {
      id: 4,
      name: 'Microwave',
      price: '₦25,000',
      oldPrice: '₦40,000',
      image: deal3,
    },
    {
      id: 5,
      name: 'Infinix smart ',
      price: '₦25,000',
      oldPrice: '₦40,000',
      image: deal5,
    },
    {
      id: 6,
      name: 'Redmin pro',
      price: '₦25,000',
      oldPrice: '₦40,000',
      image: deal6,
    },
  ]

  return (
    <div className='bg-gray-50 py-12 relative shadow-lg overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='flex justify-between items-center font-sans'>
          <h2 className='text-4xl font-bold text-gray-800'>
            Recommended for you
          </h2>
          <Link
            to='/seeAll'
            href='/see-all'
            className='text-gray-700 hover:text-orange-600'
          >
            See All &raquo;
          </Link>
        </div>
        <Slider {...settings} ref={sliderRef} className='mt-8'>
          {products.map((product) => (
            <div key={product.id} className='p-4'>
              <div className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-50'>
                <div className='flex justify-center items-center h-48'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='max-w-full max-h-full object-contain 	'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='text-lg font-medium text-gray-800 hover:text-orange-600'>
                    {product.name}
                  </h3>
                  <p className='text-lg font-bold text-gray-800'>
                    {product.price}
                  </p>
                  <p className='text-sm text-gray-500 line-through'>
                    {product.oldPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className='absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none z-10'
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className='text-4xl text-orange-600 p-1'
        />
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()}
        className='absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none z-10'
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className='text-4xl text-orange-600 p-1'
        />
      </button>
    </div>
  )
}

export default Recommended
