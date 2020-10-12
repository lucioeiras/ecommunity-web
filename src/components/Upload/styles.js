import styled from 'styled-components';

export const DropContainer = styled.div`
  cursor: pointer;

  height: 256px;
  
  border: none;
  border-radius: 5px;

  background: #EAEAEA;

  margin-top: 8px;
`

export const UploadMessage = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #A8A8B3;
  font-size: 16px;
  text-align: center;
  line-height: 24px;

  padding: 48px;

  > img {
    margin-bottom: 8px;
  }
`;
