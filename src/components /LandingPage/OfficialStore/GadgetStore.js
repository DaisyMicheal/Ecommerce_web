import { Link } from 'react-router-dom'
import store from '../../../assets/Store/phone1.png'
import store1 from '../../../assets/Store/phone2.png'
import store2 from '../../../assets/Store/phone3.png'
import store3 from '../../../assets/Store/phone4.png'
import store4 from '../../../assets/Store/phone5.png'
import store5 from '../../../assets/Store/phone6.png'
import store6 from '../../../assets/Store/phone7.png'
import store7 from '../../../assets/Store/phone8.png'
import store8 from '../../../assets/Store/phone9.png'
import store9 from '../../../assets/Store/phone10.png'
import store10 from '../../../assets/Store/phone11.png'
import store11 from '../../../assets/Store/phone12.png'
import store12 from '../../../assets/Store/phone13.png'
import store13 from '../../../assets/Store/phone14.png'
import store14 from '../../../assets/Store/phone16.png'

const stores = [
  {
    title: 'JBL',
    image: store,
  },
  {
    title: 'TCL',
    image: store1,
  },
  {
    title: 'itel',
    image: store2,
  },
  {
    title: 'Syinix',
    image: store3,
  },
  {
    title: 'F&D',
    image: store4,
  },
  {
    title: 'Canon',
    image: store5,
  },
  {
    title: 'Canon',
    image: store6,
  },
  {
    title: 'Canon',
    image: store7,
  },
  {
    title: 'Canon',
    image: store8,
  },
  {
    title: 'Canon',
    image: store9,
  },
  {
    title: 'Canon',
    image: store10,
  },
  {
    title: 'Canon',
    image: store11,
  },
  {
    title: 'Canon',
    image: store12,
  },
  {
    title: 'Canon',
    image: store13,
  },
  {
    title: 'Canon',
    image: store14,
    link: '/',
  },
]

const GadgetStore = () => {
  return (
    <div className='container mx-auto py-4 '>
      <div className='bg-cyan-700 text-white text-center py-2 text-lg font-bold'>
        Gadget Store
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

export default GadgetStore
