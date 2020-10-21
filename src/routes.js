import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { AuthContext } from './contexts/Auth';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Write from './pages/Write';
import Building from './pages/Building';

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
      <Switch>
        <CustomRoute exact path="/" component={Landing} />
        <CustomRoute exact path="/login" component={Login} />
        <CustomRoute exact path="/building" component={Building} />

        <CustomRoute isPrivate exact path="/dashboard" component={Dashboard} />
        <CustomRoute isPrivate exact path="/write" component={Write} />
      </Switch>
    </BrowserRouter>
  );
}