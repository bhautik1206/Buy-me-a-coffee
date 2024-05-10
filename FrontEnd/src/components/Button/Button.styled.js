/* eslint-disable indent */
import { Button as AntButton } from 'antd';
import styled from 'styled-components';

import genericStyles from '../utils/genericStyles';

export const StyledIcon = styled.i`
  ${genericStyles}

  ${({ $alignRight, $gap }) => {
    return $alignRight ? `margin: 0 0 0 ${$gap}px` : `margin: 0 ${$gap}px 0 0`;
  }};
  width: ${({ $size, theme }) => theme.sizes[$size].icon}px;
  height: ${({ $size, theme }) => theme.sizes[$size].icon}px;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme, $fillColor }) => {
      return $fillColor || theme.color.white.primary;
    }};

    &[disabled],
    &[disabled]:hover,
    &[disabled]:active,
    &[disabled]:focus,
    &[disabled] {
      fill: ${({ theme }) => theme.color.grey.primary};
    }
  }
`;

const BaseButton = styled(AntButton)`
  &&& {
    ${genericStyles}

    height: ${({ theme, $size }) => theme.button[$size].height}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: ${({ $size, theme, $iconOnly }) =>
      $iconOnly ? theme.button[$size].iconOnlyPadding : theme.button[$size].padding};

    border: 0;
    border-radius: ${({ theme }) => theme.border.radius[5]};

    ${({ $variant, $size, theme }) =>
      $variant === 'plain' &&
      `border-radius: 100%;
      width: ${theme.button[$size].height}px;
      height: ${theme.button[$size].height}px;
      overflow: hidden;
      padding: 0;
      `}
    &,
    span {
      font-family: ${({ theme }) => theme.fontFamily.bold};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: ${({ theme, $size }) => theme.button[$size].fontSize}px;
      line-height: ${({ theme, $size }) => theme.button[$size].lineHeight}px;
      color: ${({ $textColor }) => $textColor || 'white'};
      font-smooth: antialiased;
    }
  }
`;

export const DefaultButton = styled(BaseButton)`
  &&& {
    --antd-wave-shadow-color: ${({ theme, $color }) => theme.color[$color]?.primary};
    background-color: ${({ theme, $color }) => theme.color[$color]?.primary};
    color: ${({ theme }) => theme.color.primary.primary};
    box-shadow: ${({ theme, $variant, $shadow }) => $variant !== 'plain' && ($shadow || theme.shadows[1])};

    // Added for Pagination Active Button state
    .ant-pagination-item-active {
      background-color: ${({ theme, $color }) => theme.color[$color]?.primary};
    }

    &[disabled],
    &[disabled]:hover,
    &[disabled]:active,
    &[disabled]:focus,
    &[disabled] svg {
      color: ${({ theme }) => theme.color.primary.primary};
      fill: ${({ theme }) => theme.color.grey.primary};
      box-shadow: ${({ theme }) => theme.shadows.none};
      cursor: not-allowed;
    }

    &:hover {
      color: ${({ theme }) => theme.color.primary.primary};
      border: 0;
      background-color: ${({ theme, $color }) => theme.color[$color]?.primary};
      box-shadow: ${({ theme }) => theme.shadows[2]};
    }

    &:focus,
    &:active {
      color: ${({ theme }) => theme.color.primary.primary};
      background-color: ${({ theme, $color }) => theme.color[$color]?.primary};
      box-shadow: ${({ theme }) => theme.shadows[3]};
    }
  }
`;

export const WarningButton = styled(BaseButton)`
  &&& {
    --antd-wave-shadow-color: ${({ theme }) => theme.color.error.primary};
    background-color: ${({ theme }) => theme.color.error.primary};
    color: ${({ theme }) => theme.color.white.primary};

    &:hover {
      background-color: ${({ theme }) => theme.color.error.primary};
      color: ${({ theme }) => theme.color.white.primary};
    }

    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.color.error.dark};
      color: ${({ theme }) => theme.color.white.primary};
    }
  }
`;

export const SuccessButton = styled(BaseButton)`
  &&& {
    --antd-wave-shadow-color: ${({ theme }) => theme.color.success.primary};
    background-color: ${({ theme }) => theme.color.success.primary};
    color: ${({ theme }) => theme.color.white.primary};

    &:hover {
      background-color: ${({ theme }) => theme.color.success.primary};
      color: ${({ theme }) => theme.color.white.primary};
    }

    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.color.success.dark};
      color: ${({ theme }) => theme.color.white.primary};
    }
  }
`;

export const SkeletonButton = styled(BaseButton)`
  &&& {
    --antd-wave-shadow-color: ${({ theme }) => theme.color.grey.primary};
    background-color: ${({ theme }) => theme.color.grey.primary};
    border: none;
    box-shadow: none;
    height: ${({ theme, $size }) => theme.button[$size].height}px;
    pointer-events: none;

    &,
    span {
      color: ${({ theme }) => theme.color.grey.primary};
    }

    &:hover,
    &:focus,
    &:active {
      border: none;
      background-color: ${({ theme }) => theme.color.grey.primary};
      color: ${({ theme }) => theme.color.grey.primary};
      box-shadow: none;
      pointer-events: none;
    }
  }
`;

export const OutlineButton = styled(BaseButton)`
  &&& {
    --antd-wave-shadow-color: ${({ theme }) => theme.color.grey.dark};
    background-color: ${({ theme }) => theme.color.white.primary};
    color: ${({ theme, $color }) => theme.color[$color]?.primary};
    border: 1px solid ${({ theme, $color }) => theme.color[$color]?.primary};

    &:hover,
    &:focus,
    &:active {
      border: 1px solid ${({ theme, $color }) => theme.color[$color]?.primary};
      color: ${({ theme, $color }) => theme.color[$color]?.primary};
    }
    &,
    span {
      color: ${({ theme, $color }) => theme.color[$color]?.primary};
    }
  }
`;
