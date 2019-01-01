import React from 'react';
import Header from './components/Header';
import Routes from './Routes';
import GlobalStyle from './globalStyle';

const App = () => (
    <>
        <GlobalStyle />
        <Header />
        <Routes />
    </>
);

export default App;
