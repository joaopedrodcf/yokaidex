import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import Sidebar from './components/sidebar';
import GlobalStyle from './globalStyle';
import Routes from './Routes';
import { ThemeContext } from './store';

const App = () => {
    const { getTheme } = useContext(ThemeContext);

    return (
        <>
            <GlobalStyle theme={getTheme()} />
            <ThemeProvider theme={getTheme()}>
                <Sidebar>
                    <Header />
                    <Routes />
                </Sidebar>
            </ThemeProvider>
        </>
    );
};

export default App;
