import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: #03e1cb;
    background: linear-gradient(180deg, #03e1cb 0%, #32e9b1 50%, #4eeda2 100%);
  }

  body, input, select, button {
    font-family: Rubik, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;
