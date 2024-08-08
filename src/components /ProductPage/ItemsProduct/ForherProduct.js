import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../../context/CartContext'
import { formatCurrency } from '../../../utils/utils'
import WomenAccessories from '../../../assets/Women-accessories.png'
import WomenDresses from '../../../assets/Women-Dresses.jpg'
import ForKids from '../../../assets/For-Kids.png'
import Womenshoes from '../../../assets/Women-shoes.png'
import Womenags from '../../../assets/Women-ags.png'
import beauty from '../../../assets/Personal-Care.jpg'

import product1 from '../../../assets/her1.jpg'
import product2 from '../../../assets/her2.jpg'
import product3 from '../../../assets/her3.jpg'
import product4 from '../../../assets/her4.jpg'
import product5 from '../../../assets/her5.jpg'
import product6 from '../../../assets/cargo.jpg'
import product7 from '../../../assets/her7.jpg'
import product8 from '../../../assets/her8.jpg'
import product9 from '../../../assets/her9.jpg'
import product10 from '../../../assets/her10.jpg'
import product11 from '../../../assets/her11.jpg'
import product12 from '../../../assets/her12.jpg'
import product13 from '../../../assets/her13.jpg'
import product14 from '../../../assets/her14.jpg'
import product15 from '../../../assets/her15.jpg'
import product16 from '../../../assets/her16.jpg'

const ItemsData = [
  {
    title: 'WomenAccessories',
    image: WomenAccessories,
  },
  {
    title: 'WomenDresses',
    image: WomenDresses,
  },
  {
    title: 'ForKids',
    image: ForKids,
  },
  {
    title: 'Women-shoes',
    image: Womenshoes,
  },
  {
    title: 'Women-ags',
    image: Womenags,
  },
  {
    title: 'Personal-Care',
    image: beauty,
  },
]

const products = [
  {
    id: 1,
    image: product1,
    name: 'Womens Casual Shoes High Heels',
    price: 11739,
    originalPrice: 16899,
    discount: 31,
    rating: 4,
    freePickup: true,
  },
  {
    id: 2,
    image: product2,
    name: '4 PCS Women Bags Ladies Bags Handbags Purse Shoulder Bags',
    price: 6460,
    originalPrice: 13736,
    discount: 53,
    rating: 5,
    freePickup: true,
  },
  {
    id: 3,
    image: product3,
    name: 'Butterfly Necklace ',
    price: 838,
    originalPrice: 1255,
    discount: 33,
    rating: 5,
  },
  {
    id: 4,
    image: product4,
    name: 'Couple Heart Necklace',
    price: 2612,
    originalPrice: 50000,
    discount: 95,
    rating: 4,
  },
  {
    id: 5,
    image: product5,
    name: 'Shoes Sandals Heels Ladies',
    price: 8726,
    originalPrice: 130000,
    discount: 36,
    rating: 5,
    freePickup: true,
  },
  {
    id: 6,
    image: product6,
    name: 'Ladies Cargo Pant ',
    price: 103550,
    originalPrice: 180000,
    discount: 42,
    rating: 4,
  },
  {
    id: 7,
    image: product7,
    name: 'Ladies Gowns Dinner Dresses',
    price: 6000,
    originalPrice: 10000,
    discount: 40,
    rating: 4,
  },
  {
    id: 8,
    image: product8,
    name: 'Cooperate office dress',
    price: 499000,
    originalPrice: 3999,
    discount: 31,
    rating: 4,
    freePickup: true,
  },
  {
    id: 9,
    image: product9,
    name: 'Breathable Light Shoes For Boys Rotating Buckle Kids Sneakers Black',
    price: 499000,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
  },
  {
    id: 10,
    image: product10,
    name: 'New Year Gift Elegant Ladies Necklace Set-Rose Gold',
    price: 207610,
    originalPrice: 219610,
    discount: 5,
    rating: 5,
  },
  {
    id: 11,
    image: product11,
    name: '5-pcs Women Butterfly Digital Belt Watch Set',
    price: 328265,
    originalPrice: 340265,
    discount: 4,
    rating: 4,
  },
  {
    id: 12,
    image: product12,
    name: 'Jewelry Box Jewelry Organizer Jewelry Holder Case-Pink',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 13,
    image: product13,
    name: 'Nose Ring Reusable Non Piercing Alloy Fake Magnetic Horseshoe For Party-Silver',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 14,
    image: product14,
    name: 'Womens Frosted Mid Heels Classic Buckle Sandals',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 15,
    image: product15,
    name: 'Womens Sneakers Platform Sequin Sneakers',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 16,
    image: product16,
    name: 'Ladies Sneakers Breathable And Antiskid For Women Sports',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
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

const ForHer = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { cartItems, addToCart, updateQuantity } = useContext(CartContext)

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Navbar */}
      <div className='flex justify-between items-center p-4 bg-white shadow-md'>
        <Link to='/shopNow'>
          <div
            className='text-xl font-bold text-orange-600'
            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Shop
          </div>
        </Link>
        <div className='relative w-full max-w-xs'>
          <input
            type='text'
            placeholder='Search for products'
            value={searchQuery}
            onChange={handleSearch}
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='absolute top-3 right-3 text-gray-500'
          />
        </div>
        <div className='relative'>
          <Link to='/checkout'>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className='text-2xl hover:text-orange-600'
            />
            {cartItems.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm'>
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* ForHerProduct*/}
      <div className='py-12 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6'>
            {ItemsData.map((deal, index) => (
              <img
                src={deal.image}
                alt={deal.title}
                className='w-full h-50 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105'
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='flex-grow p-6 py-16'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold mb-4 sm:mb-0'>
            For Her Deals
            <span className='text-lg text-gray-700'>
              ({filteredProducts.length} products found)
            </span>
          </h2>
          <div className='relative w-full sm:w-auto'>
            <select className='p-2 border border-gray-300 rounded-lg w-full sm:w-auto'>
              <option value='popularity'>Sort by Popularity</option>
              <option value='price-low-to-high'>Price: Low to High</option>
              <option value='price-high-to-low'>Price: High to Low</option>
              <option value='newest'>Newest</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {filteredProducts.map((product) => {
              const cartItem = cartItems.find((item) => item.id === product.id)
              const quantity = cartItem ? cartItem.quantity : 0

              return (
                <div
                  key={product.id}
                  className='p-4 rounded-lg shadow-lg relative group'
                >
                  {product.freePickup && (
                    <div className='absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-br-lg text-xs'>
                      Free Pick Up
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-50 object-cover mb-4 rounded-md'
                  />
                  <div className='text-gray-700 font-semibold mb-2'>
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
                  <div className='flex items-center mb-4'>
                    {renderStars(product.rating)}
                  </div>
                  {quantity > 0 ? (
                    <div className='flex justify-between items-center'>
                      <button
                        onClick={() => updateQuantity(product.id, -1)}
                        className='w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-lg hover:bg-orange-600'
                      >
                        -
                      </button>
                      <span className='text-lg font-semibold'>{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className='w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-lg hover:bg-orange-600'
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className='w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 hidden group-hover:block mt-4'
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <div className='text-center text-gray-500'>No products found.</div>
        )}
      </div>
    </div>
  )
}

export default ForHer
