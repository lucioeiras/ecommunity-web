import styled from 'styled-components'

export const Container = styled.div`
  padding: 48px 0;

  > h1 {
    color: #3A3A3A;
    font-weight: bold;
  }
`

export const Form = styled.form`
  width: 1100px;

  display: flex;
  flex-direction: column;

  margin-top: 32px;

  > label {
    color: #737380;
    font-size: 20px;
    font-weight: 500;

    display: flex;
    justify-content: space-between;

    > span {
      color: #A8A8B3;
      font-size: 12px;
      font-weight: lighter;

      > a {
        color: #000;
      }
    }
  }
`

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
    color: #A8A8B3;
  }
`

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
    color: #A8A8B3;
  }
`

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 500px;
    height: 300px;

    margin: 32px 24px 0 0 ;

    > label {
      color: #737380;
      font-size: 20px;
      font-weight: 500;
    }
  }
`

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