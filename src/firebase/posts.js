import { v4 } from 'uuid'

import firebase, { serverTimestamp } from './firebase'

const firestore = firebase.firestore()
const storage = firebase.storage()

const postsRef = firestore.collection('posts')

async function getUserPosts(userId) {
  const posts = []

  const querySnapshot = await postsRef
    .where('user_id', '==', userId)
    .orderBy('createdAt')
    .get()

  querySnapshot.forEach(doc => posts.push(doc.data()))

  return posts
}

async function getPostWithId(id) {
  const response = await postsRef.doc(id).get()

  const post = response.data()

  return post
}

async function updatePost({
  post,
  title,
  text,
  links,
}) {
  await postsRef.doc(post.uid).set({
    ...post,
    title,
    text,
    links,
  })
}

async function uploadPostFiles(files) {
  const filesURL = files.map(async file => {
    const fileRef = storage.ref(`files/${file.name}`)
    await fileRef.put(file.file)
      
    const fileURL = await fileRef.getDownloadURL()
  
    return fileURL
  })

  return Promise.all(filesURL)
}

async function uploadPostThumb(thumb) {
  const thumbRef = storage.ref(`thumbs/${thumb.name}`)
  await thumbRef.put(thumb.file)

  const thumbURL = await thumbRef.getDownloadURL()

  return thumbURL
}

async function savePost({
  thumb,
  userID,
  title,
  text,
  links,
  files,
}) {
  const thumbURL = await uploadPostThumb(thumb)
  const filesURL = await uploadPostFiles(files)

  const uid = v4()

  await postsRef.doc(uid).set({
    uid,
    user_id: userID,

    title,
    text,
    links,

    thumb: `thumbs/${thumb.name}`,
    thumbURL,

    files: files?.map(file => `files/${file.name}`),
    filesURL,

    createdAt: serverTimestamp(),
  })
}

export {
  getUserPosts,
  updatePost,
  uploadPostFiles,
  uploadPostThumb,
  savePost,
  getPostWithId,
}