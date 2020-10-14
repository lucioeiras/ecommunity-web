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
          <a href="teste">Sobre o projeto</a>
          <a href="teste">Como baixar o aplicativo</a>

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