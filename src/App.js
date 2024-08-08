import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProductPage from './pages/ProductPage/Productpage'
import GadgetStorePage from './pages/ProductPage/itemsPages/GadgetStorePage'
import AppliancesPage from './pages/ProductPage/itemsPages/AppliancesPage'
import ForHimPage from './pages/ProductPage/itemsPages/ForHimPage'
import HomePage from './pages/ProductPage/itemsPages/HomePage'
import ForHerPage from './pages/ProductPage/itemsPages/ForHerPage'
import BeautyPage from './pages/ProductPage/itemsPages/BeautyPage'
import CheckoutPage from './pages/ProductPage/CheckoutPage'
import ShopNow from './pages/ProductPage/shopNowPage'
import LandingPage from './pages/LandingPage/LandingPage'
import SignupPage from './pages/SignupPage/SignupPage'
import LoginPage from './pages/LoginPage/LoginPage'
import PaymentPage from './pages/ProductPage/PaymentPage'
import SeeAllPage from './pages/LandingPage/SeeAllPage'
import OfficialStore from './pages/LandingPage/OfficialStore'
function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/landing' element={<LandingPage />} />

        <Route path='/product' element={<ProductPage />} />
        <Route path='/gadget-store' element={<GadgetStorePage />} />
        <Route path='/appliances' element={<AppliancesPage />} />

        <Route path='/for-him' element={<ForHimPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/for-her' element={<ForHerPage />} />
        <Route path='/beauty' element={<BeautyPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/shopNow' element={<ShopNow />} />
        <Route path='/seeAll' element={<SeeAllPage />} />
        <Route path='/officialStore' element={<OfficialStore />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
      <ToastContainer />
    </CartProvider>
  )
}

export default App
