import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { toast } from 'react-toastify'

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
      toast.success('Signup successful')
      navigate('/payment')
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      toast.success('Signup successful')
      navigate('/payment')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6 hover:text-orange-600'>
          Get Started
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            name='fullName'
            placeholder='Full Name'
            value={formData.fullName}
            onChange={handleChange}
            required
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
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
          <div className='relative'>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
          <div className='flex items-center'>
            <input type='checkbox' id='rememberMe' className='mr-2' />
            <label htmlFor='rememberMe' className='text-gray-600'>
              Remember me
            </label>
          </div>
          <button
            type='submit'
            className='w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200'
          >
            Sign up
          </button>
        </form>
        <div className='flex justify-center mt-4'>
          <button
            onClick={handleGoogleLogin}
            className='w-full py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-200 flex items-center justify-center space-x-2'
          >
            <FontAwesomeIcon icon={faGoogle} className='text-[#4285F4]' />
            <span className='text-gray-700 hover:text-[#4285F4]'>
              Sign up with Google
            </span>
          </button>
        </div>
        <div className='text-center mt-4'>
          <Link to='/login' className='text-orange-500 hover:underline'>
            Already have an account?{' '}
            <span className='text-blue-400'>Log in</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
