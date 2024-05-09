import React from 'react';

import PropType from 'prop-types';

import { StyleLabel } from './Form.styled';

import { Typography, useTheme } from '#/components';

const FormLabel = ({ htmlFor, mb = 1, info, required, ...rest }) => {
  const theme = useTheme();

  return (
    <StyleLabel htmlFor={htmlFor}>
      <Typography d="block" mb={mb} type="span" size="small" weight="semibold" {...rest} />
      {info && (
        <Typography type="span" size="small" color={theme.text.secondary} ml={0.5}>
          ({info})
        </Typography>
      )}
      {required && (
        <Typography type="span" size="small" color="red">
          *
        </Typography>
      )}
    </StyleLabel>
  );
};

FormLabel.propTypes = {
  htmlFor: PropType.string,
  required: PropType.bool,
  mb: PropType.number,
  info: PropType.string,
};

FormLabel.defaultProps = {
  htmlFor: '',
  required: false,
  mb: 1,
  info: null,
};

export default FormLabel;
