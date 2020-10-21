/* eslint-disable react-hooks/exhaustive-deps */

import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../../contexts/Auth'

import Header from '../../components/Header'

import googleIcon from '../../assets/google.svg'
import twitterIcon from '../../assets/twitter.svg'

import { 
  Container,
  Content,
  Presentation,
  Buttons,
} from './styles'
import { useEffect } from 'react'

export default function Login() {
  const { handleSignIn } = useContext(AuthContext)

  const history = useHistory()

  async function handleSignInWithGoogle() {
    await handleSignIn('google')
    history.push('/dashboard')
  }

  async function handleSignInWithTwitter() {
    await handleSignIn('twitter')
    history.push('/dashboard')
  }

  useEffect(() => {
    const user_id = localStorage.getItem('user_id')

    if (user_id) {
      history.push('/dashboard')
    }
  }, [])
 
  return (
    <Container>
      <Header
        isLanding={true}
        button={{ name: 'Voltar', link: '/' }}
        tabs={[
          { name: 'Sobre o projeto', link: '/building' },
          { name: 'Como baixar o aplicativo', link: '/building' }
        ]}
      />
      
      <Content>
        <Presentation>
          <h1>Bem vindo</h1>
          <p>
            Entre com a sua conta do Google ou Facebook 
            e comece a escrever
          </p>

          <Buttons>
            <button 
              className="google" 
              onClick={handleSignInWithGoogle}
            >
              <img src={googleIcon} alt="Google" />
              Entrar com o Google
            </button>

            <button 
              className="twitter"
              onClick={handleSignInWithTwitter}
            >
              <img src={twitterIcon} alt="Twitter" /> 
              Entrar com o Twitter
            </button>
          </Buttons>
        </Presentation>
      </Content>
    </Container>
  )
}