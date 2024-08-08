import React from 'react'
import laptopstand from '../../assets/eledeal.jpg'
import stand from '../../assets/recom3.jpg'
import speaker from '../../assets/gadget14.jpg'
import phone from '../../assets/phone1.jpg'
import charger from '../../assets/grocery.jpg'
import boot from '../../assets/gadget12.jpg'

const dealsData = [
  {
    title: 'Electronic Deals',
    image: laptopstand,
  },
  {
    title: 'Special Offer',
    image: stand,
  },
  {
    title: 'Gadgets',
    image: speaker,
  },
  {
    title: 'Home Essential',
    image: phone,
  },
  {
    title: 'Grocery Deals',
    image: charger,
  },
  {
    title: 'Computing Deals',
    image: boot,
  },
]

const Deals = () => {
  return (
    <div className='py-12 bg-gray-100 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl font-bold text-gray-800'>Top Deals</h2>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {dealsData.map((deal, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow flex flex-col items-center'
            >
              <img
                src={deal.image}
                alt={deal.title}
                className='max-w-full max-h-full object-contain '
              />
              <h3 className='mt-4 text-lg font-medium text-gray-800 hover:text-orange-600'>
                {deal.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Deals
