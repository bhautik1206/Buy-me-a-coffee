import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { StyledRadioButtonGroup } from './Form.styled';
import FormFieldError from './FormFieldError';

import { Box } from '#/components';
import { getFieldError } from '#/utils/formValidations';

const FormRadioButtonGroup = ({ control, name, align, errorPosition, disabled, ...rest }) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box align={align} {...rest}>
      <Controller
        control={control}
        render={({ field }) => <StyledRadioButtonGroup disabled={disabled} {...field} {...rest} />}
        name={name}
        color={color}
        disabled={disabled}
        {...rest}
      />
      {error && <FormFieldError error={error} align={align} position={errorPosition} />}
    </Box>
  );
};

FormRadioButtonGroup.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  name: PropsTypes.string.isRequired,
  align: PropsTypes.string.isRequired,
  errorPosition: PropsTypes.string.isRequired,
  disabled: PropsTypes.bool,
  defaultValue: PropsTypes.arrayOf(String),
};

FormRadioButtonGroup.defaultProps = {
  disabled: false,
  defaultValue: null,
};

export default FormRadioButtonGroup;
