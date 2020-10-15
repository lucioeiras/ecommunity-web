import React from 'react';

import Dropzone from 'react-dropzone';

import addIcon from '../../assets/add-circle.svg'

import { DropContainer, UploadMessage } from './styles';

// Box para subir arquivos
export default function Upload({ onUpload }) {

  // Renderiza as mensagens que se adaptam conforme o comportamento do usuário
  function renderDragMessage(isDragActive, isDragRejest) {

    // Mensagem padrão
    if (!isDragActive) {
      return (
        <UploadMessage>
          <img src={addIcon} alt="Adicionar" />
          Arraste o arquivo para cá ou clique para adicioná-lo manualmente
        </UploadMessage>
      );
    }

    // Mensagem se não for possível subir o arquivo
    if (isDragRejest) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    // Mensagem quando o usuário estiver com o arquivo em cima da box
    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  }

  return (
    <>
      <Dropzone
        onDropAccepted={(files) => onUpload(files)}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} data-testid="upload" />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </>
  );
};