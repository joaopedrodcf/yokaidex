import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/header';
import Sidebar from './components/sidebar';
import GlobalStyle from './globalStyle';
import Routes from './Routes';
import { withThemeContext } from './store';

const App = ({ context }) => {
    const { getTheme } = context;
    return (
        <>
            <GlobalStyle theme={{ theme: getTheme }} />
            <ThemeProvider theme={{ theme: getTheme }}>
                <Sidebar>
                    <Header />
                    <Routes />
                </Sidebar>
            </ThemeProvider>
        </>
    );
};

export default withThemeContext(App);
