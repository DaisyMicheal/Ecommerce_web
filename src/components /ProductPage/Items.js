import React from 'react'
import { Link } from 'react-router-dom'
import Gadget from '../../assets/Gadget-Store.png'
import Appliances from '../../assets/1Appliance.png'
import Watch from '../../assets/For-Him.png'
import Home from '../../assets/Home.png'
import Her from '../../assets/ForHer.png'
import beauty from '../../assets/Personal-Care-2.png'

const ItemsData = [
  {
    title: 'Gadget Store',
    image: Gadget,
    link: '/gadget-store',
  },
  {
    title: 'Appliances',
    image: Appliances,
    link: '/appliances',
  },
  {
    title: 'For Him',
    image: Watch,
    link: '/for-him',
  },
  {
    title: 'Home',
    image: Home,
    link: '/home',
  },
  {
    title: 'For Her',
    image: Her,
    link: '/for-her',
  },
  {
    title: 'Beauty',
    image: beauty,
    link: '/beauty',
  },
]

const Items = () => {
  return (
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
  )
}

export default Items
