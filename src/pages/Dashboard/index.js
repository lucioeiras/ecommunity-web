/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import useQuery from '../../hooks/useQuery'

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

export default function Dashboard({ location }) {

  // Localiza o query param "user" e pega seu valor
  const user_id = useQuery(location.search, 'user')

  // Inicia os estados 
  const [user, setUser] = useState()
  const [posts, setPosts] = useState([])

  // Inicializa as funções do Firebase
  const firestore = firebase.firestore()

  // Busca as coleções no Firestore
  const postsRef = firestore.collection('posts')
  const usersRef = firestore.collection('users')

  // Busca os posts referentes ao usuários, e sua thumb no Cloud Storage
  function loadPosts() {
    postsRef
      .where('user_id', '==', user_id)
      .orderBy('createdAt')
      .get()
      .then(querySnapshot => {
        const searchedPosts = []

        querySnapshot.forEach(doc => searchedPosts.push(doc.data()))

        setPosts(searchedPosts)
      })
  }

  // Executa as funções apenas na primeira renderização
  useEffect(() => {
    loadPosts()
  }, [])

  useEffect(() => {
    usersRef.doc(user_id).get().then(doc => setUser(doc.data()))
  }, [])

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

          <CTA to={`/write/?user=${user_id}`}>Escrever</CTA>
         </Tabs>
        </Header>

        <Content>
          <h1>Suas Histórias</h1>

          <PostList>
            {posts[0] && posts.map(post => (
              <Post 
                key={post.uid} 
                background={post.thumbURL}
                to={`/write/?user=${user_id}&post=${post.uid}`}
              >
                <h2>{post.title}</h2>
              </Post>
            ))}
          </PostList>
        </Content>
        </>
      )}
    </Container>
  )
}