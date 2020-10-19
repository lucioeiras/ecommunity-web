/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react'
import useQuery from '../../hooks/useQuery'

import firebase from 'firebase/app'

import Header from '../../components/Header'

import { 
  Container,
  Content,
  PostList,
  Post,
} from './styles'

export default function Dashboard({ location }) {

  // Localiza o query param "user" e pega seu valor
  const user_id = useQuery(location.search, 'user')

  // Inicia os estados
  const [posts, setPosts] = useState([])

  // Inicializa as funções do Firebase
  const firestore = firebase.firestore()

  // Busca as coleções no Firestore
  const postsRef = firestore.collection('posts')

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

  return (
    <Container>
      {user_id && (
        <>
        <Header
          isLanding={false}
          user_id={user_id}
          button={{ name: 'Escrever', link: `/write/?user=${user_id}`}}
          tabs={[
            { name: 'Página Inicial', link: '/' },
            { name: 'Relatar um problema', link: '/building' }
          ]}
        />

        <Content>
          <h1>Suas Histórias</h1>

          {posts[0]
            ? (
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
            )
            : <h3>Parece que você ainda não tem nenhum texto. Clique no botão
                acima e escreva um!
              </h3>
          }
        </Content>
        </>
      )}
    </Container>
  )
}