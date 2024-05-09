import React from 'react';

import PropTypes from 'prop-types';

import {
  DefaultButton,
  OutlineButton,
  SkeletonButton,
  StyledIcon,
  SuccessButton,
  WarningButton,
} from './Button.styled';

const WithIcon = ({ icon, iconOnly, iconRight, text, size, fillColor }) => {
  return (
    <>
      {icon !== null && !iconRight && (
        <StyledIcon $gap={iconOnly ? 0 : 5} $size={size} $fillColor={fillColor}>
          {icon}
        </StyledIcon>
      )}
      {!iconOnly && <span>{text}</span>}
      {icon !== null && iconRight && (
        <StyledIcon $alignRight $gap={iconOnly ? 0 : 5} $size={size} $fillColor={fillColor}>
          {icon}
        </StyledIcon>
      )}
    </>
  );
};

WithIcon.propTypes = {
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  iconRight: PropTypes.bool,
  text: PropTypes.string,
  size: PropTypes.string,
  fillColor: PropTypes.string,
};

WithIcon.defaultProps = {
  icon: null,
  iconOnly: false,
  iconRight: false,
  text: 'Button',
  size: 'large',
  fillColor: 'white',
};

/**
 *
 * @param {string} color - Use this color for background, `[primary, white]`.
 * @param {string} textColor - Text color.
 * @param {boolean} iconOnly - `true` for icon only button.
 * @param {boolean} iconRight - Put Icon on right, default is left.
 * @param {boolean} skeleton - Show only skeleton button..
 * @param {boolean} success - Set background color to success.
 * @param {boolean} warning - Set background color to warning.
 * @param {number} iconSize - Icon size.
 * @param {string} fillColor - Fill color for the SVG Icon.
 * @param {string} icon - Icon name i.e add, arrow.
 * @param {string} size - Button size values `[large, medium, small, xsmall]`.
 * @param {string} text - Button text.
 *
 * @return {object} Button
 *
 * Using $propName to prevent passing custom props to `HTMLElement`
 * See: https://styled-components.com/docs/api#transient-props
 *
 */
const Button = ({
  color,
  textColor,
  fillColor,
  strokeColor,
  icon,
  iconOnly,
  iconRight,
  iconSize,
  size,
  skeleton,
  success,
  text,
  warning,
  outline,
  disabled,
  variant,
  shadow,
  ...rest
}) => {
  if (warning === true) {
    return (
      <WarningButton
        $size={size}
        $iconOnly={iconOnly}
        $textColor={textColor}
        $variant={variant}
        $shadow={shadow}
        {...(disabled === true ? { disabled: true } : {})}
        {...rest}
      >
        <WithIcon
          fillColor={fillColor}
          strokeColor={strokeColor}
          icon={icon}
          iconOnly={iconOnly}
          iconRight={iconRight}
          iconSize={iconSize}
          text={text}
          size={size}
        />
      </WarningButton>
    );
  }

  if (success === true) {
    return (
      <SuccessButton
        $size={size}
        $iconOnly={iconOnly}
        $textColor={textColor}
        $variant={variant}
        $shadow={shadow}
        {...(disabled === true ? { disabled: true } : {})}
        {...rest}
      >
        <WithIcon
          fillColor={fillColor}
          strokeColor={strokeColor}
          icon={icon}
          iconOnly={iconOnly}
          iconRight={iconRight}
          iconSize={iconSize}
          text={text}
        />
      </SuccessButton>
    );
  }

  if (skeleton === true) {
    return (
      <SkeletonButton
        $size={size}
        $iconOnly={iconOnly}
        $variant={variant}
        $shadow={shadow}
        {...(disabled === true ? { disabled: true } : {})}
        {...rest}
      >
        <WithIcon
          fillColor={fillColor}
          strokeColor={strokeColor}
          icon={icon}
          iconOnly={iconOnly}
          iconRight={iconRight}
          iconSize={iconSize}
          text={text}
        />
      </SkeletonButton>
    );
  }

  if (outline === true) {
    return (
      <OutlineButton
        $color={color}
        $size={size}
        $icon={iconOnly}
        $textColor={textColor}
        $variant={variant}
        $shadow={shadow}
        {...(disabled === true ? { disabled: true } : {})}
        {...rest}
      >
        <WithIcon
          fillColor={fillColor}
          strokeColor={strokeColor}
          icon={icon}
          iconOnly={iconOnly}
          iconRight={iconRight}
          iconSize={iconSize}
          text={text}
        />
      </OutlineButton>
    );
  }

  return (
    <DefaultButton
      $size={size}
      $color={color}
      $textColor={textColor}
      $iconOnly={iconOnly}
      $variant={variant}
      $shadow={shadow}
      {...(disabled === true ? { disabled: true } : {})}
      {...rest}
    >
      <WithIcon
        fillColor={fillColor}
        strokeColor={strokeColor}
        icon={icon}
        iconOnly={iconOnly}
        iconRight={iconRight}
        iconSize={iconSize}
        text={text}
      />
    </DefaultButton>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string,
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  iconRight: PropTypes.bool,
  iconSize: PropTypes.number,
  size: PropTypes.string,
  outline: PropTypes.bool,
  skeleton: PropTypes.bool,
  success: PropTypes.bool,
  text: PropTypes.string,
  warning: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  shadow: PropTypes.string,
};

Button.defaultProps = {
  color: 'secondary',
  textColor: 'white',
  fillColor: 'white',
  strokeColor: 'white',
  icon: null,
  iconOnly: false,
  iconRight: false,
  iconSize: 24,
  size: 'large',
  outline: false,
  skeleton: false,
  success: false,
  text: 'Button',
  warning: false,
  disabled: false,
  variant: 'default',
  shadow: '0px 1px 5px rgba(15, 15, 15, 0.12)',
};

export default Button;
