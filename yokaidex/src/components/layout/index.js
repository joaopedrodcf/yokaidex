import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext } from '../../store';
import ScrollToTop from '../shared/scroll-to-top';
import Header from '../header';
import Sidebar from '../sidebar';

const GlobalStyle = createGlobalStyle`
    html {
        font-size:62.5%;
    }

    html * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Quicksand', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }

    body,
    html,
    #root {
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.backgroundColor}
    }

    body {
        display: flex;
        flex-direction: column;
        
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    a {
        text-decoration: none;
    }
`;

const Layout = ({ children }) => {
    const { getTheme } = useContext(ThemeContext);

    return (
        <ScrollToTop>
            <GlobalStyle theme={getTheme()} />
            <ThemeProvider theme={getTheme()}>
                <Sidebar>
                    <Header />
                    {children}
                </Sidebar>
            </ThemeProvider>
        </ScrollToTop>
    );
};

export default Layout;
