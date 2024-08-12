import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ProductPage from './pages/ProductPage/Productpage'
import GadgetStorePage from './pages/ProductPage/itemsPages/GadgetStorePage'
import AppliancesPage from './pages/ProductPage/itemsPages/AppliancesPage'
import ForHimPage from './pages/ProductPage/itemsPages/ForHimPage'
import HomePage from './pages/ProductPage/itemsPages/HomePage'
import ForHerPage from './pages/ProductPage/itemsPages/ForHerPage'
import BeautyPage from './pages/ProductPage/itemsPages/BeautyPage'
import CheckoutPage from './pages/ProductPage/CheckoutPage'
import ShopNow from './pages/ProductPage/shopNowPage'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<ProductPage />} />

        <Route path='/product' element={<ProductPage />} />
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
