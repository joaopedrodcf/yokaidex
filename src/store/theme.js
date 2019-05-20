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
                theme: !state.theme
            }));
            const { theme } = this.state;
            localStorage.setItem('theme', theme);
        };

        this.getTheme = () => {
            const { theme } = this.state;
            return theme
                ? { bg: '#1b1919', fg: 'white' }
                : { bg: 'white', fg: '#1b1919' };
        };

        this.state = {
            theme: !!localStorage.getItem('theme'),
            toggleTheme: this.toggleTheme,
            getTheme: this.getTheme
        };
    }

    render() {
        const { children } = this.props;
        const { theme, toggleTheme, getTheme } = this.state;
        return (
            <ThemeContext.Provider value={{ theme, toggleTheme, getTheme }}>
                {children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
