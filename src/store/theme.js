import React, { Component } from 'react';
import memoize from 'fast-memoize';
import genericWrapperComponent from './genericWrapperComponent';
import variables from '../styles/variables';

// eslint-disable-next-line func-names
const getState = function(isDarkTheme, toggleTheme, getTheme) {
    return { isDarkTheme, toggleTheme, getTheme };
};

const memoizedGetState = memoize(getState);

export const ThemeContext = React.createContext();

export function withThemeContext(Element) {
    return genericWrapperComponent('withThemeContext', ThemeContext, Element);
}

class ThemeProvider extends Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            const { isDarkTheme } = this.state;

            this.setState(
                state => ({
                    isDarkTheme: !state.isDarkTheme
                }),
                () => {
                    localStorage.setItem('isDarkTheme', !isDarkTheme);
                }
            );
        };

        this.getTheme = () => {
            const { isDarkTheme } = this.state;

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

        this.state = {
            isDarkTheme: localStorage.getItem('isDarkTheme') === 'true',
            toggleTheme: this.toggleTheme,
            getTheme: this.getTheme
        };
    }

    render() {
        const { children } = this.props;
        const { isDarkTheme, toggleTheme, getTheme } = this.state;
        return (
            <ThemeContext.Provider
                value={memoizedGetState(isDarkTheme, toggleTheme, getTheme)}
            >
                {children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
