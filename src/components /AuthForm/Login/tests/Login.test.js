import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { handleGoogleLogin } from '../../../../utils/handleGoogleLogin'
import Login from '../Login'

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}))

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}))
jest.mock('../../../../utils/handleGoogleLogin', () => ({
  handleGoogleLogin: jest.fn(),
}))

test('should render login form', () => {
  render(<Login />)
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
})

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}))

describe('Login Component', () => {
  test('should render login form', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })

  test('should handle email and password input changes', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    expect(emailInput.value).toBe('test@example.com')
    expect(passwordInput.value).toBe('password123')
  })

  test('should show password when toggle icon is clicked', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    const passwordInput = screen.getByPlaceholderText(/password/i)
    const toggleIcon = screen.getByRole('button', { hidden: true })

    // Password should initially be of type 'password'
    expect(passwordInput.type).toBe('password')

    // Click the toggle icon
    fireEvent.click(toggleIcon)

    // Password should now be of type 'text'
    expect(passwordInput.type).toBe('text')
  })

  test('should call signInWithEmailAndPassword on form submission', async () => {
    signInWithEmailAndPassword.mockResolvedValue({})

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByText(/login/i)

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(), // The `auth` object
        'test@example.com',
        'password123'
      )
    })

    expect(toast.success).toHaveBeenCalledWith('Login successful')
  })

  test('should handle Google login', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    const googleButton = screen.getByText(/sign in with google/i)

    fireEvent.click(googleButton)

    await waitFor(() => {
      expect(handleGoogleLogin).toHaveBeenCalled()
    })
  })

  test('should show error on login failure', async () => {
    signInWithEmailAndPassword.mockRejectedValue(new Error('Login failed'))

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    const emailInput = screen.getByPlaceholderText(/email/i)
    const passwordInput = screen.getByPlaceholderText(/password/i)
    const submitButton = screen.getByText(/login/i)

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })

    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Login failed')
    })
  })
})
