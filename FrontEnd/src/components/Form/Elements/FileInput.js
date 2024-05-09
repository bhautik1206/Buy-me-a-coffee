import React, { useCallback, useEffect } from 'react';

import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from 'react-icons/io5';

import { StyledFileUploadContainer, StyledInnerContainer } from './Form.styled';
import FormFieldError from './FormFieldError';

import { Typography, useTheme } from '#/components';

const FileInput = (props) => {
  const theme = useTheme();
  const { name, watch, setValue, register, unregister } = props;

  const files = watch(name);

  const onDrop = useCallback(
    (droppedFiles) => {
      props?.setCsvErrorMessage();
      setValue(name, droppedFiles, { shouldValidate: true });
    },
    [setValue, name]
  );

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
    maxFiles: 1,
  });

  useEffect(() => {
    register(name);

    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  return (
    <StyledFileUploadContainer
      isFocused={isFocused}
      isDragAccept={isDragAccept}
      isDragReject={isDragReject || !!props?.csvErrorMessage}
      theme={theme}
    >
      <StyledInnerContainer {...getRootProps()}>
        <IoCloudUploadOutline size={100} color={theme.color.primary.primary} />
        <input id={name} {...props} {...getInputProps()} />
        <div>
          <Typography type="p" size="small">
            Drag and Drop to upload
          </Typography>
          <Typography type="p" size="small">
            or
            <Typography type="p" size="small">
              browse
            </Typography>
          </Typography>
          {!!files?.length && (
            <div>
              {files.map((file) => {
                return (
                  <Typography type="p" size="small" key={file.name}>
                    {file.name}
                  </Typography>
                );
              })}
            </div>
          )}
        </div>
      </StyledInnerContainer>
      {props?.csvErrorMessage && <FormFieldError error={props?.csvErrorMessage} />}
    </StyledFileUploadContainer>
  );
};

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  setCsvErrorMessage: PropTypes.func.isRequired,
  csvErrorMessage: PropTypes.string.isRequired,
  watch: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  unregister: PropTypes.func.isRequired,
};

export default FileInput;
