import React from 'react'
import { useHistory } from 'react-router-dom'

import firebase from 'firebase/app'

import logo from '../../assets/logo.svg'
import googleIcon from '../../assets/google.svg'
import twitterIcon from '../../assets/twitter.svg'

import { 
  Container,
  Content,
  Presentation,
  Buttons,
} from './styles'

export default function Login() {

  // Inicia funções do Firebase
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  
  // Busca a coleção de usuários no Firestore
  const usersRef = firestore.collection('users')

  // Inicia objeto de navegação
  const history = useHistory()

  // Função para verificar se o usuário já existe no Banco de Dados
  async function findIfUserExists() {
    const query = await usersRef
        .where('email', '==', auth.currentUser.email)
        .get()

    const user = query.docs[0]

    return user
  }

  // Função que registra/autentica o usuário e move ele pra próxima página
  async function registerAndMoveFoward() {
    if (auth.currentUser) {
      const user = await findIfUserExists()

      if (!user) {
        await usersRef.doc(auth.currentUser.uid).set({
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          avatar: auth.currentUser.photoURL
        })
      }
  
      history.push(`/dashboard/?user=${auth.currentUser.uid}`)
    }
  }

  // Função que chama o pop-up de login do Google
  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);

    registerAndMoveFoward()
  }

  // Função que chama o pop-up de login do Twitter
  async function signInWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider()
    await auth.signInWithPopup(provider)

    registerAndMoveFoward()
  }

  return (
    <Container>
      <img src={logo} alt="E-Community" />
      
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
              onClick={signInWithGoogle}
            >
              <img src={googleIcon} alt="Google" />
              Entrar com o Google
            </button>

            <button 
              className="twitter"
              onClick={signInWithTwitter}
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