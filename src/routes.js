import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { AuthContext } from './contexts/Auth'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Write from './pages/Write'
import Building from './pages/Building'

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/building" component={Building} />
      
      <CustomRoute path="/login" component={Login} />
      <CustomRoute isPrivate path="/dashboard/" component={Dashboard} />
      <CustomRoute isPrivate path="/write" component={Write} />
    </BrowserRouter>
  )
}
