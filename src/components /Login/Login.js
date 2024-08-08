import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../../firebase/firebaseConfig'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { toast } from 'react-toastify'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password)
      toast.success('Login successful')
      navigate('/payment')
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      toast.success('Login successful')
      navigate('/payment')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6 hover:text-orange-600'>
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200'
          >
            Login
          </button>
        </form>

        <div className='flex justify-center mt-4'>
          <button
            onClick={handleGoogleLogin}
            className='w-full py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-200 flex items-center justify-center space-x-2'
          >
            <FontAwesomeIcon icon={faGoogle} className='text-[#4285F4]' />
            <span className='text-gray-700 hover:text-[#4285F4]'>
              Sign in with Google
            </span>
          </button>
        </div>
        <div className='text-center mt-4'>
          <Link to='/signup' className='text-orange-500 hover:underline'>
            Don't have an account?{' '}
            <span className='text-blue-500'>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
