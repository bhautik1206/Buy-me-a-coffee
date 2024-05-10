/* eslint-disable indent */
import { Input } from 'antd';
import styled, { css } from 'styled-components';

import genericStyles from '../utils/genericStyles';

const baseInputStyles = css`
  &&& {
    ${genericStyles}

    ${({ fullWidth }) => fullWidth && `width: 100%;`};
    ${({ height }) => height && `height: ${height}px;`};

    &,
    input {
      font-family: ${({ theme }) => theme.fontFamily.regular};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      font-size: ${({ theme }) => theme.input.fontSize};
      line-height: ${({ theme }) => theme.lineHeight};
      border-radius: ${({ theme }) => theme.border.radius[5]};
    }

    padding: ${({ theme, $size }) => theme.input[$size].padding};

    &::selection {
      background: ${({ theme, $color }) => theme.color[$color].light};
    }

    &.ant-input-affix-wrapper-lg {
      padding: 10px 20px;
      height: 40px;
    }

    &.ant-input-prefix {
      margin-right: 12px;
    }

    .ant-input-prefix,
    .ant-input-suffix {
      svg {
        width: ${({ theme, $size }) => theme.input[$size].icon}px;
        height: ${({ theme, $size }) => theme.input[$size].icon}px;
        fill: ${({ theme }) => theme.color.grey.primary};
      }

      .ant-select {
        &-selector {
          border: none;
          padding: 0 30px 0 0;
        }
        &-arrow {
          right: 3px;
        }
      }

      .input:-internal-autofill-selected {
        background-color: ${({ theme, $color }) => theme.color[$color].light};
      }
      .ant-select-single.ant-select-open .ant-select-selection-item {
        color: ${({ theme }) => theme.color.black.primary};
      }

      .ant-select-selector {
        height: 22px;

        .ant-select-selection-item {
          line-height: ${({ theme }) => theme.lineHeight.title.normal};
          padding-right: 0;
        }
      }
    }

    &:not([disabled]):active,
    &:not([disabled]):focus,
    &:not([disabled]):hover,
    &:not([disabled]):focus-within {
      box-shadow: none;
      border-color: ${({ theme, $color }) =>
        $color === 'error' ? theme.color[$color].primary : theme.color.primary.cadetBlue};
    }

    &:where(:active, :focus, :hover) {
      .ant-input-suffix {
        .ant-select {
          color: ${({ theme }) => theme.color.white.primary};
        }

        .ant-select-single.ant-select-open .ant-select-selection-item {
          color: ${({ theme }) => theme.color.white.primary};
        }
      }

      .ant-select-item.ant-select-item-option.ant-select-item-option-active {
        background-color: ${({ theme }) => theme.color.primary.light};
      }

      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${({ theme }) => theme.color.primary.light};
      }
    }

    [disabled],
    [disabled]:hover,
    [disabled]:focus,
    [disabled]:active {
      background-color: ${({ theme }) => theme.color.grey.lighter};
      border-color: ${({ theme }) => theme.color.grey.lighter};
    }

    .ant-input[disabled] {
      background-color: ${({ theme }) => theme.color.grey.lighter};
    }
    .ant-input-affix-wrapper:focus-within {
      box-shadow: none;
      background-color: ${({ theme }) => theme.color.primary.primary};
      border-color: ${({ theme, $color }) =>
        $color === 'error' ? theme.color[$color].primary : theme.color.primary.cadetBlue};
    }
  }
`;

export const StyledInput = styled(Input)`
  ${baseInputStyles}

  .ant-input-prefix,
  .ant-input-suffix {
    svg {
      stroke: ${({ theme }) => theme.color.grey.dark};
      fill: ${({ theme }) => theme.color.grey.dark};
    }
  }

  &:hover,
  &:active,
  &:focus {
    .ant-input-prefix,
    .ant-input-suffix {
      svg {
        stroke: ${({ theme, $color }) => theme.color[$color].dark};
        fill: ${({ theme, $color }) => theme.color[$color].dark};
      }
    }
  }
`;

export const StyledPasswordInput = styled(Input.Password)`
  &&& {
    ${baseInputStyles}

    .ant-input-prefix,
    .ant-input-suffix {
      svg {
        color: ${({ theme, $color }) => ($color === 'error' ? theme.color[$color].dark : theme.color.grey.dark)};
        path {
          stroke: ${({ theme, $color }) => ($color === 'error' ? theme.color[$color].dark : theme.color.grey.dark)};
        }
        circle {
          fill: ${({ theme, $color }) => ($color === 'error' ? theme.color[$color].dark : theme.color.grey.dark)};
        }
      }
    }

    &:hover,
    &:active,
    &:focus {
      .ant-input-prefix {
        svg {
          fill: none;

          path {
            stroke: ${({ theme, $color }) => theme.color[$color].dark};
          }
          circle {
            fill: ${({ theme, $color }) => theme.color[$color].dark};
          }
        }
      }

      .ant-input-suffix {
        svg {
          stroke: ${({ theme, $color }) => theme.color[$color].dark};
          fill: ${({ theme, $color }) => theme.color[$color].dark};
        }
      }
    }
  }
`;
