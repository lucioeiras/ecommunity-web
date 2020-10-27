import styled from 'styled-components'

// Container por volta da página
export const Container = styled.div`
  width: 100%;
  max-width: 1100px;

  padding: 48px 0;

  > h1 {
    display: flex;
    justify-content: space-between;

    color: #3A3A3A;
    font-weight: bold;

    margin-top: 64px;

    > span {
      color: #A8A8B3;
      font-size: 14px;
      font-weight: lighter;

      margin-top: 8px;
    }
  }
`

// Formulário de envio
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 32px;

  > label {
    color: #737380;
    font-size: 20px;
    font-weight: 500;

    display: flex;
    justify-content: space-between;
  }
`

// Caixa de texto para adicionar o título
export const Input = styled.input`
  width: 500px;
  height: 48px;

  border: none;
  border-radius: 5px;

  background: #EAEAEA;

  color: #737380;
  font-size: 16px;
  font-weight: lighter;

  padding: 16px;
  margin-top: 8px;

  & + label {
    margin-top: 32px;
  }

  &::placeholder {
    color: #A8A8A8;
  }
`

// Caixa de texto maior, para adicionar o conteúdo do post
export const Textarea = styled.textarea`
  width: 100%;
  height: 385px;

  border: none;
  border-radius: 5px;

  background: #EAEAEA;

  color: #737380;
  font-size: 16px;
  font-weight: lighter;

  padding: 16px;
  margin-top: 8px;

  resize: vertical;

  & + label {
    margin-top: 32px;
  }

  &::placeholder {
    color: #A8A8A8;
  }
`

// Container por volta dos dois objetos de upload de arquivos
export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 500px;
    height: 300px;

    margin: 32px 24px 0 0;

    > label {
      color: #737380;
      font-size: 20px;
      font-weight: 500;
    }
  }
`

// Botão para submeter o formulário
export const Submit = styled.button`
  cursor: pointer;

  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
  background: #00C14E;

  color: #fff;
  font-size: 20px;
  font-weight: bold;

  padding: 12px;
  margin-top: 32px;

  transition: background-color 0.2s;

  &:hover {
    background-color: #00903A;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AddLinkButton = styled.button`
  cursor: pointer;

  max-width: 250px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 5px;
  background: #00C14E;

  color: #fff;
  font-size: 20px;
  font-weight: bold;

  padding: 12px;
  margin-top: 24px;

  transition: background-color 0.2s;

  &:hover {
    background-color: #00903A;
  }
`
