import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import { 
  Container,
  Content,
} from './styles'

export default function Landing() {
  return (
    <Container>
      <Header
        isLanding={true}
        button={{ name: 'Entrar', link: '/login'}}
        tabs={[
          { name: 'Sobre o projeto', link: '/building' },
          { name: 'Como baixar o aplicativo', link: '/building' }
        ]}
      />

      <Content>
        <h1>Compartilhe seu conhecimento</h1>
        <p>
          Escreva o seu texto na nossa plataforma web para que todos que
          tenham o aplicativo do E-Community possam ler e compartilhar. 
        </p>

        <Link to="/login">Comece a escrever</Link>
      </Content>
    </Container>
  )
}