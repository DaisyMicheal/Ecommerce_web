import { Link } from 'react-router-dom'
import store from '../../../assets/Store/kids1.png'
import store1 from '../../../assets/Store/kid2.png'
import store2 from '../../../assets/Store/Kid3.png'
import store3 from '../../../assets/Store/kid4.png'
import store4 from '../../../assets/Store/kid5.png'
import store5 from '../../../assets/Store/kid6.png'

const stores = [
  {
    title: 'store',
    image: store,
    link: './for-her',
  },
  {
    title: 'store',
    image: store1,
    link: './for-her',
  },
  {
    title: 'store',
    image: store2,
    link: './for-her',
  },
  {
    title: 'store',
    image: store3,
    link: './for-her',
  },
  {
    title: 'store',
    image: store4,
    link: './for-her',
  },
  {
    title: 'store',
    image: store5,
    link: './for-her',
  },
]

const KidBrandStore = () => {
  return (
    <div className='container mx-auto py-4 '>
      <div className='bg-teal-500 text-white text-center py-2 text-lg font-bold'>
        KidBrand Store
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

export default KidBrandStore
