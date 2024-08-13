import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'
import { formatCurrency } from '../../utils/utils'

const SavedItems = () => {
  const { savedItems, removeFromSavedItems, moveToCart } =
    useContext(CartContext)

  return (
    <div className='mt-8'>
      <h2 className='text-2xl font-bold mb-4'>
        Saved Items ({savedItems.length})
      </h2>
      {savedItems.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {savedItems.map((item) => (
            <div
              key={item.id}
              className='p-4 rounded-lg shadow-lg relative group'
            >
              <div className='absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-br-lg text-xs'>
                -{item.discount}%
              </div>
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-50 object-cover mb-4 rounded-md'
              />
              <div className='text-gray-700 font-semibold mb-2'>
                {item.name}
              </div>
              <div className='mb-2'>
                <span className='text-lg font-bold text-gray-800'>
                  {formatCurrency(item.price)}
                </span>{' '}
                <span className='line-through text-gray-500'>
                  {formatCurrency(item.originalPrice)}
                </span>
              </div>
              <div className='flex justify-between items-center'>
                <button
                  onClick={() => moveToCart(item.id)}
                  className='bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600'
                >
                  Move to Cart
                </button>
                <button
                  onClick={() => removeFromSavedItems(item.id)}
                  className='text-orange-500 hover:text-orange-600'
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-500'>No items saved yet.</p>
      )}
    </div>
  )
}

export default SavedItems
