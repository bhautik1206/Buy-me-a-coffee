import React from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';

import theme from '#/theme';

const ThemeProvider = (props) => {
  const { theme: customTheme, children } = props;

  const currentTheme = customTheme && Object.keys(customTheme).length !== 0 ? customTheme : theme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  theme: {},
  children: {},
};

export default ThemeProvider;
