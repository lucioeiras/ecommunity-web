import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import firebase from 'firebase/app'

import { 
  Container, 
  Header,
  Profile,
  Tabs,
  CTA,
  Content,
  PostList,
  Post
} from './styles'

export default function Dashboard() {
  const { user_id } = useParams()
  const [user, setUser] = useState()

  const firestore = firebase.firestore()

  useEffect(() => {
    const usersRef = firestore.collection('users')
    usersRef.doc(user_id).get().then(doc => setUser(doc.data()))
  }, [firestore, user_id])

  return (
    <Container>
      {user && (
        <>
        <Header>
          <Profile>
            <img src={user.avatar} alt={user.name} />
            <h3>
              {user.name}
              <span>Clique para ver seu perfil</span>
            </h3>
          </Profile>

          <Tabs>
           <a href="teste">Relatar um problema</a>
           <a href="teste">Como escrever</a>

           <CTA to="/write">Escrever</CTA>
         </Tabs>
        </Header>

        <Content>
          <h1>Suas Histórias</h1>

          <PostList>
            <Post background="https://placehold.it/260">
              <h2>Placeholder (building)</h2>
            </Post>

            <Post background="https://placehold.it/260">
              <h2>Placeholder (building)</h2>
            </Post>

            <Post background="https://placehold.it/260">
              <h2>Placeholder (building)</h2>
            </Post>

            <Post background="https://placehold.it/260">
              <h2>Placeholder (building)</h2>
            </Post>

            <Post background="https://placehold.it/260">
              <h2>Placeholder (building)</h2>
            </Post>
          </PostList>
        </Content>
        </>
      )}
    </Container>
  )
}