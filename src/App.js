import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import CheckoutPage from './Pages /CheckoutPage'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<CheckoutPage />} />

        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>
    </CartProvider>
  )
}

export default App
