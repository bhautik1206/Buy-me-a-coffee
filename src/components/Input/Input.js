import React from 'react';

import { Divider } from 'antd';
import PropTypes from 'prop-types';

import getTheme from '../utils/theme';

import { StyledInput, StyledPasswordInput } from './Input.styled';

const Input = ({ placeholder, prefix, suffix, color, showDivider, disabled, type, size, ...rest }) => {
  const theme = getTheme();

  if (type === 'password') {
    // props with `$` prefix are used in styled component, they are called
    // transient properties and are not passed to underlying react component
    // see: https://styled-components.com/docs/api#transient-props
    return (
      <StyledPasswordInput
        placeholder={placeholder}
        $color={disabled ? 'grey' : color}
        $size={size}
        disabled={disabled}
        theme={theme}
        prefix={
          prefix && (
            <>
              {prefix}
              {showDivider && <Divider type="vertical" />}
            </>
          )
        }
        suffix={
          suffix && (
            <>
              {showDivider && <Divider type="vertical" />}
              {suffix}
            </>
          )
        }
        {...rest}
      />
    );
  }

  return (
    <StyledInput
      placeholder={placeholder}
      $color={disabled ? 'grey' : color}
      $size={size}
      disabled={disabled}
      theme={theme}
      type={type}
      prefix={
        prefix && (
          <>
            {prefix}
            {showDivider && <Divider type="vertical" />}
          </>
        )
      }
      suffix={
        suffix && (
          <>
            {showDivider && <Divider type="vertical" />}
            {suffix}
          </>
        )
      }
      {...rest}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  showDivider: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  disabled: false,
  defaultValue: '',
  placeholder: '',
  color: 'primary',
  onChange: () => {},
  showDivider: false,
  prefix: '',
  suffix: '',
  onPressEnter: () => {},
};

export default Input;
