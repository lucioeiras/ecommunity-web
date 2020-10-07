import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;

    background: #FAFAFA;

    display: flex;
    justify-content: center;
  }

  *, body, button, input, textarea {
    font-family: 'Roboto'; 
  }
`
