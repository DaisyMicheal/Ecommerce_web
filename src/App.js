import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import LandingPage from './Pages /Productpage'
import GadgetStorePage from './Pages /itemsPages/GadgetStorePage'
import AppliancesPage from './Pages /itemsPages/AppliancesPage'
import ForHimPage from './Pages /itemsPages/ForHimPage'
import HomePage from './Pages /itemsPages/HomePage'
import ForHerPage from './Pages /itemsPages/ForHerPage'
import BeautyPage from './Pages /itemsPages/BeautyPage'
import CheckoutPage from './Pages /CheckoutPage'
import ShopNow from './components/ShopNow'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/landing' element={<LandingPage />} />
        <Route path='/gadget-store' element={<GadgetStorePage />} />
        <Route path='/appliances' element={<AppliancesPage />} />

        <Route path='/for-him' element={<ForHimPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/for-her' element={<ForHerPage />} />
        <Route path='/beauty' element={<BeautyPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/shopNow' element={<ShopNow />} />
      </Routes>
    </CartProvider>
  )
}

export default App
