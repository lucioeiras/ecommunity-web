/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react'

import { authenticateUser } from '../firebase/users'

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')

    if (user_id) {
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])
  
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