import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { AiOutlineCloudUpload, AiOutlineDownload } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

import {
  StyledBannerFileInputActions,
  StyledBannerFileInputPrefix,
  StyledFileInput,
  StyledFileInputActionItem,
  StyledFileInputActions,
  StyledFileInputContent,
  StyledFileInputContentHeader,
  StyledFileInputPrefix,
} from './Form.styled';
import FormFieldError from './FormFieldError';

import { Box, Typography, useTheme } from '#/components';
import { S3_BUCKET_URL } from '#/config';
import { IMAGE_TYPE, INPUT_IMG_TYPES } from '#/constants/constant';
import { INFO, VALIDATION_MESSAGES } from '#/constants/messages';
import { findSuffix, getAssetURL, humanReadableFileSize } from '#/utils/common';
import { uploadFile } from '#/utils/fileupload';
import { getFieldError } from '#/utils/formValidations';

const FormFileInput = ({
  name,
  accept,
  control,
  defaultValue,
  maxFileSize = 5e6, // 5mb in byte
  setError,
  clearErrors,
  setValue,
  errors,
  disabled = false,
  folderName,
  imageType,
  ...rest
}) => {
  const theme = useTheme();
  const { error, color } = getFieldError({ name, errors });

  const inputFileRef = useRef();

  const [status, setStatus] = useState({
    completed: defaultValue !== undefined && defaultValue?.length > 0,
    error: null,
    name: defaultValue || '',
    size: 0,
    uploading: false,
    url: defaultValue || '',
  });

  const handleFileDelete = (_filename) => {
    inputFileRef.current.value = '';
    setValue(name, '');
    setStatus((oldStatus) => ({
      ...oldStatus,
      completed: false,
      error: null,
      name: '',
      size: 0,
      uploading: false,
      url: '',
    }));
  };

  const handleFileDownload = (dbFilename) => {
    const filename = dbFilename.split(/_/g).slice(1).join('_');
    const link = document.createElement('a');
    link.href = `${S3_BUCKET_URL}/${dbFilename}`;
    link.download = filename;
    document.body.append(link);
    link.click();
  };

  const resetInputElementValue = () => {
    // since browser API doesn't allow setting file input value
    // programmatically we simply toggle input type
    if (inputFileRef.current) {
      inputFileRef.current.type = '';
      inputFileRef.current.value = '';
      inputFileRef.current.type = 'file';
    }
    setValue(name, defaultValue);
  };

  const handleInputFileChange = (event) => {
    if (status.uploading) return false;

    const fileList = event.target.files;

    if (fileList.length < 1) {
      return setError(name, {
        type: 'custom',
        message: VALIDATION_MESSAGES.IMAGE_UPLOAD.EMPTY,
      });
    }

    const fileSizeError = Array.prototype.some.call(fileList, ({ size }) => size >= maxFileSize);

    if (fileSizeError) {
      return setError(name, {
        type: 'custom',
        message: VALIDATION_MESSAGES.IMAGE_UPLOAD.MAX_SIZE,
      });
    }
    clearErrors(name);

    const formData = new FormData();
    formData.append('file', fileList[0]);

    if (folderName) {
      formData.append('folderName', folderName);
    }

    const fileInfo = fileList[0];

    if (!INPUT_IMG_TYPES.includes(fileInfo.type)) {
      return setError(name, {
        type: 'custom',
        message: VALIDATION_MESSAGES.IMAGE_UPLOAD.INVALID,
      });
    }

    setStatus((oldStatus) => ({
      ...oldStatus,
      uploading: true,
      size: fileInfo.size,
      name: fileInfo.name,
    }));

    uploadFile(formData)
      .then(({ data: { files } }) => {
        setValue(name, files[0]);
        setStatus((oldStatus) => ({
          ...oldStatus,
          completed: true,
          uploading: false,
          url: files[0],
        }));
      })
      .catch(
        ({
          response: {
            data: {
              error: { description },
            },
          },
        }) => {
          setError(name, {
            type: 'custom',
            message: description,
          });
          setStatus((oldStatus) => ({
            ...oldStatus,
            error: true,
          }));

          resetInputElementValue();
        }
      );

    return false;
  };

  useEffect(() => {
    if (inputFileRef && inputFileRef.current) {
      inputFileRef.current.addEventListener('change', handleInputFileChange);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderImage = (image) => {
    if (image?.length > 0) {
      return findSuffix(image);
    }

    if (accept.split(', ').includes('.pdf')) {
      return INFO.DOCUMENT_INPUT;
    }

    return INFO.IMAGE_INPUT;
  };

  return (
    <Box>
      <Controller
        control={control}
        render={({ field }) => (
          <StyledFileInput imageType={imageType}>
            <Box d="flex" direction="row">
              <input name={name} type="text" data-testid={name} {...field} />
              <StyledFileInputContent>
                {imageType === IMAGE_TYPE.BANNER ? (
                  <StyledBannerFileInputPrefix disabled={disabled} isUploaded={field?.value}>
                    {field?.value || defaultValue?.image ? (
                      <img
                        src={getAssetURL(defaultValue?.image ? defaultValue?.image : defaultValue || field?.value)}
                        alt={name}
                      />
                    ) : (
                      <AiOutlineCloudUpload size={24} fill={theme.color.primary.primary} />
                    )}
                    <input
                      type="file"
                      accept={accept}
                      ref={inputFileRef}
                      data-testid="fileInput"
                      disabled={disabled}
                      tabIndex={0}
                    />
                  </StyledBannerFileInputPrefix>
                ) : (
                  <StyledFileInputPrefix disabled={disabled} isUploaded={field?.value}>
                    {field?.value ? (
                      <img src={getAssetURL(field?.value)} alt={name} />
                    ) : (
                      <AiOutlineCloudUpload size={24} fill={theme.color.primary.primary} />
                    )}
                    <input
                      type="file"
                      accept={accept}
                      ref={inputFileRef}
                      data-testid="fileInput"
                      disabled={disabled}
                      tabIndex={0}
                    />
                  </StyledFileInputPrefix>
                )}
                {imageType !== IMAGE_TYPE.BANNER ? (
                  <Box>
                    <StyledFileInputContentHeader>
                      <Typography
                        d="block"
                        type="sub-title"
                        size="xsmall"
                        truncate
                        title={field?.value?.length > 0 ? field?.value : renderImage(field?.value)}
                        color={theme.color.grey.dark}
                      >
                        {renderImage(field?.value)}
                        {status.size > 0 && (
                          <Typography type="sub-title" truncate size="xsmall">
                            {humanReadableFileSize(status.size)}
                          </Typography>
                        )}
                      </Typography>
                    </StyledFileInputContentHeader>
                  </Box>
                ) : null}
              </StyledFileInputContent>
              {field?.value && imageType !== IMAGE_TYPE.BANNER && (
                <StyledFileInputActions>
                  {field?.value?.length > 0 && (
                    <StyledFileInputActionItem
                      type="button"
                      onClick={() => handleFileDownload(Array.isArray(field.value) ? field.value[0] : field.value)}
                    >
                      <AiOutlineDownload size={24} fill={theme.color.primary.primary} />
                    </StyledFileInputActionItem>
                  )}
                  {!disabled && (
                    <StyledFileInputActionItem type="button" onClick={() => handleFileDelete(field.value[0])}>
                      <MdDeleteOutline size={24} fill={theme.color.secondary.primary} />
                    </StyledFileInputActionItem>
                  )}
                </StyledFileInputActions>
              )}
              {field?.value && imageType === IMAGE_TYPE.BANNER && (
                <StyledBannerFileInputActions>
                  {field?.value?.length > 0 && (
                    <StyledFileInputActionItem
                      size={28}
                      type="button"
                      onClick={() => handleFileDownload(Array.isArray(field.value) ? field.value[0] : field.value)}
                      tabIndex={0}
                    >
                      <AiOutlineDownload size={20} fill={theme.color.primary.primary} />
                    </StyledFileInputActionItem>
                  )}
                  {!disabled && (
                    <StyledFileInputActionItem
                      type="button"
                      onClick={() => handleFileDelete(field.value[0])}
                      size={28}
                      tabIndex={0}
                    >
                      <MdDeleteOutline size={20} fill={theme.color.error.primary} />
                    </StyledFileInputActionItem>
                  )}
                </StyledBannerFileInputActions>
              )}
            </Box>
          </StyledFileInput>
        )}
        name={name}
        color={color}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <FormFieldError error={error} {...rest} />}
    </Box>
  );
};

FormFileInput.defaultProps = {
  maxFileSize: 5e6,
  defaultValue: '',
  disabled: false,
  folderName: null,
  imageType: null,
};

FormFileInput.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  control: PropTypes.instanceOf(Object).isRequired,
  defaultValue: PropTypes.string,
  maxFileSize: PropTypes.number,
  setError: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  disabled: PropTypes.bool,
  folderName: PropTypes.string,
  imageType: PropTypes.string,
};

export default FormFileInput;
