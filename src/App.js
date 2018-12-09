import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
body {
    color: red;
    display: flex;
    min-height: 100vh;
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
    height: 100%;
    width: 100%;
}

/*
    font-size: 62.5%;
*/

`;

const App = () => (
    <div>
        <GlobalStyle />
        <Header />
        <Main />
        <main>Main</main>
        <footer>Footer</footer>
    </div>
);

export default App;
