import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './Pages /LandingPage/LandingPage'
import SeeAllPage from './Pages /LandingPage/SeeAllPage'
import OfficialStore from './Pages /LandingPage/OfficialStore'
import CheckoutPage from './Pages /LandingPage/CheckoutPage'
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/landing' element={<LandingPage />} />
        <Route path='/seeAll' element={<SeeAllPage />} />
        <Route path='/officialStore' element={<OfficialStore />} />
      </Routes>
      <ToastContainer />
    </CartProvider>
  )
}

export default App
