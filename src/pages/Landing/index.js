import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import phoneImg from '../../assets/phone.png'

import { 
  Container,
  Header,
  Tabs,
  CTA,
  Content,
  Presentation, 
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
        <Presentation>
          <h1>Compartilhe seu conhecimento</h1>
          <p>
            O E-Community é uma comunidade com o objetivo de reunir 
            todos aqueles que amam eletrônica.
          </p>

          <Link to="/login">Comece a escrever</Link>
        </Presentation>

        <img 
          src={phoneImg} 
          alt="Aplicativo do E-Community" 
          height="34%" 
          width="34%"
        />
      </Content>
    </Container>
  )
}