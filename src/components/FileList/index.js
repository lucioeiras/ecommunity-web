import React from 'react';

import { Container, FileInfo } from './styles';

// Lista de arquivos adicionados pelo usuário
export default function FileList({ files }) {
  return (
    <Container>
      {files.map(uploadedFile => (
        <li key={uploadedFile.name}>
          <FileInfo>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.readableSize}</span>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};