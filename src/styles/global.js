import { createGlobalStyle } from 'styled-components'

// Cria configurações de estilo para todas as páginas
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, #root {
    width: 100vw;
    height: 100vh;

    background: #FAFAFA;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  *, body, button, input, textarea {
    font-family: 'Roboto'; 
  }
`
