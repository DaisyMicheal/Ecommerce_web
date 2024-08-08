import { Link } from 'react-router-dom'

const MagicDeals = () => {
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='relative bg-white p-6 rounded-lg shadow text-center'>
            <div className='relative z-10'>
              <h1
                className='text-5xl font-bold text-orange-600'
                style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Magic Deals
              </h1>
              <p className='text-xl py-6 text-gray-800'>
                Buy 2 items get
                <span className='font-bold text-black'> ₦500 </span>off
              </p>
              <Link to='/for-him'>
                <button
                  className='bg-orange-500 font-bold text-white py-2 px-6 rounded hover:bg-orange-600 mt-4'
                  style={{
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  Fashion Category
                </button>
              </Link>
            </div>
          </div>

          <div className='relative bg-white p-6 rounded-lg shadow text-center'>
            <div className='relative z-10'>
              <h1
                className='text-5xl font-bold text-teal-600'
                style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Have More Fun with Family
              </h1>
              <p className='text-lg py-6 font-bold text-gray-800'>
                Explore range of games & toys for your kids
              </p>
              <Link to='/shopNow'>
                <button
                  className='font-bold text-teal-600 py-2 px-6 border-2 border-teal-400 border-solid rounded drop-shadow-md shadow-md hover:bg-teal-400 mt-4'
                  style={{
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  Get Discount
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicDeals
