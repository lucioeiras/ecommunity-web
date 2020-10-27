import firebase, { googleProvider, twitterProvider } from './firebase'

const auth = firebase.auth()
const firestore = firebase.firestore()

const usersRef = firestore.collection('users')

async function getUserWithEmail(email) {
  const query = await usersRef.where('email', '==', email).get()

  return query.docs[0]
}

async function getUserWithId(id) {
  const response = await usersRef.doc(id).get()
  const user = response.data() 

  return user
}

async function registerUser() {
  await usersRef.doc(auth.currentUser.uid).set({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    uid: auth.currentUser.uid,
    avatar: auth.currentUser.photoURL
  })
}

async function authenticateUser(service) {
  let provider

  if (service === 'google') {
    provider = googleProvider
    
  } else if(service === 'twitter') {
    provider = twitterProvider
  }

  await auth.signInWithPopup(provider)

  const searchedUser = await getUserWithEmail(auth.currentUser.email)

  if (!searchedUser) {
    await registerUser()
  }

  return auth.currentUser.uid
}

export {
  getUserWithEmail,
  getUserWithId,
  registerUser,
  authenticateUser,
}