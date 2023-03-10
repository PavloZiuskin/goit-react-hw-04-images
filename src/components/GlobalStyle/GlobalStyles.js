import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  body {
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 0;
    padding-right: 16px;
    padding-left: 16px;
  };
  ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
  };
  img{
    display: block;
  }
  button{
    display: block;
    border: none;
    padding: 0;
    margin: 0;
  }

`;
