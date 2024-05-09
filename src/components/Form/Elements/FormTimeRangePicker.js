import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { StyledTimeRangePicker } from './Form.styled';
import FormFieldError from './FormFieldError';

import { Box } from '#/components';
import { getFieldError } from '#/utils/formValidations';

const FormTimeRangePicker = ({ control, name, defaultValue, disabled = false, size, ...rest }) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box>
      <Controller
        control={control}
        render={({ field }) => {
          return (
            <StyledTimeRangePicker
              color={error ? 'error' : 'primary'}
              disabled={disabled}
              size={size}
              defaultValue={defaultValue}
              // changeOnBlur
              {...rest}
              {...field}
            />
          );
        }}
        name={name}
        color={color}
        {...rest}
      />
      {error && <FormFieldError error={error} {...rest} />}
    </Box>
  );
};

FormTimeRangePicker.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  errors: PropsTypes.shape(Object).isRequired,
  userIdentifier: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
  options: PropsTypes.arrayOf(Object).isRequired,
  value: PropsTypes.string.isRequired,
  defaultValue: PropsTypes.string.isRequired,
  disabled: PropsTypes.bool,
  size: PropsTypes.string,
};

FormTimeRangePicker.defaultProps = {
  disabled: false,
  size: 'default',
};

export default FormTimeRangePicker;
