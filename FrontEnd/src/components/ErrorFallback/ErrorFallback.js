import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './ErrorFallback.styled';

import Error from '#/assets/images/Error.svg';
import { Button, Typography } from '#/components';
import Image from '#/components/Image';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Container role="alert">
      <Image src={Error} alt="Error encountered" />
      <Typography type="sub-title" size="large">
        Something went wrong!
      </Typography>
      <Typography type="body" size="xsmall">
        {error?.message}
      </Typography>
      <Button onClick={() => resetErrorBoundary()} text="Try Again" />
    </Container>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.objectOf(Error).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
