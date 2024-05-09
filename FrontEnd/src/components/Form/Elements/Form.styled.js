/* eslint-disable react/display-name */
import React from 'react';

import styled from 'styled-components';

import {
  Box,
  Button,
  DatePicker,
  Input,
  RadioButtonGroup,
  Select,
  TextArea,
  TimePicker,
  TimeRangePicker,
  Typography,
} from '#/components';
import { IMAGE_TYPE } from '#/constants/constant';
import { RESPONSIVE_LAYOUT, device } from '#/constants/layout';

export const StyledForm = styled(({ ...props }) => <Box as="form" {...props} />)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyleLabel = styled.label`
  display: flex;
`;

export const StyledSelect = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <Select {...props} />
    </div>
  ))
)`
  &&& {
    min-width: 100%;
    div.ant-select-selector {
      width: 100%;
      min-height: 40px;
      gap: 1rem;
    }
    div.ant-select-selector span.ant-select-selection-placeholder {
      line-height: 40px;
    }
  }
`;

export const StyledDatePicker = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <DatePicker {...props} />
    </div>
  ))
)``;

export const StyledTimeRangePicker = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <TimeRangePicker {...props} />
    </div>
  ))
)`
  .ant-picker-large {
    padding: 6.5px 11px 6.5px 6px;
  }
`;

export const StyledTimePicker = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <TimePicker {...props} />
    </div>
  ))
)`
  .ant-picker-large {
    padding: 6.5px 11px 6.5px 6px;
  }
`;

export const StyledRadioButtonGroup = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <RadioButtonGroup {...props} />
    </div>
  ))
)`
  .ant-radio {
    padding: 0 0 1px;
  }
`;

export const StyledTextArea = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <TextArea {...props} />
    </div>
  ))
)``;

export const StyledInput = styled(
  React.forwardRef((props, ref) => (
    <div ref={ref}>
      <Input {...props} />
    </div>
  ))
)`
  width: 100%;
  .ant-select-selector {
    height: 22px; // Fixed for all devices
  }
`;

export const StyledFieldError = styled(({ ...props }) => <Typography mt={0.8} type="span" {...props} />)`
  display: block;
  color: ${({ theme }) => theme.color.error.primary};
  ${({ position }) => position && `position: ${position};`}
`;

export const StyledFormFooterContainer = styled(Box)`
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
  border-top: 1px solid ${({ theme }) => theme.color.primary.primary};
  padding-top: 31px;
  margin-top: 25px;
`;

export const StyledFooterSection = styled(Box)`
  display: flex;

  @media only screen and (max-width: ${RESPONSIVE_LAYOUT.xs}px) {
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  * ~ * {
    margin-left: 10px;
  }
`;

export const StyledButton = styled(Button)`
  ${({ width }) => width && `width: ${width}px;`}
  height: 36px;
  background: red;
`;

export const StyledFileInput = styled.div`
  max-width: ${({ imageType }) => (imageType === IMAGE_TYPE.BANNER ? '100%' : '85%')};
  position: relative;

  input[type='text'] {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  input[type='file'] {
    position: absolute;
    opacity: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }
`;

export const StyledFileInputProgress = styled.div`
  width: 68px;
  height: 68px;
  display: flex;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  flex: 1 1 100%;
`;

export const StyledFileProgress = styled.div`
  width: 68px;
  height: 68px;
  position: absolute;
  z-index: -1;
  background: conic-gradient(red ${({ $value }) => $value * 360}deg, white 0deg);
`;

