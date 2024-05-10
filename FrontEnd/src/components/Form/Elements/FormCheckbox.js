import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import FormFieldError from './FormFieldError';

import { Box, Checkbox } from '#/components';
import { getFieldError } from '#/utils/formValidations';

// TODO: add error state for Checkbox
const FormCheckbox = ({ control, name, errors, children, ...rest }) => {
  const { error, color } = getFieldError({ name, errors, ...rest });

  return (
    <Box {...rest}>
      <Controller
        control={control}
        render={({ field }) => (
          <Checkbox color={errors ? 'error' : 'primary'} {...field} {...rest}>
            {children}
          </Checkbox>
        )}
        name={name}
        color={color}
        {...rest}
      />
      {error && <FormFieldError error={error} />}
    </Box>
  );
};
FormCheckbox.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  errors: PropsTypes.shape(Object).isRequired,
  userIdentifier: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
};

export default FormCheckbox;
