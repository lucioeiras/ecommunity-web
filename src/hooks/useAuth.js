/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react'

import firebase from 'firebase/app'

export default function useAuth() {
  const auth = firebase.auth()
  const firestore = firebase.firestore()

  const usersRef = firestore.collection('users')

  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')

    if (user_id) {
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function findIfUserExists() {
    const query = await usersRef
        .where('email', '==', auth.currentUser.email)
        .get()

    return query.docs[0]
  }

  async function registerUser() {
    await usersRef.doc(auth.currentUser.uid).set({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
      uid: auth.currentUser.uid,
      avatar: auth.currentUser.photoURL
    })
  }

  async function authenticateUser(service) {
    const provider = service === 'google' 
      ? new firebase.auth.GoogleAuthProvider()
      : new firebase.auth.TwitterAuthProvider()

    await auth.signInWithPopup(provider)

    if (!findIfUserExists()) {
      registerUser()
    }

    return auth.currentUser.uid
  }
  
  async function handleSignInWithGoogle() {
    const user_id = await authenticateUser('google')

    if (user_id) {
      setAuthenticated(true)
      localStorage.setItem('user_id', user_id)
    }
  }

  async function handleSignInWithTwitter() {
    const user_id = await authenticateUser('twitter')

    if (user_id) {
      setAuthenticated(true)
      localStorage.setItem('user_id', user_id)
    }
  }
  
  return { 
    authenticated, 
    loading, 
    handleSignInWithGoogle, 
    handleSignInWithTwitter,
  }
}