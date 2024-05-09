import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import FormFieldError from './FormFieldError';

import { Box } from '#/components';
import RichTextEditor from '#/components/RichTextEditor';
import { getFieldError } from '#/utils/formValidations';

const FormRichTextEditor = ({ control, name, disabled, placeholder = '', ...rest }) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box>
      <Controller
        control={control}
        render={({ field }) => (
          <RichTextEditor
            color={error ? 'error' : 'primary'}
            disabled={disabled}
            placeholder={placeholder}
            {...rest}
            {...field}
          />
        )}
        name={name}
        color={color}
        disabled={disabled}
        {...rest}
      />
      {error && <FormFieldError error={error} />}
    </Box>
  );
};

FormRichTextEditor.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  name: PropsTypes.string.isRequired,
  disabled: PropsTypes.bool,
  placeholder: PropsTypes.string,
};

FormRichTextEditor.defaultProps = {
  disabled: false,
  placeholder: '',
};

export default FormRichTextEditor;
