import styled from 'styled-components';

import Box from '../Box';

export const StyledContainer = styled(Box)`
  &&& {
    justify-content: center;
    padding: 30px;

    .custom-spin-color {
      .ant-spin-dot-item {
        background-color: ${({ $fillColor }) => $fillColor};
      }
    }

    svg {
      animation: rotation 1s linear infinite;
      fill: ${({ $fillColor }) => $fillColor};
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
  }
`;
