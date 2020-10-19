import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Importação dos componentes das páginas
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Write from './pages/Write'
import Building from './pages/Building'

// Componente que controla a rotas da aplicação
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard/" component={Dashboard} />
      <Route path="/write" component={Write} />
      <Route path="/building" component={Building} />
    </BrowserRouter>
  )
}
