import { createGlobalStyle } from 'styled-components';

import { device } from '#/constants/layout';

const GlobalStyle = createGlobalStyle`
::selection {
  background-color: #1f4272 !important;
  color: initial !important;
}

html, body, #root, #root>div {
  // Override Antd styles
  min-height: 100vh !important;
  font-size: 8px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color-scheme: white;
  
  ${device.screenLargerThanMobile} {
    font-size: 10px;
  }

  .pac-container:after { 
    display:none !important;
  }
}

input:-internal-autofill-selected {
  background-color: transparent !important;
  color: #000000 !important;
  background-image: none !important;
}

// Used when sidebar is open
body[data-sidebar-state="true"] {
  height: 100%;
  overflow: hidden;
}

// Default text selection color
::selection {
  background: #aed4fc !important;
  color: #000000 !important;
}

// Since Antd uses inline styles we need to forcefully override
// them here
.ant-modal-wrap {
  .ant-modal {
    top: 25%;
  }
  .ant-modal-content
   .ant-modal-close-x {
    width: 100%;
    padding: 24px 24px 0 0;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    background-color:unset;
  }
}

// Used for Slide animation on Auth Pages
.animate-slide-appear {
  transition: all 250ms ease-out;
  transform: translateX(-500px);
}
.animate-slide-appear-done {
  transition: all 250ms ease-out;
  height: auto;
  transform: translateX(0);
}
.animate-slide-appear-exit {
  transition: all 250ms ease-in;
  transform: translateX(500px);
}

.grecaptcha-badge { 
  visibility: hidden;
}

`;

export default GlobalStyle;
