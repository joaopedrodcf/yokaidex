import React, { useState, useEffect } from 'react';
import variables from '../styles/variables';

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setDarkTheme] = useState(
        localStorage.getItem('isDarkTheme') === 'true'
    );

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    };

    const getTheme = () => {
        return isDarkTheme
            ? {
                  backgroundColor: variables.colors.black,
                  color: variables.colors.white,
                  selected: {
                      backgroundColor: '#424242',
                      color: variables.colors.white
                  },
                  button: {
                      backgroundColor: variables.colors.white,
                      color: variables.colors.black
                  },
                  card: {
                      backgroundColor: '#212121'
                  },
                  table: {
                      th: {
                          color: variables.colors.black,
                          backgroundColor: variables.colors.white
                      },
                      tr: {
                          color: variables.colors.white,
                          backgroundColor: '#212121'
                      }
                  }
              }
            : {
                  backgroundColor: variables.colors.white,
                  color: variables.colors.black,
                  selected: {
                      backgroundColor: '#bdbdbd',
                      color: variables.colors.black
                  },
                  button: {
                      backgroundColor: variables.colors.black,
                      color: variables.colors.white
                  },
                  card: {
                      backgroundColor: variables.colors.white
                  },
                  table: {
                      th: {
                          color: variables.colors.white,
                          backgroundColor: variables.colors.black
                      },
                      tr: {
                          color: variables.colors.black,
                          backgroundColor: '#e0e0e0'
                      }
                  }
              };
    };

    useEffect(() => {
        localStorage.setItem('isDarkTheme', !isDarkTheme);
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, getTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
