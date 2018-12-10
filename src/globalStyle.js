import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    display: flex;
    flex-direction: column;
}

* {
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body,
html,
#root {
    height: 100vh;
    width: 100%;
}

/*
    font-size: 62.5%;
*/

`;

export default GlobalStyle;
