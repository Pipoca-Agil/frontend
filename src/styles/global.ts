import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  };
  body{
    background-color: #FFFCF3;
    font-family: 'Inter', sans-serif;
  }
`;
