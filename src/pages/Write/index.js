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

  // Busca o usuário nos query params da página
  const user_id = useQuery(location.search, 'user')

  // Inicia funções do Firebase
  const firestore = firebase.firestore()
  const storage = firebase.storage()

  // Inicia os estados
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [thumb, setThumb] = useState({
    file: '',
    name: '',
    readableSize: '',
  })
  
  // Inicia o objeto de navegação
  const history = useHistory()

  // Função para adicionar arquivo na lista
  function submitFile(files) {
    const formatedFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }))

    setUploadedFiles([...uploadedFiles, ...formatedFiles])
  }

  // Função para adicionar a Thumb do post
  function submitThumbnail(files) {
    const formatedFile = {
      file: files[0],
      name: files[0].name,
      readableSize: filesize(files[0].size),
    }

    setThumb(formatedFile)
  }

  // Função executada ao submiter o formulário
  async function handleSubmit(e) {
    e.preventDefault()

    const postsRef = firestore.collection('posts')

    const thumbRef = storage.ref(`thumbs/${thumb.name}`)
    await thumbRef.put(thumb.file)

    const thumbURL = await thumbRef.getDownloadURL()

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
      thumbURL,
      archives: uploadedFiles?.map(file => `files/${file.name}`),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

    history.push(`/dashboard/?user=${user_id}`)
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