import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  max-width: 1100px;
  overflow: hidden;
`

export const Header = styled.header`
  margin-top: 48px;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 64px;
`

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

  > .facebook {
    background: #3B589D;
    transition: background-color 0.2s;

    &:hover {
      background: #273965;
    }
  }
`