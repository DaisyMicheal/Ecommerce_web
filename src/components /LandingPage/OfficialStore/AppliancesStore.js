import { Link } from 'react-router-dom'
import store from '../../../assets/Store/store.png'
import store1 from '../../../assets/Store/store1.png'
import store2 from '../../../assets/Store/store2.png'
import store3 from '../../../assets/Store/store3.png'
import store4 from '../../../assets/Store/store4.png'
import store5 from '../../../assets/Store/store5.png'
import store6 from '../../../assets/Store/store6.jpg'
import store7 from '../../../assets/Store/store7.png'
import store8 from '../../../assets/Store/store8.png'

const stores = [
  {
    title: 'JBL',
    image: store,
    link: '/appliances',
  },
  {
    title: 'TCL',
    image: store1,
    link: '/appliances',
  },
  {
    title: 'itel',
    image: store2,
    link: '/appliances',
  },
  {
    title: 'Syinix',
    image: store3,
    link: '/appliances',
  },
  {
    title: 'F&D',
    image: store4,
    link: '/appliances',
  },
  {
    title: 'Canon',
    image: store5,
    link: '/appliances',
  },
  {
    title: 'Hisense',
    image: store6,
    link: '/appliances',
  },
  {
    title: 'oraimo',
    image: store7,
    link: '/appliances',
  },
  {
    title: 'Edifier',
    image: store8,
    link: '/appliances',
  },
]

const AppliancesStore = () => {
  return (
    <div className='container mx-auto py-28'>
      <div className='bg-orange-500 text-white text-center py-2 text-lg font-bold'>
        Appliances Store
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4'>
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

export default AppliancesStore
