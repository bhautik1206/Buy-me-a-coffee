import React from 'react';

import PropTypes from 'prop-types';

import getTheme from '../utils/theme';

import TypographyMapping from './TypographyMapping';

const Typography = ({ type, children, fontSize, size, weight, color, width, truncate, ...rest }) => {
  const theme = getTheme();
  const StyledTypography = TypographyMapping[type];

  return (
    <StyledTypography
      theme={theme}
      $fontSize={fontSize}
      $size={size}
      $weight={weight}
      $color={color}
      $width={width}
      $truncate={truncate}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

Typography.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  truncate: PropTypes.bool,
  width: PropTypes.string,
};

Typography.defaultProps = {
  children: {},
  type: 'h1',
  fontSize: 'normal',
  size: 'normal',
  weight: 'normal',
  color: 'black',
  truncate: false,
  width: null,
};

export default Typography;
