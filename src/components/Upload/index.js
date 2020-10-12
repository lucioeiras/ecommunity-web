import React from 'react';

import Dropzone from 'react-dropzone';

import addIcon from '../../assets/add-circle.svg'

import { DropContainer, UploadMessage } from './styles';

export default function Upload({ onUpload }) {
  function renderDragMessage(isDragActive, isDragRejest) {
    if (!isDragActive) {
      return (
        <UploadMessage>
          <img src={addIcon} alt="Adicionar" />
          Arraste o arquivo para cá ou clique para adicioná-lo manualmente
        </UploadMessage>
      );
    }

    if (isDragRejest) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

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