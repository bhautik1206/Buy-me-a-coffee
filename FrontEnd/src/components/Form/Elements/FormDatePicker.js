import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { StyledDatePicker } from './Form.styled';
import FormFieldError from './FormFieldError';

import { Box } from '#/components';
import { getFieldError } from '#/utils/formValidations';

const FormDatePicker = ({ control, name, defaultValue, placeholder = '', disabled = false, size, ...rest }) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box>
      <Controller
        control={control}
        render={({ field }) => {
          return (
            <StyledDatePicker
              color={error ? 'error' : 'primary'}
              onChange={(e) => {
                rest.onChange(e);
              }}
              placeholder={placeholder}
              disabled={disabled}
              defaultValue={defaultValue}
              size={size}
              {...field}
              {...rest}
            />
          );
        }}
        name={name}
        defaultValue={defaultValue}
        color={color}
        disabled={disabled}
        {...rest}
      />
      {error && <FormFieldError error={error} {...rest} />}
    </Box>
  );
};

FormDatePicker.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  errors: PropsTypes.shape(Object).isRequired,
  userIdentifier: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
  options: PropsTypes.arrayOf(Object).isRequired,
  value: PropsTypes.string.isRequired,
  defaultValue: PropsTypes.string.isRequired,
  placeholder: PropsTypes.string,
  disabled: PropsTypes.bool,
  size: PropsTypes.string,
};

FormDatePicker.defaultProps = {
  placeholder: '',
  disabled: false,
  size: 'default',
};

export default FormDatePicker;
