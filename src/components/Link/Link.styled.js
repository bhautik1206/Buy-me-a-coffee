import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled((props) => <Link {...props} />)`
  color: ${({ theme }) => theme.color.secondary.primary} !important;
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.color.secondary.secondary} !important;
  }
`;
