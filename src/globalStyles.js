import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,100;1,300&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: #f4f7f6;
    color: #202121;
    font-family: roboto, Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
