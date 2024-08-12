import { auth, googleProvider } from '../firebase/firebaseConfig'
import { signInWithPopup, signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from '../firebase/firebaseConfig'

export const handleGoogleLogin = async (navigate) => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user

    // Assume you're storing user information in Firestore
    const userRef = doc(firestore, 'users', user.uid)
    const docSnap = await getDoc(userRef)

    if (!docSnap.exists()) {
      // User is not registered, sign them out
      await signOut(auth)
      toast.error('Account not found. Please sign up.')
    } else {
      // User is registered, proceed with login
      toast.success('Login successful')
      navigate('/payment')
    }
  } catch (error) {
    toast.error(error.message)
  }
}
