import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { 
  Container,
  Header,
  Tabs,
  CTA,
  Content,
} from './styles'

export default function Landing() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="E-Community" />

        <Tabs>
          <Link to="/building">Sobre o projeto</Link>
          <Link to="/building">Como baixar o aplicativo</Link>

          <CTA to="/login">Entrar</CTA>
        </Tabs>
      </Header>

      <Content>
        <h1>Compartilhe seu conhecimento</h1>
        <p>
          O E-Community é uma comunidade com o objetivo de reunir 
          todos aqueles que amam eletrônica.
        </p>

        <Link to="/login">Comece a escrever</Link>
      </Content>
    </Container>
  )
}