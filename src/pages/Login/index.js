import React from 'react'
import { useHistory } from 'react-router-dom'

import firebase from 'firebase/app'

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
  const auth = firebase.auth()

  const firestore = firebase.firestore()
  const usersRef = firestore.collection('users')

  const history = useHistory()

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);

    if (auth.currentUser) {
      const query = await usersRef
        .where('uid', '==', auth.currentUser.uid)
        .get()

      const user = query.docs[0]

      if (!user) {
        await usersRef.add({
          name: auth.currentUser.displayName,
          email: auth.currentUser.email,
          uid: auth.currentUser.uid,
          avatar: auth.currentUser.photoURL
        })
      }
  
      history.push(`/dashboard/${auth.currentUser.uid}`)
    }
  }

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
            <button 
              className="google" 
              onClick={signInWithGoogle}
            >
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