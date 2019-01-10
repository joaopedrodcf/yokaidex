import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html * {
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body,
html,
#root {
    height: 100%;
    width: 100%;
}

body {
    display: flex;
    flex-direction: column;
}


/*
    font-size: 62.5%;
*/

`;

export default GlobalStyle;
