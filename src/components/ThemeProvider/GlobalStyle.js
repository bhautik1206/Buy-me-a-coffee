import { createGlobalStyle, css } from 'styled-components';

const antdCss = css`
  ${import('antd/dist/reset.css')}
`;

const GlobalStyle = createGlobalStyle`
  ${antdCss}

  html, body, #root, #root>div {
    // Override Antd styles
    min-height: 100vh !important;
    font-size: 8px !important;

    @media only screen and (min-width:580px) {
      font-size: 10px !important;
    }
  }

  p {
    margin: 0;
  }
input:-internal-autofill-selected {
  background-color: transparent !important;
  color: #000000 !important;
  background-image: none !important;
}
`;

export default GlobalStyle;
