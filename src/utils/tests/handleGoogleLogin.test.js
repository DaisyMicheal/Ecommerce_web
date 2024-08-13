// src/utils/tests/handleGoogleLogin.test.js
import { handleGoogleLogin } from '../handleGoogleLogin'
import { signInWithPopup, signOut } from 'firebase/auth'
import { toast } from 'react-toastify'

// Mock Firebase functions
jest.mock('firebase/auth', () => ({
  signInWithPopup: jest.fn(),
  signOut: jest.fn(),
}))

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}))

// Mock Firestore functions
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  getDoc: jest.fn(),
}))

describe('handleGoogleLogin', () => {
  it('should sign in with Google and navigate to payment if user is found', async () => {
    const mockNavigate = jest.fn()
    const mockUser = { uid: '123' }
    const mockResult = { user: mockUser }

    signInWithPopup.mockResolvedValue(mockResult)

    const mockDocSnap = { exists: jest.fn(() => true) }
    getDoc.mockResolvedValue(mockDocSnap)

    await handleGoogleLogin(mockNavigate)

    expect(signInWithPopup).toHaveBeenCalled()
    expect(toast.success).toHaveBeenCalledWith('Login successful')
    expect(mockNavigate).toHaveBeenCalledWith('/payment')
  })

  it('should sign out and show error if user is not found', async () => {
    const mockNavigate = jest.fn()
    const mockUser = { uid: '123' }
    const mockResult = { user: mockUser }

    signInWithPopup.mockResolvedValue(mockResult)

    const mockDocSnap = { exists: jest.fn(() => false) }
    getDoc.mockResolvedValue(mockDocSnap)

    await handleGoogleLogin(mockNavigate)

    expect(signOut).toHaveBeenCalled()
    expect(toast.error).toHaveBeenCalledWith(
      'Account not found. Please sign up.'
    )
  })
})
