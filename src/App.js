import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import Sidebar from './components/sidebar';
import GlobalStyle from './globalStyle';
import Routes from './Routes';
import { withThemeContext } from './store';

const App = ({ context }) => {
    const { getTheme } = context;

    return (
        <>
            <Helmet>
                <script
                    async
                    src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                />
            </Helmet>
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

export default withThemeContext(App);
