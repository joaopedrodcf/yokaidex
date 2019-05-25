import React, { Component } from 'react';

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
            this.setState(state => ({
                isDefaultTheme: !state.isDefaultTheme
            }));
            const { isDefaultTheme } = this.state;
            localStorage.setItem('isDefaultTheme ', isDefaultTheme);
        };

        this.getTheme = () => {
            const { isDefaultTheme } = this.state;
            return isDefaultTheme
                ? { bg: '#1b1919', fg: 'white' }
                : { bg: 'white', fg: '#1b1919' };
        };

        this.state = {
            isDefaultTheme: !!localStorage.getItem('isDefaultTheme '),
            toggleTheme: this.toggleTheme,
            getTheme: this.getTheme
        };
    }

    render() {
        const { children } = this.props;
        const { isDefaultTheme, toggleTheme, getTheme } = this.state;
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
