import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { StyledTextArea } from './Form.styled';
import FormFieldError from './FormFieldError';

import { Box } from '#/components';
import { getFieldError } from '#/utils/formValidations';

const FormTextArea = ({ control, name, disabled, placeholder = '', ...rest }) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box>
      <Controller
        control={control}
        render={({ field }) => (
          <StyledTextArea
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

FormTextArea.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  name: PropsTypes.string.isRequired,
  disabled: PropsTypes.bool,
  placeholder: PropsTypes.string,
};

FormTextArea.defaultProps = {
  disabled: false,
  placeholder: '',
};

export default FormTextArea;
