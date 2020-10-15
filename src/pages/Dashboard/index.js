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

export default function Dashboard() {
  const { user_id } = useQuery.get('user')

  const [user, setUser] = useState()
  const [posts, setPosts] = useState([])

  const firestore = firebase.firestore()
  const storage = firebase.storage()

  const postsRef = firestore.collection('posts')
  const usersRef = firestore.collection('users')

  function loadPosts() {
    postsRef
      .where('user_id', '==', user_id)
      .orderBy('createdAt')
      .get()
      .then(async querySnapshot => {
        const searchedPosts = []

        querySnapshot.forEach(doc => searchedPosts.push(doc.data()))

        const postsWithImage = searchedPosts.map(post => {
          const thumbRef = storage.ref(post.thumb)
          thumbRef.getDownloadURL().then(url => post.thumbURL = url)

          return post
        })
    
        setPosts(postsWithImage)
      })
  }

  useEffect(() => {
    loadPosts()
    console.log('cheguei')
  }, [])

  useEffect(() => {
    usersRef.doc(user_id).get().then(doc => setUser(doc.data()))
  }, [usersRef, user_id])

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

          <CTA to={`/write/${user_id}`}>Escrever</CTA>
         </Tabs>
        </Header>

        <Content>
          <h1>Suas Histórias</h1>

          <PostList>
            {posts[0] && posts.map(post => (
              <Post key={post.title} background={post.thumbURL}>
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