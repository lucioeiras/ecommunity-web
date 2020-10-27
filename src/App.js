import React from 'react'

import { AuthProvider } from './contexts/Auth'
import Routes from './routes'
import GlobalStyles from './styles/global'

export default function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  )
}