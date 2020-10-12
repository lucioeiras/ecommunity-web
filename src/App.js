import React from 'react';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

import Routes from './routes'
import GlobalStyles from './styles/Global'

export default function App() {
  firebase.initializeApp({
    apiKey: "AIzaSyAoldte3KU26_gEEmX8YGme_3wukxIT-dA",
    authDomain: "e-community-1485d.firebaseapp.com",
    databaseURL: "https://e-community-1485d.firebaseio.com",
    projectId: "e-community-1485d",
    storageBucket: "e-community-1485d.appspot.com",
    messagingSenderId: "765504482440",
    appId: "1:765504482440:web:67ac6a3ab2a024a1a0833d",
    measurementId: "G-C3SYPMPW9Z"
  })

  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  )
}
