/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Container, Profile, Tabs, CTA } from './styles'

export default function Header({ isLanding, tabs, button, user_id }) {

  // Inicializa as funções do Firebase
  const firestore = firebase.firestore()

  // Inicia os estados
  const [user, setUser] = useState()

  // Busca a coleção de usuários no Firestore
  const usersRef = firestore.collection('users')

  useEffect(() => {
    console.log(isLanding)
    user_id && usersRef.doc(user_id).get().then(doc => setUser(doc.data()))
  }, [])

  return (
    <Container>
      {
        isLanding 
          ? <img src={logo} alt="E-Community" />
          : (
            user && (
              <Profile to="/building">
                <img src={user.avatar} alt={user.name} />
                <h3>
                  {user.name}
                  <span>Clique para ver seu perfil</span>
                </h3>
              </Profile>
            )
          )
      }

      <Tabs>
        {tabs[0] && tabs.map(tab => <Link to={tab.link}>{tab.name}</Link>)}

        <CTA to={button.link}>{button.name}</CTA>
      </Tabs>
    </Container>
  )
}
