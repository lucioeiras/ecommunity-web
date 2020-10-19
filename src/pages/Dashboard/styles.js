import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Container por volta da página
export const Container = styled.div`
  width: 100%;
  max-width: 1148px;

  padding: 48px;
`

// Caebçalho com o perfil do usuário e tabs
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// Avatar/nome do usuário
export const Profile = styled(Link)`
  cursor: pointer;

  display: flex;
  align-items: center;

  text-decoration: none;

  > img {
    width: 48px;
    height: 48px;

    border-radius: 50%;
  }

  > h3 {
    color: #41414D;
    font-size: 16px;
    font-weight: bold;

    display: flex;
    flex-direction: column;

    margin-left: 16px;

    > span {
      color: #A8A8B3;
      font-size: 12px;
      font-weight: normal;

      margin-top: 4px;
    }
  }
`

// Links para outra páginas
export const Tabs = styled.div`
  display: flex;
  align-items: center;

  > a {
    color: #A8A8B3;
    font-size: 16px;
    text-decoration: none;

    transition: color 0.2s;

    & + a {
      margin-left: 48px;
    }

    &:hover {
      color: #3A3A3A;
    }
  }
`

// Call to Action - Botão para ir para a tela de escrita
export const CTA = styled(Link)`
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background: #00C14E;

  color: #fff !important;
  font-size: 20px !important;
  font-weight: bold;

  padding: 12px 48px;

  transition: background-color 0.2s !important;

  &:hover {
    background-color: #00903A;
  }
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
  display: flex;
  flex-wrap: wrap;

  margin-top: 24px;  
`

// Post carregado do Firebase
export const Post = styled(Link)`
  cursor: pointer;

  width: 260px;
  height: 260px;

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
  margin: 0 16px 16px 0;

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