import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SignupPage from './pages/AuthForm/SignupPage/SignupPage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignupPage />} />

        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
