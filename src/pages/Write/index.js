/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import filesize from 'filesize'

import { savePost, updatePost, getPostWithId } from '../../firebase/posts'

import useQuery from '../../hooks/useQuery'

import Header from '../../components/Header'
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
  const user_id = localStorage.getItem('user_id')
  const post_id = useQuery(location.search, 'post')

  const [editedPost, setEditedPost] = useState()

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [links, setLinks] = useState([''])
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [thumb, setThumb] = useState({
    file: '',
    name: '',
    readableSize: '',
  })
  
  const history = useHistory()

  function setLinkValue(position, value) {
    const updatedLinks = links.map((link, index) => {
      if (index === position) {
        return value
      }

      return link
    })

    setLinks(updatedLinks)
  }

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

  async function handleSave(e) {
    e.preventDefault()

    await updatePost({
      post: editedPost,
      title,
      text,
      links,
    })

    history.goBack()
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await savePost({
      thumb,
      userID: user_id,
      title,
      text,
      links,
      files: uploadedFiles,
    })

    history.goBack()
  }

  useEffect(() => {
    if (post_id) {
      getPostWithId(post_id).then(post => {
        setEditedPost(post)

        setTitle(post.title)
        setText(post.text)
        post.links && setLinks(post.links)
      }) 
    }
  }, [])

  return (
    <Container>
      <Header
        isLanding={false}
        user_id={user_id}
        button={{ name: 'Voltar', link: `/dashboard/?user=${user_id}`}}
        tabs={[
          { name: 'Como escrever', link: '/building' },
          { name: 'Relatar um problema', link: '/building' }
        ]}
      />

      <h1>
        {post_id ? 'Edite a sua história' : 'Adicione uma história'}
        <span>Os campos de título, texto e imagem de destaque são obrigatórios</span>
      </h1>

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