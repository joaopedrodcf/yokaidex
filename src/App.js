import React from 'react';
import Header from './components/header';
import Routes from './Routes';
import GlobalStyle from './globalStyle';

import Sidebar from './components/sidebar';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Sidebar>
                <Header />
                <Routes />
            </Sidebar>
        </>
    );
};

export default App;
