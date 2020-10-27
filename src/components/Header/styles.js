import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Caebçalho com o perfil do usuário e tabs
export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// Avatar/nome do usuário
export const Profile = styled.div`
  display: flex;
  align-items: center;

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