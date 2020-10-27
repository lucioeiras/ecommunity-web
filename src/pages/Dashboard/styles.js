import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Container por volta da página
export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  padding: 48px 0;
`

// Container por volta do conteúdo da página
export const Content = styled.div`
  margin-top: 64px;

  > h1 {
    color: #3a3a3a;
    font-size: 32px;
    font-weight: bold;
  }

  > h3 {
    color: #737380;
    font-size: 24px;
    font-weight: normal;

    margin-top: 24px; 
  }
`

// Lista de posts do usuário
export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  margin-top: 24px;  
`

// Post carregado do Firebase
export const Post = styled(Link)`
  cursor: pointer;

  height: 263px;

  display: flex;
  align-items: flex-end;

  border-radius: 5px;

  background: ${
    props => (`
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 71.5%),
      url(${props.background}) no-repeat center center / cover   
    `)
  }; 

  text-decoration: none;

  padding: 16px;

  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }

  > h2 {
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
  }
`