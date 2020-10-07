import React from 'react'

import logo from '../../assets/logo.svg'
import googleIcon from '../../assets/google.svg'
import facebookIcon from '../../assets/facebook.svg'
import notebookImg from '../../assets/notebook.png'

import { 
  Container,
  Header,
  Content,
  Presentation,
  Buttons,
} from './styles'

export default function Login() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="E-Community" />
      </Header>
      
      <Content>
        <Presentation>
          <h1>Bem vindo</h1>
          <p>
            Entre com a sua conta do Google ou Facebook 
            e comece a escrever
          </p>

          <Buttons>
            <button className="google">
              <img src={googleIcon} alt="Google" />
              Entrar com o Google
            </button>

            <button className="facebook">
              <img src={facebookIcon} alt="Facebook" /> 
              Entrar com o facebook
            </button>
          </Buttons>
        </Presentation>

        <img 
          src={notebookImg} 
          alt="Preview" 
          height="60%"
          width="60%"
        />
      </Content>
    </Container>
  )
}