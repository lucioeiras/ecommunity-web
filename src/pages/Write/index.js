/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'

import filesize from 'filesize'
import firebase from 'firebase/app'

import { v4 } from 'uuid'
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
  LinksContainer,
  AddLinkButton,
} from './styles'

export default function Write({ location }) {

  // Busca o usuário nos query params da página
  const user_id = useQuery(location.search, 'user')
  const post_id = useQuery(location.search, 'post')

  // Inicia funções do Firebase
  const firestore = firebase.firestore()
  const storage = firebase.storage()

  const postsRef = firestore.collection('posts')

  // Inicia os estados
  const [editedPost, setEditedPost] = useState(null)

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [links, setLinks] = useState([''])
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [thumb, setThumb] = useState({
    file: '',
    name: '',
    readableSize: '',
  })
  
  // Inicia o objeto de navegação
  const history = useHistory()

  // Função para atualizar um link específico na lista de links
  function setLinkValue(position, value) {
    const updatedLinks = links.map((link, index) => {
      if (index === position) {
        return value
      }

      return link
    })

    setLinks(updatedLinks)
  }

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

  // Função para salvar o post editado
  async function handleSave(e) {
    e.preventDefault()

    await postsRef.doc(post_id).set({
      ...editedPost,
      title,
      text,
    })

    history.goBack()
  }

  async function getFilesURL() {
    const filesURL = uploadedFiles.map(async file => {
      const fileRef = storage.ref(`files/${file.name}`)
      await fileRef.put(file.file)
        
      const fileURL = await fileRef.getDownloadURL()
    
      return fileURL
    })

    return Promise.all(filesURL)
  }

  // Função executada ao submiter o formulário
  async function handleSubmit(e) {
    e.preventDefault()

    const thumbRef = storage.ref(`thumbs/${thumb.name}`)
    await thumbRef.put(thumb.file)

    const thumbURL = await thumbRef.getDownloadURL()

    const uid = v4()
    const filesURL = await getFilesURL()

    await postsRef.doc(uid).set({
      uid,
      user_id,

      title,
      text,
      links,

      thumb: `thumbs/${thumb.name}`,
      thumbURL,

      files: uploadedFiles?.map(file => `files/${file.name}`),
      filesURL,

      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })

    history.goBack()
  }

  // Verifica se é um post novo ou um post para ser editado
  useEffect(() => {
    if (post_id) {
      postsRef.doc(post_id).get().then(doc => {
        const post = doc.data()

        setEditedPost(post)
        setTitle(post.title)
        setText(post.text)
        post.links && setLinks(post.links)
      })
    }
  }, [])

  return (
    <Container>
      <h1>{post_id ? 'Edite a sua história' : 'Adicione uma história'}</h1>

      <Form 
        onSubmit={post_id ? handleSave : handleSubmit}
      >
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

        <label>Links</label>
        <LinksContainer>
          {links.map((link, index) => (
            <Input 
              key={index}
              value={link} 
              onChange={e => setLinkValue(index, e.target.value)} 
              placeholder="Digite aqui um link da internet"
            />
          ))}

          <AddLinkButton 
            type="button" 
            onClick={() => setLinks([...links, ''])}
          >
            + Adicionar Link
          </AddLinkButton>
        </LinksContainer>

        {!post_id && (
          <>
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
              <Upload 
                onUpload={submitThumbnail} 
                acceptFiles="image/png, image/jpeg, image/jpg, .png, .jpeg, .jpg"
              />
            </div>
            
            <div>
              <label>Lista dos arquivos</label>
              {!!thumb.name && <FileList files={[thumb]} />}
            </div>
          </UploadContainer>
          </>
        )}

        <Submit type="submit">{post_id ? 'Salvar' : 'Adicionar'}</Submit>
      </Form>
    </Container>
  )
}