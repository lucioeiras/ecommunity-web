import styled from 'styled-components'
import { Link } from 'react-router-dom'

import phoneImg from '../../assets/phone.png'

// Container por volta da página
export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  height: 100vh;

  background: url(${phoneImg}) no-repeat right 175px;
  background-size: 34%;

  padding: 48px 0;
`

// Cabeçalho com CTA e Tabs
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// Links para outras páginas
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

// Botão para ir para a página de Login
export const CTA = styled(Link)`
  cursor: pointer;

  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background: #00C14E;

  color: #fff !important;
  font-size: 20px !important;
  font-weight: bold;

  padding: 16px 48px;

  transition: background-color 0.2s !important;

  &:hover {
    background-color: #00903A;
  }
`

// Container por volta do conteúdo da página
export const Content = styled.div`
  margin-top: 96px;

  > h1 {
    max-width: 70%;

    color: #3a3a3a;
    font-size: 64px;
    font-weight: bold;
  }

  > p {
    max-width: 500px;

    color: #737380;
    font-size: 24px;
    line-height: 36px;

    margin-top: 24px;
  }

  > a {
    height: 48px;
    max-width: 308px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    background: #00C14E;

    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;

    padding: 12px 48px;
    margin-top: 48px;

    transition: background-color 0.2s;

    &:hover {
      background-color: #00903A;
    }
  }
` 