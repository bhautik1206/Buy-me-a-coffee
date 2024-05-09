import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import theme from '../../theme';

const GetTheme = () => {
  const themeContext = useContext(ThemeContext);

  return themeContext || theme;
};

export default GetTheme;
