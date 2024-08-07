import React from 'react'

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
