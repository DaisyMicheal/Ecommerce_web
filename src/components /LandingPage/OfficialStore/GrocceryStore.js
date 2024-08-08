import { Link } from 'react-router-dom'
import store from '../../../assets/Store/food1.png'
import store1 from '../../../assets/Store/food2.png'
import store2 from '../../../assets/Store/food3.png'
import store3 from '../../../assets/Store/food4.png'
import store4 from '../../../assets/Store/food5.jpg'
import store5 from '../../../assets/Store/food6.png'

const stores = [
  {
    title: 'store',
    image: store,
  },
  {
    title: 'store',
    image: store1,
    link: '/',
  },
  {
    title: 'store',
    image: store2,
  },
  {
    title: 'store',
    image: store3,
  },
  {
    title: 'store',
    image: store4,
  },
  {
    title: 'store',
    image: store5,
  },
]

const GroceryStore = () => {
  return (
    <div className='container mx-auto py-4 '>
      <div className='bg-green-900 text-white text-center py-2 text-lg font-bold'>
        Grocery Store
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

export default GroceryStore
