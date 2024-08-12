import { Link } from 'react-router-dom'
import store from '../../../assets/Beautyimg/unilever_260x144v3.png'
import store1 from '../../../assets/Beautyimg/maybelline.jpg'
import store2 from '../../../assets/Beautyimg/nivea_260x144.png'
import store3 from '../../../assets/Beautyimg/reckitt_260x144.png'
import store4 from '../../../assets/Beautyimg/mizani-1.jpg'
import store5 from '../../../assets/Beautyimg/dr-teals_260x144.png'

const stores = [
  {
    title: 'store',
    image: store,
    link: '/Beauty',
  },
  {
    title: 'store',
    image: store1,
    link: '/Beauty',
  },
  {
    title: 'store',
    image: store2,
    link: '/Beauty',
  },
  {
    title: 'store',
    image: store3,
    link: '/Beauty',
  },
  {
    title: 'store',
    image: store4,
    link: '/Beauty',
  },
  {
    title: 'store',
    image: store5,
    link: '/Beauty',
  },
]

const BeautyStore = () => {
  return (
    <div className='container mx-auto '>
      <div className='bg-blue-500 text-white text-center py-2 text-lg font-bold'>
        Beauty Store
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
        {stores.map((deal, index) => (
          <Link key={index} to={deal.link} className='group'>
            <img
              src={deal.image}
              alt={deal.title}
              className='w-full h-38 object-cover rounded-md transition-transform duration-300 transform group-hover:scale-105'
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BeautyStore
