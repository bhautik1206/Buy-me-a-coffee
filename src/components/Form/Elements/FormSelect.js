import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { StyledSelect } from './Form.styled';
import FormFieldError from './FormFieldError';

import { Box } from '#/components';
import { getFieldError } from '#/utils/formValidations';

const FormSelect = ({
  control,
  name,
  errorPosition,
  options,
  disabled,
  showSearch,
  onSearch,
  placeholder = '',
  onSelect,
  notFoundContent,
  ...rest
}) => {
  const { error, color } = getFieldError({ name, ...rest });

  return (
    <Box>
      <Controller
        control={control}
        render={({ field }) => (
          <StyledSelect
            options={options}
            color={error ? 'error' : 'primary'}
            placeholder={placeholder}
            disabled={disabled}
            showSearch={showSearch}
            onSearch={onSearch}
            onSelect={onSelect}
            notFoundContent={notFoundContent}
            data-testid={name}
            {...field}
            {...rest}
          />
        )}
        name={name}
        color={color}
        disabled={disabled}
        {...rest}
      />
      {error && <FormFieldError error={error} position={errorPosition} />}
    </Box>
  );
};

FormSelect.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  name: PropsTypes.string.isRequired,
  align: PropsTypes.string.isRequired,
  errorPosition: PropsTypes.string.isRequired,
  showSearch: PropsTypes.bool,
  disabled: PropsTypes.bool,
  options: PropsTypes.arrayOf.isRequired,
  onSearch: PropsTypes.func,
  placeholder: PropsTypes.string,
  onSelect: PropsTypes.func,
  notFoundContent: PropsTypes.string,
  defaultValue: PropsTypes.string || PropsTypes.arrayOf,
};

FormSelect.defaultProps = {
  showSearch: false,
  disabled: false,
  onSearch: () => {},
  placeholder: '',
  onSelect: () => {},
  notFoundContent: '',
  defaultValue: null,
};

export default FormSelect;
