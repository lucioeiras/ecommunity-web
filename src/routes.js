import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Write from './pages/Write'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard/:user_id" component={Dashboard} />
      <Route path="/write/:user_id" component={Write} />
    </BrowserRouter>
  )
}
