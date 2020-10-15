import styled from 'styled-components';

// Caixa de Upload
export const DropContainer = styled.div`
  cursor: pointer;

  height: 256px;
  
  border: none;
  border-radius: 5px;

  background: #EAEAEA;

  margin-top: 8px;
`

// Mensagem 
export const UploadMessage = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #A8A8A8;
  font-size: 16px;
  text-align: center;
  line-height: 24px;

  padding: 48px;

  > img {
    margin-bottom: 8px;
  }
`;
