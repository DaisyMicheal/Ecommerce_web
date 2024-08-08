import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
