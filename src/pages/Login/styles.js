import styled from 'styled-components'

import notebookImg from '../../assets/notebook.png'

// Container por volta da página
export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  height: 100vh;

  background: url(${notebookImg}) no-repeat right 50%;
  background-size: 60%;

  padding: 48px 0;
`

// Container por volta do conteúdo da página
export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 96px;
`

// Textos de bem-vindo
export const Presentation = styled.div`
  > h1 {
    color: #3a3a3a;
    font-size: 64px;
    font-weight: bold;
  }

  > p {
    max-width: 380px;

    color: #737380;
    font-size: 24px;
    line-height: 36px;

    margin-top: 24px;
  }
`

// Botões de Sign In
export const Buttons = styled.div`
  max-width: 360px;

  display: flex;
  flex-direction: column;

  margin-top: 64px;

  > button {
    cursor: pointer;

    height: 60px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 5px;

    color: #fff;
    font-size: 24px;
    font-weight: bold;

    & + button {
      margin-top: 24px;
    }

    > img {
      margin-right: 16px;
    }
  }

  > .google {
    background: #EA4335;
    transition: background-color 0.2s;

    &:hover {
      background: #9C3128;
    }
  }

  > .twitter {
    background: #00ACEE;
    transition: background-color 0.2s;

    &:hover {
      background: #0582B3;
    }
  }
`