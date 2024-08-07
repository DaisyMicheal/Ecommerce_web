import React, { useContext, useState } from 'react'
import Slider from 'react-slick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CartContext } from '../../context/CartContext'
import { formatCurrency } from '../../utils/utils'
import productImage from '../../assets/bg1.jpg'
import oriamo from '../../assets/product1.jpg'
import phone from '../../assets/product2.jpg'
import Adidas from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product5 from '../../assets/product5.jpg'
import product7 from '../../assets/product7.jpg'
import product8 from '../../assets/product8.jpg'
import product9 from '../../assets/product9.jpg'
import product10 from '../../assets/product10.jpg'

const ProductSlider = () => {
  const { addToCart } = useContext(CartContext)
  const [successMessage, setSuccessMessage] = useState('')

  const products = [
    {
      id: 1,
      image: productImage,
      name: '2024 SmartWatch Series7 Custom Dial Men Women Heart Rate Monitor',
      price: 23599,
      originalPrice: 47698,
      discount: 51,
      rating: 4,
    },
    {
      id: 2,
      image: oriamo,
      name: 'Oraimo Traveler Link 27 27000mAh Micro-USB Lightning TypeC USBA ',
      price: 34020,
      originalPrice: 50427,
      discount: 35,
      rating: 4,
    },
    {
      id: 3,
      image: phone,
      name: 'C Idea 8 Inch Tablet,Android 12 Portable Light Dual Camera Sim 256GB',
      price: 78000,
      originalPrice: 109999,
      discount: 29,
      rating: 4,
    },
    {
      id: 4,
      image: Adidas,
      name: 'ADIDAS Essentials Embroidered Small Logo T-Shirt Men',
      price: 16935,
      originalPrice: 30515,
      discount: 45,
      rating: 4,
    },
    {
      id: 5,
      image: product4,
      name: 'ADIDAS Core Sneakers Kids Grand Court K',
      price: 18876,
      originalPrice: 51017,
      discount: 36,
      rating: 5,
    },
    {
      id: 6,
      image: product5,
      name: 'ADIDAS Advantage Lifestyle Court Lace Shoes',
      price: 23595,
      originalPrice: 51017,
      discount: 54,
      rating: 4,
    },
    {
      id: 7,
      image: product7,
      name: 'Zealot S67 Portable 60W Wireless Bluetooth Speaker',
      price: 3199,
      originalPrice: 5204,
      discount: 39,
      rating: 4,
    },
    {
      id: 8,
      image: product8,
      name: 'Jbl Clip4 Speaker Waterproof Portable Bluetooth Speaker',
      price: 7269,
      originalPrice: 14398,
      discount: 50,
      rating: 5,
    },
    {
      id: 9,
      image: product9,
      name: 'Senwei 1.8KVA Manuel Start GENARATOR Lower Noise Level',
      price: 168999,
      originalPrice: 5204,
      discount: 39,
      rating: 4,
    },
    {
      id: 10,
      image: product10,
      name: 'Nexus 55" Inches UHD 4K Android Smart Frameless TV (NX-TV55U4K621B (SA)) ',
      price: 415000,
      originalPrice: 425000,
      discount: 2,
      rating: 5,
    },
  ]

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className='text-yellow-500' />
        ))}
        {halfStar && (
          <FontAwesomeIcon icon={faStarHalfAlt} className='text-yellow-500' />
        )}
      </>
    )
  }

  const sliderRef = React.useRef(null)

  const goToPage = (pageNumber) => {
    sliderRef.current.slickGoTo(pageNumber)
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handleAddToCart = (product) => {
    addToCart(product)
    setSuccessMessage(`${product.name} has been added to the cart!`)
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)
  }

  return (
    <div className='container mx-auto py-8'>
      {successMessage && (
        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4'>
          {successMessage}
        </div>
      )}
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, index) => (
          <div key={product.id} className='p-4'>
            <div className='bg-white p-4 rounded-lg shadow-lg relative group'>
              <img
                src={product.image}
                alt={product.name}
                className='w-full h-50 object-cover mb-4 rounded-md'
              />
              <div className='mb-2 text-sm text-blue-600 font-semibold'>
                Official Store
              </div>
              <div className='mb-2 text-gray-700 font-semibold'>
                {product.name}
              </div>
              <div className='mb-2'>
                <span className='text-lg font-bold text-gray-800'>
                  {formatCurrency(product.price)}
                </span>{' '}
                <span className='line-through text-gray-500'>
                  {formatCurrency(product.originalPrice)}
                </span>{' '}
                <span className='text-red-500'>-{product.discount}%</span>
              </div>
              <div className='mb-4 flex items-center'>
                <div className='flex items-center'>
                  {renderStars(product.rating)}
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className='w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 hidden group-hover:block'
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex justify-center mt-4'>
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className='w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-orange-500 cursor-pointer mx-1'
        >
          &lt;
        </button>
        {[...Array(Math.ceil(products.length / settings.slidesToShow))].map(
          (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className='w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-orange-500 cursor-pointer mx-1'
            >
              {i + 1}
            </button>
          )
        )}
        <button
          onClick={() => sliderRef.current.slickNext()}
          className='w-8 h-8 flex items-center justify-center bg-white border border-gray-300 text-orange-500 cursor-pointer mx-1'
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default ProductSlider
