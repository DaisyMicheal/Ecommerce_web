import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
  faShoppingCart,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { formatCurrency } from '../../utils/utils'
import adidas from '../../assets/adidas.png'
import binatone from '../../assets/binatone (1).png'
import diageo from '../../assets/diageo.png'
import infinix from '../../assets/infinix.png'
import nivea from '../../assets/nivea.png'
import itel from '../../assets/itel.png'
import oraimo from '../../assets/oraimo.png'
import tecno from '../../assets/tecno.png'
import xiaomi from '../../assets/xiaomi.png'
import loreal from '../../assets/loreal.png'
import pernod from '../../assets/pernod.png'
import haier from '../../assets/haier.png'

import product1 from '../../assets/home1.jpg'
import product2 from '../../assets/home2.jpg'
import product3 from '../../assets/home3.jpg'
import product4 from '../../assets/home4.jpg'
import product5 from '../../assets/home5.jpg'
import product6 from '../../assets/home6.jpg'
import product7 from '../../assets/home7.jpg'
import product8 from '../../assets/home8.jpg'
import product9 from '../../assets/home9.jpg'
import product10 from '../../assets/home10.jpg'
import product11 from '../../assets/home11.jpg'
import product12 from '../../assets/home12.jpg'
import product13 from '../../assets/home13.jpg'
import product14 from '../../assets/home14.jpg'
import product15 from '../../assets/home15.jpg'
import product16 from '../../assets/home16.jpg'
import product17 from '../../assets/her10.jpg'
import product18 from '../../assets/gadget10.jpg'
import product19 from '../../assets/men10.jpg'
import product20 from '../../assets/bg.jpg'
import product21 from '../../assets/applaince2.jpg'
import product22 from '../../assets/gadget12.jpg'
import product23 from '../../assets/her12.jpg'
import product24 from '../../assets/beauty7.jpg'

const ItemsData = [
  {
    title: 'adidas',
    image: adidas,
    link: '/for-him',
  },
  {
    title: 'binatone ',
    image: binatone,
    link: '/home',
  },
  {
    title: 'haier',
    image: haier,
    link: '/appliances',
  },
  {
    title: 'loreal',
    image: loreal,
    link: '/beauty',
  },
  {
    title: 'pernod',
    image: pernod,
    link: '/for-her',
  },
  {
    title: 'xiaomi',
    image: xiaomi,
    link: '/gadget-store',
  },
  {
    title: 'tecno ',
    image: tecno,
    link: '/gadget-store',
  },
  {
    title: 'oraimo',
    image: oraimo,
    link: '/gadget-store',
  },
  {
    title: 'itel',
    image: itel,
    link: '/gadget-store',
  },
  {
    title: 'diageo',
    image: diageo,
  },
  {
    title: 'nivea',
    image: nivea,
    link: '/beauty',
  },
  {
    title: 'infinix',
    image: infinix,
    link: '/gadget-store',
  },
]

const products = [
  {
    id: 1,
    image: product1,
    name: 'Zyre 2 Slice Sandwich Maker (EL-216) - Black',
    price: 15800,
    originalPrice: 20000,
    discount: 21,
    rating: 4,
    freePickup: true,
  },
  {
    id: 2,
    image: product2,
    name: 'Binatone 1.5 Litres (BLG-403) Blender - Black',
    price: 26768,
    originalPrice: 3999,
    discount: 28,
    rating: 5,
    freePickup: true,
  },
  {
    id: 3,
    image: product3,
    name: 'Nexus 1HP Split Air Conditioner ',
    price: 315500,
    originalPrice: 4787,
    discount: 16,
    rating: 4,
  },
  {
    id: 4,
    image: product4,
    name: 'Hisense 20 Litres (H20MOWS10) Microwave',
    price: 85000,
    originalPrice: 93000,
    discount: 9,
    rating: 4,
  },
  {
    id: 5,
    image: product5,
    name: 'Aeon 50x50 4 Burner Gas Cooker (AGC5040)',
    price: 135232,
    originalPrice: 140000,
    discount: 3,
    rating: 5,
    freePickup: true,
  },
  {
    id: 6,
    image: product6,
    name: 'Syinix Swallow Maker- Fully Automatic',
    price: 103550,
    originalPrice: 180000,
    discount: 42,
    rating: 4,
  },
  {
    id: 7,
    image: product7,
    name: 'Polystar 20 Litres Manual Solo Microwave ',
    price: 94570,
    originalPrice: 104570,
    discount: 10,
    rating: 4,
  },
  {
    id: 8,
    image: product8,
    name: 'Hisense 55" Inches UHD 4K SMART TV (55A6K)',
    price: 499000,
    originalPrice: 3999,
    discount: 31,
    rating: 4,
    freePickup: true,
  },
  {
    id: 9,
    image: product9,
    name: 'Hisense 55" Inches UHD 4K SMART TV (55A6K)',
    price: 499000,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
  },
  {
    id: 10,
    image: product10,
    name: 'Hisense 95 Litres Chest Freezer (FC12OSH) ',
    price: 207610,
    originalPrice: 219610,
    discount: 5,
    rating: 5,
  },
  {
    id: 11,
    image: product11,
    name: 'Hisense 6kg Front load Washing Machine',
    price: 328265,
    originalPrice: 340265,
    discount: 4,
    rating: 4,
  },
  {
    id: 12,
    image: product12,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 13,
    image: product13,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 14,
    image: product14,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 15,
    image: product15,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 16,
    image: product16,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 17,
    image: product17,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 18,
    image: product18,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },

  {
    id: 19,
    image: product19,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 20,
    image: product20,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 21,
    image: product21,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 22,
    image: product22,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 23,
    image: product23,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
    price: 2866,
    originalPrice: 3999,
    discount: 31,
    rating: 5,
    freePickup: true,
  },
  {
    id: 24,
    image: product24,
    name: '7 Steps Laptop Stand Desktop Stand Can Be Adjusted',
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

const ShopNow = () => {
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
        <Link to='/product'>
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
              <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-sm '>
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* HomeProduct*/}
      <div className='py-12 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6'>
            {ItemsData.map((deal, index) => (
              <Link key={index} to={deal.link} className='group'>
                <img
                  src={deal.image}
                  alt={deal.title}
                  className='w-full h-50 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='flex-grow p-6 py-16'>
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6'>
          <h2 className='text-2xl font-bold mb-4 sm:mb-0'>
            New Arrivals
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

export default ShopNow
