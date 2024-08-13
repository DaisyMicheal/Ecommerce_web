import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PaymentPage from './pages/PaymentPage'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<PaymentPage />} />

        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
      <ToastContainer />
    </CartProvider>
  )
}

export default App
