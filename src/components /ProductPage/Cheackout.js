import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrash,
  faShoppingCart,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { formatCurrency, showNotification } from '../../utils/utils'
import SavedItems from './SavedItems'

const Checkout = () => {
  const { cartItems, updateQuantity, clearCart, removeItem, saveItem } =
    useContext(CartContext)
  const [removingItem, setRemovingItem] = useState(null)
  const [notification, setNotification] = useState('')

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleRemoveClick = (item) => {
    setRemovingItem(item)
  }

  const handleRemoveConfirm = () => {
    removeItem(removingItem.id)
    setRemovingItem(null)
    showNotification(setNotification, 'Item removed successfully')
  }

  const handleRemoveCancel = () => {
    setRemovingItem(null)
  }

  const handleSaveItem = () => {
    saveItem(removingItem)
    setRemovingItem(null)
    showNotification(setNotification, 'Item saved successfully')
  }

  const handleUpdateQuantity = (itemId, change) => {
    updateQuantity(itemId, change)
    if (change > 0) {
      showNotification(setNotification, 'Item added')
    } else {
      showNotification(setNotification, 'Item updated')
    }
  }

  return (
    <div className='container mx-auto p-4 py-36'>
      {cartItems.length > 0 ? (
        <>
          <div className='bg-white p-4 rounded shadow-md'>
            <h2 className='text-2xl font-bold mb-4'>
              Cart ({cartItems.length})
            </h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className='flex flex-col md:flex-row items-center justify-between mb-4 border-b pb-4'
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-20 h-20 object-cover'
                />
                <div className='flex-1 ml-4'>
                  <h3 className='text-lg'>{item.name}</h3>
                  <p className='text-sm text-gray-500'>{item.description}</p>
                  <p className='font-bold text-orange-500'>
                    {formatCurrency(item.price)}
                    <span className='text-gray-400 line-through ml-2'>
                      {formatCurrency(item.originalPrice)}
                    </span>
                    <span className='ml-2 text-green-500'>
                      -{item.discount}%
                    </span>
                  </p>
                  <div className='flex items-center mt-2'>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, -1)}
                      className='px-2 py-1 bg-orange-300 text-white rounded mr-2'
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, 1)}
                      className='px-2 py-1 bg-orange-300 text-white rounded ml-2'
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveClick(item)}
                  className='ml-4 mt-2 md:mt-0'
                >
                  <FontAwesomeIcon icon={faTrash} className='text-orange-500' />
                  <span className='ml-1 text-orange-500'>REMOVE</span>
                </button>
              </div>
            ))}
          </div>
          <div className='mt-4 p-4 bg-gray-100 rounded shadow-md'>
            <h3 className='text-xl font-bold mb-2'>CART SUMMARY</h3>
            <div className='flex justify-between mb-2'>
              <span>Subtotal</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
            <Link to='/signup'>
              <button className='w-full py-2 bg-orange-500 text-white rounded'>
                CHECKOUT ({formatCurrency(totalAmount)})
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className='text-center'>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className='text-6xl text-orange-500 hover:text-orange-600'
          />
          <h2 className='text-2xl text-gray-500 mt-4'>Cart is empty</h2>
        </div>
      )}

      <SavedItems />

      {removingItem && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded'>
            <h2 className='text-xl mb-4'>Remove from cart</h2>
            <p>
              Do you want to save this item for later or remove it from the
              cart?
            </p>
            <div className='flex items-center justify-end mt-4'>
              <button
                onClick={handleRemoveCancel}
                className='px-4 py-2 bg-gray-200 rounded mr-2'
              >
                Cancel
              </button>
              <button
                onClick={handleSaveItem}
                className='px-4 py-2 bg-yellow-500 text-white rounded mr-2'
              >
                Save for Later
              </button>
              <button
                onClick={handleRemoveConfirm}
                className='px-4 py-2 bg-red-500 text-white rounded'
              >
                Remove Item
              </button>
            </div>
          </div>
        </div>
      )}

      {notification && (
        <div className='fixed top-4 right-4 bg-green-500 text-white p-2 rounded'>
          {notification}
        </div>
      )}
    </div>
  )
}

export default Checkout
