import React from 'react'

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
          <a href="teste">Sobre</a>
          <a href="teste">Contato</a>
          <a href="teste">Aplicativo</a>

          <CTA href="teste">Entrar</CTA>
        </Tabs>
      </Header>

      <Content>
        <Presentation>
          <h1>Compartilhe seu conhecimento</h1>
          <p>
            O E-Community é uma comunidade com o objetivo de reunir 
            todos aqueles que amam eletrônica.
          </p>

          <a href="teste">Comece a escrever</a>
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