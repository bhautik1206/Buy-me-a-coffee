import React from 'react';

import PropTypes from 'prop-types';

import { StyledFieldError } from './Form.styled';

const FormFieldError = ({ align, error, children, size, position }) => {
  if (!error && children) {
    return <StyledFieldError align={align}>{children}</StyledFieldError>;
  }

  return (
    <StyledFieldError align={align} size={size} position={position}>
      {error}
    </StyledFieldError>
  );
};

FormFieldError.defaultProps = {
  align: 'left',
  size: 'xsmall',
  position: 'relative',
  children: null,
};

FormFieldError.propTypes = {
  align: PropTypes.string,
  size: PropTypes.string,
  position: PropTypes.string,
  error: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FormFieldError;
