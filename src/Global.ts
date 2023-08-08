/* eslint-disable @typescript-eslint/naming-convention */
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-weight: 400;
        font-family: sans-serif;
    }
    html {
        font-size: 62.5%;
    }
    body {
        /* overflow-x: hidden; */
        ::-webkit-scrollbar {display:none;}
        scroll-behavior: auto;
    }
`;
