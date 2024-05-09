import React from 'react';

import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import sanitizeHtml from 'sanitize-html';

import { StyledContainer, StyledPreviewContainer } from './RichTextEditor.styled';

import { TextEditorFormats } from '#/utils/textEditor';

const RichTextEditor = ({ value, disabled, onChange, showPreview }) => {
  const TextEditorDisabled = showPreview || disabled;

  if (TextEditorDisabled) return <StyledPreviewContainer dangerouslySetInnerHTML={{ __html: sanitizeHtml(value) }} />;

  return (
    <StyledContainer>
      <ReactQuill
        theme="snow"
        style={{ backgroundColor: 'black' }}
        modules={{
          toolbar: [[{ header: [1, 2, 3, 4, 5] }], ['bold'], [{ list: 'ordered' }], [{ list: 'bullet' }], ['clean']],
          clipboard: {
            matchVisual: false, // Disable styled paste
          },
        }}
        placeholder="Enter Instructions"
        value={value}
        disabled={disabled}
        onChange={onChange}
        formats={TextEditorFormats}
      />
    </StyledContainer>
  );
};

RichTextEditor.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  showPreview: PropTypes.bool,
};

RichTextEditor.defaultProps = {
  disabled: false,
  showPreview: false,
};

export default RichTextEditor;
