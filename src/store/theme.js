import React, { Component } from 'react';
import styles from '../styles';

export const ThemeContext = React.createContext();

export function withThemeContext(Element) {
    return function WrapperComponent(props) {
        return (
            <ThemeContext.Consumer>
                {state => (
                    <Element
                        {...props}
                        context={{ ...state, ...props.context }}
                    />
                )}
            </ThemeContext.Consumer>
        );
    };
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
                      backgroundColor: styles.color.black,
                      color: styles.color.white,
                      selected: {
                          backgroundColor: '#424242',
                          color: styles.color.white
                      },
                      button: {
                          backgroundColor: styles.color.white,
                          color: styles.color.black
                      },
                      card: {
                          backgroundColor: '#212121'
                      },
                      table: {
                          th: {
                              color: styles.color.black,
                              backgroundColor: styles.color.white
                          },
                          tr: {
                              color: styles.color.white,
                              backgroundColor: '#212121'
                          }
                      }
                  }
                : {
                      backgroundColor: styles.color.white,
                      color: styles.color.black,
                      selected: {
                          backgroundColor: '#bdbdbd',
                          color: styles.color.black
                      },
                      button: {
                          backgroundColor: styles.color.black,
                          color: styles.color.white
                      },
                      card: {
                          backgroundColor: styles.color.white
                      },
                      table: {
                          th: {
                              color: styles.color.white,
                              backgroundColor: styles.color.black
                          },
                          tr: {
                              color: styles.color.black,
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
        const {
            isDarkTheme: isDefaultTheme,
            toggleTheme,
            getTheme
        } = this.state;
        return (
            <ThemeContext.Provider
                value={{ isDefaultTheme, toggleTheme, getTheme }}
            >
                {children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
