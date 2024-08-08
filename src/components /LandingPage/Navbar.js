import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import {
  faSearch,
  faShoppingCart,
  faUser,
  faBars,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrollY, setScrollY] = useState(0)
  const [isNavbarFixed, setIsNavbarFixed] = useState(false)
  const [cartItems, setCartItems] = useState([]) // State for cart items
  const navigate = useNavigate() // Use useNavigate instead of useHistory

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    window.location.href = `/search?query=${searchQuery}`
  }

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    setIsNavbarFixed(currentScrollY > 100)
    setScrollY(currentScrollY)
  }

  const handleLoginIconClick = () => {
    if (cartItems.length === 0) {
      toast.error('Please add items to the cart before logging in.')
    } else {
      toast.success('Logged in successfully.')
      navigate('/login') // Navigate to the login page
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  useEffect(() => {
    // Logic to fetch cart items from local storage or API can be placed here
    // For demonstration, let's assume we fetch from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    setCartItems(storedCartItems)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
        isNavbarFixed ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center justify-start w-1/4'>
            <a
              href='/'
              className='text-xl font-bold text-orange-600'
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              Shop
            </a>
          </div>
          <div className='hidden md:flex md:items-center md:w-1/2 md:justify-center'>
            <ul
              className='flex items-center space-x-7'
              style={{ textShadow: '0px 4px 4px #FFFFF' }}
            >
              <li>
                <Link
                  to='/product'
                  className='text-gray-700 hover:text-orange-600 text-lg font-medium'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to='/shopNow'
                  className='text-gray-700 hover:text-orange-600 text-lg font-medium'
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to='/landing'
                  className='text-gray-700 hover:text-orange-600 text-lg font-medium'
                >
                  Arrival
                </Link>
              </li>
              <li
                className='relative'
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className='text-gray-700 hover:text-orange-600 text-lg font-medium flex items-center'
                  style={{ textShadow: '0px 4px 4px #ffff' }}
                >
                  Offers
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className='ml-1 text-orange-600'
                  />
                </button>
                {isDropdownOpen && (
                  <ul className='absolute bg-white shadow-md mt-2 rounded-md w-48'>
                    <li>
                      <Link
                        to='/shopNow'
                        className='block px-4 py-2 text-gray-700 hover:bg-orange-100'
                      >
                        Discounts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/officialStore'
                        className='block px-4 py-2 text-gray-700 hover:bg-orange-100'
                      >
                        New Arrivals
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className='flex items-center justify-end w-1/4 space-x-4'>
            {isSearchOpen && (
              <form
                onSubmit={handleSearch}
                className='flex items-center space-x-2'
              >
                <input
                  type='text'
                  placeholder='Search...'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='px-2 py-1 border rounded-md'
                />
                <button
                  type='submit'
                  className='text-gray-700 hover:text-orange-600'
                >
                  <FontAwesomeIcon icon={faSearch} size='lg' />
                </button>
              </form>
            )}
            {!isSearchOpen && (
              <button
                onClick={() => setIsSearchOpen(true)}
                className='text-gray-700 hover:text-orange-600'
              >
                <FontAwesomeIcon icon={faSearch} size='lg' />
              </button>
            )}
            <Link
              to='/checkout'
              className='text-orange-400 hover:text-orange-600'
            >
              <FontAwesomeIcon icon={faShoppingCart} size='lg' />
            </Link>
            <button
              onClick={handleLoginIconClick}
              className='text-sky-700 hover:text-sky-600'
            >
              <FontAwesomeIcon icon={faUser} size='lg' />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-700 hover:text-orange-600 md:hidden'
            >
              <FontAwesomeIcon icon={faBars} size='lg' />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col items-center space-y-7 py-6'>
            <li className='group'>
              <a
                href='/products'
                className='block text-orange-600 text-lg font-medium group-hover:border-2 group-hover:rounded-md group-hover:border-solid group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white px-10 py-1 transition-all duration-200'
              >
                Products
              </a>
            </li>
            <li className='group'>
              <Link
                to='/shopNow'
                className='block text-orange-600 text-lg font-medium group-hover:border-2 group-hover:rounded-md group-hover:border-solid group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white px-10 py-1 transition-all duration-200'
              >
                Categories
              </Link>
            </li>
            <li className='group'>
              <Link
                to='/landing'
                href='/arrival'
                className='block text-orange-600 text-lg font-medium group-hover:border-2 group-hover:rounded-md group-hover:border-solid group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white px-10 py-1 transition-all duration-200'
              >
                Arrival
              </Link>
            </li>
            <li className='group'>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='block text-orange-600 text-lg font-medium group-hover:border-2 group-hover:rounded-md group-hover:border-solid group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white px-10 py-1 transition-all duration-200'
              >
                Offers
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className='ml-1 text-orange-600'
                />
              </button>
              {isDropdownOpen && (
                <ul className='mt-2 bg-white shadow-md rounded-md w-48'>
                  <li>
                    <Link
                      to='/seeAll'
                      href='/offers/discounts'
                      className='block px-4 py-2 text-gray-700 hover:bg-orange-100'
                    >
                      Discounts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/officialStore'
                      href='/offers/new'
                      className='block px-4 py-2 text-gray-700 hover:bg-orange-100'
                    >
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
      <ToastContainer />
    </header>
  )
}

export default Navbar
