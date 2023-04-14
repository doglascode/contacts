import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  body {
    background: #101010;
    color: #fff;
  }
`;