export const StyledBannerFileInputPrefix = styled.div`
  z-index: 1;
  cursor: pointer;
  width: 220px;
  height: 128px;
  border-radius: 8px;

  background-color: ${({ theme, uploadStatus }) =>
    uploadStatus === 'completed' ? theme.color.primary.primary : theme.color.primary.extraLight};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${({ theme }) => theme.color.grey.primary};
  position: relative;

  &[disabled] {
    background-color: ${({ theme }) => theme.color.grey.primary};
    border: 1px dashed ${({ theme }) => theme.color.primary.primary};
    cursor: not-allowed;
  }

  & > * {
    z-index: 1;
    position: absolute;
    inset: 0;
    margin: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const StyledFileInputPrefix = styled.div`
  z-index: 1;
  cursor: pointer;
  min-width: 69px;
  width: 69px;
  height: 68px;

  background-color: ${({ theme, uploadStatus }) =>
    uploadStatus === 'completed' ? theme.color.primary.primary : theme.color.primary.lighter};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px dashed ${({ theme }) => theme.color.grey.dark};
  position: relative;

  :active,
  :focus,
  :hover,
  :focus-within {
    border: 1px dashed ${({ theme }) => theme.color.secondary.primary};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.color.grey.primary};
    border: 1px dashed ${({ theme }) => theme.color.grey.dark};
    cursor: not-allowed;
  }

  & > * {
    z-index: 1;
    position: absolute;
    inset: 0;
    margin: auto;
  }

  &:after {
    width: 100%;
    height: 100%;
    background: ${({ isUploaded, theme }) => (isUploaded ? 'white' : theme.color.primary.extraLight)};
    display: block;
    content: '';
    overflow: hidden;
    border-radius: 50%;
    z-index: 0;
  }
  img {
    width: 67px;
    height: 67px;
    border-radius: 50%;
  }
`;

export const StyledFileInputContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const StyledFileInputContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  & > div {
    max-width: 16rem;
    white-space: nowrap;

    ${device.screenLargerThanTablet} {
      max-width: 20rem;
    }
  }
`;

export const StyledFileInputActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  gap: 10px;
`;

export const StyledBannerFileInputActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  position: absolute;
  top: 5px;
  z-index: 1;
  right: 10px;
  gap: 5px;
`;

export const StyledFileInputActionItem = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.grey.lighter};
  border-radius: 100%;
  width: ${({ size }) => (size ? `${size}px` : '34px')};
  height: ${({ size }) => (size ? `${size}px` : '34px')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export const StyledFileInputActionItemNoBg = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  align-items: center;
  display: flex;
`;

export const FormulaInputContainer = styled(Box)`
  position: relative;
  input {
    display: none;
  }

  border-color: ${({ theme }) => theme.color.grey.dark};
  border-radius: ${({ theme }) => theme.border.radius[5]};

  .quill {
    line-height: 2;
    border: solid 1px ${({ theme }) => theme.color.grey.primary};

    ${({ theme, $color }) => $color === 'error' && `border-color: ${theme.color.error.primary}`};

    border-radius: ${({ theme }) => theme.border.radius[5]};
    width: calc(100% - 63px);
    padding: 10px 15px;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    font-weight: 400;
    font-size: 14px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
    overflow: hidden;

    .ql-editor {
      overflow-x: auto;
      overflow-y: hidden;
      white-space: pre;
      padding: 0px;
    }

    .ql-container,
    .ql-snow {
      border: none;
      max-height: 17px;
    }

    .ql-editor br {
      display: none;
    }
  }

  &:is([disabled]) {
    background-color: ${({ theme }) => theme.color.grey.primary} !important;
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.color.grey.primary} !important;
    color: ${({ theme }) => theme.color.grey.dark} !important;
  }

  &&& {
    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const StyledDropDownWrapper = styled.div`
  .line {
    display: none;
  }

  & > div {
    height: 0px;
  }

  .wrapper div:first-child {
    display: none;
  }
`;

export const StyledFileUploadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  background: ${({ theme }) => theme.color.primary.medium};
  border: 1px dashed
    ${({ theme, isFocused, isDragAccept, isDragReject }) => {
      if (isFocused) return theme.color.primary.cadetBlue;

      if (isDragAccept) return theme.color.primary.cadetBlue;

      if (isDragReject) return theme.color.error.primary;

      return theme.color.grey.dark;
    }};
`;

export const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;

  div > p.upload__text--size {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const StyledFileNameContainer = styled.div``;
