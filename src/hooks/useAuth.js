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
    let provider

    if (service === 'google') {
      provider = new firebase.auth.GoogleAuthProvider()
      
    } else if(service === 'twitter') {
      provider = new firebase.auth.TwitterAuthProvider()
    }

    await auth.signInWithPopup(provider)

    const searchedUser = await findIfUserExists()

    if (!searchedUser) {
      await registerUser()
    }

    return auth.currentUser.uid
  }
  
  async function handleSignIn(service) {
    const user_id = await authenticateUser(service)

    if (user_id) {
      setAuthenticated(true)
      localStorage.setItem('user_id', user_id)
    }
  }
  
  return { 
    loading, 
    authenticated, 
    handleSignIn, 
  }
}