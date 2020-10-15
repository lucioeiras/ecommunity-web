import React, { useState } from 'react'

import filesize from 'filesize'
import firebase from 'firebase/app'

import { uuid } from 'uuidv4'
import { useHistory } from 'react-router-dom'

import useQuery from '../../hooks/useQuery'

import Upload from '../../components/Upload'
import FileList from '../../components/FileList'

import {
  Container, 
  Form,
  Input,
  Textarea,
  UploadContainer,
  Submit,
} from './styles'

export default function Write({ location }) {
  const user_id = useQuery(location.search, 'user')

  const firestore = firebase.firestore()
  const storage = firebase.storage()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [thumb, setThumb] = useState({
    file: '',
    name: '',
    readableSize: '',
  })
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const history = useHistory()

  function submitFile(files) {
    const formatedFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }))

    setUploadedFiles([...uploadedFiles, ...formatedFiles])
  }

  function submitThumbnail(files) {
    const formatedFile = {
      file: files[0],
      name: files[0].name,
      readableSize: filesize(files[0].size),
    }

    setThumb(formatedFile)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const postsRef = firestore.collection('posts')

    const thumbRef = storage.ref(`thumbs/${thumb.name}`)
    await thumbRef.put(thumb.file)

    uploadedFiles.forEach(file => {
      const fileRef = storage.ref(`files/${file.name}`)
      fileRef.put(file.file)
    })

    await postsRef.add({
      uid: uuid(),
      user_id,
      title,
      text,
      thumb: `thumbs/${thumb.name}`,
      archives: uploadedFiles?.map(file => `files/${file.name}`),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

    history.push(`/dashboard/${user_id}`)
  }

  return (
    <Container>
      <h1>Adicione uma história</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <Input 
          name="title" 
          placeholder="O título do seu texto"
          value={title}
          onChange={e => {
            setTitle(e.target.value)
          }}
        />

        <label htmlFor="text">Texto</label>
        <Textarea 
          name="text" 
          placeholder="Escreva aqui o texto da sua postagem" 
          value={text}
          onChange={e => {
            setText(e.target.value)
          }}
        />

        <UploadContainer>
          <div> 
            <label>Arquivos</label>
            <Upload onUpload={submitFile} />
          </div>

          <div>
            <label>Lista dos arquivos</label>
            {!!uploadedFiles && <FileList files={uploadedFiles} />}
          </div>
        </UploadContainer>

        <UploadContainer>
          <div>
            <label>Imagem de destaque</label>
            <Upload onUpload={submitThumbnail} />
          </div>
          
          <div>
            <label>Lista dos arquivos</label>
            {!!thumb.name && <FileList files={[thumb]} />}
          </div>
        </UploadContainer>

        <Submit type="submit">Adicionar</Submit>
      </Form>
    </Container>
  )
}