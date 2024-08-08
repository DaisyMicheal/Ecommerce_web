import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'

// images
import slider1 from '../../assets/slider5.jpg'
import slider2 from '../../assets/gadget15.jpg'
import slider3 from '../../assets/her2.jpg'
import slider4 from '../../assets/men1.jpg'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const slides = [
    {
      image: slider1,
      alt: 'New Arrivals',
    },
    {
      image: slider2,
      alt: 'Slide 1',
    },
    {
      image: slider3,
      alt: 'Slide 2',
    },
    {
      image: slider4,
      alt: 'Slide 4',
    },
  ]

  return (
    <div className='relative bg-white py-28'>
      <div className='absolute inset-0 z-10 flex flex-col items-start justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left'>
        <h1
          className='text-4xl font-bold text-orange-600'
          style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
        >
          Welcome to our shop
        </h1>
        <p className='mt-2 text-lg text-gray-800 py-4'>
          Find the best deals on your favorite products
        </p>
        <div className='mt-12 flex space-x-4'>
          <Link to='/officialStore'>
            <button className=' bg-white text-orange-500 font-bold py-2 px-6 rounded border-1 border-solid border-orange-600 shadow-lg rounded-md hover:bg-orange-600 hover:text-white'>
              Explore more
            </button>
          </Link>

          <Link to='/shopNow'>
            <button className='bg-orange-600 font-bold text-black py-2 px-16 rounded hover:bg-orange-600 hover:text-white'>
              Shop
            </button>
          </Link>
        </div>
      </div>
      <Slider {...settings} className='relative z-0'>
        {slides.map((slide, index) => (
          <div key={index} className='h-96 flex items-center justify-center'>
            <img
              src={slide.image}
              alt={slide.alt}
              className='w-full h-full object-contain'
            />
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .slick-dots li button:before {
          color: orange;
          font-size: bold;
        }

        .slick-dots li.slick-active button:before {
          color: darkorange;
        }
      `}</style>
    </div>
  )
}

export default Hero
