import React from 'react';

import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { StyledInput } from './Form.styled';
import FormFieldError from './FormFieldError';

import { Box } from '#/components';
import { getFieldError } from '#/utils/formValidations';

const FormInput = ({
  control,
  name,
  defaultValue,
  type,
  placeholder = '',
  prefix,
  suffix,
  disabled,
  size,
  min,
  step,
  pattern,
  transform,
  allowClear,
  ...rest
}) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box>
      <Controller
        control={control}
        render={({ field }) => {
          return (
            <StyledInput
              type={type}
              color={error ? 'error' : 'primary'}
              placeholder={placeholder}
              disabled={disabled}
              prefix={prefix}
              suffix={suffix}
              size={size}
              min={min}
              step={step}
              pattern={pattern}
              allowClear={allowClear}
              {...field}
              {...rest}
              onChange={(evt) => {
                field.onChange(transform ? transform(evt.target.value) : evt.target.value);
              }}
            />
          );
        }}
        name={name}
        color={color}
        defaultValue={defaultValue || ''}
        disabled={disabled}
        {...rest}
      />
      {error && <FormFieldError error={error} {...rest} />}
    </Box>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  control: PropTypes.instanceOf(Object).isRequired,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  size: PropTypes.string,
  min: PropTypes.number,
  step: PropTypes.number,
  pattern: PropTypes.string,
  transform: PropTypes.func,
  allowClear: PropTypes.bool,
};

FormInput.defaultProps = {
  placeholder: '',
  prefix: null,
  suffix: null,
  size: 'medium',
  min: 0,
  step: 1,
  pattern: null,
  transform: null,
  disabled: false,
  allowClear: false,
  defaultValue: null,
};

export default FormInput;
