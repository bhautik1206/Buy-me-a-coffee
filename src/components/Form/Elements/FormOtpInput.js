import React from 'react';

import PropsTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import OtpInput from 'react-otp-input';

import FormFieldError from './FormFieldError';

import { useTheme } from '#/components';
import { getFieldError } from '#/utils/formValidations';

const FormOtpInput = ({ control, name, ...rest }) => {
  const { error, color } = getFieldError({ name, ...rest });
  const theme = useTheme();

  return (
    <div>
      <Controller
        control={control}
        render={({ field }) => {
          return (
            <OtpInput
              numInputs={4}
              masked
              numeric
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: '4.1rem',
                textAlign: 'center',
                height: '4.1rem',
                borderRadius: '5px',
                borderColor: theme.color.grey.dark,
                outlineColor: theme.color.primary.primary,
                marginRight: '20px',
                borderStyle: 'solid',
                borderWidth: '1px',
              }}
              focusStyle={{ outlineColor: theme.color.primary.primary }}
              onChange={(otp) => field.onChange(otp)}
              {...field}
            />
          );
        }}
        name={name}
        color={color}
        {...rest}
      />
      {error && <FormFieldError error={error} {...rest} />}
    </div>
  );
};

FormOtpInput.propTypes = {
  control: PropsTypes.shape(Object).isRequired,
  name: PropsTypes.string.isRequired,
};

export default FormOtpInput;
