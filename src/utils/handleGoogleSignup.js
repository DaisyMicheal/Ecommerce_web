import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider, firestore } from '../firebase/firebaseConfig'
import { toast } from 'react-toastify'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const handleGoogleSignup = async (navigate) => {
  try {
    // Initiate Google sign-in popup
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user

    // Reference to Firestore document for the signed-in user
    const userRef = doc(firestore, 'users', user.uid)
    const docSnap = await getDoc(userRef)

    if (docSnap.exists()) {
      // If user already exists, prevent duplicate account creation
      toast.error('Account already exists. Please log in.')

      // Sign out the user, but do not await this operation
      signOut(auth)
    } else {
      // If user does not exist, create a new document in Firestore
      await setDoc(userRef, {
        email: user.email,
        name: user.displayName,
        createdAt: new Date(),
      })

      // Redirect to payment page after successful signup
      toast.success('Signup successful')
      navigate('/payment')
    }
  } catch (error) {
    // Handle and display any errors that occur during sign-in
    toast.error(`Error: ${error.message}`)
  }
}
