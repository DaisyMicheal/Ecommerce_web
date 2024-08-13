import { Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PaymentPage from './pages/PaymentPage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PaymentPage />} />

        <Route path='/payment' element={<PaymentPage />} />

      </Routes>
    </CartProvider>

  )
}

export default App
