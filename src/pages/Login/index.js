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
  const auth = firebase.auth()
  const firestore = firebase.firestore()
  
  const usersRef = firestore.collection('users')

  const history = useHistory()

  async function findIfUserExists() {
    const query = await usersRef
        .where('email', '==', auth.currentUser.email)
        .get()

    const user = query.docs[0]

    return user
  }

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
  
      history.push(`/dashboard/${auth.currentUser.uid}`)
    }
  }

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);

    registerAndMoveFoward()
  }

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