import React from 'react';

import { Spin } from 'antd';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { StyledContainer } from './Loader.styled';

import theme from '#/theme';

const Loader = ({ fillColor, ...rest }) => {
  const isTabletAndLower = useMediaQuery({ maxWidth: 769 });

  return (
    <StyledContainer d="flex" $fillColor={fillColor}>
      <Spin size={isTabletAndLower ? 'default' : 'large'} {...rest} className="custom-spin-color" />
    </StyledContainer>
  );
};

Loader.propTypes = {
  fillColor: PropTypes.string,
};

Loader.defaultProps = {
  fillColor: theme.color.secondary.primary,
};

export default Loader;
