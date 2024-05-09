import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import FormFieldError from './FormFieldError';

import { Box, CheckBoxGroup } from '#/components';
import { getFieldError } from '#/utils/formValidations';

// TODO: add error state for Checkbox
const FormCheckboxGroup = ({ control, name, errors, children, options, defaultValue, ...rest }) => {
  const { error, color } = getFieldError({ name, errors, ...rest });

  return (
    <Box {...rest}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <CheckBoxGroup
              onChange={(e) => {
                onChange(e);
              }}
              options={options}
              color={error ? 'error' : 'primary'}
              value={value}
              {...rest}
            >
              {children}
            </CheckBoxGroup>
          );
        }}
        name={name}
        color={color}
        {...rest}
      />
      {error && <FormFieldError error={error} />}
    </Box>
  );
};

FormCheckboxGroup.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  errors: PropsTypes.shape(Object).isRequired,
  userIdentifier: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
  options: PropsTypes.arrayOf(Object).isRequired,
  value: PropsTypes.string.isRequired,
  defaultValue: PropsTypes.arrayOf(String),
};

FormCheckboxGroup.defaultProps = {
  defaultValue: [],
};

export default FormCheckboxGroup;
